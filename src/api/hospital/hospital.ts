// 引入二次封装的axios实例
import request from '@/utils/request';
import type { HospitalDetailResponseData } from './types';

// 定义接口地址
enum API {
    HOSPITAL_DEFAULT_URL = '/hosp/hospital/',
}

// 获取医院详情的接口
export const repHospitalDetail = (hoscode: string) => {
    return request.get<any, HospitalDetailResponseData>(API.HOSPITAL_DEFAULT_URL + hoscode);
}

