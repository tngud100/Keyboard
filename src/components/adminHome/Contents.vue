<template>
  <div :class="$style.container">
    <span :class="$style.title">상품</span>
    <ul :class="$style.nav">
      <li
        :class="[navState === 0 ? $style.selected : '']"
        @click="selectIndex(0)"
      >
        화보상품 설정
      </li>
      <li
        :class="[navState === 1 ? $style.selected : '']"
        @click="selectIndex(1)"
      >
        상품 등록
      </li>
      <li
        :class="[navState === 2 ? $style.selected : '']"
        @click="selectIndex(2)"
      >
        상품 내역
      </li>
    </ul>
    <div :class="$style.wrapper">
      <Card
        v-for="(item, index) in productList"
        :key="index"
        :item="item"
        :class="$style.productList"
      />
      <button
        :class="$style.addBtn"
        @mouseover="handleHover(true)"
        @mouseleave="handleHover(false)"
      >
        <IconPlus :class="$style.addBtnImg" v-if="iconHover" />
        <IconPlusDisabled :class="$style.addBtnImg" v-else />
      </button>
    </div>
  </div>
</template>

<script setup>
import keyboardImg from "@/assets/images/product.png";

import Card from "@/components/adminProduct/Cards.vue";
import IconPlus from "#/icons/IconPlus.vue";
import IconPlusDisabled from "#/icons/IconPlusDisabled.vue";
import { ref } from "vue";

const navState = ref(1);
const iconHover = ref(false);

const handleHover = (value) => {
  iconHover.value = value;
};

const selectIndex = (value) => {
  navState.value = value;
};

const productList = [
  {
    representImg: keyboardImg,
    name: "제품명ㅇㄴㅁㅇㄴㅁ",
    type: "키보드",
    category: "키보드",
    productDetailList: {
      name: "상세제품명ㅁㄴㅇㄴㅁㅇㅁㅇㄴㅁㅇ",
      amount: 3000,
      stock: 5,
      createDate: "2024.03.15",
    },
  },
];
</script>

<style src="@/assets/css/adminHome/Contents.css" module></style>
