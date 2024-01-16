import { defineStore } from "pinia";

export const useTabNameStore = defineStore("currentTabName", {
    state: () => ({
        currentTabName: 'Review'
    }),
    actions: {
        setCurrentTabName(tabName) {
            this.currentTabName = tabName;
        },
        getCurrentTabName() {
            return this.currentTabName;
        }
    }
});