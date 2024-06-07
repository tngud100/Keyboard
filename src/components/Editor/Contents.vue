<template>
  <div class="customToolBox">
    <QuillEditor theme="snow" :toolbar="toolbarOptions" class="customEditor" />
  </div>
</template>
<script setup>
import { QuillEditor } from "@vueup/vue-quill";
//https://quilljs.com/docs/modules/toolbar
const toolbarOptions = [
  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ["bold", "italic", "underline", "strike"], // toggled buttons
  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ align: [] }],
  [{ color: [] }, { background: [] }], // dropdown with defaults from theme

  ["blockquote", "code-block"],
  ["image"],
];
</script>

<style>
.customToolBox {
  margin: 12px;
}
.ql-toolbar {
  border-radius: 5px 5px 0px 0px;
}
.customEditor {
  border-radius: 0px 0px 5px 5px;
  min-height: 300px;
}
.customEditor .ql-editor {
  height: 300px;
}
</style>
