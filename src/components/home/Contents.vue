<template>
  <section :class="$style.contents">
    <div :class="$style.backgroundWrapper">
      <img
        :src="firstBackground"
        alt="첫번째 이미지"
        :class="$style.backgroundImgs"
      />
      <div :class="$style.descWrapper">
        <span :class="$style.productBlackName">제품명</span>
        <div :class="$style.nameWrapper">
          <div :class="$style.firstName">SG87W</div>
          <div :class="$style.arrowWrapper">
            <IconHomeBlackArrow />
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.backgroundWrapper">
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
    </div>
  </section>
</template>

<script setup>
import firstBackground from "@/assets/images/firstBackground.png";
import secondBackground from "@/assets/images/secondBackground.png";
import thirdBackground from "@/assets/images/thirdBackground.png";
import IconHomeBlackArrow from "#/icons/IconHomeBlackArrow.vue";
import IconHomePurpleArrow from "#/icons/IconHomePurpleArrow.vue";
import IconHomeGreenArrow from "#/icons/IconHomeGreenArrow.vue";
</script>

<style src="@/assets/css/home/Contents.css" module></style>
