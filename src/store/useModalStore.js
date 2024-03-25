import { defineStore } from "pinia";

export const useModalStore = defineStore({
    id: "modal",
    state: () => ({
        isOpenVerifyModal: false,
        verifyContent: [
            {
                code: 0,
                comments:"기본값으로 설정 하시겠습니까?"
            },
            {
                code: 1,
                comments:"정말로 수정 하시겠습니까?"
            },
            {
                code: 2,
                comments:"정말로 삭제 하시겠습니까?"
            }
        ]
    }),
    getters: {
        getOpenVerifyModal: (state) => state.isOpenVerifyModal,
        getCommentByCode: (state) => (code) => {
            return state.verifyContent.find((item) => item.code === code)?.comments || "comment not found";
        },
    },
    actions: {
        setOpenVerifyModal(value) {
          this.isOpenVerifyModal = value;
        },
    }
});