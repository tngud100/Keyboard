<template>
    <span :class="$style.date">반품 접수일:{{ props.data.date }} | 주문일:{{ props.data.date }} | 주문번호:000021</span>
    <div :class="$style.cardWrapper">
      <div :class="$style.header">
        <div>
          {{ deliverState }}
          &nbsp;-&nbsp;
          {{ expectMonthDate }}({{daysOfWeek}})&nbsp;
          {{ deliverComment }}
        </div>
        <button>
          주문 상세＞
        </button>
      </div>
      <div :class="$style.upperCard">
        <div :class="$style.productBox">
          <div :class="$style.imgBox">
            <img :src="props.data.imgSrc" alt="product" :class="$style.img" />
          </div>
          <div :class="$style.infoBox">
            <span :class="$style.productName">{{ props.data.productName }}</span>
            <div :class="$style.detailOption">
                <div v-for="(detail, index) in props.data.productDetail" :key="index" :class="$style.OptionBox" >
                    <span :class="$style.option">{{ detail.detailOption }} / {{ detail.detailName }}</span>
                </div>
            </div>
            <span :class="$style.productPrice">$ {{ props.data.productPrice.toLocaleString() }}원 | 1개</span>
          </div>
        </div>
        <div :class="$style.btnBox">
          <button :class="$style.btn">배송 조회</button>
          <!-- <button v-if="props.data.orderState === 0" :class="$style.btn">주문 취소</button>
          <button v-if="props.data.orderState === 1 || props.data.orderState === 2" :class="$style.btn">교환/반품</button>
          <button v-if="props.data.orderState === 1 || props.data.orderState === 2" :class="$style.btn">리뷰 작성</button> -->
        </div>
      </div>
      
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    data : Object,
})

const deliverState = computed(() => {
  if (props.data.orderState === 0) {
    return "배송 준비";
  } else if (props.data.orderState === 1) {
    return "배송 중";
  } else if (props.data.orderState === 2) {
    return "배송 완료";
  } 
});
const deliverComment = computed(() => {
  if (props.data.orderState === 0) {
    return "도착 예정";
  } else if (props.data.orderState === 1) {
    return "도착 예정";
  } else if (props.data.orderState === 2) {
    return "도착 완료";
  } 
})

const daysOfWeek = computed(() => {
    if (props.data && props.data.expectDeliveryDate) {
        const [year, month, day] = props.data.expectDeliveryDate.split(".");
        const date = new Date(year, month - 1, day); // JavaScript에서 월은 0부터 시작
        const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
        return dayNames[date.getDay()];
    } 
});
const expectMonthDate = computed(() =>{
  return props.data.expectDeliveryDate.slice(5)
})
console.log(props.data)

</script>

<style src="@/assets/css/myorder/OrderProductCard.css" module></style>