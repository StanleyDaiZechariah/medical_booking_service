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

// 代表医院某天的工作日程列表数据类型
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

// 代表医院某天的工作日程列表接口返回数据类型
export interface HospitalWorkData extends ResponseData {
    data: {
        total: number,
        bookingScheduleList: BookingScheduleList,
        baseMap: BaseMap
    }
}


// 代表的是医院某科室医生数据的ts类型
export interface Doctor {
    "id": string,
    "createTime": string,
    "updateTime": string,
    "isDeleted": number,
    "param": {
        "dayOfWeek": string,
        "depname": string,
        "hosname": string
    },
    "hoscode": string,
    "depcode": string,
    "title": string,
    "docname": string,
    "skill": string,
    "workDate": string,
    "workTime": number,
    "reservedNumber": number,
    "availableNumber": number,
    "amount": number,
    "status": number,
    "hosScheduleId": string
}

export type DocArr = Doctor[];

// 医生排班接口的返回数据类型
export interface DoctorResponseData extends ResponseData {
    data: DocArr
}


// 用户数据的ts类型
export interface User {
    "id": number,
    "createTime": string,
    "updateTime": string,
    "isDeleted": number,
    "param": {
        "certificatesTypeString": string,
        "contactsCertificatesTypeString": string,
        "cityString": null,
        "fullAddress": string,
        "districtString": null,
        "provinceString": null
    },
    "userId": number,
    "name": string,
    "certificatesType": string,
    "certificatesNo": string,
    "sex": number,
    "birthdate": string,
    "phone": string,
    "isMarry": number,
    "provinceCode": null,
    "cityCode": null,
    "districtCode": null,
    "address": string,
    "contactsName": string,
    "contactsCertificatesType": string,
    "contactsCertificatesNo": string,
    "contactsPhone": string,
    "isInsure": number,
    "cardNo": null,
    "status": string
}

export type UserArr = User[];

// 用户列表接口的返回数据类型
export interface UserResponseData extends ResponseData {
    data: UserArr
}

// 获取某一个挂号医生数据详情
export interface DoctorInfoData extends ResponseData {
    data: Doctor
}
