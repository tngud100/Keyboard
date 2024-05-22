<template>
  <section>
    <CheckPassword />
  </section>
</template>

<script setup>
import CheckPassword from "@/components/myinfo/CheckPassword.vue";

const props = defineProps({
  menuNum: Number,
});
</script>
<style src="@/assets/css/myaskReview/WriteAsk.css" module></style>
