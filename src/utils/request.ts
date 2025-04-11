// 对于axios函数库进行二次封装

// 二次封装的目的：
// 1、利用axios请求、相应拦截器的功能
// 2、请求拦截器，一般可以在请求头中携带公共的参数：token
// 3、响应拦截器，简化服务器返回的数据，处理http网络错误、业务错误等

// 引入axios
import axios from 'axios';
import { ElMessage } from 'element-plus';

// axios.create()方法创建axios实例，并设置默认配置
const request = axios.create({
    baseURL: '/api',
    timeout: 30000,
});

// 请求拦截器
request.interceptors.request.use((config) => {
    // config：请求拦截器回调注入的对象，配置对象身上最重要的一件事情headers属性
    // 可以通过请求头携带公共参数-token
    return config;
});

// 响应拦截器
request.interceptors.response.use((response) => {
    // 响应拦截器成功的回调函数，一般会进行简化数据
    return response
}, (error) => {
    // 处理http网络错误、业务错误等
    let status = error.code;
    console.log(status);
    switch (status) {
        case 404:
            // 错误提示信息
            ElMessage({
                type: 'error',
                message: '请求的资源不存在'
            })
            break;
        case 500 | 502 | 503 | 504 | 505:
            ElMessage({
                type: 'error',
                message: '服务器内部错误'
            })
            break;
        case 401:
            ElMessage({
                type: 'error',
                message: '请先登录'
            })
            break;
        default:
            ElMessage({
                type: 'error',
                message: '请求失败，请稍后再试'
            })
            break;
    }

    return Promise.reject(new Error(error.message));
});

// 二次封装完毕以后一定要记得对外暴露axios
export default request;

