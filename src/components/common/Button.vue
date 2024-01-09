<template>
  <button
    :type="computedBtnType"
    v-if="type === 'primary'"
    class="commonBtn primaryBtn"
    @click="handleBtnClick"
  >
    {{ text }}
  </button>
  <button
    :type="computedBtnType"
    v-else
    class="commonBtn secondaryBtn"
    @click="handleBtnClick"
  >
    {{ text }}
  </button>
</template>

<script setup>
import { computed } from "vue";

const { type, btnType, text, eventName } = defineProps([
  "type",
  "btnType",
  "text",
  "eventName",
]);
const emit = defineEmits();

const computedBtnType = computed(() => (btnType ? "submit" : "button"));

const handleBtnClick = (event) => {
  emit(eventName, { event });
};
</script>

<style scoped>
@import "./Button.css";
</style>
