// 封装首页相关的数据请求
import request from '@/utils/request'

enum API {
    // 获取已有的医院数据接口地址
    HOSPITAL_URL = '/hosp/hospital/',

}

// 获取已有的医院数据
export const reqHospital = (page: number, limit: number) => {
    return request.get(API.HOSPITAL_URL + `${page}/${limit}`);
}