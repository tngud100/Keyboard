<template>
  <div :class="$style.textBox">
    <span :class="$style.title">카테고리*</span>
    <div :class="$style.inputBox">
      <input
        type="text"
        placeholder="카테고리명"
        :class="$style.inputValue"
        ref="inputCategory"
      />
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
          @click="openVerifyModal(index)"
        />
        <input
          type="text"
          :class="$style.categoryName"
          :value="item.categoryName"
          :disabled="item.isDisabled"
          :style="{
            border: item.isDisabled ? 'none' : '1px solid #7e7e7e',
          }"
        />
      </div>
      <div :class="$style.buttonBox">
        <button :class="$style.editBtn" @click="modifyCategory(index)">
          수정
        </button>
        &nbsp;|&nbsp;
        <button :class="$style.editBtn" @click="deleteCategory(index)">
          삭제
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from "@/store/useModalStore";
import { computed, ref, watch } from "vue";

const store = useModalStore();

const checkBoxIdx = ref(null);

const isOpenVerifyModal = computed(() => store.isOpenVerifyModal);

const props = defineProps({
  defaultState: Boolean,
});

const inputCategory = ref(null);

const categoryList = ref([
  {
    categoryName: "키캡",
    isDefault: false,
    isDisabled: true,
  },
  {
    categoryName: "키캡",
    isDefault: false,
    isDisabled: true,
  },
  {
    categoryName: "키캡",
    isDefault: false,
    isDisabled: true,
  },
]);

const addCategory = () => {
  const categoryName = inputCategory.value;

  for (let i = 0; i < categoryList.value.length; i++) {
    if (categoryList.value[i].categoryName === categoryName.value) {
      alert("중복된 카테고리 이름은 사용이 불가합니다.");
      return;
    }
    console.log(categoryList.value[i].categoryName);
  }

  if (categoryName) {
    categoryList.value.push({
      categoryName: categoryName.value,
      isDefault: false,
    });
    inputCategory.value.value = "";
  }
};

const modifyCategory = (index) => {
  const category = categoryList.value[index];
  category.isDisabled = !category.isDisabled;
  console.log(category.isDisabled);
};

const openVerifyModal = (index) => {
  store.setOpenVerifyModal(true);
  checkBoxIdx.value = index;
};

watch(isOpenVerifyModal, (newValue) => {
  if (newValue === false) {
    categoryList.value[checkBoxIdx.value].isDefault = props.defaultState;
  }
});
</script>

<style src="@/assets/css/modal/EnrollCategory.css" module></style>
