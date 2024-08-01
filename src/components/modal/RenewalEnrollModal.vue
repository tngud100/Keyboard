<template>
  <div :class="$style.wrapper">
    <div :class="$style.filter" @click.stop="closeBtn"></div>
    <div :class="$style.container">
      <div :class="$style.header">
        <div :class="$style.title">
          {{ title }}
        </div>
        <div :class="$style.closeBox">
          <IconClose @click.stop="closeBtn" />
        </div>
      </div>
      <div :class="$style.content">
        <div
          v-for="(row, rowIndex) in rows"
          :key="rowIndex"
          :class="$style.row"
        >
          <div :class="$style.field" :style="{ alignContent: row.feildAlign }">
            {{ row.label }}*
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
              v-model="formData[row.field]"
            />
          </div>

          <textarea
            :class="$style.textarea"
            :style="{ height: row.height }"
            :placeholder="row.placeholder"
            v-if="row.textArea"
            v-model="formData[row.field]"
          />

          <div v-if="row.imgFile" :class="$style.imgFileBox">
            <input
              :class="$style.uploadInput"
              type="file"
              :id="'uploadButton' + rowIndex"
              @change="uploadProductMainPicBtn($event, rowIndex, row.field)"
              style="display: none"
            />
            <span v-if="imgNames[rowIndex]" :class="$style.fileName">{{
              imgNames[rowIndex]
            }}</span>
            <div v-else :class="$style.placeHolder">파일을 선택해 주세요</div>

            <label
              :for="'uploadButton' + rowIndex"
              :class="$style.uploadButton"
            >
              <span>선택</span>
            </label>
          </div>

          <select
            v-if="row.select"
            :class="$style.select"
            @change="formData.selectNum = $event.target.value"
          >
            <option :value="null" disabled selected hidden>순서</option>
            <option
              v-for="item in row.select"
              :key="item"
              :class="$style.option"
              :value="item"
            >
              {{ item }}
            </option>
          </select>
        </div>
      </div>

      <div :class="$style.buttonBox">
        <button :class="$style.button" @click="handleSubmit">등록</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconClose from "#/icons/IconClose.vue";
import { onMounted, ref } from "vue";

const props = defineProps({
  title: String,
  rows: Array,
  select: Array,
});

const emit = defineEmits(["closeBtn", "submit", "emitChecking"]);

const formData = ref({});

onMounted(() => {
  props.rows.forEach((row) => {
    formData.value[row.field] = row.defaultValue || "";
  });
});

const imgNames = ref(props.rows.map(() => ""));

const uploadProductMainPicBtn = (event, index, field) => {
  const file = event.target.files[0];
  if (file) {
    imgNames.value[index] = file.name;
    formData.value[field] = file;
  }
};

const handleSubmit = () => {
  emit("submit", formData.value);
};

const closeBtn = () => {
  emit("closeBtn");
};
</script>

<style src="@/assets/css/modal/RenewalEnrollModal.css" module></style>
