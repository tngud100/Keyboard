<template>
  <li :class="$style.productItem" @click="clickProduct">
    <div v-if="isNormalType" :class="$style.imgWrapper">
      <img :src="backgroundImg" alt="배경 이미지" :class="$style.normalImg" />
    </div>
    <div v-else :class="$style.imgWrapper" ref="imgWrapperRef">
      <img
        :src="backgroundImg"
        alt="배경 이미지"
        :class="$style.backgroundImg"
        ref="backgroundRef"
      />
      <img
        :src="productImg"
        alt="상품 이미지"
        :class="$style.productImg"
        ref="productRef"
      />
    </div>
    <div :class="$style.infoWrapper">
      <h3 :class="$style.name">{{ name }}</h3>
      <p :class="$style.price">
        <IconCurrency :style="{ width: '17.33px', height: '13px' }" />{{
          price.toLocaleString()
        }}
      </p>
    </div>
  </li>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import IconCurrency from "#/icons/IconCurrency.vue";

const TYPE = {
  NORMAL: "normal",
};

const { type, id } = defineProps({
  type: {
    type: String,
  },
  id: {
    type: Number,
    required: true,
  },
  productImg: {
    type: String,
  },
  backgroundImg: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["click"]);

const imgWrapperRef = ref(null);
const backgroundRef = ref(null);
const productRef = ref(null);

const isNormalType = computed(() => type === TYPE.NORMAL);

const clickProduct = () => emit("click", id);

const mouseenterImgCallback = () => {
  backgroundRef.value.style.filter = "blur(1px)";
  productRef.value.style.width = "85%";
  backgroundRef.value.style.borderRadius = "13px";
};

const mouseleaveImgCallback = () => {
  backgroundRef.value.style.filter = "blur(0px)";
  productRef.value.style.width = "75%";
  backgroundRef.value.style.borderRadius = "0px";
};

onMounted(() => {
  if (!imgWrapperRef.value) {
    return;
  }

  imgWrapperRef.value.addEventListener("mouseenter", mouseenterImgCallback);
  imgWrapperRef.value.addEventListener("mouseleave", mouseleaveImgCallback);
});

onBeforeUnmount(() => {
  if (!imgWrapperRef.value) {
    return;
  }

  imgWrapperRef.value.removeEventListener("mouseenter", mouseenterImgCallback);
  imgWrapperRef.value.removeEventListener("mouseleave", mouseleaveImgCallback);
});
</script>

<style src="@/assets/css/common/Product.css" module></style>
