// 引入已经定义好的医院数据类型的接口
import type { HospitalDetail, DepartmentArr } from "@/api/hospital/types";

// 定义仓库内部存储数据state的类型
export interface DetailState {
    hospitalDetail: HospitalDetail,
    departmentArr: DepartmentArr,
}
