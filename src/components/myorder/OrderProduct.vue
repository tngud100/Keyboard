<template>
    <div v-for="orderCard in props.orderData" :key="orderCard" :class="$style.orderList">
        <OrderProductCard :data="orderCard" />
    </div>
</template>

<script setup>
import OrderProductCard from "#/myorder/OrderProductCard.vue";

const props = defineProps({
    orderData:Object
})

</script>

<style src="@/assets/css/myorder/Contents.css" module></style>