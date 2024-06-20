<template>
   <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
</template>

<script setup>
import Editor from "@/assets/ckeditor/build/ckeditor.d.ts";
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import MyUploadAdapter from "./MyUploadAdapter";
import { onMounted, ref } from "vue";

const editorData = ref('<p>Hello, World!</p>'); // 초기 에디터 데이터
const editor = Editor; // Editor 클래스를 컴포넌트에 전달
const editorConfig = Editor.defaultConfig; // Editor 클래스의 기본 설정 사용

onMounted(() => {
  const editorElement = document.querySelector('.editor'); // 에디터를 초기화할 HTML 요소 선택
  Editor.create(editorElement, editorConfig)
    .then(editorInstance => {
      console.log('Editor is initialized.');
    })
    .catch(error => {
      console.error('Editor initialization failed:', error);
    });
});
</script>

<style>
.ck-editor__editable {
  min-height: 300px;
}
.ck-editor__editable p {
  margin: 0;
}
.ck-content {
  font-size: 13px;
}
</style>
