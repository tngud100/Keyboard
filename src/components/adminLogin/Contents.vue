<template>
  <section :class="$style.wrapper" ref="wrapperRef">
    <form @submit.prevent="" :class="$style.form" ref="formRef">
      <IconNewLogo :class="$style.titleLink" style="margin-bottom: 105px" />
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
      <button
        :class="[$style.commonBtn, $style.loginBtn]"
        style="margin-top: 10px"
        type="submit"
        @click="moveToAdminPage"
      >
        로그인
      </button>
    </form>
  </section>
</template>

<script setup>
import IconNewLogo from "#/icons/IconNewLogo.vue";
import { nextTick, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const wrapperRef = ref();
const formRef = ref();

onMounted(() => {
  nextTick(() => {
    findElAndSetWrapperHeight();
  });
});

const findElAndSetWrapperHeight = () => {
  const formElement = formRef.value;
  if (formElement) {
    const formHeight = formElement.offsetHeight;
    wrapperRef.value.style.height = `calc(100vh - ${formHeight / 2}px)`;
  } else {
    console.error("form 요소를 찾을 수 없습니다.");
  }
};

const moveToAdminPage = () => {
  router.push("/adminProducts");
};
</script>

<style src="@/assets/css/login/Contents.css" module></style>
