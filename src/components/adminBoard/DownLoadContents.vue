<template>
  <div>
    <BoardList
      :listTitle="downloadTitle"
      :listItem="downloadList"
      :boardIdx="props.boardIdx"
      @itemSelected="itemSelected"
      @deleteItem="deleteItem"
    />
  </div>
</template>

<script setup>
import BoardList from "#/adminBoard/boardList.vue";

const props = defineProps({
  boardIdx: Number,
});

const downloadTitle = [
  { title: "번호", field: "id", width: "11%", align: "center" },
  { title: "제목", field: "title", width: "62%", align: "center" },
  { title: "작성일", field: "regdate", width: "15%", align: "center" },
  { title: "수정일", field: "modified_date", width: "11%", align: "center" },
  { title: "비고", field: "active", width: "11%", align: "center" },
];

const downloadList = [
  {
    id: 1,
    title: "첫번째 자료",
    regdate: "2024-03-15",
    modified_date: "2024-03-15",
    active: "삭제",
  },
];
</script>

<style>
</style>