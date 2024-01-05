import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

export const useNavStore = defineStore("nav", () => {
  const isShowingNav = ref(false);
  const route = useRoute();

  const isShowingNavByRoute = computed(() => {
    const regex = /^\/keyboard\/([^\/]+)$/;
    const match = route.path.match(regex);

    if (match) {
      isShowingNav.value = false;
    } else {
      isShowingNav.value = true;
    }

    return isShowingNav.value;
  });

  return { isShowingNav, isShowingNavByRoute };
});
