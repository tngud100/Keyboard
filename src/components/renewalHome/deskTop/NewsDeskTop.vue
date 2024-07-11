<template>
  <div :class="$style.wrapper">
    <div :class="$style.newsBox">
      <div :class="$style.header">
        <div :class="$style.title">공지사항</div>
        <a :class="$style.more" href="/">더보기 +</a>
      </div>
      <div :class="$style.list">
        <div v-for="item in newsList" :key="item.idx" :class="$style.listItem">
          <div :class="$style.title">
            <span :class="$style.category">[{{ item.category }}]</span>
            {{ item.title }}
          </div>
          <div :class="$style.date">{{ item.date }}</div>
        </div>
      </div>
    </div>
    <div :class="$style.contactBox">
      <div :class="$style.box">
        <p :class="$style.callName">고객센터</p>
        <p :class="$style.callNum">051-000-0000</p>
        <div :class="$style.detail">
          <p>운영 시간 : 09:00 ~ 18:00</p>
          <p>점심시간 : 12:00 ~ 13:00</p>
          <p>주말 및 공휴일 휴무</p>
        </div>
        <div :class="$style.btnBox">
          <button :class="$style.btn">자주묻는 질문</button>
          <button :class="$style.btn">자료실</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const newsList = ref([
  {
    category: "공지",
    title: "공지사항 제목",
    date: "2021.09.01",
  },
  {
    category: "공지",
    title: "공지사항 제목",
    date: "2021.09.01",
  },
  {
    category: "공지",
    title: "공지사항 제목",
    date: "2021.09.01",
  },
]);
</script>

<style src="@/assets/css/renewalHome/deskTop/NewsDeskTop.css" module></style>
