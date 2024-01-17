<template>
  <div class="languageWrapper" @click="toggleLanguage">
    <button type="button" class="world"></button>
    <button
      type="button"
      class="language"
      :style="{
        backgroundImage: language.isLanguage
          ? `url(${importedKorean})`
          : `url(${importedEnglish})`,
      }"
    ></button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { animateLanguage } from "@/utils/anime";
import { useLanguageStore } from "@/stores/useLanguageStore";
import korean from "/korean.svg";
import english from "@/assets/images/english.svg";

const language = useLanguageStore();
const importedKorean = ref(korean);
const importedEnglish = ref(english);

const toggleLanguage = () => {
  animateLanguage(() => {
    language.toggleLanguage();
  });
};
</script>

<style src="./Language.css" scoped></style>
