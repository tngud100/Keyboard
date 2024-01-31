<template>
  <div :class="$style.wrapper">
    <ul :class="$style.productList">
      <Product
        :id="1"
        name="SG87W"
        :price="189000"
        :productImg="keyboardImg"
        :backgroundImg="keyboardBackgroundImg"
        @click="moveKeyboardDetailPage"
      />
      <Product
        :id="2"
        name="SG87W"
        :price="189000"
        :productImg="keyboardImg"
        :backgroundImg="keyboardBackgroundImg"
        @click="moveKeyboardDetailPage"
      />
      <Product
        :id="3"
        name="SG87W"
        :price="189000"
        :productImg="keyboardImg"
        :backgroundImg="keyboardBackgroundImg"
        @click="moveKeyboardDetailPage"
      />
      <Product
        :id="4"
        name="SG87W"
        :price="189000"
        :productImg="keyboardImg"
        :backgroundImg="keyboardBackgroundImg"
        @click="moveKeyboardDetailPage"
      />
      <Product
        :id="5"
        name="SG87W"
        :price="189000"
        :productImg="keyboardImg"
        :backgroundImg="keyboardBackgroundImg"
        @click="moveKeyboardDetailPage"
      />
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import Product from "#/common/Product.vue";
import keyboardImg from "@/assets/images/keyboardImg.jpg";
import keyboardBackgroundImg from "@/assets/images/keyboardBackgroundImg.jpg";

const router = useRouter();

const moveKeyboardDetailPage = (id) => {
  router.push(`/keyboard/${id}`);
};
</script>

<style src="@/assets/css/keyboard/Contents.css" module></style>
