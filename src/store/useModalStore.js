import { defineStore } from "pinia";

export const useModalStore = defineStore({
    id: "modal",
    state: () => ({
        isOpenVerifyModal: false,
    }),
    getters: {
        getOpenVerifyModal: (state) => state.isOpenVerifyModal,
    },
    actions: {
        setOpenVerifyModal(value) {
          this.isOpenVerifyModal = value;
        },
    }
});