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
      <div :class="$style.titleText">
        <input
          type="text"
          v-model="title"
          :class="$style.titleInput"
          placeholder="제목을 입력해주세요"
        />
      </div>
      <File />
      <Editor />
      <div :class="$style.btnContainer">
        <button :class="$style.submitBtn">등록</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import Editor from "#/Editor/Contents.vue";
import File from "#/Editor/FileInput.vue";
import Close from "#/icons/IconClose.vue";
import { ref } from "vue";

const type = ref("공지사항");

const emit = defineEmits(["closeModal"]);

const closeModal = () => {
  emit("closeModal");
};
</script>

<style src="@/assets/css/modal/EditModal.css" module></style>
