<template>
  <section>
    <AskMain v-if="!showWriteForm" />
    <WriteAsk v-if="showWriteForm" @isCancelWrite="isCancelWrite" />
  </section>
</template>

<script setup>
import AskMain from "#/myaskReview/AskMain.vue";
import WriteAsk from "#/myaskReview/WriteAsk.vue";
import { ref, watchEffect } from "vue";

const showWriteForm = ref(false);

const emit = defineEmits(["isCancelWrite"]);

const props = defineProps({
  menuNum: Number,
  writeReview: Boolean,
});

watchEffect(
  () => {
    if (props.writeReview) {
      showWriteForm.value = true;
    }
  },
  { immediate: true }
);

const isCancelWrite = () => {
  showWriteForm.value = false;
  emit("isCancelWrite");
};
</script>

<style>
</style>