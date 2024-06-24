<template>
  <div>
    <BoardList
      :listTitle="noticeTitle"
      :listItem="noticeList"
      :boardIdx="props.boardIdx"
      @itemSelected="itemSelected"
    />
  </div>
</template>

<script setup>
import BoardList from "#/adminBoard/boardList.vue";
import { boardGetDataAPI } from "@/api/BoardGetDataAPI.js";
import { onMounted, ref } from "vue";

const { getNoticeList } = boardGetDataAPI();

const emit = defineEmits(["itemSelected"]);

const props = defineProps({
  boardIdx: Number,
});

const noticeTitle = ["번호", "제목", "작성일", "수정일", "비고"];
const noticeList = ref([]);

const itemSelected = (value) => {
  console.log(value);
  emit("itemSelected", value.first);
};

onMounted(async () => {
  const data = await getNoticeList();
  data.forEach((item) => {
    noticeList.value.push({
      first: item.notices_id,
      second: item.title,
      third: item.modified_date.slice(0, 10),
      fourth: item.regdate.slice(0, 10),
      fifth: "수정 / 삭제",
    });
  });
});
</script>

<style>
</style>