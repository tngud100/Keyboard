<template>
  <div>
    <BoardList
      :listTitle="reviewTitle"
      :listItem="reviewList"
      :boardIdx="props.boardIdx"
    />
  </div>
</template>

<script setup>
import BoardList from "#/adminBoard/boardList.vue";

const props = defineProps({
  boardIdx: Number,
});
const reviewTitle = ["상태", "상품명", "제목", "작성일", "비고"];
const reviewList = [
  {
    first: "처리대기",
    second: "SG-871233",
    third: "제목입니다.",
    fourth: "2024-03-15",
    fifth: "수정 / 삭제",
  },
  {
    first: "처리대기",
    second: "SG-871233",
    third: "제목입니다.",
    fourth: "2024-03-15",
    fifth: "수정 / 삭제",
  },
  {
    first: "처리대기",
    second: "SG-871233",
    third: "제목입니다.",
    fourth: "2024-03-15",
    fifth: "수정 / 삭제",
  },
];
</script>

<style>
</style>