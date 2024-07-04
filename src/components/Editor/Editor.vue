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

import { reactive, ref, watch } from "vue";
import UploadAdapter from "#/Editor/UploadAdapter";
import axios from "@/utils/axiosInstance.js";

let text = ref();

const emit = defineEmits([
  "update:modelValue",
  "update:images",
  "update:deletedImages",
]);

const props = defineProps({
  selectedContent: String,
  boardIdx: Number,
  isContentUpdating: Boolean,
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

let imageUrls = reactive([]); // 이미지 URL들을 저장할 배열
let deletedImageUrls = reactive([]); // 이미지 URL들을 저장할 배열
// Custom Upload Adapter Plugin function
function CustomUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return new UploadAdapter(loader, imageUrls);
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
    if (props.isContentUpdating) return;

    const editorContent = editorInstance.getData();

    console.log("ReadyContent");
    console.log("imageUrls", imageUrls);
    console.log("imageUrlsLength", imageUrls.length);

    const encodedImageUrls = imageUrls.map((url) => encodeURI(url));

    for (let i = 0; i < imageUrls.length; i++) {
      console.log("imageUrls" + i, imageUrls[i]);
      console.log(editorContent.includes(encodedImageUrls[i]));
      if (!editorContent.includes(encodedImageUrls[i])) {
        console.log("imageUrls[i]", imageUrls[i]);
        console.log(editorContent);
        deleteImageFromServer(imageUrls[i]);
        let deletedImageName = imageUrls[i].replace(
          "http://localhost:8080",
          ""
        );
        deletedImageUrls.push(deletedImageName); // 삭제된 이미지를 추가
        imageUrls.splice(i, 1);
      }
      console.log("end");
    }
    console.log("imageUrlsLength", imageUrls.length);
    console.log("deletedImageUrls", deletedImageUrls);
  });
};

// 모든 이미지를 content에서 추출하여 imageUrls에 넣는다
const extractInitialImageUrls = (content) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");
  const imgs = doc.querySelectorAll("img");
  imageUrls.length = 0; // 기존 이미지 URL 목록을 초기화합니다.
  imgs.forEach((img) => {
    imageUrls.push(img.src);
  });
};

watch(
  () => props.selectedContent,
  () => {
    text.value = props.selectedContent;
    extractInitialImageUrls(props.selectedContent);
  },
  { immediate: true }
);

watch(text, (newValue, oldValue) => {
  emit("update:modelValue", newValue);
});

watch(
  imageUrls,
  (newValue, oldValue) => {
    emit("update:images", newValue);
  },
  { deep: true }
);

watch(
  deletedImageUrls,
  (newValue, oldValue) => {
    emit("update:deletedImages", newValue);
  },
  { deep: true }
);
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