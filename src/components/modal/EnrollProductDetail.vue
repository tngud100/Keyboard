<template>
  <div :class="$style.container">
    <div :class="$style.textArea">
      <div :class="$style.textBox">
        <span :class="$style.title">상세 상품명*</span>
        <div :class="$style.inputBox">
          <input
            type="text"
            placeholder="상세 상품명을 입력하세요."
            :class="$style.inputValue"
            ref="productName"
          />
        </div>
      </div>
      <div :class="$style.textBox">
        <span :class="$style.title">상세 상품 가격*</span>
        <div :class="$style.inputBox">
          <input
            type="text"
            placeholder="상세 상품 가격을 입력하세요."
            :class="$style.inputValue"
            ref="productPrice"
          />
        </div>
      </div>
      <div :class="$style.textBox">
        <span :class="$style.title">상세 상품 재고*</span>
        <div :class="$style.inputBox">
          <input
            type="text"
            placeholder="상세 상품 재고를 입력하세요."
            :class="$style.inputValue"
            ref="productStock"
          />
        </div>
      </div>
    </div>
    <div :class="$style.addCategoryBtn" @click="addProduct">추가</div>
  </div>
  <div :class="$style.listBox">
    <div :class="$style.productBox">
      <div :class="$style.listCard">
        <div :class="$style.titleBox">
          <span :class="$style.productName">상품명</span>
          <span :class="$style.productPrice">가격</span>
          <span :class="$style.productStock">재고</span>
        </div>
      </div>
      <div :class="$style.buttonBox">
        <span class="">기본값</span>
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
          @change="item.productName = $event.target.value"
        />
        <input
          type="text"
          :class="$style.productPrice"
          :value="item.productPrice"
          :disabled="item.isDisabled"
          :style="{
            border: item.isDisabled ? 'none' : '1px solid #7e7e7e',
          }"
          @change="item.productPrice = $event.target.value"
        />
        <input
          type="text"
          :class="$style.productStock"
          :value="item.productStock"
          :disabled="item.isDisabled"
          :style="{
            border: item.isDisabled ? 'none' : '1px solid #7e7e7e',
          }"
          @change="item.productStock = $event.target.value"
        />
      </div>

      <div :class="$style.buttonBox">
        <input
          v-if="item.isDisabled"
          type="checkbox"
          :checked="item.isDefault"
          @change="setDefaultValue(index)"
          disabled
        />
        <button :class="$style.editBtn" @click="clickDefaultBtn(index)">
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
import { ref, watch, defineEmits, defineProps } from "vue";
import { useModalStore } from "@/store/useModalStore";

const store = useModalStore();

const productDetailList = ref([
  {
    productName: "asd",
    productPrice: "1",
    productStock: "2",
    isDisabled: true,
    isDefault: true,
  },
  {
    productName: "vcc",
    productPrice: "12",
    productStock: "123",
    isDisabled: true,
    isDefault: false,
  },
]);
const emit = defineEmits(["commentCode"]);

const props = defineProps({
  defaultState: Boolean,
  categoryItem: {
    productName: String,
    productCategoryName: String,
    isDefault: Boolean,
  },
  page: Number,
});

const productName = ref(null);
const productPrice = ref(null);
const productStock = ref(null);

const productIdx = ref(null);

const verifyModalCode = ref(null);

const addProduct = () => {
  let isDefault = false;
  if (
    productName.value.value === "" ||
    productPrice.value.value === "" ||
    productStock.value.value === ""
  ) {
    alert("모든 항목을 입력해주세요.");
    return;
  }

  if (productDetailList.value.length === 0) {
    isDefault = true;
  }

  productDetailList.value.push({
    productName: productName.value.value,
    productPrice: productPrice.value.value.endsWith("원")
      ? productPrice.value.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : productPrice.value.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원",
    productStock: productStock.value.value.endsWith("개")
      ? productStock.value.value
      : productStock.value.value + "개",
    isDisabled: true, // 수정 상태인지 확인하기 위한 상태
    isDefault: isDefault, // 기본값인지 확인하기 위한 상태
  });

  // 입력 필드 초기화
  productName.value.value = "";
  productPrice.value.value = "";
  productStock.value.value = "";
};

const updateProduct = (index) => {
  toggleEdit(index);
  const updateDetailList = productDetailList.value[index],
    { productName, productPrice, productStock } = updateDetailList;
  updateDetailList.productName = productName;
  updateDetailList.productPrice = productPrice.endsWith("원")
    ? productPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : productPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
  updateDetailList.productStock = productStock.endsWith("개")
    ? productStock
    : productStock + "개";

  productDetailList.value.splice(index, 1, updateDetailList);
  productDetailList.value = [...productDetailList.value];
};

const clickModifyBtn = (index) => {
  verifyModalCode.value = 5;
  if (productDetailList.value[index].isDisabled) {
    toggleEdit(index);
  } else {
    openVerifyModal(index, verifyModalCode.value);
  }
};
const toggleEdit = (index) => {
  productDetailList.value[index].isDisabled =
    !productDetailList.value[index].isDisabled;
};

const clickDefaultBtn = (index) => {
  verifyModalCode.value = 4;
  if (productDetailList.value[index].isDisabled) {
    openVerifyModal(index, verifyModalCode.value);
  }
};
const setDefaultValue = (index, isDefault) => {
  productDetailList.value.forEach((item) => {
    item.isDefault = false;
  });
  productDetailList.value[index].isDefault = isDefault;
};

const openVerifyModal = (index, verifyModalCode) => {
  store.setOpenVerifyModal(true);
  emit("commentCode", verifyModalCode);
  productIdx.value = index;
};

const clickDeleteBtn = (index) => {
  verifyModalCode.value = 6;
  openVerifyModal(index, verifyModalCode.value);
};

const deleteProduct = (index) => {
  productDetailList.value.splice(index, 1);
};

watch(
  () => store.isOpenVerifyModal,
  (newValue) => {
    if (newValue) {
      return;
    }
    if (props.page !== 3) {
      return;
    }

    if (verifyModalCode.value === 4 && props.defaultState) {
      setDefaultValue(productIdx.value, props.defaultState);
    } else if (verifyModalCode.value === 5 && props.defaultState) {
      updateProduct(productIdx.value);
    } else if (verifyModalCode.value === 6 && props.defaultState) {
      deleteProduct(productIdx.value);
    }
  }
);
</script>
<style src="@/assets/css/modal/EnrollProductDetail.css" module></style>
