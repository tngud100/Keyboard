<template>
  <section :class="$style.wrapper">
    <div>
      <img :src="importedProduct" alt="상품 이미지" />
      <div :class="$style.detailImgWrapper">
        <img :src="importedProductDetailImg" alt="상품 상세 이미지" />
      </div>
    </div>
    <ProductInfo
      :productInfo="productInfo"
      :selectedProducts="selectedProducts"
      @selectProduct="addProduct"
      @addCount="addCount"
      @subtractCount="subtractCount"
      @addShoppingBasket="addShoppingBasket"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import ProductInfo from "#/common/ProductInfo.vue";
import product from "@/assets/images/product.png";
import productDetailImg from "@/assets/images/productDetailImg.png";
import { useRouter } from "vue-router";

const importedProduct = ref(product);
const importedProductDetailImg = ref(productDetailImg);
const selectedProducts = ref([]);
const router = useRouter();

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
</script>

<style src="@/assets/css/productDetail/Contents.css" module></style>
