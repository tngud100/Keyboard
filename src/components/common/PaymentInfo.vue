<template>
  <div :class="$style.wrapper">
    <h3 :class="$style.title">결제 예상 금액</h3>
    <div :class="$style.table">
      <div :class="$style.head">상품금액</div>
      <div :class="$style.data">
        {{ totalProductsPrice.toLocaleString()
        }}<span :class="$style.commonCurrency">원</span>
      </div>
      <div :class="$style.head">상품할인금액</div>
      <div :class="$style.data">
        0<span :class="$style.commonCurrency">원</span>
      </div>
      <div :class="$style.head">배송비</div>
      <div :class="$style.data">
        {{ totalDelivery.toLocaleString()
        }}<span :class="$style.commonCurrency">원</span>
      </div>
    </div>
    <div :class="$style.totalPrice">
      {{ totalPrice.toLocaleString()
      }}<span :class="$style.commonCurrency">원</span>
    </div>
    <button type="button" :class="$style.btn" @click="moveOrderPage">
      구매하기
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

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

const router = useRouter();

const moveOrderPage = () => {
  router.push("/order");
};
</script>

<style src="./PaymentInfo.css" module></style>
