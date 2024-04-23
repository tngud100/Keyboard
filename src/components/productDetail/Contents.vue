<template>
  <section :class="$style.wrapper">
    <div :class="$style.container">
      <img
        :src="productList.importedProduct"
        alt="상품 이미지"
        :class="$style.representImg"
      />
      <div :class="$style.detailImgWrapper">
        <img
          v-for="(item, index) in productList.importedProductDetailImg"
          :key="index"
          :src="item"
          alt="상품 상세 이미지"
          :class="$style.detailImg"
        />
      </div>
    </div>
    <ProductInfo
      :productInfo="productInfo"
      :productList="productList"
      :selectedProducts="selectedProducts"
      @selectProduct="addProduct"
      @addCount="addCount"
      @subtractCount="subtractCount"
      @addShoppingBasket="addShoppingBasket"
      v-if="productList.name"
    />
  </section>
</template>

<script setup>
import ProductInfo from "#/common/ProductInfo.vue";
// import product from "@/assets/images/product.png";
// import productDetailImg from "@/assets/images/productDetailImg.png";
import { useRouter } from "vue-router";
import { getProductAPI } from "@/api/ProductGetDataAPI.js";
import { onMounted, provide, ref } from "vue";

const { getProductDetailList, getProductVO } = getProductAPI();
const router = useRouter();

const productId = router.currentRoute.value.query.productId;

// const importedProduct = ref(product);
// const importedProductDetailImg = ref(productDetailImg);
const selectedProducts = ref([]);

const productList = ref({
  deliveryPrice: 3000,
});

const productInfo = ref({
  colors: [
    { id: 1, name: "블랙" },
    { id: 2, name: "화이트" },
    { id: 3, name: "그린" },
  ],
  types: [
    { id: 1, name: "SG87W" },
    { id: 2, name: "SG88W" },
    { id: 3, name: "SG89W" },
  ],
  name: "SG87W",
  price: 189000,
  deliveryPrice: 3000,
});

const addProduct = (product) => {
  const isDuplicatedProduct = selectedProducts.value.some(
    ({ color, type }) => product.color === color && product.type === type
  );

  if (isDuplicatedProduct) return;

  selectedProducts.value.push({ ...product, count: 1 });
};

const addCount = ({ id }) => {
  selectedProducts.value = calcCount(id, 1);
};

const subtractCount = ({ id }) => {
  selectedProducts.value = calcCount(id, -1);
};

const calcCount = (id, calcUnit) => {
  return selectedProducts.value.map((selectProduct) => {
    if (selectProduct.id === id) {
      return {
        ...selectProduct,
        count: selectProduct.count + calcUnit,
      };
    }

    return selectProduct;
  });
};

const addShoppingBasket = () => {
  const parsedBaskets = JSON.parse(localStorage.getItem("shopping")) || [];
  const mergedBaskets = [...selectedProducts.value, ...parsedBaskets];

  const newBaskets = [];

  mergedBaskets.forEach((item) => {
    const existingItem = newBaskets.find(
      (mergedItem) =>
        mergedItem.color === item.color && mergedItem.type === item.type
    );

    if (!existingItem) {
      newBaskets.push({ ...item });
    } else {
      existingItem.count += item.count;
    }
  });

  localStorage.setItem("shopping", JSON.stringify(newBaskets));
  router.push("/basket");
};

const getProductData = async () => {
  const [dataList, productVO] = await Promise.all([
    getProductDetailList(productId),
    getProductVO(productId),
  ]);

  productList.value = {
    ...productList.value,
    name: productVO[0].name,
    price: productVO[0].amount,
    importedProduct: productVO[0].representImg,
    importedProductDetailImg: productVO[0].descImg,
    detailProduct: [],
  };

  if (!productList && !Array.isArray(productList.value)) {
    console.error("productList is not defined or not reactive");
    return;
  }

  const detailProductPromises = dataList.value.map((data, i) => {
    return new Promise((resolve) => {
      productList.value.detailProduct.push({
        id: i,
        category: data.category,
        categoryName: data.name,
        categoryPrice: data.amount,
        categoryDefault: data.default,
        leftStock: data.stock - data.soldStock,
      });
      resolve();
    });
  });

  await Promise.all(detailProductPromises);

  console.log(productList.value);
};

onMounted(() => {
  getProductData();
});
</script>

<style src="@/assets/css/productDetail/Contents.css" module></style>
