<template>
  <tr>
    <td class="data">{{ id }}</td>
    <td class="data">{{ category }}</td>
    <td class="data title">{{ title }}</td>
    <td class="data">{{ author }}</td>
    <td class="data">{{ createdDate }}</td>
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

<style src="./Download.css" scoped></style>
