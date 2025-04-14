// 定义用户相关的仓库
import { defineStore } from "pinia";
// 引入验证码接收请求
import { repCode } from "@/api/hospital/hospital";

const useUserStore = defineStore("User", {
    state: () => ({
        visiable: false, // 控制整个对话框的显示与隐藏
        code: "", // 存储用户自己的验证码
    }),
    actions: {
        // 获取验证码的方法
        async getCodes(phone: string) {
            // 向服务器发送携带了手机号码的请求，获取验证码
            // 正常开发的时候，只需要一个请求，后端就会把验证码推送到用户的手机中
            let res = await repCode(phone);
            console.log(res)
            if (res.code == 200) {
                this.code = res.data;
            } else {
                return Promise.reject(new Error(res.message));
            }
        }
    },
    getters: {

    }
});

export default useUserStore;