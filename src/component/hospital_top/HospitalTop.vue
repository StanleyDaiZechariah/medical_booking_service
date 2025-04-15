<template>
    <div class="top">
        <div class="content">
            <!-- 内容分为左侧和右侧 -->
            <div class="left" @click="goHome">
                <img src="../../asset/images/logo.png" alt="医院的logo">
                <p>尚医通 &nbsp; 预约挂号统一平台</p>
            </div>
            <div class="right">
                <p class="help">帮助中心</p>
                <!-- 如果没有用户名字：显示登陆注册 -->
                <p class="login" @click="login" v-if="!userStore.userInfo.name">登录/注册</p>
                <!-- 如果由用户信息展示用户信息 -->
                <el-dropdown>
                    <span class="el-dropdown-link">
                        {{ userStore.userInfo.name }}
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>实名认证</el-dropdown-item>
                            <el-dropdown-item>挂号订单</el-dropdown-item>
                            <el-dropdown-item>就诊人管理</el-dropdown-item>
                            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts' name="HospitalTop">
// 引入elment-plus的组件库
import { ArrowDown } from '@element-plus/icons-vue';
// 引入路由
import { useRouter } from 'vue-router'
// 获取user仓库的数据(visable)可以控制login组件的对话框的显示与隐藏
import useUserStore from '@/store/modules/user';

// 路由实例
const $router = useRouter();
// 用户仓库实例
let userStore = useUserStore();

// 跳转函数
const goHome = () => {
    $router.push('/home');
}
// 点击登录预注册按钮弹出对话框
const login = () => {
    userStore.visiable = true;
}
// 退出登录按钮的回调
const logout = () => {
    // 通知pinia仓库清楚用户相关信息
    userStore.logOut();
    // 利用编程式路由器导航跳转到首页
    $router.replace('/home');
    // 清空页面栈
    $router.clearRoutes();
}

</script>

<style scoped lang="scss">
// 整个组件整体的主要样式
.top {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;

    // 内容区域的主要样式
    .content {
        width: 1200px;
        height: 70px;
        background-color: white;
        display: flex;
        justify-content: space-between;

        // 左侧区域的主要样式
        .left {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            // logo图片和名称
            img {
                width: 50px;
                height: 50px;
                margin-right: 10px;
            }

            p {
                font-size: 20px;
                color: #55a6fe;
            }
        }

        // 右侧区域的主要样式
        .right {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            color: #bbb;
            cursor: pointer;

            // 帮助中心和登录注册按钮
            .help {
                margin-right: 10px;
            }
        }
    }
}
</style>