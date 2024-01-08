<template>
  <section class="productDetailWrapper">
    <img :src="importedProduct" alt="상품 이미지" class="productImg" />
    <ProductInfo
      :productInfo="productInfo"
      :currentColor="currentColor"
      :currentType="currentType"
      @selectColor="updateSelectedColor"
      @selectType="updateSelectedType"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import ProductInfo from "#/common/ProductInfo.vue";
import product from "@/assets/images/product.png";

const importedProduct = ref(product);
const currentColor = ref("");
const currentType = ref("");
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

const updateSelectedColor = ({ color }) => (currentColor.value = color);

const updateSelectedType = ({ type }) => (currentType.value = type);
</script>

<style scoped>
@import "./ProductDetailView.css";
</style>
