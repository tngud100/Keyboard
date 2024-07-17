<template>
  <div :class="$style.boardWrapper">
    <CustomBoardTable
      :columns="tableColumns"
      :rows="paginatedData"
      :type="'faq'"
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
  { label: "question", field: "", width: "5%", textAlign: "center" },
  {
    label: "제목",
    field: "title",
    width: "90%",
    textAlign: "left",
    paddingLeft: "21px",
  },
  { label: "icon", field: "", width: "5%" },
];

const tableRows = ref([
  {
    num: 1,
    title: "이거슨 제목입니다.",
    content: {
      comment: "이거슨 댓글입니다.",
    },
    isClicked: false,
  },
  {
    num: 2,
    title: "이거슨 또 다른 제목입니다.",
    content: {
      comment: "이거슨 또 다른 댓글입니다.",
    },
    isClicked: false,
  },
  {
    num: 3,
    title: "이거슨 제목입니다.",
    content: {
      comment: "이거슨 댓글입니다.",
    },
    isClicked: false,
  },
  {
    num: 4,
    title: "이거슨 또 다른 제목입니다.",
    content: {
      comment: "이거슨 또 다른 댓글입니다.",
    },
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

<style src="@/assets/css/renewalBoard/deskTop/Board.css" module></style>