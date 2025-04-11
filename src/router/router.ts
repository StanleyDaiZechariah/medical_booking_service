import { createRouter, createWebHistory } from 'vue-router'

// createRouter()方法返回一个Router实例，该实例包含了路由相关的配置和方法。
export default createRouter({
    // 设置路由的模式
    history: createWebHistory(),
    // 管理路由
    routes: [
        {
            path: '/',
            redirect: '/home' // 重定向到home页面
        },
        {
            path: '/home',
            component: () => import('@/pages/home/Home.vue')
        },
        {
            path: '/hospital',
            component: () => import('@/pages/hospital/Hospital.vue')
        }
    ],
    // 滚动行为：控制滚动条的位置
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
});