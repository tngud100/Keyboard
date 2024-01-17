<template>
  <header class="header">
    <h3 class="title">{{ title }}</h3>
    <div class="author">{{ author }}</div>
    <div class="createdDate">{{ createdDate }}</div>
    <div class="views">{{ views }}</div>
  </header>
  <div v-html="content" class="content" />
  <footer class="footer">
    <button type="button" class="backBtn" @click="$router.push('/notice')">
      목록
    </button>
  </footer>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdDate: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
</script>

<style src="./Notice.css" scoped></style>
