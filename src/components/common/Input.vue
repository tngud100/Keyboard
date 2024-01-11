<template>
  <input
    :type="type"
    :style="{ width: size }"
    class="commonInput"
    :placeholder="placeholder"
    :value="value"
    @input="handleInput"
  />
  <div v-if="isValidate">유효성검증 실패</div>
</template>

<script setup>
import { ref } from "vue";

const { name, validate } = defineProps([
  "value",
  "size",
  "type",
  "placeholder",
  "modelValue",
  "name",
  "validate",
]);
const emit = defineEmits(["input"]);
const isValidate = ref(false);

const handleInput = (event) => {
  emit("input", event);
};
</script>

<style scoped>
@import "./Input.css";
</style>
