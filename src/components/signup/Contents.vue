<template>
  <section class="signupWrapper">
    <header class="header">
      <h2 class="title">회원가입</h2>
      <p class="desc">회원가입을 위한 정확한 정보를 입력해주세요.</p>
      <h3 class="subTitle">기본정보</h3>
    </header>
    <main class="main">
      <div class="tableLine tableHead">아이디</div>
      <div class="tableLine tableData">
        <input
          class="tableInput"
          type="text"
          placeholder="아이디를 입력해주세요"
        />
        <button type="button" class="signupBtn duplicatedBtn">중복확인</button>
        <span class="warning">*(영문소문자/숫자,4~16자)</span>
      </div>
      <div class="tableLine tableHead">비밀번호</div>
      <div class="tableLine tableData">
        <input
          class="tableInput"
          type="password"
          placeholder="영문, 숫자, 특수문자 포함 8자 이상 입력해주세요 "
        />
      </div>
      <div class="tableLine tableHead">비밀번호 확인</div>
      <div class="tableLine tableData">
        <input
          class="tableInput"
          type="password"
          placeholder="비밀번호을 다시 입력해주세요."
        />
      </div>
      <div class="tableLine tableHead">이름</div>
      <div class="tableLine tableData">
        <input
          class="tableInput"
          type="text"
          placeholder="이름을 입력해주세요."
        />
      </div>
      <div class="tableLine tableHead">생년월일</div>
      <div class="tableLine tableData tableBirthdayLine">
        <input class="birthDayInput" type="text" placeholder="년(4자)" />
        <input class="birthDayInput" type="text" placeholder="일" />
      </div>
      <div class="tableLine tableHead">이메일</div>
      <div class="tableLine tableData">bb</div>
      <div class="tableLine tableHead">휴대전화</div>
      <div class="tableLine tableData">bb</div>
      <div class="tableLine tableHead">주소</div>
      <div class="tableLine tableData">bb</div>
    </main>
  </section>
</template>

<script setup></script>

<style scoped>
@import "./Contents.css";
</style>
