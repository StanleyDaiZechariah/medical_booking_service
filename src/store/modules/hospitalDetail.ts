import { defineStore } from "pinia";
// 获取医院详情数据的api
import { repHospitalDetail } from "@/api/hospital/hospital";
// ts类型
import type { HospitalDetailResponseData } from "@/api/hospital/types";

// 我们最好使用组合式api
const useDetailStore = defineStore("Detail", {
    state: () => ({
        // 医院详情数据的数据
        hospitalDetail: {}
    }),
    actions: {
        // 获取医院详情的方法
        async getHospitalDetail(hoscode: string) {
            let result: HospitalDetailResponseData = await repHospitalDetail(hoscode);
            if (result.code === 200) {
                this.hospitalDetail = result.data;
            }
        }
    },
    getters: {

    }
});


// 获取仓库的方法对外暴露
export default useDetailStore;