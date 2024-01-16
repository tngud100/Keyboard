<template>
  <router-link to="/noticeDetail">
    <img
      :src="importedImgNotice"
      alt="보고용 임시 페이크 페이지"
      style="width: 100%; object-fit: cover; object-position: center"
    />
  </router-link>
  <section class="wrapper"></section>
</template>

<script setup>
import { ref } from "vue";
import ImgNotice from "@/assets/images/ImgNotice.svg";

const importedImgNotice = ref(ImgNotice);
</script>

<style src="./Notice.css" scoped></style>
