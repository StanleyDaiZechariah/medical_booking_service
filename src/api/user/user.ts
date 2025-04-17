// 引入二次封装的axios
import request from '@/utils/request';
import type { SubmitOrder } from './type';

// 枚举地址
enum API {
    // 提交订单，获取订单号码接口
    SUBMIT_ORDER_URL = '/order/orderInfo/auth/submitOrder/',
}


// 提交订单，获取订单号码接口
export const repSubmitOrder = (hoscode: string, scheduleId: string, patientId: number) => {
    return request.post<any, SubmitOrder>(API.SUBMIT_ORDER_URL + `${hoscode}/${scheduleId}/${patientId}`)
}