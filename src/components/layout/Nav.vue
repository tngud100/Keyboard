<template>
  <nav class="nav">
    <ul class="navList">
      <li>
        <router-link
          class="navItem"
          to="/keyboard"
          v-show="!isShowingNavItemImg"
          >Keyboard</router-link
        >
        <img
          v-show="isShowingNavItemImg"
          :src="importedKeyboard"
          alt="키보드"
        />
      </li>
      <li><router-link class="navItem" to="/switch">Switch</router-link></li>
      <li><router-link class="navItem" to="/pcb">Pcb</router-link></li>
      <li><router-link class="navItem" to="/keycap">Keycap</router-link></li>
      <li><router-link class="navItem" to="/tool">Tool</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import keyboard from "@/assets/images/keyboard.svg";

const route = useRoute();
const importedKeyboard = ref(keyboard);

const isShowingNavItemImg = computed(() => route.path === "/keyboard");
</script>

<style scoped>
@import "./Nav.css";
</style>
