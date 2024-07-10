<template>
  <div :class="$style.wrapper">
    <div :class="$style.menuContainer">
      <div :class="$style.menuTitle">
        <p :class="$style.subTitle">조선타자기 베스트</p>
        <p :class="$style.title">상품</p>
      </div>
      <div :class="$style.linkBox">
        <a :class="$style.linkTo">더보기 +</a>
      </div>
    </div>
    <div :class="$style.contentContainer">
      <div :class="$style.menuButtonBox">
        <button :class="$style.menuBtn">키보드</button>
        <button :class="$style.menuBtn">스위치</button>
        <button :class="$style.menuBtn">키캡</button>
        <button :class="$style.menuBtn">PCB</button>
        <button :class="$style.menuBtn">도구</button>
      </div>

      <div :class="$style.contentBox">
        <div :class="$style.leftContent">
          <div :class="$style.nameBox">
            <p :class="$style.categoryName">키보드</p>
            <p :class="$style.productName">해태 87</p>
          </div>
          <div :class="$style.describeBox">
            <!-- <div v-html="describe"></div> -->
            <p>
              해태 87은 이러이러한 컨셉으로<br />전통의 미를 살려 이러한 제품
            </p>
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
            <img
              :src="homeProductKeyboard"
              alt="해태 87"
              :class="$style.Image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import homeProductKeyboard from "@/assets/images/homeProductKeyboard.svg";
import IconHomeProductArrow from "#/icons/IconHomeProductArrow.vue";
import IconHomeProductRedArrow from "#/icons/IconHomeProductRedArrow.vue";

const gotoStore = ref(false);
</script>

<style src="@/assets/css/renewalHome/ProductDeskTop.css" module></style>