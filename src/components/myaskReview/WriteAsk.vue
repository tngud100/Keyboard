<template>
  <section :class="$style.wrapper">
    <form :class="$style.form">
      <div :class="$style.askTypeBox">
        <div :class="$style.typeLabel">문의 유형*</div>
        <div :class="$style.typeOption" @click="showType != showType">
          {{ form.typeName ? form.typeName : "문의 유형 선택" }}
          <div>
            <IconMediumDownArrow />
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
          <input type="text" v-model="form.title" />
        </div>
      </div>

      <div>
        <div>문의 내용*</div>
        <div>
          <div>
            <input type="text" v-model="form.content" />
          </div>
          <div>첨부파일</div>
          <input type="file" />
        </div>
      </div>
      <button type="submit">문의하기</button>
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