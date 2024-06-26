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
import { boardGetDataAPI } from "@/api/BoardGetDataAPI.js";
import { boardDeleteDataAPI } from "@/api/BoardDeleteDataAPI.js";
import { onMounted, ref } from "vue";

const { getDownloadList } = boardGetDataAPI();
const { deleteDownloadBoard } = boardDeleteDataAPI();

const emit = defineEmits(["itemSelected", "deleteItem"]);

const props = defineProps({
  boardIdx: Number,
});

const downloadTitle = [
  { title: "번호", field: "id", width: "11%", align: "center" },
  {
    title: "제목",
    field: "title",
    width: "62%",
    align: "center",
    childAlign: "left",
  },
  { title: "작성일", field: "regdate", width: "15%", align: "center" },
  { title: "수정일", field: "modified_date", width: "11%", align: "center" },
  { title: "비고", field: "active", width: "11%", align: "center" },
];

const downloadList = ref([]);

const itemSelected = (value) => {
  emit("itemSelected", value.id);
};

const deleteItem = async (value) => {
  if (confirm("정말 삭제하시겠습니까?")) {
    await deleteDownloadBoard(value);
    await fetchData();
  }
};

const fetchData = async () => {
  downloadList.value = [];
  const data = await getDownloadList();
  data.forEach((item) => {
    downloadList.value.push({
      id: item.downloads_id,
      categorty: item.category,
      title: item.title,
      regdate: item.regdate.slice(0, 10),
      modified_date: item.modified_date.slice(0, 10),
      active: "삭제",
    });
  });
};

onMounted(() => {
  fetchData();
});

defineExpose({ fetchData });
</script>

<style>
</style>