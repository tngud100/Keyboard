import { defineStore } from "pinia";
import { computed } from "vue";
import { useRoute } from "vue-router";

export const useAdminStore = defineStore("Admin", () => {
    const route = useRoute();

    const isAdminPageRouter = computed(() => {
        return route.path.includes("/admin");
    });

    const isAdminLoginPage = computed(() => {
        if (route.path === "/adminLogin") {
            return false;
        } else {
            return true;
        }
    });


  return { isAdminPageRouter, isAdminLoginPage };
});