<script setup>
import Header from "#/layout/Header.vue";
import Nav from "#/layout/Nav.vue";
import Footer from "#/layout/Footer.vue";
import Menu from "#/layout/Menu.vue";
import { useMenuStore } from "@/stores/useMenuStore";
import { useNavStore } from "@/stores/useNavStore";
import { storeToRefs } from "pinia";

const { isShowingMenuByRoute } = storeToRefs(useMenuStore());
const { isShowingNavByRoute } = storeToRefs(useNavStore());
</script>

<template>
  <div>
    <Header />
    <section class="contents">
      <!-- <Nav v-show="isShowingNavByRoute" /> -->
      <Nav />
      <router-view />
      <Menu v-show="isShowingMenuByRoute" />
    </section>
    <Footer />
  </div>
</template>

<style scoped>
.contents {
  padding: 0 20px;
}
</style>
