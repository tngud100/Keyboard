<template>
  <div class="languageWrapper" @click="toggleLanguage">
    <button type="button" class="world"></button>
    <button
      type="button"
      class="language"
      :style="{
        backgroundImage: language.isLanguage
          ? `url(${korean})`
          : `url(${english})`,
      }"
    ></button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { animateLanguage } from "@/utils/anime";
import { useLanguageStore } from "@/stores/useLanguageStore";
import korean from "@/assets/images/korean.svg";
import english from "@/assets/images/english.svg";

const language = useLanguageStore();

const toggleLanguage = () => {
  animateLanguage(() => {
    language.toggleLanguage();
  });
};
</script>

<style src="./Language.css" scoped></style>
