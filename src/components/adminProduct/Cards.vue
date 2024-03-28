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
    <!-- <div :class="$style.item">{{ item.productDetailList.name }}</div> -->
    <div :class="$style.smallLetterItem">{{ item.amount }}원</div>
    <div :class="$style.item">{{ item.createDate }}</div>
    <div :class="$style.smallLetterItem">{{ item.modifiedDate }}개</div>
    <div style="display: flex">
      <button :class="$style.iconBox">
        <writeIcon />
      </button>
      <button :class="$style.iconBox">
        <closeIcon />
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

import writeIcon from "#/icons/IconWrite.vue";
import closeIcon from "#/icons/IconClose.vue";

const props = defineProps({
  item: Object,
});
</script>

<style src="@/assets/css/adminProduct/Cards.css" module></style>
