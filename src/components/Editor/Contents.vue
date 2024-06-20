<template>
  <div class="customEditBox">
    <!-- <QuillEditor
      theme="snow"
      :modules="modules"
      class="customEditor"
      v-model="content"
    /> -->
    <Editor />
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import Editor from "#/Editor/Editor.vue";
import { QuillEditor } from "@vueup/vue-quill";

const content = ref("");

const imageHandler = () => {
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();

  input.onchange = async () => {
    const file = input.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      // const res = await axios.post("/api/uploads/image", formData);
      const imageUrl = res.data.imageUrl;
      const range = this.quill.getSelection();
      this.quill.insertEmbed(range.index, "image", imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
};

const modules = {
  toolbar: {
    container: [
      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ header: 1 }, { header: 2 }],
      [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      ["blockquote", "code-block"],
      ["image"],
    ],
    handlers: {
      image: imageHandler,
    },
  },
  imageResize: {
    modules: ["Resize", "DisplaySize", "Toolbar"],
  },
};

// const submitPost = async () => {
//   try {
//     await axios.post("/api/notices", {
//       content: content.value,
//     });
//     alert("Post submitted!");
//   } catch (error) {
//     console.error("Error submitting post:", error);
//   }
// };
</script>

<style>
.customEditBox {
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
