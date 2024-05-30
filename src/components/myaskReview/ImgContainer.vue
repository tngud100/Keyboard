<template>
  <div :class="$style.fileBox">
    <div v-for="(file, index) in files" :key="index" :class="$style.addFileBtn">
      <IconPlus v-if="!file.preview" />
      <img
        v-if="file.preview"
        :src="file.preview"
        :alt="file.fileName"
        :class="$style.previewImage"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  imgFiles: Array,
  inquireId: Number,
});

const files = ref([]);

watch(
  () => props.imgFiles,
  (imgFiles) => {
    console.log(imgFiles);

    if (imgFiles) {
      imgFiles.forEach((imgFile) => {
        files.value.push({
          preview: imgFile.path,
          fileName: imgFile.fileName,
          inquireId: imgFile.inquireId,
        });
      });
    }
  },
  { immediate: true }
);
</script>

<style src="@/assets/css/myaskReview/ImgContainer.css" module></style>