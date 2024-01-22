<template>
  <div class="paymentInfoWrapper">
    <h3 class="title">결제 예상 금액</h3>
    <div class="table">
      <div class="head">상품금액</div>
      <div class="data">
        {{ totalProductsPrice.toLocaleString()
        }}<span class="currency">원</span>
      </div>
      <div class="head">상품할인금액</div>
      <div class="data">0<span class="currency">원</span></div>
      <div class="head">배송비</div>
      <div class="data">
        {{ totalDelivery.toLocaleString() }}<span class="currency">원</span>
      </div>
    </div>
    <div class="totalPrice">
      {{ totalPrice.toLocaleString() }}<span class="currency">원</span>
    </div>
    <button type="button" class="btn">구매하기</button>
  </div>
</template>

<script setup>
const { totalProductsPrice, totalDelivery, totalPrice } = defineProps({
  totalProductsPrice: {
    type: Number,
    required: true,
  },
  totalDelivery: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
});

console.log(totalProductsPrice);
</script>

<style src="./PaymentInfo.css" scoped></style>
