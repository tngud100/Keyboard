<template>
  <section :class="$style.wrapper">
    <form @submit.prevent="" :class="$style.form">
      <h2 :class="$style.title">로그인</h2>

      <input
        type="text"
        placeholder="아이디를 입력해주세요"
        :class="$style.input"
      />
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        :class="$style.input"
        autocomplete="off"
      />
      <div :class="$style.infoWrapper">
        <div :class="$style.infoSavedWrapper">
          <input type="checkbox" id="savedId" :class="$style.idSavedCheckBox" />
          <label for="savedId">아이디 저장</label>
        </div>
        <div :class="$style.infoFinder">
          아이디&nbsp;찾기&nbsp;|&nbsp;비밀번호&nbsp;찾기
        </div>
      </div>
      <button
        :class="[$style.commonBtn, $style.loginBtn]"
        type="submit"
        @click="moveToMypage"
      >
        로그인
      </button>
      <button
        :class="[$style.commonBtn, $style.signupBtn]"
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
const moveToMypage = () => {};
</script>

<style src="./Contents.css" module></style>
