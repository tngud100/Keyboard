<template>
  <section :class="$style.modal">
    <div :class="$style.background" @click="$emit('close', false)"></div>
    <div :class="$style.modalBox" @click.stop="">
      <div :class="$style.header">
        <span :class="$style.title">{{ item[0].title }}</span>
        <IconClose
          :class="$style.closeBtn"
          @click="$emit('close', false)"
        ></IconClose>
      </div>

      <div :class="$style.contents">
        <div :class="$style.productEl" ref="productEl">
          <EnrollProduct />
        </div>
        <div :class="$style.categoryEl" ref="categoryEl">
          <EnrollCategory :defaultState="defaultState" />
        </div>
      </div>

      <div :class="$style.footer">
        <button :class="$style.nextBtn" @click="nextModal">다음</button>
      </div>

      <!-- <button :class="$style.cancelBtn" @click="$emit('close', false)"></button> -->
      <CheckModal v-if="isOpenVerifyModal" @isVerifyState="isDefaultState" />
    </div>
  </section>
</template>

<script setup>
import IconClose from "#/icons/IconClose.vue";
import EnrollProduct from "#/modal/EnrollProduct.vue";
import EnrollCategory from "#/modal/EnrollCategory.vue";
import CheckModal from "#/modal/CheckModal.vue";
import { animateSlide } from "@/utils/anime.js";
import { computed, ref, useCssModule, watch } from "vue";

import { useModalStore } from "@/store/useModalStore";

const style = useCssModule();
const modalStore = useModalStore();

const productEl = ref(null);
const categoryEl = ref(null);
const isOpenVerifyModal = computed(() => modalStore.isOpenVerifyModal);
const defaultState = ref(false);

const props = defineProps({
  item: Object,
});

const isDefaultState = (isVerifyState) => {
  defaultState.value = isVerifyState;
};

const nextModal = () => {
  animateSlide(style.productEl, productEl, 0);
  animateSlide(style.categoryEl, categoryEl, 0);
};
</script>

<style src="@/assets/css/modal/Contents.css" module></style>
