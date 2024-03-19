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

      <modalContents :class="$style.contents" />

      <!-- <button :class="$style.verifyBtn"></button> -->
      <button :class="$style.cancelBtn" @click="$emit('close', false)"></button>
    </div>
  </section>
</template>

<script setup>
import IconClose from "#/icons/IconClose.vue";
import modalContents from "#/modal/EnrollProduct.vue";

const props = defineProps({
  item: Object,
});
</script>

<style src="@/assets/css/modal/Contents.css" module></style>
