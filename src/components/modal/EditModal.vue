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
        :selectedContent="editContent.content"
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
  if (!props.selectedId) {
    editContent.value.files = value.files;
  }
  console.log(editContent.value.files);
};

const handleSubmit = async () => {
  let data = {};
  if (props.boardIdx === 1) {
    data = {
      title: editContent.value.title,
      content: editContent.value.content,
    };
  } else if (props.boardIdx === 2) {
    data = {
      title: editContent.value.title,
      category: editContent.value.category,
      ask: editContent.value.ask,
      comment: editContent.value.content,
    };
  } else if (props.boardIdx === 3) {
    const formData = new FormData();
    formData.append("title", editContent.value.title);
    formData.append("content", editContent.value.content);
    formData.append("category", editContent.value.category);
    editContent.value.files.forEach((file, index) => {
      formData.append("files", file);
    });
    data = formData;
  }

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
      editContent.value.files = data.fileNames || [];
    }
  }
};

onMounted(fetchData);
</script>

<style src="@/assets/css/modal/EditModal.css" module></style>
