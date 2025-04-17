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
            component: () => import('@/pages/hospital/Hospital.vue'),
            children: [
                {
                    path: 'register',
                    component: () => import('@/pages/hospital/subPages/register/Register.vue'),
                },
                {
                    path: 'detail',
                    component: () => import('@/pages/hospital/subPages/Detail.vue'),
                },
                {
                    path: 'notice',
                    component: () => import('@/pages/hospital/subPages/Notice.vue'),
                },
                {
                    path: 'close',
                    component: () => import('@/pages/hospital/subPages/Close.vue'),
                },
                {
                    path: 'lookup',
                    component: () => import('@/pages/hospital/subPages/LookUp.vue'),
                },
                {
                    path: 'register_step1',
                    component: () => import('@/pages/hospital/subPages/register/Register_step1.vue'),
                },
                {
                    path: 'register_step2',
                    component: () => import('@/pages/hospital/subPages/register/Register_step2.vue'),
                },
            ]
        },
        {
            path: '/user',
            component: () => import('@/pages/user/User.vue'),
            children: [
                {
                    path: 'certification',
                    component: () => import('@/pages/user/subPages/Certification.vue'),
                },
                {
                    path: 'order',
                    component: () => import('@/pages/user/subPages/Order.vue'),
                },
                {
                    path: 'profile',
                    component: () => import('@/pages/user/subPages/Profile.vue'),
                },
                {
                    path: 'patient',
                    component: () => import('@/pages/user/subPages/Patient.vue'),
                },
                {
                    path: 'feedback',
                    component: () => import('@/pages/user/subPages/FeedBack.vue'),
                }
            ]
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