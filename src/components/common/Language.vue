<template>
  <div class="languageWrapper" @click="toggleLanguage">
    <button type="button" class="world"></button>
    <button type="button" class="language" ref="animatedElement"></button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { animateLanguage } from "@/utils/anime";
import { useLanguageStore } from "@/stores/useLanguageStore";

const language = useLanguageStore();
const animatedElement = ref(null);

onMounted(() => {
  setLanguageBackgroundImg();
});

const toggleLanguage = () => {
  animateLanguage(() => {
    language.toggleLanguage();
    setLanguageBackgroundImg();
  });
};

const setLanguageBackgroundImg = () => {
  animatedElement.value.style.backgroundImage = language.isLanguage
    ? "url('../src/assets/images/english.svg')"
    : "url('../src/assets/images/korean.svg')";
};
</script>

<style scoped>
@import "./Language.css";
</style>
