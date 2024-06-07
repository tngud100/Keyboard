<template>
  <div :class="$style.headerBox">
    <div>
      <span :class="$style.headerSpan">관리자 계정</span>
      <span :class="$style.headerSpan">|</span>
      <button
        v-if="isLogin"
        type="button"
        :class="$style.headerSpan"
        @click="logoutTokenClear"
      >
        로그아웃
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store/useAuthStore.js";
import { AuthAPI } from "@/api/AuthAPI.js";
import { computed } from "vue";

const router = useRouter();
const authStore = useAuthStore();
const { logout } = AuthAPI();
const isLogin = computed(() => !!JSON.parse(authStore.token));

const logoutTokenClear = async () => {
  const token = JSON.parse(authStore.token);

  const data = await logout(token.authorization, token.refreshToken);
  if (data === true) {
    authStore.clearToken();
    isLogin.value = null;
    router.push("/admin/login");
  }
};
</script>

<style src="@/assets/css/layouts/AdminHeader.css" module></style>
