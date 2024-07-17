<template>
  <div :class="$style.boardWrapper">
    <CustomMobileBoardTable
      :columns="tableColumns"
      :rows="paginatedData"
      :type="'download'"
      @row-click="toggleRow"
    />
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
    category: "메뉴얼",
    author: "조선타자기",
    title: "이거슨 제목입니다",
    linkTo: `/board/download`,
    date: "2024.05.03",
    isClicked: false,
  },
  {
    num: 2,
    category: "소프트웨어",
    author: "조선타자기",
    title: "이거슨 제목입니다",
    linkTo: `/board/download`,
    date: "2024.05.03",
    isClicked: false,
  },
  {
    num: 3,
    category: "문제해결",
    author: "조선타자기",
    title: "이거슨 제목입니다",
    linkTo: `/board/download`,
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

const toggleRow = (index) => {
  tableRows.value.map((row, i) => {
    if (i !== index) {
      row.isClicked = false;
    }
  });
  tableRows.value[index].isClicked = !tableRows.value[index].isClicked;
};
</script>

<style src="@/assets/css/renewalBoard/mobile/Download.css" module></style>