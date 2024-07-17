<template>
  <div :class="$style.boardWrapper">
    <CustomMobileBoardTable :columns="tableColumns" :rows="paginatedData" />
    <Pagination
      :totalItems="tableRows.length"
      :elementsPerPage="8"
      @page-changed="handlePageChange"
    />
  </div>
</template>

<script setup>
import Pagination from "#/common/Pagination.vue";
import CustomMobileBoardTable from "#/common/CustomMobileBoardTable.vue";
import { computed, ref } from "vue";

const tableRows = ref([
  {
    num: 1,
    title: "이거슨 제목입니다.",
    author: "조선타자기",
    linkTo: "/board/notice",
    date: "2024.05.03",
    isClicked: false,
  },
  {
    num: 2,
    title: "이거슨 제목입니다.",
    author: "조선타자기",
    linkTo: "/board/notice",
    date: "2024.05.03",
    isClicked: false,
  },
  {
    num: 3,
    title: "이거슨 제목입니다.",
    author: "조선타자기",
    linkTo: "/board/notice",
    date: "2024.05.03",
    isClicked: false,
  },
]);

const currentPage = ref(1);

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * 8;
  const end = start + 8;
  return tableRows.value.slice(start, end);
});

const handlePageChange = (page) => {
  currentPage.value = page;
};
</script>

<style src="@/assets/css/renewalBoard/mobile/Notice.css" module></style>