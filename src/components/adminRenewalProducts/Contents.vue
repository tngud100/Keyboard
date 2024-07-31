<template>
  <div :class="$style.container">
    <div :class="$style.wrapper">
      <AdminNav />
      <keyboard />
    </div>
  </div>
</template>

<script setup>
import AdminNav from "@/layouts/AdminNav.vue";
import Keyboard from "#/adminRenewalProducts/Keyboard.vue";
</script>

<style src="@/assets/css/adminRenewalProducts/Contents.css" module></style>