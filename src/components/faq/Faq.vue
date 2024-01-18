<template>
  <li @click="isShowing = !isShowing" class="wrapper">
    <div class="questionWrapper">
      <div class="questionWrapperLeftSide">
        <span class="questionType">Q</span>
        <div class="tag">{{ tag }}</div>
        {{ question }}
      </div>
      <IconFaqUpArrow v-show="isShowing" />
      <IconFaqDownArrow v-show="!isShowing" />
    </div>
    <div class="answerWrapper" v-show="isShowing">
      <span class="answerType">A</span>{{ answer }}
    </div>
  </li>
</template>

<script setup>
import { ref } from "vue";
import IconFaqUpArrow from "#/icons/IconFaqUpArrow.vue";
import IconFaqDownArrow from "#/icons/IconFaqDownArrow.vue";

defineProps({
  tag: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const isShowing = ref(false);
</script>

<style src="./Faq.css" scoped></style>
