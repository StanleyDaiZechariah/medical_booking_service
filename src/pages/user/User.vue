<template>
    <div class="user">
        <!-- 左侧显示导航区域 -->
        <div class="menu">


            <!-- 顶部图表和文字 -->
            <div class="top">
                <el-icon>
                    <HomeFilled />
                </el-icon>
                <span>/ 会员中心</span>
            </div>

            <!-- 左侧导航栏 -->
            <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
                <!-- 实名认证 -->
                <el-menu-item index="/user/certification" @click="goUser('/user/certification')">
                    <el-icon><icon-menu /></el-icon>
                    <span>实名认证</span>
                </el-menu-item>

                <!-- 挂号订单 -->
                <el-menu-item index="/user/order" @click="goUser('/user/order')">
                    <el-icon>
                        <document />
                    </el-icon>
                    <span>挂号订单</span>
                </el-menu-item>

                <!-- 就诊人管理 -->
                <el-menu-item index="/user/patient" @click="goUser('/user/patient')">
                    <el-icon>
                        <User />
                    </el-icon>
                    <span>就诊人管理</span>
                </el-menu-item>

                <!-- 账号信息 -->
                <el-menu-item index="/user/profile" @click="goUser('/user/profile')">
                    <el-icon>
                        <Location />
                    </el-icon>
                    <span>账号信息</span>
                </el-menu-item>

                <!-- 意见反馈 -->
                <el-menu-item index="/user/feedback" @click="goUser('/user/feedback')">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>意见反馈</span>
                </el-menu-item>
            </el-menu>
        </div>
        <!-- 右侧显示内容区域 -->
        <div class="content">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang='ts' name='User'>
// 引入图标
import {
    HomeFilled,
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    User
} from '@element-plus/icons-vue'
// 引入路由器和路由
import { useRouter,useRoute } from 'vue-router'

// 路由器实例
const $router = useRouter();
// 路由对象
const $route = useRoute();

// 编写一个函数专门跳转页面
const goUser = (location: string) => {
    // 跳转页面
    $router.push({
        path: location
    })
}
</script>

<style scoped lang="scss">
.user {
    display: flex;

    .menu {
        flex: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .content {
        flex: 8;
    }
}
</style>