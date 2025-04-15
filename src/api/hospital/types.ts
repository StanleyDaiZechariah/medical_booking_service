// 定义详情模块的数据类型
export interface ResponseData {
    code: number,
    message: string,
    ok: boolean,
}

// 定义医院详细信息的数据类型
export interface HospitalDetail {
    "bookingRule": {
        "cycle": number,
        "releaseTime": string,
        "stopTime": string,
        "quitDay": number,
        "quitTime": string,
        "rule": string[]
    },
    "hospital": {
        "id": string,
        "createTime": string,
        "updateTime": string,
        "isDeleted": number,
        "param": {
            "hostypeString": string,
            "fullAddress": string
        },
        "hoscode": string,
        "hosname": string,
        "hostype": string,
        "provinceCode": string,
        "cityCode": string,
        "districtCode": string,
        "address": string,
        "logoData": string,
        "intro": string,
        "route": string,
        "status": number,
        "bookingRule": {
            "cycle": number,
            "releaseTime": string,
            "stopTime": string,
            "quitDay": number,
            "quitTime": string,
            "rule": string[]
        }
    }
}

// 医院详情返回数据ts
export interface HospitalDetailResponseData extends ResponseData {
    data: HospitalDetail
}

// 医院科室的数据
export interface Department {
    "depcode": string,
    "depname": string,
    "children"?: Department[]
}

//代表存储科室数组类型
export type DepartmentArr = Department[];
//获取科室接口返回的数据类型
export interface DepartmentResponseData extends ResponseData {
    data: DepartmentArr
}


// 用户登录接口需要携带的参数的类型
export interface LoginData {
    phone: string,
    code: string,
}

// 登录接口返回用户信息的类型
export interface UserInfo {
    name: string,
    token: string,
}

// 登录接口返回的数据的ts类型
export interface UserLoginResponseData extends ResponseData {
    data: UserInfo
}

// 医院科室接口返回数据的ts类型
export interface BaseMap {
    "workDateString": string,
    "releaseTime": string,
    "bigname": string,
    "stopTime": string,
    "depname": string,
    "hosname": string
}

export interface WorkData {
    "workDate": string,
    "workDateMd": string,
    "dayOfWeek": string,
    "docCount": number,
    "reservedNumber": null,
    "availableNumber": number,
    "status": number
}

export type BookingScheduleList = WorkData[];

export interface HospitalWorkData extends ResponseData {
    data: {
        total: number,
        bookingScheduleList: BookingScheduleList,
        baseMap: BaseMap
    }
}