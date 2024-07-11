<template>
  <div :class="$style.wrapper">
    <div :class="$style.menuContainer">
      <div :class="$style.menuTitle">
        <p :class="$style.subTitle">조선타자기 베스트</p>
        <p :class="$style.title">상품</p>
      </div>
      <div :class="$style.linkBox">
        <a :class="$style.linkTo" href="/">더보기 +</a>
      </div>
    </div>
    <div :class="$style.contentContainer">
      <div :class="$style.menuButtonBox">
        <button
          :class="[$style.menuBtn, { [$style.active]: item.idx === menuNum }]"
          v-for="item in productItem"
          :key="item.idx"
          @click="clickMenu(item.idx)"
        >
          {{ item.category }}
        </button>
      </div>

      <div
        :class="$style.contentBox"
        v-for="item in filterProductItem"
        :key="item.idx"
      >
        <div :class="$style.leftContent">
          <div :class="$style.nameBox">
            <p :class="$style.categoryName">{{ item.category }}</p>
            <p :class="$style.productName">{{ item.name }}</p>
          </div>
          <div :class="$style.describeBox">
            <div v-html="item.describe"></div>
          </div>
          <div :class="$style.buttonBox">
            <button
              :class="$style.gotoStore"
              @mouseover="gotoStore = true"
              @mouseleave="gotoStore = false"
            >
              상품 보러가기
              <IconHomeProductArrow
                v-if="!gotoStore"
                :class="$style.rightArrow"
              />
              <IconHomeProductRedArrow
                v-if="gotoStore"
                :class="$style.rightArrow"
              />
            </button>
          </div>
        </div>
        <div :class="$style.rightContent">
          <div :class="$style.imageBox">
            <img :src="item.imgSrc" alt="해태 87" :class="$style.Image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import homeProductKeyboard from "@/assets/images/homeProductKeyboard.svg";
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
<style src="@/assets/css/renewalHome/deskTop/ProductDeskTop.css" module></style>
