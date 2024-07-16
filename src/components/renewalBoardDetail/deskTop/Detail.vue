<template>
  <header :class="$style.header">
    <h3 :class="$style.title">
      {{ title }}&nbsp;<Icondownload v-if="fileName && fileLink" />
    </h3>
    <div :class="$style.createdDate">{{ createdDate }}</div>
  </header>
  <div v-html="content" :class="$style.content"></div>
  <div :class="$style.fileDownloadContainer" v-if="fileName && fileLink">
    <span :class="$style.fileDownloadBox">
      <a
        :href="fileLink"
        rel="noopener noreferrer"
        :class="$style.fileDownload"
        >{{ fileName }}</a
      >&nbsp;<Icondownload />
    </span>
  </div>
  <footer :class="$style.footer">
    <button
      type="button"
      :class="$style.listBtn"
      @click="$router.push('/board/notice')"
    >
      목록
    </button>
  </footer>
</template>

<script setup>
import Icondownload from "#/icons/IconFileDownload.vue";

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
  fileLink: {
    type: String,
  },
  fileName: {
    type: String,
  },
});
</script>

<style src="@/assets/css/renewalBoardDetail/deskTop/Detail.css" module></style>
