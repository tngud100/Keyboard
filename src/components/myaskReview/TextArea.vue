<template>
  <div :class="$style.contentBox">
    <div :class="$style.label">{{ label }}</div>
    <div>
      <div :class="$style.content">
        <textarea
          type="text"
          v-model="form.content"
          @input="emitContentChange"
          :class="$style.contentInput"
        />
      </div>
      <div :class="$style.fileBox">
        <div
          v-for="(file, index) in form.files"
          :key="index"
          :class="$style.addFileBtn"
          @click="triggerFileInput(index)"
        >
          <IconPlus v-if="!file.preview" />
          <img
            v-else
            :src="file.preview"
            :alt="'Preview ' + index"
            :class="$style.previewImage"
          />
          <input
            type="file"
            :ref="'fileInput' + index"
            @change="handleFileChange($event, index)"
            accept="image/*"
            style="display: none"
          />
        </div>
        <span :class="$style.addRuleText">
          -최대 15MB 이하의 JPG, PNG, GIF 파일 3장까지 첨부 가능합니다.
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconPlus from "#/icons/IconPlus.vue";
import { computed, ref } from "vue";

const props = defineProps({
  label: String,
});

const emit = defineEmits(["contentChange", "fileChange"]);

const label = computed(() => props.label);

const form = ref({
  content: "",
  files: [
    { file: null, preview: "" },
    { file: null, preview: "" },
    { file: null, preview: "" },
  ],
});

const emitContentChange = () => {
  emit("contentChange", form.value.content);
};

const triggerFileInput = (index) => {
  const fileInputs = document.querySelectorAll('input[type="file"]');
  if (fileInputs[index]) {
    fileInputs[index].click();
  }
};

const handleFileChange = (event, index) => {
  const file = event.target.files[0];
  if (file) {
    const preview = URL.createObjectURL(file);
    form.value.files[index] = { file, preview };
    emit("fileChange", form.value.files);
  }
};
</script>

<style src="@/assets/css/myaskReview/TextArea.css" module></style>
