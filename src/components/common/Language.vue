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
import korean from "@/assets/images/korean.svg";
import english from "@/assets/images/english.svg";

const language = useLanguageStore();
const animatedElement = ref(null);
const importedKorean = ref(korean);
const importedEnglish = ref(english);

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
    ? `url(${importedKorean.value})`
    : `url(${importedEnglish.value})`;
};
</script>

<style scoped>
@import "./Language.css";
</style>
