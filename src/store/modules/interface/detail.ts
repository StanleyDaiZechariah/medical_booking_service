// 引入已经定义好的医院数据类型的接口
import type { HospitalDetail, DepartmentArr, UserInfo } from "@/api/hospital/types";

// 定义仓库内部存储数据state的类型
export interface DetailState {
    hospitalDetail: HospitalDetail,
    departmentArr: DepartmentArr,
}

// 用户仓库相关state数据类型定义
export interface UserState {
    visiable: boolean, // 用于控制登录组件的dialog显示与隐藏
    code: string, // 存储用户的验证码
    userInfo: UserInfo, // 存储用户信息
}