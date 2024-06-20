<template>
  <ckeditor
    :editor="editor"
    v-model="editorData"
    :config="editorConfig"
  ></ckeditor>
</template>

<script setup>
import { ref } from "vue";
import ClassicEditor from "@/assets/editor/ckeditor5-41.4.2-ek6h7a9qjrim/ckeditor";

const editorData = ref("");
const editor = ClassicEditor;
const editorConfig = {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "|",
    "imageUpload",
    "|",
    "undo",
    "redo",
  ],
  simpleUpload: {
    uploadUrl: "http://localhost:8080/api/upload",
    headers: {
      "X-CSRF-TOKEN": "CSRF-Token-Value", // 필요한 경우 CSRF 토큰 설정
    },
  },
};
</script>

<style>
.ck-editor__editable {
  min-height: 300px;
}
.ck-editor__editable {
  height: 400px;
}
.ck-editor__editable p {
  margin: 0;
}
.ck-content {
  font-size: 13px;
}
</style>
