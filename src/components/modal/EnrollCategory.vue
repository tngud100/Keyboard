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
          @click="clickDefaultBox(index)"
        />
        <input
          type="text"
          :class="$style.categoryName"
          :value="item.categoryName"
          :disabled="item.isDisabled"
          :style="{
            border: item.isDisabled ? 'none' : '1px solid #7e7e7e',
          }"
          @change="item.categoryName = $event.target.value"
        />
      </div>
      <div :class="$style.buttonBox">
        <button :class="$style.editBtn" @click="clickModifyBtn(index)">
          {{ item.isDisabled ? "수정" : "확인" }}
        </button>

        &nbsp;{{ item.isDisabled ? "|" : "" }}&nbsp;
        <button :class="$style.editBtn" @click="clickDeleteBtn(index)">
          {{ item.isDisabled ? "삭제" : "" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from "@/store/useModalStore";
import { computed, ref, watch } from "vue";

const store = useModalStore();

const categoryListIdx = ref(null);
const isOpenVerifyModal = computed(() => store.isOpenVerifyModal);
const emit = defineEmits(["commentCode"]);

const verifyModalCode = ref(null);

const props = defineProps({
  defaultState: Boolean,
});

const inputCategory = ref(null);
const categoryList = ref([]);

const addCategory = () => {
  const categoryName = inputCategory.value;

  if (categoryName.value === "") {
    alert("카테고리명을 입력해주세요");
    return;
  }
  for (let i = 0; i < categoryList.value.length; i++) {
    if (categoryList.value[i].categoryName === categoryName.value) {
      alert("중복된 카테고리 이름은 사용이 불가합니다.");
      return;
    }
  }

  if (categoryList.value.length >= 10) {
    alert("카테고리는 10개까지만 추가 가능합니다.");
    return;
  }

  if (categoryList.value.length === 0) {
    categoryList.value.push({
      categoryName: categoryName.value,
      isDefault: true,
      isDisabled: true,
    });
    inputCategory.value.value = "";
    return;
  }

  if (categoryName) {
    categoryList.value.push({
      categoryName: categoryName.value,
      isDefault: false,
      isDisabled: true,
    });
    inputCategory.value.value = "";
  }
};

const clickDefaultBox = (index) => {
  verifyModalCode.value = 0;
  openVerifyModal(index, verifyModalCode.value);
};
const clickModifyBtn = (index) => {
  if (!categoryList.value[index].isDisabled) {
    verifyModalCode.value = 1;
    openVerifyModal(index, 1);
    return;
  }

  categoryList.value[index].isDisabled = !categoryList.value[index].isDisabled;
};
const clickDeleteBtn = (index) => {
  verifyModalCode.value = 2;
  openVerifyModal(index, verifyModalCode.value);
};

const setDefaultState = (index) => {
  categoryList.value[index].isDefault = props.defaultState;
};
const setCategoryName = (index, changeStr) => {
  if (changeStr === "") {
    alert("카테고리명을 입력해주세요");
    return;
  }

  for (let i = 0; i < categoryList.value.length; i++) {
    if (changeStr === categoryList.value[i].categoryName && i !== index) {
      alert("중복된 카테고리 이름은 사용이 불가합니다.");
      return;
    }
  }

  const updatedCategory = {
    ...categoryList.value[index],
    isDisabled: !categoryList.value[index].isDisabled,
    categoryName: changeStr,
  };

  categoryList.value.splice(index, 1, updatedCategory);
  categoryList.value = [...categoryList.value];
};
const deleteCategory = (index) => {
  categoryList.value.splice(index, 1);
};

const openVerifyModal = (index, commentCode) => {
  store.setOpenVerifyModal(true);
  emit("commentCode", commentCode);
  categoryListIdx.value = index;
};

watch(isOpenVerifyModal, (newValue) => {
  console.log(verifyModalCode, props.defaultState);
  if (newValue === false && verifyModalCode.value === 0) {
    setDefaultState(categoryListIdx.value);
  }
  if (newValue === false && verifyModalCode.value === 1 && props.defaultState) {
    setCategoryName(
      categoryListIdx.value,
      categoryList.value[categoryListIdx.value].categoryName
    );
  }
  if (newValue === false && verifyModalCode.value === 2 && props.defaultState) {
    deleteCategory(categoryListIdx.value);
  }
});
</script>

<style src="@/assets/css/modal/EnrollCategory.css" module></style>
