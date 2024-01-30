<template>
  <div :class="$style.wrapper">
    <ul :class="$style.productList">
      <Product
        type="normal"
        :id="1"
        name="Gateron Switch Opener"
        :price="189000"
        :backgroundImg="firstSwitch"
      />
      <Product
        type="normal"
        :id="1"
        name="Geon DailyLube Plate"
        :price="149000"
        :backgroundImg="secondSwitch"
      />
      <Product
        type="normal"
        :id="1"
        name="Geon Switch Opener"
        :price="189000"
        :backgroundImg="thirdSwitch"
      />
      <Product
        type="normal"
        :id="1"
        name="Geon DailyLube Plate"
        :price="149000"
        :backgroundImg="fourthSwitch"
      />
    </ul>
  </div>
</template>

<script setup>
import firstSwitch from "@/assets/images/switch_1.jpg";
import secondSwitch from "@/assets/images/switch_2.jpg";
import thirdSwitch from "@/assets/images/switch_3.jpg";
import fourthSwitch from "@/assets/images/switch_4.jpg";
import Product from "#/common/Product.vue";
</script>

<style src="./Contents.css" module></style>
