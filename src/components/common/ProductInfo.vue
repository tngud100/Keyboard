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
      <ul class="productTypeList">
        <li
          v-for="type in productInfo.types"
          :key="type.id"
          class="productTypeItem"
          :class="currentType === type.name && 'active'"
          @click="updateSelectedType"
          :data-type="type.name"
        >
          {{ type.name }}
        </li>
      </ul>
    </div>
    <div class="productTypeInfo">
      <h4 class="productTypeTitle">색상</h4>
      <ul class="productTypeList">
        <li
          v-for="color in productInfo.colors"
          :key="color.id"
          class="productTypeItem"
          :class="currentColor === color.name && 'active'"
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
        :key="selectedProduct.id"
      >
        <h5 class="selectedProductTitle">
          {{ selectedProduct.type }}&nbsp;/&nbsp;{{ selectedProduct.color }}
          <button type="button" class="productRemoveBtn">
            <img :src="importedClose" alt="상품 제거" />
          </button>
        </h5>
        <div class="selectedProductPriceInfo">
          <div class="productCountWrapper">
            <button
              type="button"
              class="productCountBtn"
              @click="updateSubtractedCount(selectedProduct.id)"
              :disabled="selectedProduct.count === 1"
            >
              <img
                v-show="selectedProduct.count === 1"
                :src="importedMinusDisabled"
                alt="상품 빼기"
              />
              <img
                v-show="selectedProduct.count !== 1"
                :src="importedMinus"
                alt="상품 빼기"
              />
            </button>
            <div class="productCount">{{ selectedProduct.count }}</div>
            <button
              type="button"
              class="productCountBtn"
              @click="updateAddedCount(selectedProduct.id)"
            >
              <img :src="importedPlus" alt="상품 더하기" />
            </button>
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
        text="구매 바로가기"
        eventName="onPurchase"
        @onPurchase="purchaseProduct"
      />
      <Button
        text="장바구니 담기"
        eventName="onStore"
        @onStore="storeProduct"
      />
    </div>
    <!-- <div class="productPaymentMethod">
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
    </div> -->
  </section>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { v4 as uuidv4 } from "uuid";
import currency from "@/assets/images/currency.svg";
import share from "@/assets/images/share.svg";
import selectArrow from "@/assets/images/smallDownArrow.svg";
import naverPay from "@/assets/images/naverPay.svg";
import paypal from "@/assets/images/paypal.svg";
import close from "@/assets/images/close.svg";
import plus from "@/assets/images/plus.svg";
import minus from "@/assets/images/minus.svg";
import plusDisabled from "@/assets/images/plus_disabled.svg";
import minusDisabled from "@/assets/images/minus_disabled.svg";
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
const importedPlus = ref(plus);
const importedMinus = ref(minus);
const importedPlusDisabled = ref(plusDisabled);
const importedMinusDisabled = ref(minusDisabled);

const isShowingType = ref(false);
const isShowingColor = ref(false);
const currentColor = ref("");
const currentType = ref("");

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

const updateAddedCount = (id) => emit("addCount", { id });

const updateSubtractedCount = (id) => emit("subtractCount", { id });

const purchaseProduct = ({ event }) => {
  console.log(event);
};

const storeProduct = ({ event }) => {
  console.log(event);
};

const calcTotalPrice = (price, count) => formattedPrice(price * count);
</script>

<style scoped>
@import "./ProductInfo.css";
</style>
