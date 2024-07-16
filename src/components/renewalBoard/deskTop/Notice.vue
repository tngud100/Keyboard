<template>
  <div :class="$style.boardWrapper">
    <CustomBoardTable
      :columns="tableColumns"
      :rows="paginatedData"
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
import CustomBoardTable from "#/common/CustomBoardTable.vue";
import { computed, ref } from "vue";

const tableColumns = [
  { label: "번호", field: "num", width: "9%" },
  {
    label: "제목",
    field: "title",
    width: "67%",
    textAlign: "left",
    paddingLeft: "21px",
  },
  { label: "작성자", field: "author", width: "12%" },
  { label: "작성일", field: "date", width: "12%" },
];

const tableRows = ref([
  {
    num: 1,
    title: "이거슨 제목입니다.",
    author: "조선타자기",
    // content: {
    //   text: "이거슨 또 다른 내용입니다.",
    // },
    linkTo: "/board/notice",
    date: "2024.05.03",
    isClicked: false,
  },
  {
    num: 2,
    title: "이거슨 제목입니다.",
    author: "조선타자기",
    // content: {
    //   text: "이거슨 또 다른 내용입니다.",
    // },
    linkTo: "/board/notice",
    date: "2024.05.03",
    isClicked: false,
  },
  {
    num: 3,
    title: "이거슨 제목입니다.",
    author: "조선타자기",
    linkTo: "/board/notice",
    // content: {
    //   text: "이거슨 또 다른 내용입니다.",
    // },
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

<style src="@/assets/css/renewalBoard/deskTop/Notice.css" module></style>