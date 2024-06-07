<template>
  <div>
    <BoardList
      :listTitle="noticeTitle"
      :listItem="noticeList"
      :boardIdx="props.boardIdx"
    />
  </div>
</template>

<script setup>
import BoardList from "#/adminBoard/boardList.vue";

const props = defineProps({
  boardIdx: Number,
});

const noticeTitle = ["번호", "제목", "작성일", "수정일", "비고"];
const noticeList = [
  {
    first: 1,
    second: "첫번째 공지사항",
    third: "2024-03-15",
    fourth: "2024-03-15",
    fifth: "수정 / 삭제",
  },
];
</script>

<style>
</style>