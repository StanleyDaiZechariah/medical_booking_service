import { createApp } from 'vue'
import App from '@/App.vue'
import '@/style/reset.scss'

// 全局注册页面顶部组件和底部组件
import HospitalTop from '@/component/hospital_top/HospitalTop.vue'
import HospitalBottom from '@/component/hospital_bottom/HospitalBottom.vue'

// 创建应用
const app = createApp(App);

// 全局注册顶部组件
app.component('HospitalTop', HospitalTop)
    .component('HospitalBottom', HospitalBottom);

// 挂载应用
app.mount('#app');
