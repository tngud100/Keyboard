<template>
  <section class="productInfoWrapper">
    <header class="productInfoHeader">
      <div class="productInfo">
        <h2 class="productName">{{ name }}</h2>
        <p class="productPrice">
          <img :src="importedCurrency" alt="화폐 단위" />{{ localePrice }}
        </p>
      </div>
      <div class="shareBtnWrapper">
        <button type="button" class="shareBtn">
          <img :src="importedShare" alt="공유하기" />
        </button>
      </div>
    </header>
    <div class="productColorInfo">
      <h4 class="productColorTitle">
        색상&nbsp;:&nbsp;<span class="productColorStrong">{{
          currentColor
        }}</span>
      </h4>
      <div class="colors">
        <template v-for="color in colors" :key="color">
          <input
            type="radio"
            :id="color"
            name="color"
            :value="color"
            class="colorRadio"
            @change="pickColor"
          />
          <label
            :for="color"
            class="colorLabel"
            :class="color === currentColor && 'activeColorLabel'"
            >{{ color }}</label
          >
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, defineProps, defineEmits } from "vue";
import currency from "@/assets/images/currency.svg";
import share from "@/assets/images/share.svg";

const { name, price, colors, currentColor } = defineProps([
  "name",
  "price",
  "colors",
  "currentColor",
]);
const emit = defineEmits(["pickColor"]);
const importedCurrency = ref(currency);
const importedShare = ref(share);

const localePrice = computed(() => parseInt(price).toLocaleString());
const isPickColor = computed(
  (color) => color === currentColor && "activeColorLabel"
);

const pickColor = ({ target }) => {
  emit("pickColor", {
    color: target.value,
  });
};
</script>

<style scoped>
@import "./ProductInfo.css";
</style>
