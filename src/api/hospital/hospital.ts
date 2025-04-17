// 引入二次封装的axios实例
import request from '@/utils/request';
import type { DepartmentResponseData, HospitalDetailResponseData, LoginData, UserLoginResponseData, HospitalWorkData, DoctorResponseData, UserResponseData } from './types';

// 定义接口地址
enum API {
    // 获取医院详情信息的地址
    HOSPITAL_DEFAULT_URL = '/hosp/hospital/',
    // 获取某一个医院的科室的数据
    HOSPITAL_DEPARTMENTS_URL = '/hosp/hospital/department/',
    // 获取响应的验证码的接口
    GET_USER_CODE_URL = '/sms/send/',
    // 用户登录接口
    USER_LOGIN_URL = '/user/login',
    // 某某医院某一个科室预约挂号的数据
    HOSPITAL_WORK_URL = 'hosp/hospital/auth/getBookingScheduleRule/',
    // 获取医院某一个科室某一天的挂号数据
    HOSPITAL_DOCTOR_URL = '/hosp/hospital/auth/findScheduleList/',
    // 获取某一个账号下就诊人的信息
    GET_USER_URL = '/user/patient/auth/findAll'
}

// 获取医院详情的接口
export const repHospitalDetail = (hoscode: string) => {
    return request.get<any, HospitalDetailResponseData>(API.HOSPITAL_DEFAULT_URL + hoscode);
}

// 获取某一个医院的科室的数据的接口
export const repHospitalDepartments = (hoscode: string) => {
    return request.get<any, DepartmentResponseData>(API.HOSPITAL_DEPARTMENTS_URL + hoscode)
}

// 获取验证码的接口
export const repCode = (phone: string) => {
    return request.get<any, any>(API.GET_USER_CODE_URL + phone)
}

// 用户登录接口
export const repUserLogin = (data: LoginData) => {
    return request.post<any, UserLoginResponseData>(API.USER_LOGIN_URL, data)
}

// 获取预约挂号的数据
export const repHospitalWork = (page: number, limit: number, hoscode: string, depcode: string) => {
    return request.get<any, HospitalWorkData>(API.HOSPITAL_WORK_URL + `${page}/${limit}/${hoscode}/${depcode}`);
}

// 获取医生排班的数据
export const repHospitalDoctor = (hoscode: string, depcode: string, workDate: string) => {
    return request.get<any, DoctorResponseData>(API.HOSPITAL_DOCTOR_URL + `${hoscode}/${depcode}/${workDate}`);
}

// 获取某个账号的用户数据
export const repGetUser = () => {
    return request.get<any, UserResponseData>(API.GET_USER_URL);
} 