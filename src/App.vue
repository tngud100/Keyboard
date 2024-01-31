<script setup>
import Header from "@/layouts/Header.vue";
import Nav from "@/layouts/Nav.vue";
import Footer from "@/layouts/Footer.vue";
import Menu from "@/layouts/Menu.vue";
import { useMenuStore } from "@/store/useMenuStore";
import { storeToRefs } from "pinia";

const { isShowingMenuByRoute } = storeToRefs(useMenuStore());
</script>

<template>
  <div>
    <Header />
    <section class="contents">
      <Nav />
      <router-view />
      <Menu v-if="isShowingMenuByRoute" />
    </section>
    <Footer />
  </div>
</template>

<style scoped>
.contents {
  padding: 0 20px;
}
</style>
