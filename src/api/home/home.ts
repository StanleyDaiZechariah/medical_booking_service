// 封装首页相关的数据请求
import request from '@/utils/request'
import type { HospitalInfo, HospitalLevelAndRegionResponseData, HospitalResponseData } from './types'

enum API {
    // 获取已有的医院数据接口地址
    HOSPITAL_URL = '/hosp/hospital/',
    // 获取医院等级与地区接口,
    HOSPITAL_LEVEL_AND_REGION_URL = '/cmn/dict/findByDictCode/',
    // 根据关键字医院的名字获取数据
    HOSPITAL_INFO_URL = '/hosp/hospital/findByHosname/'

}

// 获取已有的医院数据
export const reqHospital = (page: number, limit: number, hostype = '', districtCode = '') => {
    return request.get<any, HospitalResponseData>(API.HOSPITAL_URL + `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`);
}

// 获取医院等级或者医院地区
export const reqHospitalLevelAndRegion = (dictCode: string) => {
    return request.get<any, HospitalLevelAndRegionResponseData>(API.HOSPITAL_LEVEL_AND_REGION_URL + dictCode);
}

// 根据关键字医院的名字获取数据
export const reqHospitalInfo = (hosname: string) => {
    return request.get<any, HospitalInfo>(API.HOSPITAL_INFO_URL + hosname);
}