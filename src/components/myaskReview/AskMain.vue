<template>
  <section>
    <div v-if="!asklist.length" :class="$style.noExistBoard">
      문의 내용이 존재하지 않습니다.
    </div>

    <div v-else :class="$style.askBoard">
      <ul :class="$style.listTitle">
        <li :class="$style.proccess">처리 상태</li>
        <li :class="$style.title">제목</li>
        <li :class="$style.date">문의일</li>
      </ul>
      <div v-for="list in asklist" :key="list.idx">
        <ul
          :class="[
            $style.list,
            list.isclicked ? $style.listAskActive : $style.listAsk,
          ]"
          @click="clickList(list.idx)"
        >
          <li
            :class="[
              $style.proccess,
              list.isAns ? $style.redColor : $style.blackColor,
            ]"
          >
            {{ list.proccessState }}
          </li>
          <li :class="$style.titleText">{{ list.title }}</li>
          <li :class="$style.date">{{ list.date }}</li>
        </ul>
        <div :class="$style.askContent" v-if="list.isclicked">
          Q. {{ list.content }}
        </div>
        <div :class="$style.ansContent" v-if="list.isclicked && list.response">
          A. {{ list.response.content }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const proccessState = ["답변대기", "답변완료"];
const asklist = ref([
  {
    proccessState: proccessState[0],
    title: "상품 문의합니다.",
    content: "상품이 이상해요.",
    isAns: false,
    isclicked: false,
    answer: {},
    date: "2021.09.01",
    idx: 0,
  },
  {
    proccessState: proccessState[1],
    title: "상품 문의합니다.",
    content: "상품이 이상해요.",
    isAns: true,
    isclicked: false,
    response: {
      content: "이상한건 당신입니다.",
    },
    date: "2021.09.01",
    idx: 1,
  },
  {
    proccessState: proccessState[0],
    title: "상품 문의합니다.",
    content: "상품이 이상해요.",
    isAns: false,
    isclicked: false,
    answer: {},
    date: "2021.09.01",
    idx: 2,
  },
]);

const clickList = (idx) => {
  asklist.value.forEach((item, index) => {
    item.isclicked = index === idx ? !item.isclicked : false;
  });
};
</script>

<style src="@/assets/css/myaskReview/AskMain.css" module></style>
