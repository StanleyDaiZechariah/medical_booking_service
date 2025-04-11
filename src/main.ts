// 导入外部样式表
import '@/style/reset.scss'

// 全局注册页面顶部组件和底部组件
import HospitalTop from '@/component/hospital_top/HospitalTop.vue'
import HospitalBottom from '@/component/hospital_bottom/HospitalBottom.vue'

// 导入App组件
import { createApp } from 'vue'
import Router from '@/router/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'




// 创建应用
const app = createApp(App);

// 全局注册顶部组件
app.component('HospitalTop', HospitalTop)
    .component('HospitalBottom', HospitalBottom);

// 安装vue-router
app.use(Router);
// 安装element-plus
app.use(ElementPlus);

// 挂载应用
app.mount('#app');
