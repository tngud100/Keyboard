<template>
  <div :class="$style.wrapper">
    <div :class="$style.checkModal">
      <div :class="$style.textBox">
        <span :class="$style.comment">{{ comments }}</span>
      </div>
      <div :class="$style.btnBox">
        <button :class="$style.btn" @click="cancel">취소</button>
        <button :class="$style.btn" @click="verify">확인</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
import { useModalStore } from "@/store/useModalStore.js";

const modalStore = useModalStore();

const emit = defineEmits(["isVerifyState"]);

const cancel = () => {
  modalStore.setOpenVerifyModal(false);
  emit("isVerifyState", false);
};
const verify = () => {
  modalStore.setOpenVerifyModal(false);
  emit("isVerifyState", true);
  // Ajax 통신 저장
};

//props로 바꾸기
const comments = "기본값을 설정하시겠습니까?";
</script>

<style src="@/assets/css/modal/CheckModal.css" module />