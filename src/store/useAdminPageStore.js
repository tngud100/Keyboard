import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

export const useAdminStore = defineStore("Admin", () => {
    const route = useRoute();
    const adminBoardIndex = ref(0);

    const isAdminPageRouter = computed(() => {
        return route.path.startsWith("/admin");
    });

    const isAdminLoginPage = computed(() => {
        if (route.path.toLowerCase() === "/admin/login") {
            return false;
        } else {
            return true;
        }
    });

    const adminSideBarIndex = computed(() => {
        if (route.path.toLowerCase() === "/admin/products") {
            return 0;
        }else if (route.path.toLowerCase() === "/admin/board") {
            return 2;
        }else if (route.path.toLowerCase() === "/admin/inquire") {
            return 3;
        } else {
            return 0;
        }
    })

    const setAdminBoardIndex = (index) => {
        adminBoardIndex.value = index;
    }

    return {
        isAdminPageRouter,
        isAdminLoginPage,
        adminSideBarIndex,
        adminBoardIndex,
        setAdminBoardIndex
    };
});

export default useAdminStore; 