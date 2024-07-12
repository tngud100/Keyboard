<template>
  <div :class="$style.wrapper">
    <div :class="$style.titleBox">
      <p :class="$style.subTitle">조선타자기 베스트</p>
      <div :class="$style.textBox">
        <span :class="$style.title">상품</span>
        <a :class="$style.moreLink" href="/">더보기 +</a>
      </div>
    </div>
    <div :class="$style.menuWrapper">
      <div :class="$style.menuBtnBox">
        <button
          :class="[$style.menuBtn, { [$style.active]: item.idx === menuNum }]"
          v-for="item in productItem"
          :key="item.idx"
          @click="clickMenu(item.idx)"
        >
          {{ item.category }}
        </button>
      </div>
    </div>
    <div :class="$style.bottomContainer">
      <div
        :class="$style.product"
        v-for="item in filterProductItem"
        :key="item.idx"
      >
        <div :class="$style.infoBox">
          <p :class="$style.category">{{ item.category }}</p>
          <p :class="$style.productName">{{ item.name }}</p>
        </div>
        <div :class="$style.descBox">
          <!-- <div v-html="item.describe"></div> -->
          <p>해태87은 이러이러한 컨셉으로</p>
          <p>전통의 미를 살려 이러한 제품</p>
        </div>
        <div :class="$style.imgBox">
          <img :src="item.imgSrc" alt="productImg" :class="$style.productImg" />
        </div>
        <div :class="$style.moreBox">
          <div
            :class="$style.moreBtn"
            @mouseover="gotoStore = true"
            @mouseleave="gotoStore = false"
          >
            자세히 보기
            <IconHomeProductArrow
              v-if="!gotoStore"
              :class="$style.rightArrow"
            />
            <IconHomeProductRedArrow
              v-if="gotoStore"
              :class="$style.rightArrow"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import homeProductKeyboard from "@/assets/images/homeProductMobileKeyboard.svg";
import IconHomeProductArrow from "#/icons/IconHomeProductArrow.vue";
import IconHomeProductRedArrow from "#/icons/IconHomeProductRedArrow.vue";

const gotoStore = ref(false);
const menuNum = ref(0);

const productItem = ref([
  {
    idx: 0,
    name: "해태 87",
    category: "키보드",
    describe:
      "<p>해태 87은 이러이러한 컨셉으로<br />전통의 미를 살려 이러한 제품</p>",
    imgSrc: homeProductKeyboard,
  },
  {
    idx: 1,
    name: "해태 87",
    category: "스위치",
    describe:
      "<p>해태 87은 이러이러한 컨셉으로<br />전통의 미를 살려 이러한 제품</p>",
    imgSrc: homeProductKeyboard,
  },
  {
    idx: 2,
    name: "해태 87",
    category: "키캡",
    describe:
      "<p>해태 87은 이러이러한 컨셉으로<br />전통의 미를 살려 이러한 제품</p>",
    imgSrc: homeProductKeyboard,
  },
  {
    idx: 3,
    name: "해태 87",
    category: "PCB",
    describe:
      "<p>해태 87은 이러이러한 컨셉으로<br />전통의 미를 살려 이러한 제품</p>",
    imgSrc: homeProductKeyboard,
  },
  {
    idx: 4,
    name: "해태 87",
    category: "도구",
    describe:
      "<p>해태 87은 이러이러한 컨셉으로<br />전통의 미를 살려 이러한 제품</p>",
    imgSrc: homeProductKeyboard,
  },
]);
const filterProductItem = computed(() =>
  productItem.value.filter((item) => item.idx === menuNum.value)
);

const clickMenu = (num) => {
  menuNum.value = num;
};
</script>

<style src="@/assets/css/renewalHome/mobile/ProductMobile.css" module></style>
