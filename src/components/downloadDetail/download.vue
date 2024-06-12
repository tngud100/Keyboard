<template>
  <header :class="$style.header">
    <h3 :class="$style.title">{{ title }}</h3>
    <div :class="$style.createdDate">{{ createdDate }}</div>
  </header>
  <div v-html="content" :class="$style.content" />
  <footer :class="$style.footer">
    <button
      type="button"
      :class="$style.listBtn"
      @click="$router.push('/download')"
    >
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
  createdDate: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
</script>

<style src="@/assets/css/downloadDetail/download.css" module></style>
