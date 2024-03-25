<template>
  <div :class="$style.container">
    <div :class="$style.textArea">
      <div :class="$style.textBox">
        <span :class="$style.title">상세 상품명*</span>
        <div :class="$style.inputBox">
          <input
            type="text"
            placeholder="카테고리명"
            :class="$style.inputValue"
            ref="inputCategory"
          />
        </div>
      </div>
      <div :class="$style.textBox">
        <span :class="$style.title">상세 상품 가격*</span>
        <div :class="$style.inputBox">
          <input
            type="text"
            placeholder="카테고리명"
            :class="$style.inputValue"
            ref="inputCategory"
          />
        </div>
      </div>
      <div :class="$style.textBox">
        <span :class="$style.title">상세 상품 재고*</span>
        <div :class="$style.inputBox">
          <input
            type="text"
            placeholder="카테고리명"
            :class="$style.inputValue"
            ref="inputCategory"
          />
        </div>
      </div>
    </div>
    <div :class="$style.addCategoryBtn" @click="addCategory">추가</div>
  </div>
  <div :class="$style.listBox">
    <div :class="$style.productBox">
      <div :class="$style.listCard">
        <div>
          <span :class="$style.categoryName">상품명</span>
          <span :class="$style.productPrice">가격</span>
          <span :class="$style.productStock">재고</span>
        </div>
        <div :class="$style.buttonBox">
          <span class="">기본값</span>
        </div>
      </div>
    </div>
    <div
      v-for="(item, index) in productDetailList"
      :key="index"
      :class="$style.productBox"
    >
      <div :class="$style.listCard" style="border: 0px">
        <input
          type="text"
          :class="$style.productName"
          :value="item.productName"
          :disabled="item.isDisabled"
          :style="{
            border: item.isDisabled ? 'none' : '1px solid #7e7e7e',
          }"
          @change="item.categoryName = $event.target.value"
        />
        <input
          type="text"
          :class="$style.productPrice"
          :value="item.productPrice"
          :disabled="item.isDisabled"
          :style="{
            border: item.isDisabled ? 'none' : '1px solid #7e7e7e',
          }"
          @change="item.categoryName = $event.target.value"
        />
        <input
          type="text"
          :class="$style.productStock"
          :value="item.productStock"
          :disabled="item.isDisabled"
          :style="{
            border: item.isDisabled ? 'none' : '1px solid #7e7e7e',
          }"
          @change="item.categoryName = $event.target.value"
        />
      </div>

      <div :class="$style.buttonBox">
        <button :class="$style.editBtn" @click="clickModifyBtn(index)">
          {{ item.isDisabled ? "기본값" : "" }}
        </button>

        &nbsp;{{ item.isDisabled ? "|" : "" }}&nbsp;
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
import { ref } from "vue";

const productDetailList = ref([
  {
    productName: "asd",
    productPrice: "1",
    productStock: "2",
    isDisabled: true,
  },
  {
    productName: "asd",
    productPrice: "1",
    productStock: "2",
    isDisabled: false,
  },
]);

const productName = ref("");
const productPrice = ref("");
const productStock = ref("");

const addProduct = () => {
  if (productName.value.trim() === "") {
    alert("상품명을 입력하세요.");
    return;
  }

  productList.value.push({
    name: productName.value,
    price: productPrice.value,
    stock: productStock.value,
    isDisabled: true, // 수정 상태인지 확인하기 위한 상태
  });

  // 입력 필드 초기화
  productName.value = "";
  productPrice.value = "";
  productStock.value = "";
};

const toggleEdit = (index) => {
  productList.value[index].isDisabled = !productList.value[index].isDisabled;
};

const deleteProduct = (index) => {
  productList.value.splice(index, 1);
};
</script>
<style src="@/assets/css/modal/EnrollProductDetail.css" module></style>
