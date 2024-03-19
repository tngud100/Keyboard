<template>
  <div :class="$style.textBox">
    <span :class="$style.optionName">제품명</span>
    <div :class="$style.uploadBox">
      <input type="text" placeholder="상품명" :class="$style.optionValue" />
    </div>
  </div>
  <div :class="$style.textBox">
    <span :class="$style.optionName">누끼사진</span>
    <div @click="imgUpload()" :class="$style.uploadBox">
      <input
        type="file"
        placeholder="사진을 선택하세요."
        :class="$style.optionValue"
        name="productImg"
        id="productImg"
        ref="productImg"
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
    <div @click="imgUpload()" :class="$style.uploadBox">
      <input
        type="file"
        placeholder="사진을 선택하세요."
        :class="$style.optionValue"
        name="file"
        id="backgroundImg"
        ref="backgroundImg"
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
    <div @click="imgUpload()" :class="$style.uploadBox">
      <input
        type="file"
        placeholder="사진을 선택하세요."
        :class="$style.optionValue"
        name="representImg"
        id="representImg"
        ref="representImg"
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
    <div @click="imgUpload()" :class="$style.uploadList">
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
        <div v-for="(item, index) in blobList" :key="item" :class="$style.list">
          {{ index + 1 }}. {{ item.name }}
          <IconClose :class="$style.deleteBtn" @click="deleteList()" />
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
      />
    </div>
  </div>
  <div :class="$style.footer">
    <button :class="$style.nextBtn">다음</button>
  </div>
</template>

<script setup>
import IconClose from "#/icons/IconClose.vue";
import { ref } from "vue";

const representImg = ref("");
const backgroundImg = ref("");
const productImg = ref("");
const representImgName = ref("");
const backgroundImgName = ref("");
const productImgName = ref("");

const describeImg = ref("");
const describeImgName = ref("");

const blobList = ref([]);

const handleFileUpload = (event, type) => {
  const selectedFile = event.target.files[0];

  if (selectedFile) {
    for (let i = 0; i < selectedFile.length; i++) {
      const file = selectedFile[i];
      blobList.value.push(file);
    }
  }

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
    describeImg.value = selectedFile;
    describeImgName.value = selectedFile.name;
  }
};

const uploadImage = () => {
  // FormData를 사용하여 이미지 파일을 서버에 업로드합니다.
  let formData = new FormData();
  formData.append("image", file.value);

  // 실제로는 서버로 HTTP 요청을 보내야 하겠지만, 여기서는 예시를 위해 console.log로 FormData를 출력합니다.
  console.log(formData);
};
</script>

<style src="@/assets/css/modal/EnrollProduct.css" module></style>