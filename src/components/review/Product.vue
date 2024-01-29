<template>
  <section>
    <img :src="importedReviewImg" alt="리뷰 이미지" />
    <h3 :class="$style.title">{{ title }}</h3>
    <p :class="$style.views">조회수 {{ views }}회</p>
  </section>
</template>

<script setup>
import reviewImg from "@/assets/images/reviewImg.png";
import { ref } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    required: true,
  },
});
const importedReviewImg = ref(reviewImg);
</script>

<style src="./Product.css" module></style>
