import { defineStore } from "pinia";
import { computed, ref, onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";

export const useMenuStore = defineStore("menu", () => {
  const isShowingMenu = ref(false);
  const route = useRoute();

  const isShowingMenuByRoute = computed(() => {
    if (route.path === "/login") {
      isShowingMenu.value = false;
    // } else if (route.path.startsWith("/keyboard")) {
    //   isShowingMenu.value = true;
    } else {
      isShowingMenu.value = true;
    }

    return isShowingMenu.value;
  });

  return { isShowingMenu, isShowingMenuByRoute };
});


export const useTopStore = defineStore("Top", () => {
  const isShowingTopBtn = ref(false);
  const route = useRoute();
  
  const checkScrollbarVisibility = () => {
    const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    isShowingTopBtn.value = documentHeight > viewportHeight

    return isShowingTopBtn.value
  };

  
  if (route.path) {
    onMounted(async () => {
      await nextTick();
      checkScrollbarVisibility();
        
      window.addEventListener("resize", checkScrollbarVisibility);
    });
  }

  return { isShowingTopBtn, checkScrollbarVisibility }
  
});

