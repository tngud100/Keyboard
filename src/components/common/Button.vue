<template>
  <button
    type="button"
    v-if="type === 'primary'"
    class="commonBtn primaryBtn"
    @click="handleBtnClick"
  >
    {{ text }}
  </button>
  <button
    type="button"
    v-else
    class="commonBtn secondaryBtn"
    @click="handleBtnClick"
  >
    {{ text }}
  </button>
</template>

<script setup>
const { type, text, eventName } = defineProps(["type", "text", "eventName"]);
const emit = defineEmits();

const handleBtnClick = (event) => {
  emit(eventName, { event });
};
</script>

<style scoped>
@import "./Button.css";
</style>
