<template>
  <div :class="$style.wrapper">
    <ul :class="$style.productList">
      <Product
        type="normal"
        :id="1"
        name="Gateron Switch Opener"
        :price="189000"
        :backgroundImg="firstPcb"
      />
      <Product
        type="normal"
        :id="1"
        name="Geon DailyLube Plate"
        :price="149000"
        :backgroundImg="firstPcb"
      />
      <Product
        type="normal"
        :id="1"
        name="Geon Switch Opener"
        :price="189000"
        :backgroundImg="firstPcb"
      />
      <Product
        type="normal"
        :id="1"
        name="Geon DailyLube Plate"
        :price="149000"
        :backgroundImg="firstPcb"
      />
    </ul>
  </div>
</template>

<script setup>
import firstPcb from "@/assets/images/pcb_1.jpg";
import Product from "#/common/Product.vue";
</script>

<style src="./Contents.css" module></style>
