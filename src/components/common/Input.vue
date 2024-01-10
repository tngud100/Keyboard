<template>
  <input :type="type" :style="{ width: size }" class="commonInput" />
</template>

<script setup>
defineProps(["size", "type"]);
</script>

<style scoped>
@import "./Input.css";
</style>
