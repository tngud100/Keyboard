<template>
  <section>
    <MyPageNav />
    <div :class="$style.container">
      <MyPageMenu :class="$style.sideBar" @menuItem="updateMenuListNum" />
      <div>
        <Title :title="menuName" />
        <component :is="currentView" :menuNum="menuNum" />
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

const updateMenuListNum = (Item) => {
  menuNum.value = Item.listNum;
  menuName.value = Item.name;
};

const currentView = computed(() => {
  if (menuNum.value <= 1) {
    return myorder;
  } else if (menuNum.value > 1 && menuNum.value <= 3) {
    return myinfo; // 다른 컴포넌트 예시로 변경
  } else if (menuNum.value > 3 && menuNum.value <= 6) {
    return myaskReview;
  } else {
    return myorder; // 기본값 설정
  }
});
</script>

<style src="@/assets/css/mypage/Content.css" module></style>
