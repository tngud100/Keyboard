<template>
  <section :class="$style.wrapper">
    <header :class="$style.header">
      <div :class="$style.headerSide">
        <input
          type="checkbox"
          :checked="shoppingBasket.isPicked"
          @change="$emit('checkedProduct', shoppingBasket.id)"
          :id="shoppingBasket.id"
        />
        <label :for="shoppingBasket.id" :class="$style.name">{{
          shoppingBasket.type
        }}</label>
      </div>
      <button type="button" @click="$emit('deletedProduct', shoppingBasket.id)">
        <IconGrayClose />
      </button>
    </header>
    <div :class="$style.content">
      <div :class="$style.contentSide">
        <h4 :class="$style.subName">{{ shoppingBasket.type }}</h4>
        <ul :class="$style.tagList">
          <li :class="$style.tagItem">{{ shoppingBasket.color }}</li>
          <li :class="$style.tagItem">제품</li>
          <li :class="$style.tagItem">옵션</li>
        </ul>
        <div :class="$style.price">
          <IconCurrency :style="{ width: '16.452px', height: '12.339px' }" />
          {{ shoppingBasket.price.toLocaleString() }}
        </div>
        <div :class="$style.dilvery">배송비 3,000원</div>
      </div>
      <div :class="$style.countWrapper">
        <button
          type="button"
          :class="$style.countBtn"
          :disabled="shoppingBasket.count === 1"
          @click="$emit('subtractedProduct', shoppingBasket.id)"
        >
          <IconMinusDisabled v-show="shoppingBasket.count === 1" />
          <IconMinus v-show="shoppingBasket.count !== 1" />
        </button>
        <div :class="$style.count">{{ shoppingBasket.count }}</div>
        <button
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

const { shoppingBasket } = defineProps({
  shoppingBasket: {
    type: Object,
    required: true,
  },
});
</script>

<style src="./ProductPicked.css" module></style>
