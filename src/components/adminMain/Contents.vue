<template>
  <div :class="$style.container">
    <div :class="$style.wrapper">
      <AdminNav @showEditModal="showEditModal" />
      <Pictorial v-if="adminMainIndex == 0" />
      <Best v-if="adminMainIndex == 1" />

      <modal v-if="modalOpen" :rows="rows" :title="title" />
    </div>
  </div>
</template>

<script setup>
import AdminNav from "@/layouts/AdminNav.vue";
import Pictorial from "@/components/adminMain/PictorialContents.vue";
import Best from "@/components/adminMain/BestContents.vue";
import modal from "@/components/modal/RenewalEnrollModal.vue";
import useAdminStore from "@/store/useAdminPageStore.js";
import { computed, ref } from "vue";
const adminStore = useAdminStore();

const adminMainIndex = computed(() => adminStore.adminMainIndex);

const modalOpen = ref(false);

const title = computed(() =>
  adminMainIndex.value === 0 ? "화보 상품 등록" : "베스트 상품 등록"
);
const rows = [
  {
    field: "상품명",
    placeHolder: "상품명을 입력해주세요",
  },
  {
    field: "문구",
    placeHolder: "내용을 입력해주세요",
    height: "160px",
    feildAlign: "start",
    textArea: true,
  },
  {
    field: "화보",
    imgFile: true,
  },
  {
    field: "링크",
    placeHolder: "URL주소를 입력해주세요",
  },
];

const showEditModal = () => {
  modalOpen.value = true;
  document.body.style.overflow = "hidden";
};
</script>

<style src="@/assets/css/adminMain/Contents.css" module></style>
