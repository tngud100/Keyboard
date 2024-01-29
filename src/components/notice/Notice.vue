<template>
  <tr @click="moveToDetailPage(id)">
    <td :class="$style.data">{{ id }}</td>
    <td :class="$style.data">{{ views }}</td>
    <td :class="$style.data">{{ title }}</td>
    <td :class="$style.data">{{ author }}</td>
    <td :class="$style.data">{{ createdDate }}</td>
  </tr>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

defineProps({
  id: {
    type: Number,
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
  views: {
    type: Number,
    required: true,
  },
});

const moveToDetailPage = (id) => {
  router.push(`/notice/${id}`);
};
</script>

<style src="./Notice.css" module></style>
