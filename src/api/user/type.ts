// 定义接口返回数据类型

export interface ResponseData {
    "code": number,
    "message": string,
    "ok": boolean
}

// 提交订单接口返回的数据的ts类型
export interface SubmitOrder extends ResponseData {
    data: number
}

// 订单详情数据的ts类型
export interface OrderInfo extends ResponseData {
    "id": number,
    "createTime": string,
    "updateTime": string,
    "isDeleted": number,
    "param": {
        "orderStatusString": string
    },
    "userId": number,
    "outTradeNo": string,
    "hoscode": string,
    "hosname": string,
    "depcode": string,
    "depname": string,
    "scheduleId": string,
    "title": string,
    "reserveDate": string,
    "reserveTime": number,
    "patientId": number,
    "patientName": string,
    "patientPhone": string,
    "hosRecordId": string,
    "number": number,
    "fetchTime": string,
    "fetchAddress": string,
    "amount": number,
    "quitTime": string,
    "orderStatus": number
}

// 定义订单接口返回的数据类型
export interface OrderResponseData extends ResponseData {
    data: OrderInfo
}
