<template>
  <div :class="$style.cardContainer">
    <div v-for="(item, index) in mainProduct" :key="index" :class="$style.card">
      <div :class="$style.titleCard">
        <div :class="$style.title">
          {{ "1. " + item.title }}
        </div>
        <button :class="$style.deleteButton" @click="deleteMainProduct(index)">
          <closeIcon />
        </button>
      </div>
      <div :class="$style.fileCard">
        <div :class="$style.fileBox">
          <input
            :class="$style.uploadInput"
            type="file"
            id="uploadButton"
            @change="uploadMainPic($event, index)"
          />
          <span v-if="mainProduct[index].img" :class="$style.fileName">{{
            mainProduct[index].img
          }}</span>
          <span v-else :class="$style.placeHolder">파일을 선택해 주세요</span>
          <label for="uploadButton" :class="$style.uploadButton">선택</label>
        </div>
      </div>
    </div>
    <button
      :class="$style.addBtn"
      @mouseover="handleHover(true)"
      @mouseleave="handleHover(false)"
      @click="enrollMainPic"
    >
      <IconPlus v-if="iconHover" :class="$style.addBtnImg" />
      <IconPlusDisabled v-else :class="$style.addBtnImg" />
    </button>
  </div>
</template>

<script setup>
import closeIcon from "#/icons/IconClose.vue";
import IconPlus from "#/icons/IconPlus.vue";
import IconPlusDisabled from "#/icons/IconPlusDisabled.vue";
import { ref, watch } from "vue";
import { getProductAPI } from "@/api/ProductGetDataAPI.js";

const { getProductMainList } = getProductAPI();

const mainProduct = ref([]);

const emit = defineEmits(["openModal"]);

const iconHover = ref(false);

const props = defineProps({
  navState: Number,
});

const handleHover = (value) => {
  iconHover.value = value;
};

const uploadMainPic = (event, index) => {
  mainProduct.value[index].img = event.target.files[0].name;

  console.log(mainProduct.value);
};

const enrollMainPic = () => {
  emit("openModal");
};

const getProductMain = async () => {
  if (props.navState === 0) {
    const data = await getProductMainList();
    for (var i = 0; i < data.length; i++) {
      mainProduct.value.push(data[i]);
    }
  }

  console.log("mainPic", mainProduct.value);
};

getProductMain();
</script>

<style src="@/assets/css/adminProduct/MainPicCards.css" module>
</style>
