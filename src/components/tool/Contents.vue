<template>
  <div :class="$style.wrapper">
    <ul :class="$style.productList">
      <Product
        type="normal"
        :id="1"
        name="Gateron Tool Opener"
        :price="189000"
        :backgroundImg="firstTool"
      />
      <Product
        type="normal"
        :id="1"
        name="Geon DailyLube Plate"
        :price="149000"
        :backgroundImg="secondTool"
      />
      <Product
        type="normal"
        :id="1"
        name="Geon Tool Opener"
        :price="189000"
        :backgroundImg="thirdTool"
      />
      <Product
        type="normal"
        :id="1"
        name="Geon DailyLube Plate"
        :price="149000"
        :backgroundImg="fourthTool"
      />
      <Product
        type="normal"
        :id="1"
        name="Geon DailyLube Plate"
        :price="149000"
        :backgroundImg="fourthTool"
      />
    </ul>
  </div>
</template>

<script setup>
import firstTool from "@/assets/images/tool_1.jpg";
import secondTool from "@/assets/images/tool_2.jpg";
import thirdTool from "@/assets/images/tool_3.jpg";
import fourthTool from "@/assets/images/tool_4.jpg";
import Product from "#/common/Product.vue";
</script>

<style src="@/assets/css/tool/Contents.css" module></style>
