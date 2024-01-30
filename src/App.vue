<script setup>
import Header from "@/layouts/Header.vue";
import Nav from "@/layouts/Nav.vue";
import Footer from "@/layouts/Footer.vue";
import Menu from "@/layouts/Menu.vue";
import { useMenuStore } from "@/stores/useMenuStore";
import { useNavStore } from "@/stores/useNavStore";
import { storeToRefs } from "pinia";

const { isShowingMenuByRoute } = storeToRefs(useMenuStore());
// const { isShowingNavByRoute } = storeToRefs(useNavStore());
</script>

<template>
  <div>
    <Header />
    <section class="contents">
      <!-- <Nav v-show="isShowingNavByRoute" /> -->
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
