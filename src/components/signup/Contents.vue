<template>
  <section :class="$style.wrapper">
    <header :class="$style.header">
      <h2 :class="$style.title">회원가입</h2>
      <p :class="$style.desc">회원가입을 위한 정확한 정보를 입력해주세요.</p>
      <h3 :class="$style.subTitle">기본정보</h3>
    </header>
    <form>
      <main :class="$style.main">
        <div :class="[$style.line, $style.head]">아이디</div>
        <div :class="[$style.line, $style.data]">
          <Input
            type="text"
            size="449px"
            placeholder="아이디를 입력해주세요."
            :value="id"
            @input="handleIdChange"
          />
          <button
            type="button"
            :class="[$style.signupBtn, $style.duplicatedBtn]"
          >
            중복확인
          </button>
          <span :class="$style.warning">*(영문소문자/숫자,4~16자)</span>
        </div>
        <div :class="[$style.line, $style.head]">비밀번호</div>
        <div :class="[$style.line, $style.data]">
          <Input
            type="password"
            size="449px"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상 입력해주세요."
            :value="password"
            @input="handlePasswordChange"
            autocomplete="off"
          />
        </div>
        <div :class="[$style.line, $style.head]">비밀번호 확인</div>
        <div :class="[$style.line, $style.data]">
          <Input
            type="password"
            size="449px"
            placeholder="비밀번호을 다시 입력해주세요."
            :value="passwordConfirm"
            @input="handlePasswordConfirmChange"
            autocomplete="off"
          />
        </div>
        <div :class="[$style.line, $style.head]">이름</div>
        <div :class="[$style.line, $style.data]">
          <Input
            type="text"
            size="449px"
            placeholder="이름을 입력해주세요."
            :value="name"
            @input="handleNameChange"
          />
        </div>
        <div :class="[$style.line, $style.head]">생년월일</div>
        <div :class="[$style.line, $style.data, $style.birthdayLine]">
          <Input
            type="text"
            size="143px"
            placeholder="년(4자)"
            :value="birthday.year"
            @input="handleBirthDayYearChange"
          />
          <div :class="$style.dropDownWrapper">
            월
            <div>
              <IconMediumDownArrow />
            </div>
          </div>
          <Input
            type="text"
            size="143px"
            placeholder="일"
            :value="birthday.date"
            @input="handleBirthDayDateChange"
          />
        </div>
        <div :class="[$style.line, $style.head]">이메일</div>
        <div :class="[$style.line, $style.data, $style.email]">
          <div>
            <Input
              type="text"
              size="187px"
              :value="email.front"
              @input="handleEmailFrontChange"
            />
            <span :class="$style.emailAt">@</span>
            <Input
              type="text"
              size="187px"
              :value="email.back"
              @input="handleEmailBackChange"
            />
          </div>
          <div :class="$style.dropDownWrapper">
            직접입력
            <div>
              <IconMediumDownArrow />
            </div>
          </div>
        </div>
        <div :class="[$style.line, $style.head]">휴대전화</div>
        <div :class="[$style.line, $style.data]">
          <div :class="$style.phoneNumberWrapper">
            <input
              :class="$style.phoneNumber"
              placeholder="휴대폰번호 (필수)"
              :value="phoneNumber"
              @input="handlePhoneNumberChange"
            />
            <button type="button" :class="$style.authBtn">인증번호 발송</button>
          </div>
        </div>
        <div :class="[$style.line, $style.head]">주소</div>
        <div :class="[$style.line, $style.data, $style.addressWrapper]">
          <div>
            <Input size="187px" placeholder="주소" />
            <button
              type="button"
              :class="[$style.signupBtn, $style.duplicatedBtn]"
            >
              우편번호
            </button>
          </div>
          <div :class="$style.address">
            <Input size="400px" />
            <Input size="400px" />
          </div>
          <div>
            <Input size="400px" />
          </div>
        </div>
      </main>
    </form>
    <footer :class="$style.footer">
      <button
        :class="$style.confirmBtn"
        type="button"
        @click="moveToSignupPage()"
      >
        회원가입
      </button>
    </footer>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Input from "#/common/Input.vue";
import IconMediumDownArrow from "#/icons/IconMediumDownArrow.vue";

const id = ref("");
const password = ref("");
const passwordConfirm = ref("");
const name = ref("");
const birthday = ref({
  year: "",
  month: "",
  date: "",
});
const email = ref({ front: "", back: "" });
const phoneNumber = ref("");

const handleIdChange = ({ target }) => {
  id.value = target.value;
};

const handlePasswordChange = ({ target }) => {
  password.value = target.value;
};

const handlePasswordConfirmChange = ({ target }) => {
  passwordConfirm.value = target.value;
};

const handleNameChange = ({ target }) => {
  name.value = target.value;
};

const handleBirthDayYearChange = ({ target }) => {
  birthday.value.year = target.value;
};

const handleBirthDayDateChange = ({ target }) => {
  birthday.value.date = target.value;
};

const handleEmailFrontChange = ({ target }) => {
  email.value.front = target.value;
};

const handleEmailBackChange = ({ target }) => {
  email.value.back = target.value;
};

const handlePhoneNumberChange = ({ target }) => {
  phoneNumber.value = target.value;
};
</script>

<style src="@/assets/css/signup/Contents.css" module></style>
