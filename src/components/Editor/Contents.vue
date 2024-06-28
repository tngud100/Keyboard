<template>
  <div class="ck-content">
    <Editor
      @update:modelValue="modelValue"
      @update:images="imageUrls"
      :selectedContent="selectedContent"
      :boardIdx="boardIdx"
    />
  </div>
</template>
<script setup>
import Editor from "#/Editor/Editor.vue";
import { ref, watch } from "vue";

const emit = defineEmits(["update:eidtorContent", "update:images"]);

let selectedContent = ref("");

const props = defineProps({
  selectedContent: String,
  boardIdx: Number,
});
const modelValue = (value) => {
  emit("update:eidtorContent", value);
};
const imageUrls = (value) => {
  emit("update:images", value);
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
