<template>
  <router-link to="/review" @click="setCurrentTabName('Notice')">
    <img
      :src="importedImgNotice"
      alt="보고용 임시 페이크 페이지"
      style="width: 100%; object-fit: cover; object-position: center"
    />
  </router-link>
</template>

<script setup>
import { ref } from "vue";
import ImgNotice from "@/assets/images/ImgNoticeDetail.svg";
import { useTabNameStore } from "@/stores/temporaryStore";

const importedImgNotice = ref(ImgNotice);

const store = useTabNameStore();

const setCurrentTabName = (tabName) => {
  store.setCurrentTabName(tabName);
};
</script>

<style src="./Notice.css" scoped></style>
