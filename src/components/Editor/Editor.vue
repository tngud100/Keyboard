<template>
  <Ckeditor :editor="editor" v-model="text" :config="editorConfig"></Ckeditor>
</template>

<script setup>
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Bold, Italic } from "@ckeditor/ckeditor5-basic-styles";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { Link } from "@ckeditor/ckeditor5-link";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { Indent } from "@ckeditor/ckeditor5-indent";
import { List } from "@ckeditor/ckeditor5-list";
import { MediaEmbed } from "@ckeditor/ckeditor5-media-embed";
import {
  Table,
  TableColumnResize,
  TableToolbar,
} from "@ckeditor/ckeditor5-table";
import { TextTransformation } from "@ckeditor/ckeditor5-typing";
import { Alignment } from "@ckeditor/ckeditor5-alignment";
import {
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  ImageResize,
} from "@ckeditor/ckeditor5-image";

import { ref, watch } from "vue";
import UploadAdapter from "#/Editor/UploadAdapter";

let text = ref();

const emits = defineEmits(["update:modelValue"]);

/**
 * v-model 값 연결
 */
watch(text, (newValue, oldValue) => {
  emits("update:modelValue", newValue);
});

// Custom Upload Adapter Plugin function
function CustomUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return new UploadAdapter(loader, "");
  };
}

const editor = ClassicEditor;
const editorConfig = {
  extraPlugins: [CustomUploadAdapterPlugin],
  plugins: [
    Essentials,
    Bold,
    Italic,
    Link,
    Paragraph,
    BlockQuote,
    Indent,
    List,
    Table,
    TableToolbar,
    TableColumnResize,
    TextTransformation,
    Alignment,
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    ImageResize,
    MediaEmbed,
  ],
  toolbar: {
    items: [
      "bold",
      "italic",
      "link",
      "imageUpload",
      "indent",
      "outdent",
      "numberedList",
      "bulletedList",
      "alignment",
      "blockQuote",
      "mediaEmbed",
      "undo",
      "redo",
      "insertTable",
    ],
  },
  image: {
    toolbar: [
      "toggleImageCaption",
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
    ],
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableProperties",
      "tableCellProperties",
    ],
  },
};
</script>

<style>
@import "@ckeditor/ckeditor5-editor-classic/theme/classiceditor.css";

.ck.ck-editor {
  font-size: 14px;
}

.ck-editor__editable {
  min-height: 300px;
}
</style>