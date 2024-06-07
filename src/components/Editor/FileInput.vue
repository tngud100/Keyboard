<template>
  <div :class="$style.fileUpload">
    <input
      type="file"
      multiple
      @change="handleFileUpload"
      ref="fileInput"
      style="display: none"
    />
    <button :class="$style.selectFileBtn" @click="triggerFileInput">
      <IconDownloadImg />
      첨부파일
    </button>
    <div :class="$style.fileList">
      <ul :class="$style.fileBox">
        <li
          v-for="(file, index) in fileNames"
          :key="index"
          :class="$style.file"
        >
          <IconClose
            @click="removeFile(index)"
            :class="$style.closeBtn"
          ></IconClose>
          {{ file }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import IconDownloadImg from "#/icons/IconDownloadImg.vue";
import IconClose from "#/icons/IconClose.vue";

const fileNames = ref([]);
const selectedFiles = ref([]);
const fileInput = ref(null);

const handleFileUpload = (event) => {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    fileNames.value.push(files[i].name);
    selectedFiles.value.push(files[i]);
  }
};

const triggerFileInput = () => {
  fileInput.value.click();
};

const removeFile = (index) => {
  fileNames.value.splice(index, 1);
  selectedFiles.value.splice(index, 1);
};
</script>

<style src="@/assets/css/Editor/FileInput.css" module></style>
