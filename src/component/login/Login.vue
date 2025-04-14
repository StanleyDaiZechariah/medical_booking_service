<template>
    <div class="login_container">
        <!-- title属性控制对话框的标题，v-model控制对话框的显示与隐藏 -->
        <el-dialog v-model="userStore.visiable" title="用户登录">
            <!-- 对话框主题内容 -->
            <el-row>
                <!-- 左侧的结构 -->
                <el-col :span="12">
                    <div class="login">
                        <!-- 手机号码登录 -->
                        <div v-show="scene == 0">
                            <el-form v-model="loginParams" :rules="rule" ref="form">
                                <!-- 手机号码输入框 -->
                                <el-form-item  prop="phone">
                                    <el-input  placeholder="请你输入手机号码" :prefix-icon="User" v-model="loginParams.phone"></el-input>
                                </el-form-item>
                                <!-- 验证码输入框 -->
                                <el-form-item  prop="code">
                                    <el-input  placeholder="请你输入手机验证码" :prefix-icon="Lock" v-model="loginParams.code"></el-input>
                                </el-form-item>
                                <!-- 获取验证码的按钮 -->
                                <el-form-item >
                                    <el-button @click="getCode" :disabled="!isPhone || flag ? true : false">
                                        <CountDown v-if="flag" :flag="flag" @getFlag="getFlag" />
                                        <span v-else>获取验证码</span>
                                    </el-button>
                                </el-form-item>
                                <!-- 登录按钮 -->
                                <el-form-item>
                                    <el-button style="width: 90%;" @click="login" type="primary" size="default" :disabled="!isPhone || loginParams.code.length < 6 ? true : false">用户登录</el-button>
                                </el-form-item>
                            </el-form>
                            <!-- 登录表单底部样式 -->
                            <div class="bottom" @click="changeScene">
                                <p>微信扫码登录</p>
                                <svg t="1744594130038" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1673" width="32" height="32"><path d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z" fill="#d81e06" p-id="1674"></path><path d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z" fill="#d81e06" p-id="1675"></path></svg>
                            </div>
                        </div>

                        <!-- 微信扫码登录 -->
                        <div class="webChat" v-show="scene == 1">
                            微信扫码登录的结构
                        </div>
                    </div>
                    
                </el-col>
                <!-- 右侧的结构 -->
                <el-col :span="12">
                    <!-- 右侧左边的内容 -->
                    <div class="leftContent">
                        <!-- 右侧左边的头部 -->
                        <div class="top">
                            <div class="item">
                                <img src="../../asset/images/code_login_wechat.png" alt="二维码1">
                                <svg t="1744594617374" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1944" width="16" height="16"><path d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z" fill="#bfbfbf" p-id="1945"></path><path d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z" fill="#bfbfbf" p-id="1946"></path></svg>
                                <p>微信扫一扫关注</p>
                                <p>“快速预约挂号”</p>
                            </div>

                            <div class="item">
                                <img src="../../asset/images/code_app.png" alt="二维码2">
                                <svg t="1744594767640" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3249" width="16" height="16"><path d="M256 85.333333h512c64.8 0 117.333333 52.533333 117.333333 117.333334v618.666666c0 64.8-52.533333 117.333333-117.333333 117.333334H256c-64.8 0-117.333333-52.533333-117.333333-117.333334V202.666667c0-64.8 52.533333-117.333333 117.333333-117.333334z m0 64a53.333333 53.333333 0 0 0-53.333333 53.333334v618.666666a53.333333 53.333333 0 0 0 53.333333 53.333334h512a53.333333 53.333333 0 0 0 53.333333-53.333334V202.666667a53.333333 53.333333 0 0 0-53.333333-53.333334H256z m170.666667 618.666667a32 32 0 0 1 0-64h170.666666a32 32 0 0 1 0 64H426.666667z" fill="#bfbfbf" p-id="3250"></path></svg>
                                <p>扫一扫下载</p>
                                <p>“预约挂号”APP</p>
                            </div>
                        </div>
                    </div>

                    <!-- 底下的文字 -->
                    <p class="tip">商易通官方指定平台</p>
                    <p class="tip">快速挂号&nbsp;安全放心</p>
                </el-col>
            </el-row>          
            <!-- 底部关闭按钮 -->
            <template #footer>
                <div>
                    <el-button type="primary" @click="closeDialog">关闭窗口</el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang='ts' name='Login'>
// 获取user仓库的数据(visable)可以控制login组件的对话框的显示与隐藏
import useUserStore from '@/store/modules/user';
// 引入图表
import { User, Lock } from '@element-plus/icons-vue';
// 引入验证按钮倒计时组件
import CountDown from '../countDown/CountDown.vue';
import { reactive, ref, computed } from 'vue';
import { ElMessage } from 'element-plus';

// 用户仓库实例
let userStore = useUserStore();
// 表单登录组件响应式数据
let scene = ref<number>(0); // 0 是手机号登录，1 是微信扫码
// 手机表单数据----手机号码
let loginParams = reactive({
    // 手机手机号码
    phone: '',
    // 手机验证码
    code: '',
});
// 定义一个响应式数据控制倒计时组件的显示与隐藏
let flag = ref<boolean>(false);

// 自定义校验规则：手机号自定义校验规则
const validatorPhone = (rule: any,value: any,callback: any) => {
    // rule: 即为表单校验规则对象
    // value: 即为当前输入框的值
    // callback: 校验成功的回调函数
    
    const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
    if(reg.test(value)){
        console.log('手机号码格式正确');
        callback();
    } else {
        callback(new Error('请输入正确的手机号码'));
    }

};
// 自定义校验规则：验证码自定义校验规则
const validatorCode = (rule: any,value: any,callback: any) => {
    const reg = /^\d{6}$/;
    if(reg.test(value)){
        console.log('校验码格式正确');
        callback();
    } else {
        callback(new Error('请输入正确格式的验证码'));
    }
}
// 表单校验的规则
const rule = {
    // 手机号码的校验规则
    // required表示必填项，message表示错误提示信息，trigger表示触发验证的事件
    
    // 普通校验规则
    // phone: [{ required: true, message: '请输入11位手机号码', trigger: 'blur', min: 11 },],
    // code: [{ required: true, message: '请输入6位验证码', trigger: 'blur', min: 6 }],

    // 自定义校验规则
    phone: [{trigger: ['change', 'blur'], validator: validatorPhone }],
    code: [{trigger: ['change', 'blur'], validator: validatorCode }],
}
// 获取表单实例
const form = ref<any>();


// 关闭窗口
const closeDialog = () => {
    // 重新显示手机号码登陆方式
    scene.value = 0;
    // 关闭窗口
    userStore.visiable = false;
}
// 点击微信扫码登录和小图标就切换为微信扫码
const changeScene = () => {
    if (scene.value === 0) {
        scene.value = 1;
    } else {
        scene.value = 0;
    }
}
// 验证手机号码是否为正确格式
let isPhone = computed(() => {
    // 手机号码正则表达式
    const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
    // 返回判断结果的布尔值：true表示手机号码格式正确，false表示手机号码格式错误
    return reg.test(loginParams.phone);
});
// 获取验证码的回调
const getCode = async () => {
    // 解决倒计时按钮在倒计时未结束之前仍然还可以点击的问题
    if (!isPhone.value || flag.value ) return;

    // 开启倒计时
    flag.value = true;
    // 通知pinia仓库去获取验证码
    try {
        await userStore.getCodes(loginParams.phone);
        alert('验证码已发送，请注意查收');
        loginParams.code = userStore.code;
    } catch (error) {
        // 提示验证码失败
        ElMessage({
            message: (error as Error).message,
            type: 'error'
        })
    }
}
// 计数器子组件绑定的自定义事件
const getFlag = (val: boolean) => {
    // 倒计时模式结束
    flag.value = false;
}
// 点击用户登录按钮回调
const login = async () => {
    // 保证表单校验能够符合要求
    await form.value.validate();
    // 发起登录请求
    // 登录请求成功：顶部组件需要展示用户的名字、对话框关闭
    // 登录请求失败：弹出对应登录失败的错误
    try {
        // 用户登录成功
        await userStore.userLogin(loginParams);
        // 关闭登录弹窗
        userStore.visiable = false;
        // 通知父组件登录成功
    } catch (error) {
        ElMessage({
            message: (error as Error).message,
            type: 'error'
        })
    }
}
</script>

<style scoped lang="scss">
    .login_container {
        :deep(.el-dialog__body) {
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            padding: 20px;
        }

        .login {
            padding: 20px;
            border: 1px solid #ccc;

            .bottom {
                display: flex;
                flex-direction: column;
                align-items: center;

                p {
                    margin: 10px 0;
                }

                p,svg {
                    cursor: pointer;
                }
            }
        }

        .leftContent {
            .top {
                display: flex;
                justify-content: space-around;

                .item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    img {
                        width: 130px;
                        height: 130px;
                    }

                    p {
                        margin: 8px 0;
                    }
                }
            }
        }

        .tip {
            text-align: center;
            font-size: 22px;
            font-weight: 900;
            margin: 10px 0;
            color: #000;
        }
    }
</style>