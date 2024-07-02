<template>
  <section :class="$style.editModalSection">
    <div :class="$style.background" @click="closeModal" />
    <div :class="$style.wrapper">
      <div :class="$style.type">
        <span>
          {{ type }}
        </span>
        <Close :class="$style.closeBtn" @click="closeModal" />
      </div>
      <Title
        :boardIdx="boardIdx"
        :selectedTitle="editContent.title"
        :selectedCategory="editContent.category"
        @update:title="updateTitle"
        @update:category="updateCategory"
      />
      <File
        v-if="props.boardIdx === 3"
        @fileChange="fileChange"
        :selectedFiles="editContent.files"
        :selectedFileNames="editContent.fileNames"
      />
      <AskEditor
        v-if="props.boardIdx === 2"
        @update:category="updateAsk"
        :spanText="'Q. '"
        :placeholder="'질문을 입력해주세요'"
        :selectedAsk="editContent.ask"
      />
      <Editor
        @update:eidtorContent="updateContent"
        @update:images="updateImagesUrls"
        @update:deletedImages="updateDeletedImagesUrls"
        :selectedContent="editContent.content"
        :boardIdx="boardIdx"
      />
      <div :class="$style.btnContainer">
        <button :class="$style.submitBtn" @click="handleSubmit">
          {{ selectedId ? "수정" : "등록" }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import Title from "#/Editor/Title.vue";
import Editor from "#/Editor/Contents.vue";
import AskEditor from "#/Editor/AskContent.vue";
import File from "#/Editor/FileInput.vue";
import Close from "#/icons/IconClose.vue";
import { boardPostAPI } from "@/api/boardPostDataAPI.js";
import { boardGetDataAPI } from "@/api/boardGetDataAPI.js";
import { boardPutDataAPI } from "@/api/boardPutDataAPI.js";
import { computed, onMounted, ref } from "vue";
import axios from "@/utils/axiosInstance.js";

const emit = defineEmits(["closeModal", "enrollBoard"]);

const { enrollNotice, enrollFAQ, enrollDownload } = boardPostAPI();
const { getNoticeByNoticeId, getFAQByFAQId, getDownloadByDownloadId } =
  boardGetDataAPI();
const { updateNoticeBoard, updateFAQBoard, updateDownloadBoard } =
  boardPutDataAPI();

const props = defineProps({
  boardIdx: Number,
  selectedId: Number,
});

const type = computed(() => {
  switch (props.boardIdx) {
    case 1:
      return "공지사항 작성";
    case 2:
      return "자주묻는 질문 작성";
    case 3:
      return "자료실 작성";
  }
});

const editContent = ref({
  title: "",
  category: "",
  content: "",
  ask: "",
  files: [],
  fileNames: [],
  editorImgUrls: [],
  deletedEditorImgUrls: [],
});

const updateTitle = (value) => {
  editContent.value.title = value;
};
const updateCategory = (value) => {
  editContent.value.category = value;
};
const updateContent = (value) => {
  editContent.value.content = value;
};
const updateAsk = (value) => {
  editContent.value.ask = value;
};
const fileChange = (value) => {
  editContent.value.files = value.files;
  editContent.value.fileNames = value.names;
};
const updateImagesUrls = (value) => {
  editContent.value.editorImgUrls = value;
};
const updateDeletedImagesUrls = (value) => {
  editContent.value.deletedEditorImgUrls = value;
  console.log("modal", value);
};

const handleSubmit = async () => {
  let data = {};

  await new Promise((resolve) => setTimeout(resolve, 1500));

  editContent.value.content = editContent.value.content.replace(
    /(<img[^>]*src=")([^"]*editor\/[^"]*)("[^>]*>)/g,
    (match, p1, p2, p3) => p1 + p2.replace("editor/", "") + p3
  );

  if (props.boardIdx === 1) {
    data = {
      title: editContent.value.title,
      content: editContent.value.content,
      imageUrls: editContent.value.editorImgUrls,
      deleteImageUrls: editContent.value.deletedEditorImgUrls,
    };
  } else if (props.boardIdx === 2) {
    data = {
      title: editContent.value.title,
      category: editContent.value.category,
      ask: editContent.value.ask,
      comment: editContent.value.content,
      imageUrls: editContent.value.editorImgUrls,
      deleteImageUrls: editContent.value.deletedEditorImgUrls,
    };
  } else if (props.boardIdx === 3) {
    const formData = new FormData();
    formData.append("title", editContent.value.title);
    formData.append("content", editContent.value.content);
    formData.append("category", editContent.value.category);
    for (var i = 0; i < editContent.value.editorImgUrls.length; i++) {
      formData.append("imageUrls", editContent.value.editorImgUrls[i]);
    }
    for (var i = 0; i < editContent.value.deletedEditorImgUrls.length; i++) {
      formData.append(
        "deleteImageUrls",
        editContent.value.deletedEditorImgUrls[i]
      );
    }

    data = formData;
  }
  console.log(data);
  if (props.selectedId) {
    await modifyContent(data);
  } else {
    await enrollContent(data);
  }

  resetEditContent();
  closeModal();
};

const enrollContent = async (data) => {
  switch (props.boardIdx) {
    case 1:
      await enrollNotice(data);
      break;
    case 2:
      await enrollFAQ(data);
      break;
    case 3:
      editContent.value.files.forEach((file, index) => {
        data.append("files", file);
      });
      await enrollDownload(data);
      break;
  }
};

const modifyContent = async (data) => {
  switch (props.boardIdx) {
    case 1:
      data.notices_id = props.selectedId;
      await updateNoticeBoard(props.selectedId, data);
      break;
    case 2:
      data.faqs_id = props.selectedId;
      await updateFAQBoard(props.selectedId, data);
      break;
    case 3:
      editContent.value.files.forEach((file, index) => {
        data.append("files", file);
      });
      editContent.value.fileNames.forEach((file, index) => {
        data.append("existedFileNames", file);
      });
      data.append("downloads_id", props.selectedId);
      await updateDownloadBoard(props.selectedId, data);
      break;
  }
};

const resetEditContent = () => {
  editContent.value = {
    title: "",
    category: "",
    content: "",
    ask: "",
    files: [],
  };
};

const closeModal = () => {
  if (editContent.value.editorImgUrls === undefined) {
    emit("closeModal");
    return;
  }

  editContent.value.editorImgUrls.forEach(async (url) => {
    const imageName = url.split("/").pop();
    await axios
      .delete(`/editor/imgDelete/${imageName}`)
      .then((response) => {
        console.log("Image deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting image:", error);
      });
  });
  emit("closeModal");
};

const fetchData = async () => {
  if (props.selectedId) {
    let data;
    switch (props.boardIdx) {
      case 1:
        data = await getNoticeByNoticeId(props.selectedId);
        break;
      case 2:
        data = await getFAQByFAQId(props.selectedId);
        break;
      case 3:
        data = await getDownloadByDownloadId(props.selectedId);
        break;
    }
    if (props.boardIdx === 1) {
      editContent.value.title = data.title;
      editContent.value.content = data.content;
    }
    if (props.boardIdx === 2) {
      editContent.value.category = data.category;
      editContent.value.title = data.title;
      editContent.value.ask = data.ask;
      editContent.value.content = data.comment;
    }
    if (props.boardIdx === 3) {
      editContent.value.title = data.boardList.title;
      editContent.value.content = data.boardList.content;
      editContent.value.category = data.boardList.category;
      editContent.value.fileNames = data.fileNames || [];
    }
  }
};

onMounted(fetchData);
</script>

<style src="@/assets/css/modal/EditModal.css" module></style>
