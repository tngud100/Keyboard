import { defineStore } from "pinia";
import { ref } from "vue";

export const useLanguageStore = defineStore("language", () => {
  const isLanguage = ref(
    localStorage.getItem("language") === null
      ? false
      : Boolean(localStorage.getItem("language"))
  );

  const toggleIsLanguage = () => {
    isLanguage.value = !isLanguage.value;
    localStorage.setItem("language", isLanguage.value);
    console.log(localStorage.getItem("language"));
  };

  return { isLanguage, toggleIsLanguage };
});
