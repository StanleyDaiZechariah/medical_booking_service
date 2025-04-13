import { defineStore } from "pinia";
// 获取医院详情数据的api
import { repHospitalDepartments, repHospitalDetail } from "@/api/hospital/hospital";
// ts类型
import type { HospitalDetail, HospitalDetailResponseData, DepartmentResponseData, DepartmentArr } from "@/api/hospital/types";
import type { DetailState } from "@/store/modules/interface/detail";

// 我们最好使用组合式api
const useDetailStore = defineStore("Detail", {
    state: (): DetailState => ({
        // 医院详情数据的数据
        hospitalDetail: {} as HospitalDetail,
        // 医院部门数据的数据
        departmentArr: [],
    }),
    actions: {
        // 获取医院详情的方法
        async getHospitalDetail(hoscode: string) {
            let result: HospitalDetailResponseData = await repHospitalDetail(hoscode);
            if (result.code === 200) {
                this.hospitalDetail = result.data;
            }
        },

        // 获取医院部门详情的方法
        async getDepartmentDetail(hoscode: string) {
            let result: DepartmentResponseData = await repHospitalDepartments(hoscode);
            if (result.code === 200) {
                this.departmentArr = result.data;
            }
        }
    },
    getters: {

    }
});


// 获取仓库的方法对外暴露
export default useDetailStore;