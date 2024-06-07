<template>
  <section>
    <div :class="$style.adminContainer">
      <div :class="$style.pageLabel">
        <span>{{ label[boardIdx] }}</span>
        <div :class="$style.header">
          <button
            :class="$style.writeBtn"
            v-if="boardIdx != 0"
            @click="showEditModal"
          >
            등록
          </button>
          <div :class="$style.searchBox">
            <input type="text" :class="$style.search" ref="searchRef" />
            <button
              type="button"
              :class="$style.searchBtn"
              @click="toggleIsSearch"
            >
              <IconSearch />
            </button>
          </div>
        </div>
      </div>

      <EditModal v-if="isEditModal" @closeModal="closeEditModal" />
      <ReviewContents :boardIdx="boardIdx" v-if="boardIdx == 0" />
      <NoticeContents :boardIdx="boardIdx" v-if="boardIdx == 1" />
      <FaqContents :boardIdx="boardIdx" v-if="boardIdx == 2" />
      <DownloadContents :boardIdx="boardIdx" v-if="boardIdx == 3" />
    </div>
  </section>
</template>

<script setup>
import useAdminStore from "@/store/useAdminPageStore.js";
import ReviewContents from "#/adminBoard/ReviewContents.vue";
import IconSearch from "#/icons/IconSearch.vue";
import NoticeContents from "#/adminBoard/NoticeContents.vue";
import FaqContents from "#/adminBoard/FaqContents.vue";
import DownloadContents from "#/adminBoard/downloadContents.vue";
import EditModal from "#/modal/EditModal.vue";
import { computed, ref } from "vue";

const adminStore = useAdminStore();
const label = ["리뷰", "공지사항", "자주묻는 질문", "자료실"];
const boardIdx = computed(() => adminStore.adminBoardIndex);

const isEditModal = ref(false);
const searchRef = ref(null);

const showEditModal = () => {
  isEditModal.value = true;
};
const closeEditModal = () => {
  isEditModal.value = false;
};
</script>

<style src="@/assets/css/adminBoard/Contents.css" module></style>
