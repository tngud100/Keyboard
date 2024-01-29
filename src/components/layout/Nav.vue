<template>
  <nav :class="$style.nav">
    <ul :class="$style.navList">
      <li>
        <router-link :class="$style.navItem" to="/keyboard"
          >Keyboard</router-link
        >
      </li>
      <li>
        <router-link :class="$style.navItem" to="/switch">Switch</router-link>
      </li>
      <li><router-link :class="$style.navItem" to="/pcb">Pcb</router-link></li>
      <li>
        <router-link :class="$style.navItem" to="/keycap">Keycap</router-link>
      </li>
      <li>
        <router-link :class="$style.navItem" to="/tool">Tool</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

<style src="./Nav.css" module></style>
