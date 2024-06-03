<template>
  <section>
    <div :class="$style.adminContainer">
      <p :class="$style.pageLabel">1:1 문의 관리자 페이지</p>
      <div :class="$style.askListContainer">
        <ul :class="$style.listTitle">
          <li :class="$style.proccess">처리 상태</li>
          <li :class="$style.title">제목</li>
          <li :class="$style.date">문의일</li>
          <li :class="$style.actions">작업</li>
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
            <li :class="$style.actions">
              <button
                :class="$style.actionBtn"
                @click.stop="replyBtn(list.inquire_id)"
              >
                답변
              </button>
              <button
                :class="$style.actionBtn"
                @click.stop="deleteBtn(list.inquire_id)"
              >
                삭제
              </button>
            </li>
          </ul>
          <div :class="$style.askContainer" v-if="list.isclicked">
            <div :class="$style.content">
              <strong>Q:</strong>
              <span v-html="replaceNewline(list.content)"></span>
            </div>
            <div :class="$style.ImgAndBtnBox">
              <ImgContainer :imgFiles="filteredImgFiles(list.inquire_id)" />
            </div>
            <div v-if="list.response" :class="$style.response">
              <strong>A:</strong>
              <span v-html="replaceNewline(list.response.content)"></span>
            </div>
            <textarea
              v-if="isReplying && selectedInquiryId === list.inquire_id"
              v-model="replyContent"
              :class="$style.replyTextarea"
              placeholder="답변을 입력하세요..."
            ></textarea>
            <div :class="$style.submitReplyBox">
              <button
                v-if="isReplying && selectedInquiryId === list.inquire_id"
                @click="submitReply(list.inquire_id)"
                :class="$style.submitReplyBtn"
              >
                답변 제출
              </button>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.modalContainer" v-if="modalStore.isOpenVerifyModal">
        <CheckModal :commentCode="14" @isVerifyState="isVerifyState" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useAuthStore } from "@/store/useAuthStore.js";
import { AskAPI } from "@/api/AskReviewGetDataAPI.js";
import { useModalStore } from "@/store/useModalStore.js";
import ImgContainer from "#/myaskReview/ImgContainer.vue";
import CheckModal from "#/modal/CheckModal.vue";

const authStore = useAuthStore();
const modalStore = useModalStore();
const { getAskListByMemberId, getAskByInquireId, deleteAsk } = AskAPI();

const proccessState = ["접수", "답변완료"];
const asklist = ref([]);
const imgFiles = ref([]);
const inquireIdToDelete = ref(null);
const selectedInquiryId = ref(null);
const isReplying = ref(false);
const replyContent = ref("");

const fetchAskListData = async () => {
  asklist.value = [];
  imgFiles.value = [];
  const memberId = authStore.userData.memberId;
  const data = await getAskListByMemberId(memberId);

  for (let index = 0; index < data.length; index++) {
    await setAskListData(data[index], index);
  }
};

const setAskListData = async (item, index) => {
  asklist.value.push({
    proccessState:
      item.inquire.comment_state === 0 ? proccessState[0] : proccessState[1],
    comment_state: item.inquire.comment_state === 0 ? false : true,
    title: item.inquire.title,
    content: item.inquire.content,
    inquire_type: item.inquire.inquire_type,
    isclicked: false,
    response: item.inquire.response
      ? { content: item.inquire.response.content }
      : null,
    date: item.inquire.regdate.slice(0, 10),
    inquire_id: item.inquire.inquires_id,
    idx: index,
  });

  const imgData = await getAskByInquireId(item.inquire.inquires_id);
  imgData.images.forEach((img) => {
    imgFiles.value.push({
      inquireId: item.inquire.inquires_id,
      fileName: img.fileName,
      path: img.imgPath,
    });
  });
};

const filteredImgFiles = (inquireId) => {
  return imgFiles.value.filter((item) => item.inquireId === inquireId);
};

const clickList = (idx) => {
  asklist.value.forEach((item, index) => {
    item.isclicked = index === idx ? !item.isclicked : false;
  });
};

const replaceNewline = (text) => {
  return text.replace(/\r?\n/g, "<br>");
};

const replyBtn = (inquire_id) => {
  selectedInquiryId.value = inquire_id;
  isReplying.value = !isReplying.value;
};

const submitReply = async (inquire_id) => {
  //   await submitReply(inquire_id, replyContent.value);
  await fetchAskListData();
  selectedInquiryId.value = null;
  isReplying.value = false;
  replyContent.value = "";
};

const deleteBtn = (inquire_id) => {
  modalStore.isOpenVerifyModal = true;
  document.body.style.overflow = "hidden";
  inquireIdToDelete.value = inquire_id;
};

const isVerifyState = async (isVerify) => {
  if (isVerify) {
    const isdelete = await deleteAsk(inquireIdToDelete.value);
    if (isdelete) {
      await fetchAskListData(); // 데이터를 초기화하고 다시 받아옴
    }
  }

  inquireIdToDelete.value = null;
  modalStore.isOpenVerifyModal = false;
  document.body.style.overflow = "";
};

onMounted(async () => {
  await authStore.fetchUserData();
  await fetchAskListData();
});
</script>

<style src="@/assets/css/adminInquire/Contents.css" module></style>
