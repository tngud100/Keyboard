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
    <!-- :productInfo="productInfo" -->
    <ProductInfo
      :productList="productList"
      :selectedProducts="selectedProducts"
      @selectedDetail="addProduct"
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
import { onMounted, ref } from "vue";

const { getProductDetailList, getProductVO } = getProductAPI();
const router = useRouter();

const productId = router.currentRoute.value.query.productId;

// const importedProduct = ref(product);
// const importedProductDetailImg = ref(productDetailImg);
const selectedProducts = ref([]);

const productList = ref({
  deliveryPrice: 3000,
});

// const productInfo = ref({
//   colors: [
//     { id: 1, name: "블랙" },
//     { id: 2, name: "화이트" },
//     { id: 3, name: "그린" },
//   ],
//   types: [
//     { id: 1, name: "SG87W" },
//     { id: 2, name: "SG88W" },
//     { id: 3, name: "SG89W" },
//   ],
//   name: "SG87W",
//   price: 189000,
//   deliveryPrice: 3000,
// });

const addProduct = (product) => {
  const isDuplicate = selectedProducts.value.some((productItem) =>
    isEqual(productItem.item, product.item)
  );

  if (isDuplicate) return;
  selectedProducts.value.push({ ...product, count: 1 });
};

function isEqual(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  const sortedArr1 = arr1.map((obj) => JSON.stringify(obj)).sort();
  const sortedArr2 = arr2.map((obj) => JSON.stringify(obj)).sort();

  for (let i = 0; i < sortedArr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) {
      return false;
    }
  }

  return true;
}

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

  console.log("mergedProducts:", mergedBaskets);

  mergedBaskets.forEach((selectedProduct) => {
    console.log("newBaskets:", newBaskets);
    // 중복된 제품이 있는지 확인하는 조건을 설정합니다.
    const isDuplicate = newBaskets.some(
      (item) =>
        Array.isArray(item.item) &&
        Array.isArray(selectedProduct.item) &&
        selectedProduct.item.every(
          (subItem, index) =>
            subItem &&
            selectedProduct.productName === item.productName &&
            subItem.categoryName === item.item[index]?.categoryName &&
            subItem.detailName === item.item[index]?.detailName
        )
    );

    if (!isDuplicate) {
      newBaskets.push({ ...selectedProduct });
    } else {
      // 중복된 제품이 있으면 해당 제품의 수량을 증가시킵니다.
      const existingItemIndex = newBaskets.findIndex((item) =>
        item.item.every(
          (subItem, index) =>
            subItem &&
            item.productName === selectedProduct.productName &&
            subItem.categoryName ===
              selectedProduct.item[index]?.categoryName &&
            subItem.detailName === selectedProduct.item[index]?.detailName
        )
      );
      console.log(newBaskets[existingItemIndex].count, selectedProduct.count);
      newBaskets[existingItemIndex].count += selectedProduct.count;
    }
  });

  localStorage.setItem("shopping", JSON.stringify(newBaskets));
  // 바구니 페이지로 이동
  router.push("/basket");
};

const getProductData = async () => {
  const [dataList, productVO] = await Promise.all([
    getProductDetailList(productId),
    getProductVO(productId),
  ]);

  if (!productList && !Array.isArray(productList.value)) {
    console.error("productList is not defined or not reactive");
    return;
  }

  productList.value = {
    ...productList.value,
    name: productVO[0].name,
    price: productVO[0].amount,
    importedProduct: productVO[0].representImg,
    importedProductDetailImg: productVO[0].descImg,
    detailProduct: [],
  };

  const detailProductPromises = dataList.value.map((data, i) => {
    return new Promise((resolve) => {
      productList.value.detailProduct.push({
        id: i,
        category: data.category,
        categoryDefault: data.default,
        detailName: data.name,
        detailPrice: data.amount,
        leftStock: data.stock - data.soldStock,
      });
      resolve();
    });
  });

  await Promise.all(detailProductPromises);

  console.log(productList.value);
};

onMounted(async () => {
  await getProductData();
});
</script>

<style src="@/assets/css/productDetail/Contents.css" module></style>
