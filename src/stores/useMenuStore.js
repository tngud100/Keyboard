import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

export const useMenuStore = defineStore("menu", () => {
  const isShowingMenu = ref(false);
  const route = useRoute();

  const isShowingMenuByRoute = computed(() => {
    if (route.path === "/") {
      isShowingMenu.value = true;
    } else if (route.path.startsWith("/keyboard")) {
      isShowingMenu.value = true;
    } else {
      isShowingMenu.value = false;
    }

    return isShowingMenu.value;
  });

  return { isShowingMenu, isShowingMenuByRoute };
});
