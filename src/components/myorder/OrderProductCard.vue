<template>
    <span :class="$style.date">ㅁ  {{ props.data.date }}</span>
    <div :class="$style.cardWrapper">
      <div :class="$style.cardBox">
        {{ props.data.orderState }}
        &nbsp;-&nbsp;
        {{ expectMonthDate }}({{daysOfWeek}})&nbsp;도착 예정
      </div>
      <div :class="$style.productBox">
        <div :class="$style.imgBox">
          <img src="" alt="product" :class="$style.img" />
        </div>
        <div :class="$style.infoBox">
          <span :class="$style.productName">{{ props.data.productName }}</span>
          <span :class="$style.productPrice">{{ props.data.productPrice.toLocaleString() }}원</span>
          <span :class="$style.deliverPrice">배송비 {{ props.data.deliveryPrice.toLocaleString() }}원</span>
        </div>
      </div>
      <div :class="$style.detailOption">
        <div v-for="(detail, index) in props.data.productDetail" :key="index" :class="$style.OptionBox" >
            <span>{{ detail.detailOption }} : {{ detail.detailName }}</span>
            <span>{{ detail.detailPrice }} / {{ detail.detailCount }}개</span>
        </div>
      </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    data : Object,
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