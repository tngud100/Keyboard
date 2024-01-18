<template>
  <nav class="nav">
    <ul class="navList">
      <li>
        <router-link class="navItem" to="/keyboard">Keyboard</router-link>
      </li>
      <li><router-link class="navItem" to="/switch">Switch</router-link></li>
      <li><router-link class="navItem" to="/pcb">Pcb</router-link></li>
      <li><router-link class="navItem" to="/keycap">Keycap</router-link></li>
      <li><router-link class="navItem" to="/tool">Tool</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style src="./Nav.css" scoped></style>
