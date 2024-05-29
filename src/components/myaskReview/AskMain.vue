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
              list.comment_state ? $style.redColor : $style.blackColor,
            ]"
          >
            {{ list.proccessState }}
          </li>
          <li :class="$style.titleText">{{ list.title }}</li>
          <li :class="$style.date">{{ list.date }}</li>
        </ul>
        <div :class="$style.askContainer" v-if="list.isclicked">
          <div :class="$style.content">
            Q. <span v-html="replaceNewline(list.content)"></span>
          </div>
          <div :class="$style.btnBox">
            <button
              :class="$style.contentBtn"
              v-if="!list.response"
              @click="modifyBtn(list.inquire_id)"
            >
              수정
            </button>
            <button :class="$style.contentBtn" @click="deleteBtn">삭제</button>
          </div>
        </div>
        <div
          :class="$style.ansContainer"
          v-if="list.isclicked && list.response"
        >
          A. <span v-html="replaceNewline(list.response.content)"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useAuthStore } from "@/store/useAuthStore.js";
import { AskAPI } from "@/api/AskReviewGetDataAPI.js";

const authStore = useAuthStore();
const { getAskListByMemberId } = AskAPI();

const emit = defineEmits(["showWriteForm"]);

const proccessState = ["접수", "답변완료"];
const asklist = ref([
  // {
  //   proccessState: proccessState[0],
  //   title: "상품 문의합니다.",
  //   content: "상품이 이상해요.",
  //   comment_state: false,
  //   isclicked: false,
  //   answer: {},
  //   date: "2021.09.01",
  //   idx: 0,
  // },
  // {
  //   proccessState: proccessState[1],
  //   title: "상품 문의합니다.",
  //   content: "상품이 이상해요.",
  //   comment_state: true,
  //   isclicked: false,
  //   response: {
  //     content: "이상한건 당신입니다.",
  //   },
  //   date: "2021.09.01",
  //   idx: 4,
  // },
]);

onMounted(async () => {
  await authStore.fetchUserData();
  const memberId = authStore.userData.memberId;
  const data = await getAskListByMemberId(memberId);

  data.forEach((item, index) => {
    asklist.value.push({
      proccessState:
        item.inquire.comment_state === 0 ? proccessState[0] : proccessState[1],
      comment_state: item.inquire.comment_state === 0 ? false : true,
      title: item.inquire.title,
      content: item.inquire.content,
      isclicked: false,
      response: null,
      date: item.inquire.regdate.slice(0, 10),
      inquire_id: item.inquire.inquires_id,
      idx: index,
    });
  });
});

const clickList = (idx) => {
  asklist.value.forEach((item, index) => {
    item.isclicked = index === idx ? !item.isclicked : false;
  });
};
const replaceNewline = (text) => {
  return text.replace(/\r?\n/g, "<br>");
};

const modifyBtn = (inquire_id) => {
  emit("showWriteForm", inquire_id);
};
</script>

<style src="@/assets/css/myaskReview/AskMain.css" module></style>
