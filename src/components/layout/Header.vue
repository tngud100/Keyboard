<template>
  <header :class="$style.header">
    <div :class="$style.sites">
      <button type="button" :class="$style.siteBtn">
        <IconInstagram />
      </button>
      <button type="button" :class="$style.siteBtn">
        <IconDiscord />
      </button>
      <button type="button" :class="$style.siteBtn">
        <IconNaver />
      </button>
      <button type="button" :class="$style.siteBtn">
        <IconYoutube />
      </button>
    </div>
    <h1 :class="$style.title">
      <router-link to="/" :class="$style.titleLink">
        <IconNewLogo />
      </router-link>
    </h1>
    <div :class="$style.etc">
      <div :class="[$style.searchWrapper, isShowingSearchBoard]">
        <input
          type="text"
          :class="$style.search"
          v-show="isSearch"
          ref="searchRef"
        />
        <button type="button" :class="$style.searchBtn" @click="toggleIsSearch">
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
import { computed, ref, useCssModule } from "vue";
import Language from "#/common/Language.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
import IconDiscord from "@/components/icons/IconDiscord.vue";
import IconNaver from "@/components/icons/IconNaver.vue";
import IconYoutube from "@/components/icons/IconYoutube.vue";
import IconNewLogo from "@/components/icons/IconNewLogo.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import IconMyPage from "@/components/icons/IconMyPage.vue";
import IconBasket from "@/components/icons/IconBasket.vue";

const isSearch = ref(false);
const searchRef = ref(null);
const style = useCssModule();

const isShowingSearchBoard = computed(
  () => isSearch.value && style.searchWrapperBorder
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

<style src="./Header.css" module></style>
