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
      <div class="searchWrapper">
        <input type="text" class="search" />
        <button type="button" class="searchBtn">
          <img :src="importedSearch" alt="검색" />
        </button>
      </div>
      <button type="button">
        <img :src="importedMyPage" alt="내정보" />
      </button>
      <button type="button">
        <img :src="importedBasket" alt="장바구니" />
      </button>
      <Language />
      <!-- <button type="button">
        <img :src="importedKorean" alt="한국어" />
      </button> -->
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import instagram from "@/assets/images/instagram.svg";
import discord from "@/assets/images/discord.svg";
import naver from "@/assets/images/naver.svg";
import youtube from "@/assets/images/youtube.svg";
import search from "@/assets/images/search.svg";
import myPage from "@/assets/images/mypage.svg";
import basket from "@/assets/images/basket.svg";
import korean from "@/assets/images/korean.svg";
import logo from "@/assets/images/logo.svg";
import Language from "@/components/common/Language.vue";

const importedInstagram = ref(instagram);
const importedDiscord = ref(discord);
const importedNaver = ref(naver);
const importedYoutube = ref(youtube);
const importedSearch = ref(search);
const importedMyPage = ref(myPage);
const importedBasket = ref(basket);
const importedKorean = ref(korean);
const importedLogo = ref(logo);
</script>

<style scoped>
@import "./Header.css";
</style>
