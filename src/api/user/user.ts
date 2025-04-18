// 引入二次封装的axios
import request from '@/utils/request';
import type { OrderResponseData, SubmitOrder } from './type';

// 枚举地址
enum API {
    // 提交订单，获取订单号码接口
    SUBMIT_ORDER_URL = '/order/orderInfo/auth/submitOrder/',
    // 获取订单详情的数据
    GET_ORDER_INFO_URL = '/order/orderInfo/auth/getOrderInfo/',
    // 取消订单的接口
    ORDER_CANCER_URL = '/order/orderInfo/auth/cancelOrder/'
}


// 提交订单，获取订单号码接口
export const repSubmitOrder = (hoscode: string, scheduleId: string, patientId: number) => {
    return request.post<any, SubmitOrder>(API.SUBMIT_ORDER_URL + `${hoscode}/${scheduleId}/${patientId}`)
}

// 获取订单详情的数据
export const repOrderInfo = (orderId: string) => {
    return request.get<any, OrderResponseData>(API.GET_ORDER_INFO_URL + orderId)
}

// 取消订单的接口
export const repCancelOrder = (orderId: string) => {
    return request.get<any, any>(API.ORDER_CANCER_URL + orderId);
}