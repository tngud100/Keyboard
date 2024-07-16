<template>
  <nav :class="$style.nav">
    <ul :class="$style.navList">
      <li>
        <router-link
          :class="$style.navItem"
          to="/board/notice"
          :style="{
            color: selectedBoardNum === 0 ? 'black' : '#AFAFAF',
            fontWeight: selectedBoardNum === 0 ? '900' : ' 500',
          }"
          @click="selected(0)"
          >공지사항</router-link
        >
      </li>
      <li>
        <router-link
          :class="$style.navItem"
          to="/board/faq"
          :style="{
            color: selectedBoardNum === 1 ? 'black' : '#AFAFAF',
            fontWeight: selectedBoardNum === 1 ? '900' : ' 500',
          }"
          @click="selected(1)"
          >자주묻는 질문</router-link
        >
      </li>
      <li>
        <router-link
          :class="$style.navItem"
          to="/board/download"
          :style="{
            color: selectedBoardNum === 2 ? 'black' : '#AFAFAF',
            fontWeight: selectedBoardNum === 2 ? '900' : ' 500',
          }"
          @click="selected(2)"
          >자료실</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const selectedBoardNum = ref(0);
const selected = (num) => {
  selectedBoardNum.value = num;
};
</script>

<style src="@/assets/css/layouts/RenewalBoardNav.css" module></style>
