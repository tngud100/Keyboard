<template>
  <input
    :type="type"
    :style="{ width: size }"
    :class="[$style.input, isReadOnly && $style.readonly]"
    :placeholder="placeholder"
    :value="value"
    @input="handleInput"
    :readonly="isReadOnly"
    :autocomplete="autocomplete"
  />
  <div v-if="isValidate">유효성검증 실패</div>
</template>

<script setup>
import { ref } from "vue";

const { isReadOnly, autocomplete } = defineProps({
  placeholder: { type: String, required: true },
  type: { type: String, required: true },
  isReadOnly: { type: Boolean, default: false },
  autocomplete: { type: String, default: "on" },
  size: { type: String, required: true },
  value: { type: Object, required: true },
});

const emit = defineEmits(["input"]);
const isValidate = ref(false);

const handleInput = (event) => {
  emit("input", event);
};
</script>

<style src="@/assets/css/common/Input.css" module></style>
