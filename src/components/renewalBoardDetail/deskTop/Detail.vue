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
    <button type="button" :class="$style.listBtn" @click="gotoList">
      목록
    </button>
  </footer>
</template>

<script setup>
import Icondownload from "#/icons/IconFileDownload.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
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

const gotoList = () => {
  if (!props.fileLink && !props.fileName) {
    router.push("/board/notice");
    return;
  } else {
    router.push("/board/download");
    return;
  }
};
</script>

<style src="@/assets/css/renewalBoardDetail/deskTop/Detail.css" module></style>
