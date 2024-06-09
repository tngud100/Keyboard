<template>
    <div v-for="orderCard in props.orderData" :key="orderCard" :class="$style.orderList">
        <OrderChangeCard :data="orderCard" />
    </div>
</template>

<script setup>
import OrderChangeCard from "#/myorder/OrderChangeCard.vue";

const props = defineProps({
    orderData:Object
})

</script>

<style src="@/assets/css/myorder/Contents.css" module></style>