<template>
  <ul>
    <Faq
      v-for="info in data"
      :key="info.id"
      :tag="info.tag"
      :question="info.question"
      :answer="info.answer"
    />
  </ul>
  <footer class="footer">
    <div></div>
    <div class="pagination">
      <IconPaginationLeftArrow class="paginationArrow" />
      <ul class="paginationList">
        <li class="paginationItem">1</li>
        <li class="paginationItem">2</li>
        <li class="paginationItem">3</li>
        <li class="paginationItem">4</li>
        <li class="paginationItem">5</li>
      </ul>
      <IconPaginationRightArrow class="paginationArrow" />
    </div>
    <button type="button" class="writeBtn">글쓰기</button>
  </footer>
</template>

<script setup>
import Faq from "#/faq/Faq.vue";
import IconPaginationLeftArrow from "#/icons/IconPaginationLeftArrow.vue";
import IconPaginationRightArrow from "#/icons/IconPaginationRightArrow.vue";

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
];
</script>

<style src="./Faqs.css" scoped></style>
