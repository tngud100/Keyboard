<template>
  <div>shopping basket</div>
</template>

<script setup>
import { useShoppingBasketStore } from "@/stores/useShoppingBasketStore";

const { shoppingBasket } = useShoppingBasketStore();

console.log(shoppingBasket);
</script>

<style scoped></style>
