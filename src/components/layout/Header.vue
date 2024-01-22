<template>
  <header class="header">
    <div class="sites">
      <button type="button" class="siteBtn">
        <IconInstagram />
      </button>
      <button type="button" class="siteBtn">
        <IconDiscord />
      </button>
      <button type="button" class="siteBtn">
        <IconNaver />
      </button>
      <button type="button" class="siteBtn">
        <IconYoutube />
      </button>
    </div>
    <h1 class="title">
      <router-link to="/" class="titleLink">
        <IconLogo />
      </router-link>
    </h1>
    <div class="etc">
      <div class="searchWrapper" :class="isShowingSearchBoard">
        <input type="text" class="search" v-show="isSearch" ref="searchRef" />
        <button type="button" class="searchBtn" @click="toggleIsSearch">
          <IconSearch />
        </button>
      </div>
      <button type="button">
        <router-link to="/login">
          <IconMyPage />
        </router-link>
      </button>
      <button type="button">
        <router-link to="/basket">
          <IconBasket />
        </router-link>
      </button>
      <Language />
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from "vue";
import Language from "#/common/Language.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
import IconDiscord from "@/components/icons/IconDiscord.vue";
import IconNaver from "@/components/icons/IconNaver.vue";
import IconYoutube from "@/components/icons/IconYoutube.vue";
import IconLogo from "@/components/icons/IconLogo.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import IconMyPage from "@/components/icons/IconMyPage.vue";
import IconBasket from "@/components/icons/IconBasket.vue";

const isSearch = ref(false);
const searchRef = ref(null);

const isShowingSearchBoard = computed(
  () => isSearch.value && "searchWrapperBorder"
);

const toggleIsSearch = () => {
  let timer;

  isSearch.value = !isSearch.value;

  if (isSearch.value) {
    timer = setTimeout(() => {
      searchRef.value.focus();
      clearTimeout(timer);
    }, 0);
  }
};
</script>

<style src="./Header.css" scoped></style>
