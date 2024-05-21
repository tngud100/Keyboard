<template>
  <section>
    <AskMain v-if="!writeReview" />
    <WriteAsk v-if="writeReview" />
  </section>
</template>

<script setup>
import AskMain from "#/myaskReview/AskMain.vue";
import WriteAsk from "#/myaskReview/WriteAsk.vue";

const props = defineProps({
  menuNum: Number,
  writeReview: Boolean,
});
</script>

<style>
</style>