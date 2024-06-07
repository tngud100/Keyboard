<template>
  <div>
    <BoardList
      :listTitle="faqTitle"
      :listItem="faqList"
      :boardIdx="props.boardIdx"
    />
  </div>
</template>

<script setup>
import BoardList from "#/adminBoard/boardList.vue";
const props = defineProps({
  boardIdx: Number,
});

const faqTitle = ["번호", "제목", "작성일", "수정일", "비고"];
const faqList = [
  {
    first: 1,
    second: "첫번째 FAQ",
    third: "2024-03-15",
    fourth: "2024-03-15",
    fifth: "수정 / 삭제",
  },
  {
    first: 1,
    second: "첫번째 FAQ",
    third: "2024-03-15",
    fourth: "2024-03-15",
    fifth: "수정 / 삭제",
  },
];
</script>

<style>
</style>