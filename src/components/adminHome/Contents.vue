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
        v-for="(item, index) in productList.value"
        :key="index"
        :item="item"
        :class="$style.productList"
        @clickModifyBtn="cardModify"
      />
      <button
        :class="$style.addBtn"
        @mouseover="handleHover(true)"
        @mouseleave="handleHover(false)"
        @click="changeModalState"
      >
        <IconPlus v-if="iconHover" :class="$style.addBtnImg" />
        <IconPlusDisabled v-else :class="$style.addBtnImg" />
      </button>

      <modal
        v-if="modalState"
        :item="item"
        @close="closeModal"
        :cardItem="cardItem"
      />
    </div>
  </div>
</template>

<script setup>
import keyboardImg from "@/assets/images/product.png";
import Card from "@/components/adminProduct/Cards.vue";
import IconPlus from "#/icons/IconPlus.vue";
import IconPlusDisabled from "#/icons/IconPlusDisabled.vue";
import modal from "#/modal/Contents.vue";
import { getProductAPI } from "@/api/ProductGetDataAPI.js";
import { ref } from "vue";

const navState = ref(1);
const iconHover = ref(false);

const modalState = ref(false);

const { getProductList } = getProductAPI();

const item = [
  {
    title: "상품등록",
  },
];
const cardItem = ref();

const handleHover = (value) => {
  iconHover.value = value;
};

const selectIndex = (value) => {
  navState.value = value;
};

const changeModalState = () => {
  modalState.value = !modalState.value;
  if (modalState.value === true) {
    document.body.style.overflow = "hidden";
    return;
  }
  document.body.style.overflow = "auto";
};

const closeModal = () => {
  cardItem.value = null;
  changeModalState();
  console.log(cardItem.value);
};

const cardModify = (value) => {
  cardItem.value = value;
  changeModalState();
};

// const productDetail = ref([]);
const productList = ref([]);

const fetchProductList = async () => {
  const data = await getProductList(); // api.js의 getProductList 함수 호출
  productList.value = data;
  console.log("productList", productList.value.value);
};

fetchProductList();
</script>

<style src="@/assets/css/adminHome/Contents.css" module></style>
