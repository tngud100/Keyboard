<template>
  <div :class="$style.container">
    <div
      v-for="(item, index) in productList"
      :key="index"
      :class="$style.productCard"
      @click="enrollProductMainPic"
    >
      <div :class="$style.imgBox">
        <img :src="item.representImg" alt="대표사진" :class="$style.img" />
      </div>
      <div :class="$style.product">
        <div :class="$style.productName">
          {{ item.name }}
        </div>
      </div>
      <div :class="$style.product">
        <div :class="$style.cardTitle">상세 상품 수</div>
        <div :class="$style.cardContent">{{ item.detailList.length }}개</div>
      </div>
      <div :class="$style.product">
        <div :class="$style.cardTitle">상품 가격</div>
        <div :class="$style.cardContent">
          {{ item.amount }}
        </div>
      </div>
      <div :class="$style.product">
        <div :class="$style.cardTitle">상품 종류</div>
        <div :class="$style.cardContent">
          {{ item.type }}
        </div>
      </div>
      <div :class="$style.product">
        <div :class="$style.cardTitle">상품 등록일</div>
        <div :class="$style.cardContent">
          {{ item.createDate }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getProductAPI } from "@/api/ProductGetDataAPI.js";
import { ref } from "vue";

const enrollProductMainPic = () => {};

const { getProductList } = getProductAPI();

const productList = ref([]);

const fetchProductList = async () => {
  const data = await getProductList(); // api.js의 getProductList 함수 호출
  for (var i = 0; i < data.value.length; i++) {
    if (data.value[i].mainPicState === 0) {
      productList.value.push(data.value[i]);
    }
  }
};

fetchProductList();
</script>

<style src="@/assets/css/modal/EnrollProductMain.css" module>
</style>