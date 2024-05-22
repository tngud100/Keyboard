<template>
  <section>
    <MyPageNav />
    <div :class="$style.container">
      <MyPageMenu :class="$style.sideBar" @menuItem="updateMenuListNum" />
      <div>
        <Title :title="menuName" @writeReview="handleWriteReview" />
        <component
          :is="currentView"
          :menuNum="menuNum"
          :writeReview="isAskWriteBtn"
          :class="$style.content"
          @isCancelWrite="isAskWriteBtn = false"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import MyPageNav from "@/layouts/MyPageNav.vue";
import MyPageMenu from "@/layouts/MyPageMenu.vue";
import Title from "#/mypage/Title.vue";
import myorder from "#/myorder/Content.vue";
import myaskReview from "#/myaskReview/Content.vue";
import myinfo from "#/myinfo/Content.vue";
import { ref, computed } from "vue";

const menuNum = ref(0);
const menuName = ref("주문조회");

const isAskWriteBtn = ref(false);

const updateMenuListNum = (Item) => {
  menuNum.value = Item.listNum;
  menuName.value = Item.name;
};

const currentView = computed(() => {
  if (menuNum.value <= 1) {
    return myorder;
  } else if (menuNum.value > 1 && menuNum.value <= 3) {
    return myaskReview;
  } else if (menuNum.value > 3 && menuNum.value <= 6) {
    return myinfo; // 다른 컴포넌트 예시로 변경
  } else {
    return myorder; // 기본값 설정
  }
});

const handleWriteReview = () => {
  isAskWriteBtn.value = true;
};
</script>

<style src="@/assets/css/mypage/Content.css" module></style>
