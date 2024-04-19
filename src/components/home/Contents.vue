<template>
  <section :class="$style.contents">
    <div
      v-for="(item, index) in homeItem"
      :key="index"
      :class="$style.backgroundWrapper"
    >
      <img
        :src="item.representImg"
        alt="첫번째 이미지"
        :class="$style.backgroundImgs"
      />
      <div :class="$style.descWrapper">
        <span :class="$style.productBlackName">제품명</span>
        <div :class="$style.nameWrapper">
          <div :class="$style.firstName">{{ item.name }}</div>
          <div :class="$style.arrowWrapper">
            <component :is="item.Icon" />
          </div>
        </div>
      </div>
    </div>

    <!-- <div :class="$style.backgroundWrapper">
      <img
        :src="secondBackground"
        alt="두번째 이미지"
        :class="$style.backgroundImgs"
      />
      <div :class="$style.descWrapper">
        <span :class="$style.productBlackName">제품명</span>
        <div :class="$style.nameWrapper">
          <div :class="$style.secondName">
            Akko Fairy 저소음 기계식 키보드 스위치
          </div>
          <div :class="$style.arrowWrapper">
            <IconHomePurpleArrow />
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.backgroundWrapper">
      <img
        :src="thirdBackground"
        alt="세번째 이미지"
        :class="$style.backgroundImgs"
      />
      <div :class="$style.descWrapper">
        <span :class="$style.productWhiteName">제품명</span>
        <div :class="$style.nameWrapper">
          <div :class="$style.thirdName">
            오테뮤 라임 V2 기계식 키보드 스위치
          </div>
          <div :class="$style.arrowWrapper">
            <IconHomeGreenArrow />
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script setup>
import firstBackground from "@/assets/images/firstBackground.png";
import secondBackground from "@/assets/images/secondBackground.png";
import thirdBackground from "@/assets/images/thirdBackground.png";
import IconHomeBlackArrow from "#/icons/IconHomeBlackArrow.vue";
import IconHomePurpleArrow from "#/icons/IconHomePurpleArrow.vue";
import IconHomeGreenArrow from "#/icons/IconHomeGreenArrow.vue";
// import ContentsStyles from "@/assets/css/home/Contents.css"; // 올바른 경로 사용
import { ref } from "vue";

// const $style = ContentsStyles; // $style 변수 설정

const homeItem = ref([
  {
    representImg: firstBackground,
    name: "SG87W",
    // nameClass: $style.firstName, // 클래스 이름 직접 사용
    Icon: IconHomeBlackArrow,
  },
  {
    representImg: secondBackground,
    name: "Akko Fairy 저소음 기계식 키보드 스위치",
    // nameClass: $style.secondName, // 클래스 이름 직접 사용
    Icon: IconHomePurpleArrow,
  },
  {
    representImg: thirdBackground,
    name: "오테뮤 라임 V2 기계식 키보드 스위치",
    // nameClass: $style.thirdName, // 클래스 이름 직접 사용
    Icon: IconHomeGreenArrow,
  },
]);
</script>

<style src="@/assets/css/home/Contents.css" module></style>
