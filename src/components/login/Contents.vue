<template>
  <section class="wrapper">
    <form @submit.prevent="" class="form">
      <h2 class="title">로그인</h2>

      <input type="text" placeholder="아이디를 입력해주세요" class="input" />
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        class="input"
      />
      <div class="infoWrapper">
        <div class="infoSavedWrapper">
          <input type="checkbox" id="savedId" class="saveCheckBox" />
          <label for="savedId">아이디 저장</label>
        </div>
        <div class="infoFinder">
          아이디&nbsp;찾기&nbsp;|&nbsp;비밀번호&nbsp;찾기
        </div>
      </div>
      <button
        class="commonLoginBtn loginBtn"
        type="submit"
        @click="moveToMypage"
      >
        로그인
      </button>
      <button
        class="commonLoginBtn signupBtn"
        type="button"
        @click="moveToAgreementPage()"
      >
        회원가입
      </button>
    </form>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const moveToAgreementPage = () => {
  router.push("/agreement");
};
const moveToMypage = () => {
  router.push("/mypage");
};
</script>

<style src="./Contents.css" scoped></style>
