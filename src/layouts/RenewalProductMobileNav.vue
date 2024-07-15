<template>
  <nav :class="$style.nav">
    <ul :class="$style.navList">
      <li>
        <router-link
          :class="$style.navItem"
          to="/product/keyboard"
          v-show="!isShowingKeyboardImg"
          >Keyboard</router-link
        >
        <IconKeyboard v-show="isShowingKeyboardImg" />
      </li>
      <li>
        <router-link
          :class="$style.navItem"
          to="/product/switch"
          v-show="!isShowingSwitchImg"
          >Switch</router-link
        >
        <IconSwitch v-show="isShowingSwitchImg" />
      </li>
      <li>
        <router-link
          :class="$style.navItem"
          to="/product/pcb"
          v-show="!isShowingPcbImg"
          >PCBs</router-link
        >
        <IconPcb v-show="isShowingPcbImg" />
      </li>
      <li>
        <router-link
          :class="$style.navItem"
          to="/product/keycap"
          v-show="!isShowinKeycapImg"
          >Keycaps</router-link
        >
        <IconKeycap v-show="isShowinKeycapImg" />
      </li>
      <li>
        <router-link
          :class="$style.navItem"
          to="/product/tool"
          v-show="!isShowinToolImg"
          >Tool</router-link
        >
        <IconTool v-show="isShowinToolImg" />
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import IconKeyboard from "#/icons/IconKeyboard.vue";
import IconSwitch from "#/icons/IconSwitch.vue";
import IconPcb from "#/icons/IconPcb.vue";
import IconKeycap from "#/icons/IconKeycap.vue";
import IconTool from "#/icons/IconTool.vue";

const route = useRoute();

const isShowingKeyboardImg = computed(() => route.path === "/product/keyboard");
const isShowingSwitchImg = computed(() => route.path === "/product/switch");
const isShowingPcbImg = computed(() => route.path === "/product/pcb");
const isShowinKeycapImg = computed(() => route.path === "/product/keycap");
const isShowinToolImg = computed(() => route.path === "/product/tool");
</script>

<style src="@/assets/css/layouts/RenewalProductMobileNav.css" module></style>
