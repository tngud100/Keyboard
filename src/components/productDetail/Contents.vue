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
import { useRouter } from "vue-router";
import { getProductAPI } from "@/api/ProductGetDataAPI.js";
import { onMounted, ref } from "vue";

const { getProductDetailList, getProductVO } = getProductAPI();
const router = useRouter();

const productId = router.currentRoute.value.query.productId;

const selectedProducts = ref([]);

const productList = ref({
  deliveryPrice: 3000,
});

const addProduct = (product) => {
  const isDuplicate = selectedProducts.value.some((productItem) =>
    isEqual(productItem.item, product.item)
  );

  if (isDuplicate) return;

  console.log("product", product.item);
  const totalPrice = product.item.reduce((total, item) => {
    total += item.detailPrice;
  }, 0);
  console.log(totalPrice);

  selectedProducts.value.push({ ...product, count: 1, totalPrice: totalPrice });
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
  const imgSrc = productList.value.importedProduct;

  const mergedBaskets = [...selectedProducts.value, ...parsedBaskets];
  console.log("mergedBaskets", mergedBaskets);
  const newBaskets = [];

  mergedBaskets.forEach((beforeBasket) => {
    // 중복된 제품이 있는지 확인하는 조건을 설정합니다.
    const isDuplicate = newBaskets.some(
      (item) =>
        Array.isArray(item.item) &&
        Array.isArray(beforeBasket.item) &&
        beforeBasket.item.every(
          (subItem, index) =>
            subItem &&
            beforeBasket.productName === item.productName &&
            subItem.categoryName[0] === item.item[index]?.categoryName[0] &&
            subItem.detailName === item.item[index]?.detailName
        )
    );

    if (!isDuplicate) {
      beforeBasket.imgSrc
        ? newBaskets.push({ ...beforeBasket })
        : newBaskets.push({ ...beforeBasket, imgSrc: imgSrc });
    } else {
      // 중복된 제품이 있으면 해당 제품의 수량을 증가시킵니다.
      const existingItemIndex = newBaskets.findIndex((item) =>
        item.item.every(
          (subItem, index) =>
            subItem &&
            item.productName === beforeBasket.productName &&
            subItem.categoryName[0] ===
              beforeBasket.item[index]?.categoryName[0] &&
            subItem.detailName === beforeBasket.item[index]?.detailName
        )
      );
      // console.log(newBaskets[existingItemIndex].count, beforeBasket.count);
      newBaskets[existingItemIndex].count += beforeBasket.count;
    }
  });

  console.log("newBaskets:", newBaskets);

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

  // console.log(productList.value);
};

onMounted(async () => {
  await getProductData();
});
</script>

<style src="@/assets/css/productDetail/Contents.css" module></style>
