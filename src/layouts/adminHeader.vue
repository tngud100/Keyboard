<template>
  <div :class="$style.headerBox">
    <div :class="$style.wrapper">
      <input type="text" :class="$style.search" ref="searchRef" />
      <button type="button" :class="$style.searchBtn" @click="toggleIsSearch">
        <IconSearch />
      </button>
    </div>
    <div>
      <span :class="$style.headerSpan">관리자 계정</span>
      <span :class="$style.headerSpan">|</span>
      <button type="button" :class="$style.headerSpan">로그아웃</button>
    </div>
  </div>
</template>

<script setup>
import IconSearch from "#/icons/IconSearch.vue";
</script>

<style src="@/assets/css/layouts/AdminHeader.css" module></style>
