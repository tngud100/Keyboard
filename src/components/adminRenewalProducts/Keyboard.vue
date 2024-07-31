<template>
  <div :class="$style.wrapper">
    <CustomTable :columns="columns" :rows="rows" @activeBtn="deleteBtn" />
  </div>
</template>

<script setup>
import CustomTable from "@/components/common/CustomTable.vue";
import { formattedPrice } from "@/utils/index.js";
const columns = [
  {
    label: "카테고리",
    field: "category",
    width: "10%",
  },
  {
    label: "상품명",
    field: "product",
    width: "20%",
  },
  {
    label: "금액",
    field: "price",
    width: "10%",
  },
  {
    label: "이미지",
    field: "img",
    width: "20%",
  },
  {
    label: "링크",
    field: "link",
    width: "20%",
  },
  {
    label: "등록일",
    field: "regdate",
    width: "10%",
  },
  {
    label: "관리",
    field: "active",
    width: "10%",
  },
];
const rows = [
  {
    id: 0,
    category: "키보드",
    product: "MM Studio Class 0413- 898cc55 click",
    price: formattedPrice(180239) + "원",
    img: "SG0001 키보드.jpeg",
    link: "https://www.youtube.com/watch?v=zo4f_B04-cE",
    regdate: "등록일",
    active: "삭제",
  },
];
const deleteBtn = (id) => {
  console.log(id);
};
</script>

<style src="@/assets/css/adminMain/TableList.css" module></style>