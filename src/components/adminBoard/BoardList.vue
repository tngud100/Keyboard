<template>
  <div :class="$style.listContainer">
    <div :class="$style.titleBox">
      <ul :class="[$style.list, $style.title]">
        <li :class="$style.first">{{ props.listTitle[0] }}</li>
        <li :class="$style.second">{{ props.listTitle[1] }}</li>
        <li :class="[$style.third, $style.textCenter]">
          {{ props.listTitle[2] }}
        </li>
        <li :class="$style.fourth">
          {{ props.listTitle[3] }}
        </li>
        <li :class="$style.fifth">{{ props.listTitle[4] }}</li>
      </ul>
    </div>
    <div :class="$style.listBox">
      <div v-for="list in props.listItem" :key="list" :class="$style.content">
        <ul :class="$style.list">
          <li :class="$style.first">{{ list.first }}</li>
          <li :class="$style.second">{{ list.second }}</li>
          <li :class="[$style.third, $style.textLeft]">{{ list.third }}</li>
          <li :class="$style.fourth">{{ list.fourth }}</li>
          <li :class="$style.fifth">{{ list.fifth }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  listTitle: Array,
  listItem: Array,
});
</script>
<style src="@/assets/css/adminBoard/BoardList.css" module></style>
