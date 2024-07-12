<template>
  <div>
    <div :class="$style.swiperText">
      <div :class="$style.textBox">
        <p
          v-html="item[currentPage - 1].text"
          :class="[$style.text, 'text']"
        ></p>
      </div>
      <div :class="$style.progressBox">
        <div :class="$style.progressBar">
          <div
            :class="$style.progress"
            :style="{
              width:
                currentPage === 1 ? '33%' : currentPage === 2 ? '66%' : '100%',
            }"
          ></div>
        </div>
        <div :class="$style.paginationBox">
          <IconPaginationLeftArrowVue
            :class="['prevBtn', $style.prevBtn, $style.btn]"
          />
          <div :class="$style.currentPage">
            {{ currentPage }}/{{ item.length }}
            <IconPaginationPause
              :class="[$style.pauseBtn, $style.btn]"
              v-if="autoSwipe"
              @click="autoToggle"
            />
            <IconPaginationPlay
              :class="[$style.playBtn, $style.btn]"
              v-else
              @click="autoToggle"
            />
          </div>
          <IconPaginationRightArrowVue
            :class="['nextBtn', $style.nextBtn, $style.btn]"
          />
        </div>
      </div>
    </div>

    <Swiper
      :slidesPerView="1"
      :spaceBetween="0"
      :autoplay="true"
      :loop="true"
      :pagination="false"
      :autoSwipe="autoSwipe"
      :item="item"
      :imgSize="itemSize"
      @currentPage="changePage"
    />
  </div>
</template>

<script setup>
import Swiper from "#/swiper/AllScreenSwipe.vue";
import firstBackground from "@/assets/images/firstBackground.png";
import secondBackground from "@/assets/images/secondBackground.png";
import thirdBackground from "@/assets/images/thirdBackground.png";
import IconPaginationLeftArrowVue from "#/icons/IconPaginationLeftArrow.vue";
import IconPaginationRightArrowVue from "#/icons/IconPaginationRightArrow.vue";
import IconPaginationPause from "#/icons/IconPaginationPause.vue";
import IconPaginationPlay from "#/icons/IconPaginationPlay.vue";
// import IconPaginationLeftArrowGrayVue from "#/icons/IconPaginationLeftArrowGray.vue";
// import IconPaginationRightArrowGrayVue from "#/icons/IconPaginationRightArrowGray.vue";
import { ref, watch } from "vue";

const autoSwipe = ref(true);
const itemSize = {
  minWidth: 1400,
  maxWidth: 1920,
  height: 798,
};
const item = [
  {
    idx: 0,
    link: "",
    img: firstBackground,
    productTitle: "제품명",
    productName: "SG87W",
    text: "해태 87은<br />조선의 느낌을 강렬히 표현한<br />조선 컨셉",
  },
  {
    idx: 1,
    link: "",
    img: secondBackground,
    // productTitle: "제품명",
    // productName: "title",
    text: "조선타자기2<br /> 혜태 87에 설명 문구 필요! <br />(제품설명)",
  },
  {
    idx: 2,
    link: "",
    img: thirdBackground,
    // productTitle: "제품명",
    // productName: "title",
    text: "조선타자기3<br /> 혜태 87에 설명 문구 필요! <br />(제품설명)",
  },
];
const currentPage = ref(1);

const changePage = (page) => {
  currentPage.value = page;
};

const autoToggle = () => {
  autoSwipe.value = !autoSwipe.value;
};
</script>

<style src="@/assets/css/swiper/HomeSwiperContents.css" module></style>
