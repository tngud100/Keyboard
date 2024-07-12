<template>
  <div>
    <div :class="$style.swiperText">
      <div :class="$style.textBox">
        <p
          v-html="item[currentPage - 1].text"
          :class="[$style.text, 'text']"
        ></p>
      </div>
    </div>
    <div>
      <Swiper
        :slidesPerView="1"
        :spaceBetween="0"
        :loop="false"
        :autoplay="false"
        :pagination="true"
        :item="item"
        :imgSize="itemSize"
        @currentPage="changePage"
      />
    </div>
  </div>
</template>

<script setup>
import Swiper from "#/swiper/AllScreenSwipe.vue";
import firstBackground from "@/assets/images/firstBackgroundMobile.svg";
import secondBackground from "@/assets/images/secondBackgroundMobile.svg";
import thirdBackground from "@/assets/images/thirdBackgroundMobile.svg";
import { ref, watch } from "vue";

const autoSwipe = ref(true);
const itemSize = {
  // height: 375,
};
const item = [
  {
    idx: 0,
    link: "",
    img: firstBackground,
    text: "해태 87은<br />조선의 느낌을 강렬히 표현한<br />조선 컨셉",
  },
  {
    idx: 1,
    link: "",
    img: secondBackground,
    text: "조선타자기2<br /> 혜태 87에 설명 문구 필요! <br />(제품설명)",
  },
  {
    idx: 2,
    link: "",
    img: thirdBackground,
    text: "조선타자기3<br /> 혜태 87에 설명 문구 필요! <br />(제품설명)",
  },
];
const currentPage = ref(1);

const changePage = (page) => {
  currentPage.value = page;
};
</script>

<style src="@/assets/css/swiper/HomeSwiperMobileContents.css" module></style>
