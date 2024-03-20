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
          <EnrollCategory />
        </div>
      </div>

      <div :class="$style.footer">
        <button :class="$style.nextBtn" @click="nextModal">다음</button>
      </div>
      <!-- <button :class="$style.cancelBtn" @click="$emit('close', false)"></button> -->
    </div>
  </section>
</template>

<script setup>
import IconClose from "#/icons/IconClose.vue";
import EnrollProduct from "#/modal/EnrollProduct.vue";
import EnrollCategory from "#/modal/EnrollCategory.vue";
import { animateSlide } from "@/utils/anime.js";
import { onMounted, ref, useCssModule } from "vue";

const style = useCssModule();

const productEl = ref(null);
const categoryEl = ref(null);

const nextModal = () => {
  animateSlide(style.productEl, productEl, 0);
  animateSlide(style.categoryEl, categoryEl, 0);
};

onMounted(() => {
  // const calcRect = (el) => {
  //   const productElWidth = el.value.offsetWidth;
  //   return productElWidth;
  // };
});

const props = defineProps({
  item: Object,
});
</script>

<style src="@/assets/css/modal/Contents.css" module></style>
