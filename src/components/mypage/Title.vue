<template>
  <div :class="$style.contentTitle">
    {{ props.title }}
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>

<style src="@/assets/css/mypage/Title.css" module>
</style>