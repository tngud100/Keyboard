<template>
  <input
    :type="type"
    :style="{ width: size }"
    :class="[$style.commonInput, isReadOnly && $style.readonly]"
    :placeholder="placeholder"
    :value="value"
    @input="handleInput"
    :readonly="isReadOnly"
  />
  <div v-if="isValidate">유효성검증 실패</div>
</template>

<script setup>
import { ref } from "vue";

const {
  name,
  validate,
  isReadOnly = false,
} = defineProps([
  "value",
  "size",
  "type",
  "placeholder",
  "modelValue",
  "name",
  "validate",
  "isReadOnly",
]);
const emit = defineEmits(["input"]);
const isValidate = ref(false);

const handleInput = (event) => {
  emit("input", event);
};
</script>

<style src="./Input.css" module></style>
