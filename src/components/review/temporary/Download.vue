<template>
  <img
    :src="importedDownload"
    alt="보고용 임시 페이크 페이지"
    style="width: 100%; object-fit: cover; object-position: center"
  />
</template>

<script setup>
import { ref } from "vue";
import ImgDownload from "@/assets/images/ImgDownload.svg";

const importedDownload = ref(ImgDownload);
</script>

<style src="./Notice.css" scoped></style>
