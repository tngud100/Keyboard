<template>
  <section :class="$style.wrapper">
    <header :class="$style.header">
      <div :class="$style.headerSide">
        <input
          v-if="type === 'normal'"
          type="checkbox"
          :checked="shoppingBasket.isPicked"
          @change="$emit('checkedProduct', shoppingBasket.id)"
          :id="shoppingBasket.id"
        />
        <label :for="shoppingBasket.id" :class="$style.name">{{
          shoppingBasket.productName
        }}</label>
      </div>
      <button
        v-if="type === 'normal'"
        type="button"
        @click="$emit('deletedProduct', shoppingBasket.id)"
      >
        <IconGrayClose />
      </button>
    </header>
    <div
      :class="[type == 'normal' ? $style.nomalContent : $style.multiContent]"
    >
      <div :class="$style.container">
        <div :class="$style.imgWrapper">
          <img
            :src="shoppingBasket.imgSrc"
            alt="상품 이미지"
            :class="$style.productImg"
          />
        </div>
        <div :class="$style.contentSide">
          <h4 :class="$style.subName">{{ itemData.detailName }}</h4>
          <ul :class="$style.tagList">
            <li
              v-for="(categoryName, index) in itemData.categoryName"
              :key="index"
              :class="$style.tagItem"
            >
              {{ categoryName }}
            </li>
          </ul>
          <div :class="$style.price">
            <IconCurrency :style="{ width: '16.452px', height: '12.339px' }" />
            {{ itemData.detailPrice.toLocaleString() }}
          </div>
          <div :class="$style.dilvery">배송비 3,000원</div>
        </div>
      </div>
      <div :class="$style.countWrapper">
        <button
          type="button"
          v-if="type === 'normal'"
          :class="$style.countBtn"
          :disabled="shoppingBasket.count === 1"
          @click="$emit('subtractedProduct', shoppingBasket.id)"
        >
          <IconMinusDisabled v-show="shoppingBasket.count === 1" />
          <IconMinus v-show="shoppingBasket.count !== 1" />
        </button>
        <div :class="$style.count">{{ shoppingBasket.count }}</div>
        <button
          v-if="type === 'normal'"
          type="button"
          :class="$style.countBtn"
          @click="$emit('addedProduct', shoppingBasket.id)"
        >
          <IconPlus />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import IconGrayClose from "#/icons/IconGrayClose.vue";
import IconCurrency from "#/icons/IconCurrency.vue";
import IconMinusDisabled from "#/icons/IconMinusDisabled.vue";
import IconMinus from "#/icons/IconMinus.vue";
import IconPlus from "#/icons/IconPlus.vue";
import { computed, ref } from "vue";

const { shoppingBasket } = defineProps({
  shoppingBasket: {
    type: Object,
    required: true,
  },
});

const type = computed(() =>
  shoppingBasket.isMultiIOption ? "represent" : "normal"
);

const itemData = computed(() => shoppingBasket.item);
</script>

<style src="@/assets/css/common/ProductPicked.css" module></style>
