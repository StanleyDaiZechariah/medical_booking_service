// 引入二次封装的axios实例
import request from '@/utils/request';
import type { DepartmentResponseData, HospitalDetailResponseData } from './types';

// 定义接口地址
enum API {
    // 获取医院详情信息的地址
    HOSPITAL_DEFAULT_URL = '/hosp/hospital/',
    // 获取某一个医院的科室的数据
    HOSPITAL_DEPARTMENTS_URL = '/hosp/hospital/department/'
}

// 获取医院详情的接口
export const repHospitalDetail = (hoscode: string) => {
    return request.get<any, HospitalDetailResponseData>(API.HOSPITAL_DEFAULT_URL + hoscode);
}

// 获取某一个医院的科室的数据的接口
export const repHospitalDepartments = (hoscode: string) => {
    return request.get<any, DepartmentResponseData>(API.HOSPITAL_DEPARTMENTS_URL + hoscode)
}


