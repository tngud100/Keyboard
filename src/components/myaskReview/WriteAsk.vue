<template>
  <section :class="$style.wrapper">
    <form :class="$style.form">
      <div :class="$style.askTypeBox">
        <div :class="$style.askLabel">문의 유형*</div>
        <div :class="$style.typeOption" @click="showType != showType">
          <div :class="$style.typeWrapper">
            {{ form.typeName ? form.typeName : "문의 유형 선택" }}
            <div>
              <IconMediumDownArrow />
            </div>
          </div>
          <div v-if="showType == true" :class="$style.dropDownTypeBox">
            <span
              v-for="item in typeList"
              :key="item.index"
              @click="selectType(type)"
              :class="$style.optionStyle"
            ></span>
          </div>
        </div>
        <div :class="$style.askInput">
          <input type="text" placeholder="제목을 입력해주세요." :value="form.title" :class="$style.askTitle" />
        </div>
      </div>

      <div :class="$style.askContentBox">
        <div :class="$style.askLabel">문의 내용*</div>
        <div>
          <div :class="$style.askContent">
            <input type="text" :value="form.content" :class="$style.askContentInput"/>
          </div>
          <input type="file" />
          <div></div>
        </div>
      </div>
      <div :class="$style.btnBox">
        <button :class="$style.btn" type="submit">취소하기</button>
        <button :class="$style.btn" type="submit">문의하기</button>
      </div>
    </form>
  </section>
</template>

<script setup>
import IconMediumDownArrow from "#/icons/IconMediumDownArrow.vue";
import { ref } from "vue";

const showType = ref(false);
const form = ref({
  typeName: "",
  title: "",
  content: "",
  file: "",
});

const typeList = ref([
  {
    type: "구매문의",
    index: 0,
  },
  {
    type: "취소문의",
    index: 1,
  },
  {
    type: "변경문의",
    index: 2,
  },
  {
    type: "반품문의",
    index: 3,
  },
  {
    type: "상품문의",
    index: 4,
  },
  {
    type: "기타문의",
    index: 5,
  },
]);
const selectType = (type) => {
  showType.value = !showType.value;
};
</script>

<style src="@/assets/css/myaskReview/WriteAsk.css" module></style>