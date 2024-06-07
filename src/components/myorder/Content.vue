<template>
  <section>
    <div v-for="orderCard in orderData" :key="orderCard" :class="$style.orderList">
      <OrderProductCard :data="orderCard" />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import OrderProductCard from "#/myorder/OrderProductCard.vue";

const props = defineProps({
  menuNum: Number,
});

const orderData = ref([
  {
    date: "2021.10.10",
    orderState: "배송 준비",
    imgSrc: "background.png",
    deliveryPrice: 3000,
    expectDeliveryDate:"2021.10.16",
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
        detailOption: "상태",
        detailName: "아이스",
        detailPrice: 4000,
        detailCount: 1,
      },
    ],
  },
  {
    date: "2021.10.10",
    orderState: "배송 준비",
    imgSrc: "background.png",
    deliveryPrice: 3000,
    expectDeliveryDate:"2021-10-16",
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
        detailOption: "상태",
        detailName: "아이스",
        detailPrice: 4000,
        detailCount: 1,
      },
    ],
  },
]);
</script>

<style src="@/assets/css/myorder/Contents.css" module></style>