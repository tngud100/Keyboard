<template>
  <div :class="$style.productList">
    <img
      :src="item.representImg"
      alt="Product Image"
      :class="$style.productRepresentImg"
    />
    <div :class="$style.item">{{ item.name }}</div>
    <div :class="$style.smallLetterItem">{{ item.type }}</div>
    <div :class="$style.smallLetterItem">{{ item.category }}</div>
    <div :class="$style.detailAndCategoryItem">
      <div v-for="detail in item.detailList" :key="detail">
        {{ detail.productDetailList.name }}
      </div>
    </div>
    <div :class="$style.detailAndCategoryItem">
      <div v-for="(detailList, index) in item.detailList" :key="index">
        {{ detailList.productDetailList.category }}
      </div>
    </div>
    <div :class="$style.smallLetterItem">{{ item.amount }}원</div>
    <div :class="$style.item">{{ item.createDate }}</div>
    <div :class="$style.smallLetterItem">{{ item.modifiedDate }}</div>
    <div style="display: flex">
      <button @click="modifyBtn" :class="$style.iconBox">
        <writeIcon />
      </button>
      <button @click="deleteBtn" :class="$style.iconBox">
        <closeIcon />
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

import writeIcon from "#/icons/IconWrite.vue";
import closeIcon from "#/icons/IconClose.vue";

const emit = defineEmits(["clickModifyBtn"]);

const props = defineProps({
  item: Object,
});

const modifyBtn = () => {
  emit("clickModifyBtn", props.item);
  console.log(props.item);
};
const deleteBtn = () => {
  // emit("clickModifyBtn", props.item);
  // console.log(props.item);
};
</script>

<style src="@/assets/css/adminProduct/Cards.css" module></style>
