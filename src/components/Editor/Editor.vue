<template>
  <Ckeditor
    :editor="editor"
    v-model="text"
    :config="editorConfig"
    @ready="onEditorReady"
  ></Ckeditor>
</template>

<script setup>
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Bold, Italic } from "@ckeditor/ckeditor5-basic-styles";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { Font } from "@ckeditor/ckeditor5-font";
import { Link } from "@ckeditor/ckeditor5-link";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { Indent } from "@ckeditor/ckeditor5-indent";
import { List } from "@ckeditor/ckeditor5-list";
import { Heading } from "@ckeditor/ckeditor5-heading";
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
import axios from "@/utils/axiosInstance.js";

let text = ref();

const emit = defineEmits(["update:modelValue", "update:images"]);

const props = defineProps({
  selectedContent: String,
  boardIdx: Number,
});

const editor = ClassicEditor;
const editorConfig = {
  extraPlugins: [CustomUploadAdapterPlugin],
  plugins: [
    Essentials,
    Heading,
    Bold,
    Italic,
    Font,
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
  ],
  toolbar: {
    items: [
      "heading",
      "bold",
      "italic",
      "fontColor",
      "fontBackgroundColor",
      "link",
      "imageUpload",
      "indent",
      "outdent",
      "numberedList",
      "alignment",
      "blockQuote",
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
  language: "ko",
};

let imageUrls = ref([]); // 이미지 URL들을 저장할 배열
// Custom Upload Adapter Plugin function
function CustomUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return new UploadAdapter(loader, imageUrls.value);
  };
}

const deleteImageFromServer = async (imageURL) => {
  const imageName = imageURL.split("/").pop();
  return await axios
    .delete(`/editor/imgDelete/${imageName}`)
    .then((response) => {
      console.log("Image deleted successfully");
    })
    .catch((error) => {
      console.error("Error deleting image:", error);
    });
};

const onEditorReady = (editorInstance) => {
  editorInstance.model.document.on("change:data", () => {
    const editorContent = editorInstance.getData();
    imageUrls.value.forEach((image, index) => {
      if (!editorContent.includes(image)) {
        deleteImageFromServer(image);
        imageUrls.value.splice(index, 1);
      }
    });
  });
};

watch(
  () => props.selectedContent,
  () => {
    text.value = props.selectedContent;
  }
);

watch(text, (newValue, oldValue) => {
  emit("update:modelValue", newValue);
});

watch(imageUrls.value, (newValue, oldValue) => {
  emit("update:images", newValue);
});
</script>

<style>
@import "@ckeditor/ckeditor5-editor-classic/theme/classiceditor.css";

.ck.ck-editor {
  font-size: 14px;
}

.ck-editor__editable {
  min-height: 300px;
  max-height: 350px;
}
.ck-content {
  /* padding-left: 24px !important; */
}
ol {
  padding-left: 15px !important;
}
strong {
  font-weight: bold !important;
}
i {
  font-style: italic !important;
}
h2 {
  font-size: 2em !important;
}
h3 {
  font-size: 1.5em !important;
}
h4 {
  font-size: 1.17em !important;
}
</style>