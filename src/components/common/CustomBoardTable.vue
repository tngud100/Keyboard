<template>
  <div :class="$style.tableContainer">
    <div :class="$style.tableHeader">
      <div
        v-for="(column, index) in columns"
        :key="index"
        :style="[
          {
            width: column.width,
            paddingLeft: column.paddingLeft,
          },
        ]"
      >
        {{ column.label }}
      </div>
    </div>
    <div :class="$style.tableBody">
      <div v-for="(row, rowIndex) in rows" :key="rowIndex">
        <div
          :class="[$style.tableRow, row.isClicked ? $style.isClicked : '']"
          @click="handleRowClick(rowIndex)"
        >
          <div
            v-for="(column, colIndex) in columns"
            :key="colIndex"
            :style="[
              {
                width: column.width,
                textAlign: column.textAlign,
                paddingLeft: column.paddingLeft,
              },
            ]"
          >
            {{ row[column.field] }}
            <IconUpArrow
              v-if="
                row.content?.comment &&
                colIndex === columns.length - 1 &&
                !row.isClicked
              "
            />
            <IconDownArrow
              v-if="
                row.content?.comment &&
                colIndex === columns.length - 1 &&
                row.isClicked
              "
            />
          </div>
        </div>
        <div
          v-if="row.isClicked && row.content?.text"
          :class="$style.contentBox"
        >
          {{ row.content.text }}
        </div>
        <div
          v-if="row.isClicked && row.content?.comment"
          :class="[$style.contentBox, $style.comment]"
        >
          {{ row.content.comment }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import IconUpArrow from "#/icons/IconUpArrow.vue";
import IconDownArrow from "#/icons/IconDownArrow.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  columns: Array,
  rows: Array,
});

const emits = defineEmits(["row-click"]);

const handleRowClick = (index) => {
  if (props.rows[index].linkTo) {
    router.push(props.rows[index].linkTo + "/" + props.rows[index].num);
  } else {
    emits("row-click", index);
  }
};
</script>

<style src="@/assets/css/common/CustomBoardTable.css" module></style>
