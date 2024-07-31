<template>
  <div :class="$style.wrapper">
    <div :class="$style.filter"></div>
    <div :class="$style.container">
      <div :class="$style.header">
        <div :class="$style.title">
          {{ title }}
        </div>
        <div :class="$style.closeBox">
          <IconClose />
        </div>
      </div>
      <div :class="$style.content">
        <div
          v-for="(row, rowIndex) in rows"
          :key="rowIndex"
          :class="$style.row"
        >
          <div :class="$style.field" :style="{ AlignContent: row.feildAlign }">
            {{ row.field }}*
          </div>

          <div
            :class="$style.inputBox"
            :style="{ height: row.height }"
            v-if="!row.imgFile && !row.textArea"
          >
            <input
              type="text"
              :class="$style.input"
              :placeholder="row.placeholder"
            />
          </div>

          <textarea
            :class="$style.textarea"
            :style="{ height: row.height }"
            v-if="row.textArea"
          />

          <div v-if="row.imgFile">
            <input
              :class="$style.uploadInput"
              type="file"
              id="uploadButton"
              @change="uploadProductMainPicBtn($event, index)"
              style="display: none"
            />
            <span v-if="row.imgName" :class="$style.fileName">{{
              row.imgName
            }}</span>
            <div v-else :class="$style.placeHolder">파일을 선택해 주세요</div>
            <label for="uploadButton" :class="$style.uploadButton">
              <span>선택</span>
            </label>
          </div>

          <select v-if="row.select" :class="$style.select">
            <option v-for="item in select" :key="item" :class="$style.option">
              {{ item }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconClose from "#/icons/IconClose.vue";

const props = defineProps({
  title: String,
  rows: Array,
  select: Array,
  index: Number,
});
</script>

<style src="@/assets/css/modal/RenewalEnrollModal.css" module></style>