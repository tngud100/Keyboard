<template>
  <div class="languageWrapper" @click="changeLanguage">
    <button type="button" class="world"></button>
    <button type="button" class="language" ref="animatedElement"></button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { animateLanguage } from "@/utils/anime";
import { useLanguageStore } from "@/stores/useLanguageStore";

const store = useLanguageStore();
const animatedElement = ref(null);

onMounted(() => {
  // null 처리
  animatedElement.value.style.backgroundImage = store.isLanguage
    ? "url('../src/assets/images/english.svg')"
    : "url('../src/assets/images/korean.svg')";
});

const changeLanguage = () => {
  animateLanguage(() => {
    store.toggleIsLanguage();
    animatedElement.value.style.backgroundImage = store.isLanguage
      ? "url('../src/assets/images/english.svg')"
      : "url('../src/assets/images/korean.svg')";
  });
};
</script>

<style scoped>
@import "./Language.css";
</style>
