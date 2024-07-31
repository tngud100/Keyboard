<template>
  <div :class="$style.wrapper">
    <CustomTable :columns="columns" :rows="rows" @activeBtn="deleteBtn" />
  </div>
</template>

<script setup>
import CustomTable from "@/components/common/CustomTable.vue";

const columns = [
  {
    label: "번호",
    field: "num",
    width: "5%",
  },
  {
    label: "상품명",
    field: "product",
    width: "14%",
  },
  {
    label: "문구",
    field: "comment",
    width: "25%",
  },
  {
    label: "화보 이미지",
    field: "img",
    width: "16%",
  },
  {
    label: "링크",
    field: "link",
    width: "24%",
  },
  {
    label: "등록일",
    field: "regdate",
    width: "8%",
  },
  {
    label: "관리",
    field: "active",
    width: "8%",
  },
];
const rows = [
  {
    id: 0,
    num: "1",
    product: "MM Studio Class 0413- 898cc55 click",
    comment:
      "조선타자기 컨셉의 이런 저런 설명 쭉 나오고 쭉 설명 설명 설명 줄바뀜으로 나오면서 중앙정렬",
    img: "SG0001 키보드.jpeg",
    link: "https://www.youtube.com/watch?v=zo4f_B04-cE",
    regdate: "2024-08-29",
    active: "삭제",
  },
  {
    id: 1,
    num: "2",
    product: "MM Studio Class 0413- 898cc55 click",
    comment:
      "조선타자기 컨셉의 이런 저런 설명 쭉 나오고 쭉 설명 설명 설명 줄바뀜으로 나오면서 중앙정렬",
    img: "SG0001 키보드.jpeg",
    link: "https://www.youtube.com/watch?v=zo4f_B04-cE",
    regdate: "2024-08-29",
    active: "삭제",
  },
  {
    id: 2,
    num: "3",
    product: "MM Studio Class 0413- 898cc55 click",
    comment:
      "조선타자기 컨셉의 이런 저런 설명 쭉 나오고 쭉 설명 설명 설명 줄바뀜으로 나오면서 중앙정렬",
    img: "SG0001 키보드.jpeg",
    link: "https://www.youtube.com/watch?v=zo4f_B04-cE",
    regdate: "2024-08-29",
    active: "삭제",
  },
  {
    id: 3,
    num: "4",
    product: "MM Studio Class 0413- 898cc55 click",
    comment:
      "조선타자기 컨셉의 이런 저런 설명 쭉 나오고 쭉 설명 설명 설명 줄바뀜으로 나오면서 중앙정렬",
    img: "SG0001 키보드.jpeg",
    link: "https://www.youtube.com/watch?v=zo4f_B04-cE",
    regdate: "2024-08-29",
    active: "삭제",
  },
];

const deleteBtn = (id) => {
  console.log(id);
};
</script>

<style src="@/assets/css/adminMain/TableList.css" module></style>