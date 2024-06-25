<template>
  <div>
    <BoardList
      :listTitle="faqTitle"
      :listItem="faqList"
      :boardIdx="props.boardIdx"
      @itemSelected="itemSelected"
      @deleteItem="deleteItem"
    />
  </div>
</template>

<script setup>
import BoardList from "#/adminBoard/boardList.vue";
import { boardGetDataAPI } from "@/api/BoardGetDataAPI.js";
import { boardDeleteDataAPI } from "@/api/BoardDeleteDataAPI.js";
import { onMounted, ref } from "vue";

const { getFAQList } = boardGetDataAPI();
const { deleteFAQBoard } = boardDeleteDataAPI();

const emit = defineEmits(["itemSelected", "deleteItem"]);

const props = defineProps({
  boardIdx: Number,
});

const faqTitle = [
  { title: "번호", field: "id", width: "5%", align: "center" },
  { title: "카테고리", field: "category", width: "10%", align: "center" },
  { title: "제목", field: "title", width: "60%", align: "center" },
  { title: "작성일", field: "modified_date", width: "10%", align: "center" },
  { title: "수정일", field: "regdate", width: "10%", align: "center" },
  { title: "비고", field: "active", width: "5%", align: "center" },
];

const faqList = [
  {
    id: 1,
    category: "카테고리",
    title: "첫번째 FAQ",
    modified_date: "2024-03-15",
    regdate: "2024-03-15",
    active: "삭제",
  },
];

const itemSelected = (value) => {
  emit("itemSelected", value.first);
};

const deleteItem = async (value) => {
  if (confirm("정말 삭제하시겠습니까?")) {
    await deleteFAQBoard(value);
    await fetchData();
  }
};

const fetchData = async () => {
  noticeList.value = [];
  const data = await getFAQList();
  data.forEach((item) => {
    noticeList.value.push({
      first: item.faqs_id,
      second: item.title,
      third: item.modified_date.slice(0, 10),
      fourth: item.regdate.slice(0, 10),
      fifth: "삭제",
    });
  });
};
</script>

<style>
</style>