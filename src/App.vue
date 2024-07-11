<script setup>
// import Header from "@/layouts/Header.vue";
// import Nav from "@/layouts/Nav.vue";
// import Footer from "@/layouts/Footer.vue";
import Header from "@/layouts/RenewalHeader.vue";
import Footer from "@/layouts/RenewalFooter.vue";
import MobileHeader from "@/layouts/RenewalMobileHeader.vue";
import MobileFooter from "@/layouts/RenewalMobileFooter.vue";
import RenewalMobileMenu from "@/layouts/RenewalMobileMenu.vue";
import Menu from "@/layouts/Menu.vue";
import AdminHeader from "@/layouts/AdminHeader.vue";
import AdminSideBar from "@/layouts/AdminSideBar.vue";

import { useMenuStore } from "@/store/useMenuStore";
import { useAdminStore } from "@/store/useAdminPageStore";
import { useMobileSizeStore } from "@/store/useMobileSizeStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const { isShowingMenuByRoute } = storeToRefs(useMenuStore());
const { isAdminPageRouter, isAdminLoginPage } = storeToRefs(useAdminStore());

const mobileSizeStore = useMobileSizeStore();
mobileSizeStore.checkMobileSize();
const { isMobile } = storeToRefs(mobileSizeStore);

const isClickMenu = ref(false);
const isClickedMenu = (value) => {
  isClickMenu.value = value;
};
</script>

<template>
  <div v-if="isAdminPageRouter" class="adminLayout">
    <!-- 어드민 버전 -->
    <AdminSideBar v-if="isAdminLoginPage" class="sideBar" />
    <div class="headerContent" v-if="isAdminLoginPage">
      <AdminHeader />
      <router-view />
    </div>
    <router-view v-if="!isAdminLoginPage" />
  </div>
  <!-- <Nav /> -->
  <!-- <Menu v-if="isShowingMenuByRoute" /> -->
  <div v-else>
    <!-- PC버전 -->
    <div v-if="!isMobile">
      <Header />
      <section class="contents">
        <router-view />
      </section>
      <Footer />
    </div>
    <!-- 모바일버전 -->
    <div v-else>
      <MobileHeader @isClickMenu="isClickedMenu" />
      <RenewalMobileMenu v-if="isClickMenu" />
      <section class="mobileContents">
        <router-view />
      </section>
      <MobileFooter :isClickMenu="isClickMenu" />
    </div>
  </div>
</template>

<style>
body {
  overflow-x: hidden;
}
</style>
<style scoped>
.mobileContents {
  padding-top: 64px;
}
.contents {
  padding-top: 90px;
}
.adminLayout {
  display: flex;
  justify-content: center;
}
.headerContent {
  width: calc(100% - 300px);
}
</style>
