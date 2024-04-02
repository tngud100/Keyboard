<template>
  <div :class="$style.textBox">
    <span :class="$style.optionName">제품명</span>
    <div :class="$style.uploadBox">
      <input
        type="text"
        placeholder="상품명"
        :class="$style.optionValue"
        ref="productName"
      />
    </div>
  </div>
  <div :class="$style.textBox">
    <span :class="$style.optionName">누끼사진</span>
    <div :class="$style.uploadBox">
      <input
        type="file"
        placeholder="사진을 선택하세요."
        :class="$style.optionValue"
        name="productImg"
        id="productImg"
        @change="handleFileUpload($event, 'productImg')"
        style="display: none"
      />
      <div :class="$style.optionValue">{{ productImgName }}</div>
      <label for="productImg">
        <div :class="$style.chooseImgBtn">선택</div>
      </label>
    </div>
  </div>
  <div :class="$style.textBox">
    <span :class="$style.optionName">배경사진</span>
    <div :class="$style.uploadBox">
      <input
        type="file"
        placeholder="사진을 선택하세요."
        :class="$style.optionValue"
        name="file"
        id="backgroundImg"
        @change="handleFileUpload($event, 'backgroundImg')"
        style="display: none"
      />
      <div :class="$style.optionValue">{{ backgroundImgName }}</div>
      <label for="backgroundImg">
        <div :class="$style.chooseImgBtn">선택</div>
      </label>
    </div>
  </div>
  <div :class="$style.textBox">
    <span :class="$style.optionName">대표사진</span>
    <div :class="$style.uploadBox">
      <input
        type="file"
        placeholder="사진을 선택하세요."
        :class="$style.optionValue"
        name="representImg"
        id="representImg"
        @change="handleFileUpload($event, 'representImg')"
        style="display: none"
      />
      <div :class="$style.optionValue">{{ representImgName }}</div>
      <label for="representImg">
        <div :class="$style.chooseImgBtn">선택</div>
      </label>
    </div>
  </div>

  <div :class="$style.textBox">
    <span :class="$style.optionName">상세설명</span>
    <div :class="$style.uploadList">
      <div :class="$style.listBox">
        <input
          type="file"
          placeholder="describeImgList."
          :class="$style.optionValue"
          id="describeImg"
          ref="describeImg"
          style="display: none"
          multiple
          @change="handleFileUpload($event, 'describeImg')"
        />
        <div :class="$style.optionValue">{{ describeImgName }}</div>
        <label for="describeImg">
          <div :class="$style.chooseImgBtn">선택</div>
        </label>
      </div>

      <div :class="$style.listMenu">
        <div
          v-for="(item, index) in describeBlobList"
          :key="item"
          :class="$style.list"
        >
          {{ index + 1 }}. {{ item.name }}
          <IconClose :class="$style.deleteBtn" @click="deleteList(index)" />
        </div>
      </div>
    </div>
  </div>

  <div :class="$style.textBox">
    <span :class="$style.optionName">종류</span>
    <div :class="$style.uploadBox">
      <input
        type="text"
        placeholder="종류 ex) 키보드, 키캡, 등"
        :class="$style.optionValue"
        ref="productType"
      />
    </div>
  </div>
  <div :class="$style.submit">
    <button :class="$style.submitBtn" @click="enrollBtn">상품 등록</button>
  </div>
</template>

<script setup>
import IconClose from "#/icons/IconClose.vue";
import { useModalStore } from "@/store/useModalStore";
import { computed, ref, watch } from "vue";
import { postProductAPI } from "@/api/ProductPostDataAPI.js";

const representImg = ref("");
const backgroundImg = ref("");
const productImg = ref("");
const describeImg = ref("");

const representImgName = ref("");
const backgroundImgName = ref("");
const productImgName = ref("");
const describeImgName = ref("");

const describeBlobList = ref([]);

const productName = ref("");
const productType = ref("");

const productItem = ref({
  productName: null,
  isfilled: false,
});

const { enrollProduct, uploadImg } = postProductAPI();

const modalstore = useModalStore();

const emit = defineEmits(["productItem", "commentCode"]);

const props = defineProps({ defaultState: Boolean, page: Number });

const verifyModalCode = ref(null);
const isOpenVerifyModal = computed(() => modalstore.isOpenVerifyModal);

const handleFileUpload = (event, type) => {
  const selectedFile = event.target.files[0];

  if (type === "productImg") {
    productImg.value = selectedFile;
    productImgName.value = selectedFile.name;
  } else if (type === "backgroundImg") {
    backgroundImg.value = selectedFile;
    backgroundImgName.value = selectedFile.name;
  } else if (type === "representImg") {
    representImg.value = selectedFile;
    representImgName.value = selectedFile.name;
  } else if (type === "describeImg") {
    const selectedFiles = event.target.files;

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      describeBlobList.value.push(file);
    }

    describeImgName.value = selectedFiles[selectedFiles.length - 1].name;
  }
};

const deleteList = (index) => {
  describeBlobList.value.splice(index, 1);
  console.log(describeBlobList.value.length);
  if (describeBlobList.value.length === 0) {
    describeImgName.value = "";
    return;
  }
  describeImgName.value =
    describeBlobList.value[describeBlobList.value.length - 1].name;
};

const enrollBtn = () => {
  if (
    productName.value &&
    representImg.value &&
    backgroundImg.value &&
    productImg.value &&
    describeImg.value &&
    productType.value &&
    describeBlobList.value.length > 0
  ) {
    verifyModalCode.value = 0;
    openVerifyModal(verifyModalCode.value);
  } else {
    alert("모든 항목을 입력해주세요.");
  }
};

const openVerifyModal = (commentCode) => {
  modalstore.setOpenVerifyModal(true);
  emit("commentCode", commentCode);
};

watch(isOpenVerifyModal, (newValue) => {
  if (newValue) {
    return;
  }
  if (props.page !== 1) {
    return;
  }

  if (props.defaultState && verifyModalCode.value === 0) {
    productItem.value.productName = productName.value.value;
    productItem.value.isFilled = true;
    emit("productItem", productItem.value);
    uploadImage();
  }
});

const uploadImage = () => {
  let formData = new FormData();
  formData.append("name", productName.value.value);
  formData.append("represent_picture", representImg.value);
  formData.append("list_back_picture", backgroundImg.value);
  formData.append("list_picture", productImg.value);
  describeBlobList.value.forEach((item) => {
    formData.append("desc_picture", item);
  });
  formData.append("product_type", productType.value.value);
  formData.append("product_id", 66);

  console.log(formData);
  enrollProduct(formData);
};
</script>

<style src="@/assets/css/modal/EnrollProduct.css" module></style>