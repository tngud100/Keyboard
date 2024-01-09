<template>
  <section class="productInfoWrapper">
    <header class="productInfoHeader">
      <div class="productInfo">
        <h2 class="productName">{{ productInfo.name }}</h2>
        <p class="productPrice">
          <img :src="importedCurrency" alt="화폐 단위" />{{
            formattedPrice(productInfo.price)
          }}
        </p>
      </div>
      <div class="shareBtnWrapper">
        <button type="button" class="shareBtn">
          <img :src="importedShare" alt="공유하기" />
        </button>
      </div>
    </header>
    <div class="productDeliveryInfo">
      <dl class="productDeliveryInfoList">
        <dt class="productDeliveryInfoItem productDeliveryInfoTerm">
          배송정보
        </dt>
        <dd class="productDeliveryInfoItem prouctDeliveryPlatformWrapper">
          <div class="prouctDeliveryPlatform">
            <span class="productDeliveryStrong">택배배송</span
            >&nbsp;|&nbsp;<span class="productDeliveryStrong">한진택배</span>
          </div>
          <p>1/10 도착 예정</p>
        </dd>
      </dl>
      <dl class="productDeliveryInfoList">
        <dt class="productDeliveryInfoItem productDeliveryInfoTerm">배송비</dt>
        <dd class="productDeliveryInfoItem">
          {{ formattedPrice(productInfo.deliveryPrice) }}원
        </dd>
      </dl>
    </div>
    <div class="productTypeInfo">
      <h4 class="productTypeTitle">상품 목록</h4>
      <div class="productTypeSelectBox" @click="toggleProductTypeSelectBox">
        {{ currentType || "상품" }}
        <img :src="importedSelctArrow" alt="목록 더보기" />
      </div>
      <ul v-show="isShowingType">
        <li
          v-for="type in productInfo.types"
          :key="type.id"
          class="productTypeItem"
          @click="updateSelectedType"
          :data-type="type.name"
        >
          {{ type.name }}
        </li>
      </ul>
    </div>
    <div class="productTypeInfo">
      <h4 class="productTypeTitle">색상</h4>
      <div class="productTypeSelectBox" @click="toggleProductColorSelectBox">
        {{ currentColor || "색상" }}
        <img :src="importedSelctArrow" alt="목록 더보기" />
      </div>
      <ul v-show="isShowingColor">
        <li
          v-for="color in productInfo.colors"
          :key="color.id"
          class="productTypeItem"
          @click="updateSelectedColor"
          :data-color="color.name"
        >
          {{ color.name }}
        </li>
      </ul>
    </div>
    <ul class="selectedProductList">
      <li
        v-for="selectedProduct in selectedProducts"
        class="selectedProductItem"
      >
        <h5 class="selectedProductTitle">
          {{ selectedProduct.type }}&nbsp;/&nbsp;{{ selectedProduct.color }}
          <img :src="importedClose" alt="상품 제거" />
        </h5>
        <div class="selectedProductPriceInfo">
          <div>
            <button type="button">-</button>
            <div>{{ selectedProduct.count }}</div>
            <button type="button">+</button>
          </div>
          <div class="totalPrice">
            <span class="totalPriceMoney">{{
              calcTotalPrice(selectedProduct.price, selectedProduct.count)
            }}</span
            >원
          </div>
        </div>
      </li>
    </ul>
    <div class="productPurchaseBtnWrapper">
      <Button
        type="primary"
        text="구매하기"
        eventName="onFirstClick"
        @onFirstClick="clickFirstBtn"
      />
      <Button
        text="장바구니 담기"
        eventName="onSecondClick"
        @onSecondClick="clickSecondBtn"
      />
    </div>
    <div class="productPaymentMethod">
      <button type="button" class="productPaymentBtn">
        <img
          :src="importedNaverPay"
          alt="네이버페이"
          class="productPaymentImg"
        />
      </button>
      <button type="button" class="productPaymentBtn">
        <img :src="importedPaypal" alt="페이팔" class="productPaymentImg" />
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, watchEffect, watch, watchPostEffect } from "vue";
import { v4 as uuidv4 } from "uuid";
import currency from "@/assets/images/currency.svg";
import share from "@/assets/images/share.svg";
import selectArrow from "@/assets/images/smallDownArrow.svg";
import naverPay from "@/assets/images/naverPay.svg";
import paypal from "@/assets/images/paypal.svg";
import close from "@/assets/images/close.svg";
import { formattedPrice } from "@/utils";
import Button from "#/common/Button.vue";

const { productInfo, selectedProducts } = defineProps([
  "productInfo",
  "selectedProducts",
]);

const emit = defineEmits();

const importedCurrency = ref(currency);
const importedShare = ref(share);
const importedSelctArrow = ref(selectArrow);
const importedNaverPay = ref(naverPay);
const importedPaypal = ref(paypal);
const importedClose = ref(close);

const isShowingType = ref(false);
const isShowingColor = ref(false);
const currentColor = ref("");
const currentType = ref("");

watch(
  currentColor,
  () => {
    console.log("watch");
  },
  { immediate: true }
);

watchEffect(() => {
  console.log("watchEffect");
});

watchPostEffect(() => {
  console.log("watchPostEffect");
});

watchEffect(() => {
  if (!currentColor.value || !currentType.value) return;

  emit("selectProduct", {
    id: uuidv4(),
    color: currentColor.value,
    type: currentType.value,
    price: productInfo.price,
  });
  resetCurrentTypeAndColor();
});

const resetCurrentTypeAndColor = () => {
  currentType.value = "";
  currentColor.value = "";
};

const toggleProductTypeSelectBox = () =>
  (isShowingType.value = !isShowingType.value);

const toggleProductColorSelectBox = () =>
  (isShowingColor.value = !isShowingColor.value);

const updateSelectedColor = ({ target }) => {
  currentColor.value = target.dataset.color;
  toggleProductColorSelectBox();
};

const updateSelectedType = ({ target }) => {
  currentType.value = target.dataset.type;
  toggleProductTypeSelectBox();
};

const clickFirstBtn = ({ event }) => {
  console.log(event);
};

const clickSecondBtn = ({ event }) => {
  console.log(event);
};

const calcTotalPrice = (price, count) => formattedPrice(price * count);
</script>

<style scoped>
@import "./ProductInfo.css";
</style>
