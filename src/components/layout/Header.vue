<template>
  <header class="header">
    <div class="sites">
      <button type="button" class="siteBtn">
        <img :src="importedInstagram" alt="인스타그램" />
      </button>
      <button type="button" class="siteBtn">
        <img :src="importedDiscord" alt="디스코드" />
      </button>
      <button type="button" class="siteBtn">
        <img :src="importedNaver" alt="네이버" />
      </button>
      <button type="button" class="siteBtn">
        <img :src="importedYoutube" alt="유튜브" />
      </button>
    </div>
    <h1 class="title">
      <router-link to="/" class="titleLink">
        <img :src="importedLogo" alt="로고" />
      </router-link>
    </h1>
    <div class="etc">
      <div class="searchWrapper" :class="isShowingSearchBoard">
        <input type="text" class="search" v-show="isSearch" ref="searchRef" />
        <button type="button" class="searchBtn" @click="toggleIsSearch">
          <img :src="importedSearch" alt="검색" />
        </button>
      </div>
      <button type="button">
        <router-link to="/login">
          <img :src="importedMyPage" alt="내정보" />
        </router-link>
      </button>
      <button type="button">
        <router-link to="/temporaryBasket">
          <img :src="importedBasket" alt="장바구니" />
        </router-link>
      </button>
      <Language />
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from "vue";
import instagram from "@/assets/images/instagram.svg";
import discord from "@/assets/images/discord.svg";
import naver from "@/assets/images/naver.svg";
import youtube from "@/assets/images/youtube.svg";
import search from "@/assets/images/search.svg";
import myPage from "@/assets/images/mypage.svg";
import basket from "@/assets/images/basket.svg";
import logo from "@/assets/images/logo.svg";
import Language from "#/common/Language.vue";

const importedInstagram = ref(instagram);
const importedDiscord = ref(discord);
const importedNaver = ref(naver);
const importedYoutube = ref(youtube);
const importedSearch = ref(search);
const importedMyPage = ref(myPage);
const importedBasket = ref(basket);
const importedLogo = ref(logo);
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
