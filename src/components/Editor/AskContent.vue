<template>
  <div :class="$style.container">
    <span :class="$style.text">{{ spanText }}</span>
    <input
      :class="$style.input"
      type="text"
      v-model="text"
      :placeholder="placeholder"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps({
  spanText: String,
  placeholder: String,
});

const text = ref("");
</script>

<style src="@/assets/css/Editor/AskContent.css" module></style>
