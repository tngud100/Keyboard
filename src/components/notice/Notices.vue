<template>
  <section>
    <table :class="$style.table">
      <tr>
        <th :class="[$style.id, $style.head]">번호</th>
        <th :class="[$style.title, $style.head]">제목</th>
        <th :class="[$style.author, $style.head]">작성자</th>
        <th :class="[$style.createdDate, $style.head]">작성일</th>
      </tr>
      <Notice
        v-for="data in paginatedData"
        :key="data.id"
        :id="data.id"
        :title="data.title"
        :author="data.author"
        :createdDate="data.createdDate"
      />
    </table>
    <Pagination
      :totalItems="dataList.length"
      :elementsPerPage="8"
      @page-changed="handlePageChange"
    />
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import Notice from "#/notice/Notice.vue";
import Pagination from "#/common/Pagination.vue";

const dataList = [
  {
    id: 1,
    title: "이 집 키보드 맛집이네!",
    author: "조선타자기",
    createdDate: "2023-01-09",
  },
  {
    id: 2,
    title: "이 집 키보드 맛집이네!",
    author: "조선타자기",
    createdDate: "2023-01-09",
  },
  {
    id: 3,
    title: "이 집 키보드 맛집이네!",
    author: "조선타자기",
    createdDate: "2023-01-09",
  },
  {
    id: 4,
    title: "이 집 키보드 맛집이네!",
    author: "조선타자기",
    createdDate: "2023-01-09",
  },
  {
    id: 5,
    title: "이 집 키보드 맛집이네!",
    author: "조선타자기",
    createdDate: "2023-01-09",
  },
  {
    id: 6,
    title: "이 집 키보드 맛집이네!",
    author: "조선타자기",
    createdDate: "2023-01-09",
  },
  {
    id: 7,
    title: "이 집 키보드 맛집이네!",
    author: "조선타자기",
    createdDate: "2023-01-09",
  },
  {
    id: 8,
    title: "이 집 키보드 맛집이네!",
    author: "조선타자기",
    createdDate: "2023-01-09",
  },
  {
    id: 9,
    title: "이 집 키보드 맛집이네!",
    author: "조선타자기",
    createdDate: "2023-01-09",
  },
];

const currentPage = ref(1);

const handlePageChange = (page) => {
  currentPage.value = page;
};

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * 8;
  const end = start + 8;
  return dataList.slice(start, end);
});
</script>

<style src="@/assets/css/notice/Notices.css" module></style>
