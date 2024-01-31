<template>
  <tr :class="$style.row">
    <td :class="$style.data">{{ id }}</td>
    <td :class="$style.data">{{ category }}</td>
    <td :class="[$style.data, $style.title]">{{ title }}</td>
    <td :class="$style.data">{{ author }}</td>
    <td :class="$style.data">{{ createdDate }}</td>
  </tr>
</template>

<script setup>
defineProps({
  id: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
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
});
</script>

<style src="@/assets/css/download/Download.css" module></style>
