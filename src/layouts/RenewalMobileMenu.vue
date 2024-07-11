<template>
  <section :class="$style.menuSection">
    <ul :class="$style.box">
      <a :class="$style.gotoBtn">
        <li>회사소개</li>
      </a>
      <a :class="$style.gotoBtn">
        <li>상품</li>
      </a>
      <a :class="$style.gotoBtn">
        <li>스토어 바로가기</li>
      </a>
      <a :class="$style.gotoBtn">
        <li>고객지원</li>
      </a>
    </ul>
    <div :class="$style.container">
      <div :class="$style.textBox">
        <p :class="$style.callName">고객센터</p>
        <p :class="$style.callNum">051-000-0000</p>
        <p>
          운영 시간 : 09:00 ~ 18:00<br />
          점심시간 12:00 ~ 13:00<br />
          주말 및 공휴일 휴무
        </p>
      </div>
      <div :class="$style.btnBox">
        <button :class="$style.btn">자주묻는 질문</button>
        <button :class="$style.btn">자료실</button>
      </div>
    </div>
    <div :class="$style.copyright">
      <p>Copyrightⓒ 2023 조선타자기 All right reserved.</p>
    </div>
  </section>
</template>

<script setup>
</script>

<style src="@/assets/css/layouts/RenewalMobileMenu.css" module></style>