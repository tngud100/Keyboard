<template>
  <div class="ck-content">
    <Editor @update="modelValue" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import Editor from "#/Editor/Editor.vue";

const content = ref("");

const modelValue = (value) => {
  content.value = value;
  console.log(content.value);
};
</script>


<style scoped>
@import "@/assets/css/editor/content-style.css";
.ck-content {
  min-height: 300px;
  border-radius: 5px;
  padding: 12px;
}
</style>
