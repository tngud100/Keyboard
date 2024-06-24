<template>
  <div class="ck-content">
    <Editor
      @update:modelValue="modelValue"
      :selectedContent="selectedContent"
    />
  </div>
</template>
<script setup>
import Editor from "#/Editor/Editor.vue";
import { ref, watch } from "vue";

const emit = defineEmits(["update:eidtorContent"]);

let selectedContent = ref("");

const props = defineProps({
  selectedContent: String,
});
const modelValue = (value) => {
  emit("update:eidtorContent", value);
};

watch(
  () => props.selectedContent,
  (newContent) => {
    selectedContent.value = newContent;
  }
);
</script>


<style scoped>
.ck-content {
  min-height: 300px;
  border-radius: 5px;
  padding: 12px;
}
</style>
