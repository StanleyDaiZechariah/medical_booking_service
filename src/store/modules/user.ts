// 定义用户相关的仓库

import { defineStore } from "pinia";

const useUserStore = defineStore("User", {
    state: () => ({
        visiable: false, // 控制整个对话框的显示与隐藏
    }),
    actions: {

    },
    getters: {

    }
});

export default useUserStore;