<template>
  <section class="productDetailWrapper">
    <img :src="importedProduct" alt="상품 이미지" class="productImg" />
    <ProductInfo
      name="SG87W"
      price="189000"
      :colors="['블랙', '화이트', '그린']"
      :currentColor="currentColor"
      @pickColor="handleColorPick"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import ProductInfo from "#/common/ProductInfo.vue";
import product from "@/assets/images/product.png";

const importedProduct = ref(product);
const currentColor = ref("");

const handleColorPick = ({ color }) => {
  currentColor.value = color;
};
</script>

<style scoped>
@import "./ProductDetailView.css";
</style>
