<script setup>
// import Header from "@/layouts/Header.vue";
import Header from "@/layouts/RenewalHeader.vue";
// import Nav from "@/layouts/Nav.vue";
// import Footer from "@/layouts/Footer.vue";
import Footer from "@/layouts/RenewalFooter.vue";
import Menu from "@/layouts/Menu.vue";
import AdminHeader from "@/layouts/AdminHeader.vue";
import AdminSideBar from "@/layouts/AdminSideBar.vue";

import { useMenuStore } from "@/store/useMenuStore";
import { useAdminStore } from "@/store/useAdminPageStore";
import { storeToRefs } from "pinia";

const { isShowingMenuByRoute } = storeToRefs(useMenuStore());
const { isAdminPageRouter, isAdminLoginPage } = storeToRefs(useAdminStore());
import { useMobileSizeStore } from "@/store/useMobileSizeStore";

const mobileSizeStore = useMobileSizeStore();

mobileSizeStore.checkMobileSize();
</script>

<template>
  <div v-if="isAdminPageRouter" class="adminLayout">
    <AdminSideBar v-if="isAdminLoginPage" class="sideBar" />
    <div class="headerContent" v-if="isAdminLoginPage">
      <AdminHeader />
      <router-view />
    </div>
    <router-view v-if="!isAdminLoginPage" />
  </div>
  <div v-else>
    <Header />
    <!-- <Nav /> -->
    <section class="contents">
      <router-view />
    </section>
    <!-- <Menu v-if="isShowingMenuByRoute" /> -->
    <Footer />
  </div>
</template>

<style>
body {
  overflow-x: hidden;
}
</style>
<style scoped>
.contents {
  /* padding: 0 60px; */
}
.adminLayout {
  display: flex;
  justify-content: center;
}
.headerContent {
  width: calc(100% - 300px);
}
</style>
