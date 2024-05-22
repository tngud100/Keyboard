<template>
  <section :class="$style.wrapper">
    <form :class="$style.form" @submit.prevent="submit">
      <div :class="$style.askTypeBox">
        <div :class="$style.askLabel">문의 유형*</div>
        <div :class="$style.typeWrapper" @click="clickType">
          <div :class="$style.typeOption">
            {{ form.typeName ? form.typeName : "문의 유형 선택" }}
            <div>
              <IconMediumDownArrow />
            </div>
          </div>
          <div v-if="showType" :class="$style.dropDownTypeBox">
            <span
              v-for="item in typeList"
              :key="item.index"
              @click="selectType(item)"
              :class="$style.optionStyle"
            >
              {{ item.type }}
            </span>
          </div>
        </div>
        <div :class="$style.askTitle">
          <input
            type="text"
            placeholder="제목을 입력해주세요."
            @input="updateTitle"
            :value="form.title"
            :class="$style.askInput"
          />
        </div>
      </div>
      <TextArea
        :label="'문의 내용*'"
        @contentChange="updateContent"
        @fileChange="updateFiles"
      ></TextArea>

      <div :class="$style.btnBox">
        <button :class="$style.btn" type="button" @click="cancel">
          취소하기
        </button>
        <button :class="$style.btn" @click="submit">문의하기</button>
      </div>
    </form>
  </section>
</template>

<script setup>
import IconMediumDownArrow from "#/icons/IconMediumDownArrow.vue";
import TextArea from "@/components/myaskReview/TextArea.vue";
import { ref } from "vue";

const form = ref({
  typeName: "",
  title: "",
  content: "",
  files: [
    { file: null, preview: "" },
    { file: null, preview: "" },
    { file: null, preview: "" },
  ],
});

const typeList = ref([
  { type: "구매문의", index: 0 },
  { type: "취소문의", index: 1 },
  { type: "변경문의", index: 2 },
  { type: "반품문의", index: 3 },
  { type: "상품문의", index: 4 },
  { type: "기타문의", index: 5 },
]);
const showType = ref(false);
const emit = defineEmits(["isCancelWrite"]);

const clickType = () => {
  showType.value = !showType.value;
};

const selectType = (item) => {
  form.value.typeName = item.type;
};

const updateTitle = (event) => {
  form.value.title = event.target.value;
};

const updateContent = (content) => {
  form.value.content = content;
};

const updateFiles = (files) => {
  form.value.files = files;
};

const cancel = () => {
  emit("isCancelWrite");
  console.log("Form cancelled");
};

const submit = () => {
  console.log(form.value);
  // 폼 제출 로직을 여기에 추가합니다.
};
</script>

<style src="@/assets/css/myaskReview/WriteAsk.css" module></style>
