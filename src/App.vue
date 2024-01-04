<script setup>
import Header from "#/layout/Header.vue";
import Nav from "#/layout/Nav.vue";
import Footer from "#/layout/Footer.vue";
import Menu from "#/layout/Menu.vue";
import { useMenuStore } from "@/stores/useMenuStore";
import { storeToRefs } from "pinia";

const { isShowingMenuByLocation } = storeToRefs(useMenuStore());
</script>

<template>
  <div>
    <Header />
    <section class="contents">
      <Nav />
      <router-view />
      <Menu v-show="isShowingMenuByLocation" />
    </section>
    <Footer />
  </div>
</template>

<style scoped>
.contents {
  padding: 0 20px;
}
</style>
