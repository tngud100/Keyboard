<template>
  <div :class="$style.checkWrapper">
    <div :class="$style.textBox">
      <span :class="$style.notice">비밀번호를 입력해주세요.</span><br />
      <span :class="$style.describe"
        >회원님의 개인정보 보호를 위해 비밀번호를 다시 한번 확인 합니다.<br />
        비민번호가 노출되지 않도록 주의해주세요.</span
      >
    </div>
    <div :class="$style.activeBox">
      <input
        :class="$style.passwordInput"
        type="password"
        placeholder="비밀번호를 입력해주세요."
      />

      <button :class="$style.verifyBtn">확인</button>
    </div>
  </div>
</template>

<script>
</script>

<style src="@/assets/css/myinfo/CheckPassword.css" module></style>
