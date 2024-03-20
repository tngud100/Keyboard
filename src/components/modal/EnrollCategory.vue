<template>
  <div :class="$style.textBox">
    <span :class="$style.title">카테고리*</span>
    <div :class="$style.inputBox">
      <input type="text" placeholder="카테고리명" :class="$style.inputValue" />
    </div>
    <div :class="$style.enrollCategoryBtn" @click="enrollCategory">추가</div>
  </div>
  <div :class="$style.listBox">
    <div
      v-for="(item, index) in categoryList"
      :key="index"
      :class="$style.categoryBox"
    >
      <div :class="$style.inputBox" style="border:0px">
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
const categoryList = [
  {
    categoryName: "키캡",
  },{
    categoryName: "키캡",
  },{
    categoryName: "키캡",
  },{
    categoryName: "키캡",
  },
]
</script>

<style src="@/assets/css/modal/EnrollCategory.css" module></style>
