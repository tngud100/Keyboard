<template>
  <div :class="$style.container">
    <div :class="$style.wrapper">
      <AdminNav @showEditModal="showEditModal" />
      <keyboard
        v-if="adminProductIndex === 0"
        :modalOpen="modalOpen"
        :title="title"
        :selectedId="selectedId"
        @closeBtn="closeEditModal"
        @selectedList="selectedList"
      />
      <Keycap
        v-if="adminProductIndex === 1"
        :modalOpen="modalOpen"
        :title="title"
        :selectedId="selectedId"
        @closeBtn="closeEditModal"
        @selectedList="selectedList"
      />
      <PCB
        v-if="adminProductIndex === 2"
        :modalOpen="modalOpen"
        :title="title"
        :selectedId="selectedId"
        @closeBtn="closeEditModal"
        @selectedList="selectedList"
      />
      <Switch
        v-if="adminProductIndex === 3"
        :modalOpen="modalOpen"
        :title="title"
        :selectedId="selectedId"
        @closeBtn="closeEditModal"
        @selectedList="selectedList"
      />
      <Tool
        v-if="adminProductIndex === 4"
        :modalOpen="modalOpen"
        :title="title"
        :selectedId="selectedId"
        @closeBtn="closeEditModal"
        @selectedList="selectedList"
      />
    </div>
  </div>
</template>

<script setup>
import AdminNav from "@/layouts/AdminNav.vue";
import Keyboard from "#/adminRenewalProducts/Keyboard.vue";
import Keycap from "#/adminRenewalProducts/Keycap.vue";
import PCB from "#/adminRenewalProducts/PCB.vue";
import Switch from "#/adminRenewalProducts/Switch.vue";
import Tool from "#/adminRenewalProducts/Tool.vue";
import { computed, onMounted, ref, watch } from "vue";
import useAdminStore from "@/store/useAdminPageStore.js";

const adminStore = useAdminStore();

const adminProductIndex = computed(() => adminStore.adminProductIndex);

const selectedId = ref(null);

const title = computed(() => {
  switch (adminProductIndex.value) {
    case 0:
      return "키보드";
    case 1:
      return "스위치";
    case 2:
      return "PCB";
    case 3:
      return "도구";
    case 4:
      return "게시판";

    default:
      return "키보드";
  }
});

const modalOpen = ref(false);

const selectedList = (id) => {
  selectedId.value = id;
  showEditModal();
};

const showEditModal = () => {
  modalOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closeEditModal = () => {
  modalOpen.value = false;
  selectedId.value = null;
  document.body.style.overflow = "auto";
};
</script>

<style src="@/assets/css/adminRenewalProducts/Contents.css" module></style>