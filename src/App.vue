<script setup>
import Header from "@/layouts/Header.vue";
import Nav from "@/layouts/Nav.vue";
import Footer from "@/layouts/Footer.vue";
import Menu from "@/layouts/Menu.vue";
import AdminHeader from "@/layouts/AdminHeader.vue";
import AdminSideBar from "@/layouts/AdminSideBar.vue";

import { useMenuStore } from "@/store/useMenuStore";
import { useAdminStore } from "@/store/useAdminPageStore";
import { storeToRefs } from "pinia";

const { isShowingMenuByRoute } = storeToRefs(useMenuStore());
const { isAdminPageRouter, isAdminLoginPage } = storeToRefs(useAdminStore());
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
.adminLayout {
  display: flex;
  justify-content: center;
}
.headerContent {
  width: calc(100% - 300px);
}
</style>
