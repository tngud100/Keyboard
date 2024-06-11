<template>
  <ul>
    <Faq
      v-for="info in dataList"
      :key="info.id"
      :tag="info.tag"
      :question="info.question"
      :answer="info.answer"
    />
  </ul>
  <Pagination
    :totalItems="data.length"
    :elementsPerPage="5"
    @page-changed="handlePageChange"
  />
</template>

<script setup>
import Faq from "#/faq/Faq.vue";
import Pagination from "#/common/Pagination.vue";
import { computed, ref } from "vue";

const data = [
  {
    id: 1,
    tag: "keycap",
    question: "이 집 키보드 맛집이네!",
    answer: "가나다라 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ~~~ㅇㅇㅇㅇㅇㅇ~~~~ㅇㅇㅇㅇㅇ",
  },
  {
    id: 2,
    tag: "keycap",
    question: "이 집 키보드 맛집이네!",
    answer: "가나다라 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ~~~ㅇㅇㅇㅇㅇㅇ~~~~ㅇㅇㅇㅇㅇ",
  },
  {
    id: 3,
    tag: "keycap",
    question: "이 집 키보드 맛집이네!",
    answer: "가나다라 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ~~~ㅇㅇㅇㅇㅇㅇ~~~~ㅇㅇㅇㅇㅇ",
  },
  {
    id: 4,
    tag: "keycap",
    question: "이 집 키보드 맛집이네!",
    answer: "가나다라 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ~~~ㅇㅇㅇㅇㅇㅇ~~~~ㅇㅇㅇㅇㅇ",
  },
  {
    id: 5,
    tag: "keycap",
    question: "이 집 키보드 맛집이네!",
    answer: "가나다라 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ~~~ㅇㅇㅇㅇㅇㅇ~~~~ㅇㅇㅇㅇㅇ",
  },
  {
    id: 5,
    tag: "keycap",
    question: "이 집 키보드 맛집이네!",
    answer: "가나다라 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ~~~ㅇㅇㅇㅇㅇㅇ~~~~ㅇㅇㅇㅇㅇ",
  },
];
const currentPage = ref(1);

const handlePageChange = (page) => {
  currentPage.value = page;
};

const dataList = computed(() => {
  const start = (currentPage.value - 1) * 5;
  const end = start + 5;
  return data.slice(start, end);
});
</script>

<style src="@/assets/css/faq/Faqs.css" module></style>
