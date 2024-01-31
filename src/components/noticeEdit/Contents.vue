<template>
  <section :class="$style.wrapper">
    <QuillEditor theme="snow" :toolbar="toolbarOptions" />
  </section>
</template>

<script setup>
import { QuillEditor } from "@vueup/vue-quill";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"],
  [{ size: ["small", false, "large"] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ align: ["", "center", "right"] }],
];
</script>

<style src="@/assets/css/noticeEdit/Contents.css" module></style>
