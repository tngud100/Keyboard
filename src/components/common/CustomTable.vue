<template>
  <div :class="$style.tableContainer">
    <div :class="$style.tableHeader">
      <div
        v-for="(column, index) in columns"
        :key="index"
        :style="{ width: column.width, textAlign: column.align }"
      >
        {{ column.label }}
      </div>
    </div>
    <div :class="$style.tableBody">
      <div
        v-for="(row, rowIndex) in rows"
        :key="rowIndex"
        :class="$style.tableRow"
      >
        <div
          v-for="(column, colIndex) in columns"
          :key="colIndex"
          :style="{ width: column.width }"
        >
          {{ row[column.field] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  columns: Array,
  rows: Array,
});
</script>

<style src="@/assets/css/common/CustomTable.css" module>
</style>