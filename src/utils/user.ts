// 存储用户信息到本地的方法
export const SET_TOKEN = (userInfo: string) => {
    localStorage.setItem('USERINFO', userInfo);
}

// 获取本地存储的用户信息
export const GET_TOKEN = () => {
    return localStorage.getItem('USERINFO');
}

// 清楚本地存储用户相关的数据
export const REMOVE_TOKEN = () => {
    localStorage.removeItem('USERINFO');
}