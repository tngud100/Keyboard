<template>
  <div :class="$style.IntroSection">
    <div :class="$style.textWrapper">
      <p :class="$style.title">조선타자기는</p>
      <p :class="$style.value">이런 가치를 지니고 있습니다.</p>
    </div>
    <div :class="$style.valueWrapper">
      <div v-for="item in valueList" :key="item.idx" :class="$style.valueBox">
        <img :class="$style.valueImg" :src="item.img" alt="" />
        <div :class="$style.valueText">
          <p :class="$style.valueTitle">{{ item.title }}</p>
          <p :class="$style.valueDesc">{{ item.value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import introValue1 from "@/assets/images/introValue1.svg";
import introValue2 from "@/assets/images/introValue2.svg";
import introValue3 from "@/assets/images/introValue3.svg";

const valueList = [
  {
    img: introValue1,
    title: "소통",
    value: "소비자 의견이 담긴 개선",
  },
  {
    img: introValue1,
    title: "서비스",
    value: "이용 불편함 최소화",
  },
  {
    img: introValue2,
    title: "가격",
    value: "합리적인 가격",
  },
  {
    img: introValue3,
    title: "커스텀",
    value: "개인 선호도에 맞춰 커스텀",
  },
];
</script>

<style src="@/assets/css/renewalIntro/deskTop/IntroValue.css" module></style>