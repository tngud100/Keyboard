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
        @update:title="updateTitle"
        @update:category="updateCategory"
      />
      <File v-if="props.boardIdx === 3" @fileChange="fileChange" />
      <Editor
        @update:eidtorContent="updateContent"
        :selectedContent="editContent.content"
      />
      <div :class="$style.btnContainer">
        <button :class="$style.submitBtn" @click="submitBtn">등록</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import Title from "#/Editor/Title.vue";
import Editor from "#/Editor/Contents.vue";
import File from "#/Editor/FileInput.vue";
import Close from "#/icons/IconClose.vue";
import { boardPostAPI } from "@/api/boardPostDataAPI.js";
import { boardGetDataAPI } from "@/api/boardGetDataAPI.js";
import { computed, onMounted, ref } from "vue";

const emit = defineEmits(["closeModal", "update:category"]);

const { enrollNotice, enrollFQA, enrollDownload } = boardPostAPI();
const { getNoticeByNoticeId, getFAQByFAQId, getDownloadByDownloadId } =
  boardGetDataAPI();

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
const fileChange = (value) => {
  editContent.value.files = value.files;
};

const submitBtn = async () => {
  let data = {};
  console.log(editContent.value);
  if (props.boardIdx === 1) {
    data = {
      title: editContent.value.title,
      content: editContent.value.content,
    };
    await enrollNotice(data);
  } else if (props.boardIdx === 2) {
    data = {
      title: editContent.value.title,
      content: editContent.value.content,
      category: editContent.value.category,
    };
    await enrollFQA(data);
  } else if (props.boardIdx === 3) {
    const formData = new FormData();
    formData.append("title", editContent.value.title);
    formData.append("content", editContent.value.content);
    formData.append("category", editContent.value.category);
    editContent.value.files.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });
    await enrollDownload(formData);
  }

  editContent.value = {
    title: "",
    category: "",
    content: "",
    files: [],
  };

  closeModal();
  fetchData();
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
      default:
        return;
    }
    editContent.value.title = data.title;
    editContent.value.content = data.content;
    if (props.boardIdx !== 1) {
      editContent.value.category = data.category || "";
    }
    if (props.boardIdx === 3) {
      editContent.value.files = data.files || [];
    }
  }
};

onMounted(fetchData);
</script>

<style src="@/assets/css/modal/EditModal.css" module></style>
