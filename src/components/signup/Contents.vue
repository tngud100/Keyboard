<template>
  <section :class="$style.wrapper">
    <header :class="$style.header">
      <h2 :class="$style.title">회원가입</h2>
      <p :class="$style.desc">회원가입을 위한 정확한 정보를 입력해주세요.</p>
      <h3 :class="$style.subTitle">기본정보</h3>
    </header>
    <form>
      <main :class="$style.main">
        <!-- 아이디 필드 -->
        <div :class="[$style.line, $style.head]">아이디</div>
        <div :class="[$style.line, $style.data]">
          <Input
            type="text"
            size="449px"
            placeholder="아이디를 입력해주세요."
            :value="id"
            @input="handleIdChange"
            :maxLength="16"
          />
          <button
            type="button"
            :class="[$style.signupBtn, $style.duplicatedBtn]"
            @click="checkDuplicateId(id)"
          >
            중복확인
          </button>
          <span :class="$style.warning">*(영문소문자/숫자, 4~16자)</span>
          <span v-if="idError" :class="$style.error">{{ idError }}</span>
        </div>
        <!-- 비밀번호 필드 -->
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
          <span v-if="passwordError" :class="$style.error">{{
            passwordError
          }}</span>
        </div>
        <!-- 비밀번호 확인 필드 -->
        <div :class="[$style.line, $style.head]">비밀번호 확인</div>
        <div :class="[$style.line, $style.data]">
          <Input
            type="password"
            size="449px"
            placeholder="비밀번호를 다시 입력해주세요."
            :value="passwordConfirm"
            @input="handlePasswordConfirmChange"
            autocomplete="off"
          />
          <span v-if="passwordConfirmError" :class="$style.error">{{
            passwordConfirmError
          }}</span>
        </div>
        <!-- 이름 필드 -->
        <div :class="[$style.line, $style.head]">이름</div>
        <div :class="[$style.line, $style.data]">
          <Input
            type="text"
            size="449px"
            placeholder="이름을 입력해주세요."
            :value="name"
            @input="handleNameChange"
            :maxLength="16"
          />
          <span v-if="nameError" :class="$style.error">{{ nameError }}</span>
        </div>
        <!-- 생년월일 필드 -->
        <div :class="[$style.line, $style.head]">생년월일</div>
        <div :class="[$style.line, $style.data, $style.birthdayLine]">
          <Input
            type="text"
            size="143px"
            placeholder="년(4자)"
            :value="birthday.year"
            @input="handleBirthDayYearChange"
            :maxLength="4"
          />
          <Input
            type="text"
            size="143px"
            placeholder="월"
            :value="birthday.month"
            @input="handleBirthDayMonthChange"
            :maxLength="2"
          />
          <Input
            type="text"
            size="143px"
            placeholder="일"
            :value="birthday.date"
            @input="handleBirthDayDateChange"
            :maxLength="2"
          />
          <span v-if="birthdayError" :class="$style.error">{{
            birthdayError
          }}</span>
        </div>
        <!-- 이메일 필드 -->
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
              placeholder="직접입력"
              @input="handleEmailBackChange"
            />
          </div>
          <div :class="$style.dropDownWrapper" @click="clickDropDownOption">
            {{ selectedOption }}
            <div>
              <IconMediumDownArrow />
            </div>
            <div v-if="showOption" :class="$style.dropDownOptionBox">
              <span
                :class="$style.optionStyle"
                v-for="option in emailOptionList"
                :key="option.index"
                @click="clickOptionEmailBack(option)"
              >
                {{ option.domain }}
              </span>
            </div>
          </div>
          <span v-if="emailError" :class="$style.error">{{ emailError }}</span>
        </div>
        <!-- 휴대전화 필드 -->
        <div :class="[$style.line, $style.head]">휴대전화</div>
        <div :class="[$style.line, $style.data]">
          <div :class="$style.phoneNumberWrapper">
            <input
              :class="$style.phoneNumber"
              placeholder="휴대폰번호 (필수)"
              :value="phoneNumber"
              @input="handlePhoneNumberChange"
              :maxLength="11"
            />
            <button type="button" :class="$style.authBtn" @click="sendAuthCode">
              인증번호 발송
            </button>
          </div>
          <span v-if="phoneNumberError" :class="$style.error">{{
            phoneNumberError
          }}</span>
        </div>
        <!-- 주소 필드 -->
        <div :class="[$style.line, $style.head]">주소</div>
        <div :class="[$style.line, $style.data, $style.addressWrapper]">
          <div>
            <Input
              size="187px"
              placeholder="주소"
              :value="address.zipcode"
              @input="handleZipcodeChange"
            />
            <button
              type="button"
              :class="[$style.signupBtn, $style.duplicatedBtn]"
              @click="searchAddress"
            >
              우편번호
            </button>
          </div>
          <div :class="$style.address">
            <Input
              size="400px"
              :value="address.address"
              @input="handleAddressChange"
            />
            <Input
              size="400px"
              :value="address.detail"
              @input="handleDetailChange"
            />
          </div>
          <div>
            <Input
              size="400px"
              :value="address.extra"
              @input="handleExtraChange"
            />
          </div>
          <span v-if="addressError" :class="$style.error">{{
            addressError
          }}</span>
        </div>
      </main>
    </form>
    <footer :class="$style.footer">
      <button
        :class="$style.confirmBtn"
        type="button"
        @click="moveToSignupPage()"
      >
        <!-- :disabled="!isFormValid" -->
        회원가입
      </button>
    </footer>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import Input from "#/common/Input.vue";
import IconMediumDownArrow from "#/icons/IconMediumDownArrow.vue";
import { AuthAPI } from "@/api/AuthAPI.js";

const { isDuplicateId } = AuthAPI();

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
const address = ref({
  zipcode: "",
  address: "",
  detail: "",
  extra: "",
});

const idError = ref(null);
const passwordError = ref(null);
const passwordConfirmError = ref(null);
const nameError = ref(null);
const birthdayError = ref(null);
const emailError = ref(null);
const phoneNumberError = ref(null);
const addressError = ref(null);

const emailOptionList = [
  { domain: "직접입력", index: 0 },
  { domain: "gmail.com", index: 1 },
  { domain: "yahoo.com", index: 2 },
  { domain: "outlook.com", index: 3 },
  { domain: "hotmail.com", index: 4 },
  { domain: "icloud.com", index: 5 },
  { domain: "naver.com", index: 6 },
  { domain: "daum.net", index: 7 },
  { domain: "kakao.com", index: 8 },
  { domain: "hanmail.net", index: 9 },
];

const selectedOption = ref("직접입력");
const showOption = ref(false);

const isFormValid = computed(() => {
  return (
    !idError.value &&
    !passwordError.value &&
    !passwordConfirmError.value &&
    !nameError.value &&
    !birthdayError.value &&
    !emailError.value &&
    !phoneNumberError.value &&
    !addressError.value &&
    id.value &&
    password.value &&
    passwordConfirm.value &&
    name.value &&
    birthday.value.year &&
    birthday.value.month &&
    birthday.value.date &&
    email.value.front &&
    email.value.back &&
    phoneNumber.value &&
    address.value.zipcode &&
    address.value.address &&
    address.value.detail &&
    address.value.extra
  );
});
const checkDuplicateId = async (id) => {
  // 유효성 검사 먼저 수행
  if (idError.value) {
    return alert(idError.value);
  }
  console.log("id : ", id);
  const data = await isDuplicateId(id);
  if (data) {
    alert("이미 사용 중인 아이디입니다.");
    idError.value = "이미 사용 중인 아이디입니다.";
  } else {
    idError.value = null;
    alert("사용 가능한 아이디입니다.");
  }
};

const searchAddress = () => {
  // Add logic to search for addresses using postal code
};

const moveToSignupPage = () => {
  // Validation checks
  idError.value = !id.value ? "아이디를 입력하세요." : null;
  passwordError.value = !password.value ? "비밀번호를 입력하세요." : null;
  passwordConfirmError.value =
    password.value !== passwordConfirm.value
      ? "비밀번호가 일치하지 않습니다."
      : null;
  nameError.value = !name.value ? "이름을 입력하세요." : null;
  console.log(birthday.value.year, birthday.value.month, birthday.value.date);
  console.log(birthdayError.value);
  handleBirthDayYearChange({ target: { value: birthday.value.year } });
  handleBirthDayMonthChange({ target: { value: birthday.value.month } });
  handleBirthDayDateChange({ target: { value: birthday.value.date } });
  emailError.value =
    !email.value.front || !email.value.back ? "이메일을 입력하세요." : null;
  phoneNumberError.value = !phoneNumber.value
    ? "휴대폰 번호를 입력하세요."
    : null;
  addressError.value =
    !address.value.zipcode ||
    !address.value.address ||
    !address.value.detail ||
    !address.value.extra
      ? "주소를 입력하세요."
      : null;

  // If all fields are valid, proceed with signup
  if (
    !idError.value &&
    !passwordError.value &&
    !passwordConfirmError.value &&
    !nameError.value &&
    !birthdayError.value &&
    !emailError.value &&
    !phoneNumberError.value &&
    !addressError.value
  ) {
    const birthdayValue = `${birthday.value.year}-${birthday.value.month}-${birthday.value.date}`;
    const emailValue = `${email.value.front}@${email.value.back}`;

    const signupForm = {
      LOGIN_ID: id.value,
      PASSWORD: password.value,
      USER_NAME: name.value,
      BIRTHDAY: birthdayValue,
      EMAIL: emailValue,
      PHONE_NUM: phoneNumber.value,
      ADDRESS: {
        NOMAL: address.value.address,
        ZIPCODE: address.value.zipcode,
        ADDRESS_DETAIL: address.value.detail,
        ADDRESS_EXTRA: address.value.extra,
      },
    };

    console.log(signupForm);
  }
};

const handleIdChange = ({ target }) => {
  // 입력값에서 영문 소문자와 숫자 이외의 문자 모두 제거
  let userId = target.value.replace(/[^a-z0-9가-힣]/gi, "").slice(0, 16);
  id.value = userId;

  // 유효성 검사
  if (userId.length < 4 || userId.length > 16) {
    idError.value = "아이디는 4자 이상 16자 이하로 입력하세요.";
  } else {
    idError.value = null;
  }
};

const handlePasswordChange = ({ target }) => {
  const newPassword = target.value;

  // 비밀번호가 비어있는지 확인
  if (!newPassword) {
    passwordError.value = "비밀번호를 입력하세요.";
  } else {
    // 비밀번호가 영문, 숫자, 특수문자를 포함하여 8자 이상인지 확인
    if (
      !/(?=.*[a-zA-Z])(?=.*\d)(?=.*[~`!@#$%\^&*()-+=])(?=.*[^\w\d\s]).{8,}/.test(
        newPassword
      )
    ) {
      passwordError.value =
        "영문, 숫자, 특수문자를 포함하여 8자 이상 입력하세요.";
    } else {
      passwordError.value = null;
    }
  }

  password.value = newPassword;
};

const handlePasswordConfirmChange = ({ target }) => {
  const newPasswordConfirm = target.value;

  // 비밀번호 확인이 비어있는지 확인
  if (!newPasswordConfirm) {
    passwordConfirmError.value = "비밀번호를 다시 입력하세요.";
  } else {
    // 입력한 비밀번호와 일치하는지 확인
    if (newPasswordConfirm !== password.value) {
      passwordConfirmError.value = "비밀번호가 일치하지 않습니다.";
    } else {
      passwordConfirmError.value = null;
    }
  }

  passwordConfirm.value = newPasswordConfirm;
};

const handleNameChange = ({ target }) => {
  name.value = target.value;
  nameError.value = null;
};

const handleBirthDayYearChange = ({ target }) => {
  const year = target.value;
  if (!year || !/^\d{4}$/.test(year)) {
    birthdayError.value = "올바른 연도를 입력하세요.";
  } else {
    birthday.value.year = year;
    birthdayError.value = null;
  }
};

const handleBirthDayMonthChange = ({ target }) => {
  const month = target.value;
  if (!month || !/^\d{1,2}$/.test(month) || month < 1 || month > 12) {
    birthdayError.value = "올바른 월을 입력하세요.";
  } else {
    birthday.value.month = month;
    birthdayError.value = null;
  }
};

const handleBirthDayDateChange = ({ target }) => {
  const date = target.value;
  if (!date || !/^\d{1,2}$/.test(date) || date < 1 || date > 31) {
    birthdayError.value = "올바른 일을 입력하세요.";
  } else {
    birthday.value.date = date;
    birthdayError.value = null;
  }
};

const handleEmailFrontChange = ({ target }) => {
  email.value.front = target.value;
  emailError.value = null;
};

const handleEmailBackChange = ({ target }) => {
  email.value.back = target.value;
  emailError.value = null;
};

const handleZipcodeChange = ({ target }) => {
  address.value.zipcode = target.value;
  addressError.value = null;
};
const handleAddressChange = ({ target }) => {
  address.value.address = target.value;
  addressError.value = null;
};
const handleDetailChange = ({ target }) => {
  address.value.detail = target.value;
  addressError.value = null;
};
const handleExtraChange = ({ target }) => {
  address.value.extra = target.value;
  addressError.value = null;
};

const clickDropDownOption = () => {
  showOption.value = !showOption.value;
};

const clickOptionEmailBack = (option) => {
  const selectOption = emailOptionList.find(
    (item) => item.domain === option.domain
  );

  if (selectOption) {
    email.value.back = selectOption.domain;
    selectedOption.value = selectOption.domain;
  }

  if (selectOption.index === 0) {
    email.value.back = null;
  }
};

const sendAuthCode = () => {
  if (phoneNumberError.value) {
    alert("유효한 휴대폰 번호를 입력하세요.");
    return;
  }
  // 인증번호 발송 로직
  console.log("인증번호 발송:", phoneNumber.value);
};
const handlePhoneNumberChange = ({ target }) => {
  let phone = target.value.replace(/[^\d]/g, "");
  phoneNumber.value = phone;

  // 유효성 검사
  if (!/^01[0-9]{8,9}$/.test(phone)) {
    phoneNumberError.value = "유효한 휴대폰 번호를 입력하세요.";
  } else {
    phoneNumberError.value = null;
  }

  // phoneNumber.value = target.value;
  // phoneNumberError.value = null;
};
</script>

<style src="@/assets/css/signup/Contents.css" module></style>