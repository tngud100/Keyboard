<template>
  <div :class="$style.container">
    <div :class="$style.logoBox">
      <IconNewLogo />
    </div>
    <ul :class="$style.listBox">
      <router-link to="/admin/products"
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
      <router-link to="/admin/board"
        ><li
          :class="[$style.list, selectedIndex === 2 ? $style.selected : '']"
          @click="selectIndex(2)"
        >
          게시판
        </li>
        <ul :class="$style.listdownBox" v-if="selectedIndex === 2">
          <li
            :class="[
              $style.listdown,
              boardIndex === 0 ? $style.selectedListdown : '',
            ]"
            @click="selectBoardIndex(0)"
          >
            리뷰
          </li>
          <li
            :class="[
              $style.listdown,
              boardIndex === 1 ? $style.selectedListdown : '',
            ]"
            @click="selectBoardIndex(1)"
          >
            공지사항
          </li>
          <li
            :class="[
              $style.listdown,
              boardIndex === 2 ? $style.selectedListdown : '',
            ]"
            @click="selectBoardIndex(2)"
          >
            자주묻는 질문
          </li>
          <li
            :class="[
              $style.listdown,
              boardIndex === 3 ? $style.selectedListdown : '',
            ]"
            @click="selectBoardIndex(3)"
          >
            자료실
          </li>
        </ul>
      </router-link>
      <router-link to="/admin/inquire"
        ><li
          :class="[$style.list, selectedIndex === 3 ? $style.selected : '']"
          @click="selectIndex(3)"
        >
          1:1문의
        </li></router-link
      >
    </ul>
  </div>
</template>

<script setup>
import IconNewLogo from "#/icons/IconNewLogo.vue";
import { useAdminStore } from "@/store/useAdminPageStore.js";
import { onMounted, ref } from "vue";

const emit = defineEmits(["sideBarIndex"]);

const adminStore = useAdminStore();

const selectedIndex = ref(0);

const boardIndex = ref(0);

const selectIndex = (index) => {
  selectedIndex.value = index;
};
const selectBoardIndex = (index) => {
  boardIndex.value = index;
  adminStore.setAdminBoardIndex(index);
};

onMounted(() => {
  selectedIndex.value = adminStore.adminSideBarIndex;
});
</script>

<style src="@/assets/css/layouts/AdminSideBar.css" module></style>
