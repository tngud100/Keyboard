<template>
  <div :class="$style.container">
    <div :class="$style.logoBox">
      <IconNewLogo />
    </div>
    <ul :class="$style.listBox">
      <router-link to="/adminProducts"
        ><li
          :class="[$style.list, selectedIndex === 0 ? $style.selected : '']"
          @click="selectIndex(0)"
        >
          상품
        </li></router-link
      >
      <router-link to=""
        ><li
          :class="[$style.list, selectedIndex === 1 ? $style.selected : '']"
          @click="selectIndex(1)"
        >
          회원
        </li></router-link
      >
      <router-link to="/adminInquire"
        ><li
          :class="[$style.list, selectedIndex === 2 ? $style.selected : '']"
          @click="selectIndex(2)"
        >
          1:1문의
        </li></router-link
      >
      <router-link to=""
        ><li
          :class="[$style.list, selectedIndex === 3 ? $style.selected : '']"
          @click="selectIndex(3)"
        >
          게시판
        </li></router-link
      >
    </ul>
  </div>
</template>

<script setup>
import IconNewLogo from "#/icons/IconNewLogo.vue";
import { ref } from "vue";

const emit = defineEmits(["sideBarIndex"]);

const selectedIndex = ref(0);

const selectIndex = (index) => {
  selectedIndex.value = index;
};
</script>

<style src="@/assets/css/layouts/AdminSideBar.css" module></style>
