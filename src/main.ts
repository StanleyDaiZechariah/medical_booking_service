// 导入外部样式表
import '@/style/reset.scss'

// 全局注册页面顶部组件和底部组件
import HospitalTop from '@/component/hospital_top/HospitalTop.vue'
import HospitalBottom from '@/component/hospital_bottom/HospitalBottom.vue'
import Login from './component/login/Login.vue'

// 导入vue等内容的核心组件
import { createApp } from 'vue'
// 导入路由
import Router from '@/router/router'
// 导入element-plus及其相关样式和组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/es/locale/lang/zh-cn'
// 导入pinia
import pinia from '@/store/index'

// 导入App组件
import App from '@/App.vue'


// 创建应用
const app = createApp(App);

// 全局注册顶部组件
app.component('HospitalTop', HospitalTop)
    .component('HospitalBottom', HospitalBottom)
    .component('Login', Login);

// 安装vue-router
app.use(Router);
// 安装element-plus
app.use(ElementPlus);
// 安装pinia
app.use(pinia);

// 挂载应用
app.mount('#app');
