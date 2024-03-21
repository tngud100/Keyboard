<template>
  <div :class="$style.textBox">
    <span :class="$style.title">카테고리*</span>
    <div :class="$style.inputBox">
      <input type="text" placeholder="카테고리명" :class="$style.inputValue" />
    </div>
    <div :class="$style.addCategoryBtn" @click="addCategory">추가</div>
  </div>
  <div :class="$style.listBox">
    <div
      v-for="(item, index) in categoryList"
      :key="index"
      :class="$style.categoryBox"
    >
      <div :class="$style.inputBox" style="border: 0px">
        <input
          type="checkbox"
          v-model="item.isDefault"
          @change="openVerifyModal(item.isDefault)"
        />
        <input
          type="text"
          :class="$style.categoryName"
          :value="item.categoryName"
          disabled
        />
      </div>
      <div :class="$style.buttonBox">
        <button :class="$style.editBtn" @click="modifyCategory">수정</button>
        &nbsp;|&nbsp;
        <button :class="$style.editBtn" @click="modifyCategory">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from "@/store/useModalStore";
import { computed, watch } from "vue";

const store = useModalStore();

const openVerifyModal = (defaultState) => {
  store.setOpenVerifyModal(true);
  // 이부분에 설정은 됐으나 제대로 체크박스가 풀리지 않음
  defaultState = setDefaultState();
  console.log(defaultState, props.defaultState);
};

const isOpenVerifyModal = computed(() => modalStore.isOpenVerifyModal);

const props = defineProps({
  defaultState: Boolean,
});

const setDefaultState = () => {
  return props.defaultState === true ? true : false;
};

// 제대로 확인이 안됨.
watch(
  () => isOpenVerifyModal,
  () => {
    console.log(categoryList.isDefault);
  }
);

const categoryList = [
  {
    categoryName: "키캡",
    isDefault: false,
  },
  {
    categoryName: "키캡",
    isDefault: false,
  },
  {
    categoryName: "키캡",
    isDefault: false,
  },
];
</script>

<style src="@/assets/css/modal/EnrollCategory.css" module></style>
