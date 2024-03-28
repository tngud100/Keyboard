<template>
  <div :class="$style.container">
    <span :class="$style.title">상품</span>
    <ul :class="$style.nav">
      <li
        :class="[navState === 0 ? $style.selected : '']"
        @click="selectIndex(0)"
      >
        화보상품 설정
      </li>
      <li
        :class="[navState === 1 ? $style.selected : '']"
        @click="selectIndex(1)"
      >
        상품 등록
      </li>
      <li
        :class="[navState === 2 ? $style.selected : '']"
        @click="selectIndex(2)"
      >
        상품 내역
      </li>
    </ul>
    <div :class="$style.wrapper">
      <Card
        v-for="(item, index) in productList"
        :key="index"
        :item="item"
        :class="$style.productList"
      />
      <button
        :class="$style.addBtn"
        @mouseover="handleHover(true)"
        @mouseleave="handleHover(false)"
        @click="changeModalState"
      >
        <IconPlus v-if="iconHover" :class="$style.addBtnImg" />
        <IconPlusDisabled v-else :class="$style.addBtnImg" />
      </button>

      <modal v-if="modalState" :item="item" @close="changeModalState" />
    </div>
  </div>
</template>

<script setup>
import keyboardImg from "@/assets/images/product.png";
import Card from "@/components/adminProduct/Cards.vue";
import IconPlus from "#/icons/IconPlus.vue";
import IconPlusDisabled from "#/icons/IconPlusDisabled.vue";
import modal from "#/modal/Contents.vue";
import { getProductList, getProductDetailList } from "@/api/adminHomeAPI.js";
import { ref } from "vue";

const navState = ref(1);
const iconHover = ref(false);

const modalState = ref(false);

const changeModalState = () => {
  modalState.value = !modalState.value;
  if (modalState.value === true) {
    document.body.style.overflow = "hidden";
    return;
  }
  document.body.style.overflow = "auto";
};

const handleHover = (value) => {
  iconHover.value = value;
};

const selectIndex = (value) => {
  navState.value = value;
};

const item = [
  {
    title: "상품등록",
  },
];

const productList = ref([]);
const productDetail = ref([]);

const fetchProductList = async () => {
  const data = await getProductList(); // api.js의 getProductList 함수 호출
  if (data) {
    data.forEach((item) => {
      fetchProductDetailList(item.product_id);
      productList.value.push({
        productId: item.product_id,
        mainImg: item.main_picture,
        representImg: item.represent_picture,
        listImg: item.list_picture,
        listBackImg: item.list_back_picture,
        descImg: item.desc_picture,
        mainPicState: item.main_pic_state,
        name: item.name,
        type: item.type,
        amount: item.amount,
        createDate: item.create_date,
        modifiedDate: item.modified_date,
        productDetailList: productDetail.value, // productId === productDetail.productId가 같을시 데이터 삽입
      });
    });
    console.log("productList", productList.value);
  }
};

const fetchProductDetailList = async (productId) => {
  const data = await getProductDetailList(productId);
  if (data) {
    data.forEach((item) => {
      productDetail.value.push({
        productDetailList: {
          productDetailId: item.product_detail_id,
          productId: item.product_id,
          productCategoryId: item.product_category_id,
          category: item.category_name,
          name: item.name,
          amount: item.amount,
          default: item.default_state,
          stock: item.stock,
          soldStock: item.sold_stock,
          faultyState: item.faulty_state,
          createDate: item.create_date,
          modifiedDate: item.modified_date,
          isDelete: item.isdelete,
        },
      });
    });
  }
};

fetchProductList();
</script>

<style src="@/assets/css/adminHome/Contents.css" module></style>
