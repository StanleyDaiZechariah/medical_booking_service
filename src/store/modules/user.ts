// 定义用户相关的仓库
import { defineStore } from "pinia";
// 引入验证码接收请求
import { repCode, repUserLogin } from "@/api/hospital/hospital";
import type { LoginData, UserInfo, UserLoginResponseData, } from "@/api/hospital/types";
import type { UserState } from './interface/detail'
import { GET_TOKEN, SET_TOKEN, REMOVE_TOKEN } from "@/utils/user";

const useUserStore = defineStore("User", {
    state: (): UserState => ({
        visiable: false, // 控制整个对话框的显示与隐藏
        code: "", // 存储用户自己的验证码
        userInfo: JSON.parse(GET_TOKEN() as string) || ({} as UserInfo), // 获取本地存储的用户数据
    }),
    actions: {
        // 获取验证码的方法
        async getCodes(phone: string) {
            // 向服务器发送携带了手机号码的请求，获取验证码
            // 正常开发的时候，只需要一个请求，后端就会把验证码推送到用户的手机中
            let res = await repCode(phone);
            if (res.code == 200) {
                this.code = res.data;
            } else {
                return Promise.reject(new Error(res.message));
            }
        },

        // 用户登录的方法
        async userLogin(loginData: LoginData) {
            // 向服务器发送携带了登录信息的请求，登录成功后，服务器会返回一个token
            let res: UserLoginResponseData = await repUserLogin(loginData);
            if (res.code == 200) {
                this.userInfo = res.data;
                // 本地持久化存储用户信息
                SET_TOKEN(JSON.stringify(this.userInfo))
                return 'ok';
            } else {
                return Promise.reject(new Error(res.message));
            }
        },

        // 退出登录
        logOut() {
            // 清空仓库数据
            this.userInfo = { name: "", token: "" };
            // 清空本地存储数据
            REMOVE_TOKEN();
        }
    },
    getters: {

    }
});

export default useUserStore;