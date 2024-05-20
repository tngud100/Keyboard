<template>
  <!-- 날짜가 같은 주문들을 박스에 묶어서 나타내기 -->
  <div
    :class="$style.container"
    v-for="orderedProduct in orderData"
    :key="orderedProduct"
  >
    <!-- <div :class="$style.box" v-for="item in order" :key="item">
      <orderCheck />
    </div> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import orderCheck from "#/myorder/orderCheck.vue";

const props = defineProps({
  menuNum: Number,
});

// const order

const orderData = ref([
  {
    date: "2021-10-10",
    orderState: "배송 준비",
    ImgSrc: "background.png",
    productName: "SG87W",
    productPrice: 8000,
    productDetail: [
      {
        detailOption: "컬러",
        detailName: "블랙",
        detailPrice: 4000,
        detailCount: 1,
      },
      {
        detailOption: "옵션2",
        detailName: "아이스",
        detailPrice: 4000,
        detailCount: 1,
      },
    ],
    deliveryPrice: 3000,
  },
  {
    date: "2021-10-10",
    orderState: "배송 준비",
    ImgSrc: "background.png",
    productName: "SG87W",
    productPrice: 8000,
    productDetail: [
      {
        detailOption: "컬러",
        detailName: "블랙",
        detailPrice: 4000,
        detailCount: 1,
      },
      {
        detailOption: "옵션2",
        detailName: "아이스",
        detailPrice: 4000,
        detailCount: 1,
      },
    ],
    deliveryPrice: 3000,
  },
]);
</script>

<style>
</style>