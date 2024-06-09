<template>
  <section>
    <OrderProduct v-if="props.menuNum === 0" :orderData="orderData" />
    <OrderChange v-if="props.menuNum === 1" :orderData="orderData"/>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import img from "@/assets/images/keyboardBackgroundImg.jpg"
import OrderProduct from "#/myorder/OrderProduct.vue"
import OrderChange from "#/myorder/OrderChange.vue"

const props = defineProps({
  menuNum: Number,
});

const orderData = ref([
  {
    date: "2021.10.10",
    orderState: 0,
    imgSrc: img,
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
    orderState: 1,
    imgSrc: img,
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
]);
</script>
<style src="@/assets/css/myorder/Contents.css" module></style>
