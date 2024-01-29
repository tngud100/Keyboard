<template>
  <section :class="$style.wrapper">
    <header :class="$style.header">
      <div :class="$style.info">
        <h2 :class="$style.name">{{ productInfo.name }}</h2>
        <p :class="$style.price">
          <IconCurrency />
          {{ formattedPrice(productInfo.price) }}
        </p>
      </div>
      <div :class="$style.shareBtnWrapper">
        <button type="button" :class="$style.shareBtn">
          <IconShare />
        </button>
      </div>
    </header>
    <div :class="$style.deliveryInfo">
      <dl :class="$style.deliveryInfoList">
        <dt :class="[$style.deliveryInfoItem, $style.deliveryInfoTerm]">
          배송정보
        </dt>
        <dd :class="[$style.deliveryInfoItem, $style.deliveryPlatformWrapper]">
          <div :class="$style.deliveryPlatform">
            <span :class="$style.deliveryStrong">택배배송</span
            >&nbsp;|&nbsp;<span :class="$style.deliveryStrong">한진택배</span>
          </div>
          <p>1/10 도착 예정</p>
        </dd>
      </dl>
      <dl :class="$style.deliveryInfoList">
        <dt :class="[$style.deliveryInfoItem, $style.deliveryInfoTerm]">
          배송비
        </dt>
        <dd :class="$style.deliveryInfoItem">
          {{ formattedPrice(productInfo.deliveryPrice) }}원
        </dd>
      </dl>
    </div>
    <div :class="$style.characterInfo">
      <h4 :class="$style.characterTitle">상품 목록</h4>
      <ul :class="$style.characterList">
        <li
          v-for="type in productInfo.types"
          :key="type.id"
          :class="[
            $style.characterItem,
            currentType === type.name && $style.active,
          ]"
          @click="updateSelectedType"
          :data-type="type.name"
        >
          {{ type.name }}
        </li>
      </ul>
    </div>
    <div :class="$style.characterInfo">
      <h4 :class="$style.characterTitle">색상</h4>
      <ul :class="$style.characterList">
        <li
          v-for="color in productInfo.colors"
          :key="color.id"
          :class="[
            $style.characterItem,
            currentColor === color.name && $style.active,
          ]"
          @click="updateSelectedColor"
          :data-color="color.name"
        >
          {{ color.name }}
        </li>
      </ul>
    </div>
    <ul :class="$style.selectedProductList">
      <li
        v-for="selectedProduct in selectedProducts"
        :class="$style.selectedProductItem"
        :key="selectedProduct.id"
      >
        <h5 :class="$style.selectedProductTitle">
          {{ selectedProduct.type }}&nbsp;/&nbsp;{{ selectedProduct.color }}
          <button type="button" :class="$style.removeBtn">
            <IconClose />
          </button>
        </h5>
        <div :class="$style.selectedProductPriceInfo">
          <div :class="$style.countWrapper">
            <button
              type="button"
              :class="$style.countBtn"
              @click="updateSubtractedCount(selectedProduct.id)"
              :disabled="selectedProduct.count === 1"
            >
              <IconMinusDisabled v-show="selectedProduct.count === 1" />
              <IconMinus v-show="selectedProduct.count !== 1" />
            </button>
            <div :class="$style.count">{{ selectedProduct.count }}</div>
            <button
              type="button"
              :class="$style.countBtn"
              @click="updateAddedCount(selectedProduct.id)"
            >
              <IconPlus />
            </button>
          </div>
          <div :class="$style.totalPrice">
            <span :class="$style.totalPriceStrong">{{
              calcTotalPrice(selectedProduct.price, selectedProduct.count)
            }}</span
            >원
          </div>
        </div>
      </li>
    </ul>
    <div :class="$style.purchaseBtnWrapper">
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
  </section>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { v4 as uuidv4 } from "uuid";
import { formattedPrice } from "@/utils";
import Button from "#/common/Button.vue";
import IconCurrency from "#/icons/IconCurrency.vue";
import IconShare from "#/icons/IconShare.vue";
import IconMinusDisabled from "#/icons/IconMinusDisabled.vue";
import IconMinus from "#/icons/IconMinus.vue";
import IconClose from "#/icons/IconClose.vue";
import IconPlus from "#/icons/IconPlus.vue";
import { useRouter } from "vue-router";

const { productInfo, selectedProducts } = defineProps({
  productInfo: {
    type: Object,
    required: true,
  },
  selectedProducts: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits([
  "selectProduct",
  "addCount",
  "subtractCount",
  "addShoppingBasket",
  "onStore",
]);

const isShowingType = ref(false);
const isShowingColor = ref(false);
const currentColor = ref("");
const currentType = ref("");

const router = useRouter();

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
  router.push("/order");
};

const storeProduct = () => {
  emit("addShoppingBasket");
};

const calcTotalPrice = (price, count) => formattedPrice(price * count);
</script>

<style src="./ProductInfo.css" module></style>
