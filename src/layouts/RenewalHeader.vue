<template>
  <section :class="$style.header">
    <div :class="$style.wrapper">
      <div :class="[$style.title, 'title']">
        <!-- <img :src="logo" alt="logo" :class="$style.logo" /> -->
        <router-link to="/">
          <img :src="logoText" alt="logo" :class="$style.logoText" />
        </router-link>
      </div>
      <div :class="$style.navContainer">
        <ul :class="$style.nav" @mouseleave="closeDropList()">
          <li
            v-for="list in dropItem"
            :key="list.idx"
            @mouseover="showDropList(list.idx, $event)"
            @click="gotoLink(list.idx)"
          >
            <span :class="`itemText${list.idx}`">{{ list.title }}</span>
            <ul
              v-if="isHoverList && listIdx === list.idx"
              :class="$style.dropBox"
            >
              <li
                v-for="subItem in list.item"
                :key="subItem.idx"
                :class="$style.dropItem"
              >
                <span :class="$style.dropText">{{ subItem.text }} </span>
              </li>
            </ul>
          </li>
          <div :class="$style.underline" :style="underLineAnime"></div>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import logo from "@/assets/images/logo.jpg";
import logoText from "@/assets/images/logoText.svg";
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const dropItem = [
  { idx: 0, title: "회사소개" },
  {
    idx: 1,
    title: "상품",
    item: [
      { idx: 0, text: "키보드" },
      { idx: 1, text: "스위치" },
      { idx: 2, text: "키캡" },
      { idx: 3, text: "PCB" },
      { idx: 4, text: "도구" },
    ],
  },
  { idx: 2, title: "스마트 스토어" },
  {
    idx: 3,
    title: "고객지원",
    item: [
      { idx: 0, text: "공지사항" },
      { idx: 1, text: "자주묻는 질문" },
      { idx: 2, text: "자료실" },
    ],
  },
];
const isHoverList = ref(false);
const listIdx = ref(null);

const itemLeft = ref(0);
const itemWidth = ref(0);

const underLineAnime = computed(() => ({
  width: itemWidth.value + "px",
  transform: `translateX(${itemLeft.value}px)`,
  opacity: isHoverList.value ? 1 : 0,
}));

const showDropList = (idx, event) => {
  const titleX = document.querySelector(".title").getBoundingClientRect().right;
  const textX = document
    .querySelector(`.itemText${idx}`)
    .getBoundingClientRect().right;

  itemWidth.value = document
    .querySelector(`.itemText${idx}`)
    .getBoundingClientRect().width;

  itemLeft.value = textX - (titleX + itemWidth.value);

  isHoverList.value = true;
  listIdx.value = idx;
};

const closeDropList = () => {
  isHoverList.value = false;
  listIdx.value = null;
};

const gotoLink = (idx) => {
  switch (idx) {
    case 0:
      router.push(`/intro`);
      break;
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;

    default:
      break;
  }
};
</script>

<style src="@/assets/css/layouts/RenewalHeader.css" module>
</style>
