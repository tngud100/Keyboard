<template>
  <div>
    <BoardList
      :listTitle="downloadTitle"
      :listItem="downloadList"
      :boardIdx="props.boardIdx"
    />
  </div>
</template>

<script setup>
import BoardList from "#/adminBoard/boardList.vue";

const props = defineProps({
  boardIdx: Number,
});

const downloadTitle = ["번호", "제목", "작성일", "수정일", "비고"];
const downloadList = [
  {
    first: 1,
    second: "첫번째 자료",
    third: "2024-03-15",
    fourth: "2024-03-15",
    fifth: "수정 / 삭제",
  },
];
</script>

<style>
</style>