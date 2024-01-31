<template>
  <div :class="$style.wrapper">
    <ul :class="$style.productList">
      <Product
        type="normal"
        :id="1"
        name="Gateron Keycap Opener"
        :price="189000"
        :backgroundImg="firstKeycap"
      />
      <Product
        type="normal"
        :id="1"
        name="Geon DailyLube Plate"
        :price="149000"
        :backgroundImg="secondKeycap"
      />
      <Product
        type="normal"
        :id="1"
        name="Geon Keycap Opener"
        :price="189000"
        :backgroundImg="thirdKeycap"
      />
      <Product
        type="normal"
        :id="1"
        name="Geon DailyLube Plate"
        :price="149000"
        :backgroundImg="fourthKeycap"
      />
    </ul>
  </div>
</template>

<script setup>
import firstKeycap from "@/assets/images/keycap_1.jpg";
import secondKeycap from "@/assets/images/keycap_2.jpg";
import thirdKeycap from "@/assets/images/keycap_3.jpg";
import fourthKeycap from "@/assets/images/keycap_4.jpg";
import Product from "#/common/Product.vue";
</script>

<style src="@/assets/css/keycap/Contents.css" module></style>
