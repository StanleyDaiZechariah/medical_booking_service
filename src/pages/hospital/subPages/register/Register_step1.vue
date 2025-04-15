<template>
    <div class="wrap">
        <!-- 顶部结构 -->
        <div class="top">
            <div class="hosname"> {{ workData.baseMap?.hosname }}</div>
            <div class="line"></div>
            <div>{{ workData.baseMap?.bigname }}</div>
            <div class="dot">.</div>
            <div class="hosdepartment">{{workData.baseMap?.depname}}</div>
        </div>
        <!-- 预约功能主页面 -->
        <div class="center">
            <!-- 时间 -->
            <h1 class="time">{{ workData.baseMap?.workDateString }}</h1>
            <!-- 预约主体 -->
            <div class="container">
                <div class="item" :class="{active: item.status == -1 || item.availableNumber == -1}" v-for="item in workData.bookingScheduleList" :key="item">
                    <div class="upper">{{ item.workDate }} - {{ item.dayOfWeek }}</div>
                    <div class="lower">
                        <div v-if="item.status == -1">停止挂号</div>
                        <div v-if="item.status == 0">
                            {{ item.availableNumber == -1 ? '预约已满' : '有号(' + item.availableNumber + ')' }}
                        </div>
                        <div v-if="item.status == 1">即将放号</div>
                    </div>
                </div>
            </div>

            <!-- 分页器 -->
            <el-pagination v-model:current-page="pageNo" layout="prev, pager, next" :total="workData.total" @current-change="fetchWorkData"/>
        </div>
    </div>
</template>

<script setup lang='ts' name="Register_step1">
// 引入vue组件
import { onMounted, ref } from 'vue';
// 引入后端接口
import { repHospitalWork } from '@/api/hospital/hospital';
// 引入路由
import { useRoute } from 'vue-router';
// 引入接口类型
import type { HospitalWorkData } from '@/api/hospital/types';

// 当前的页码
let pageNo = ref<number>(1);
// 每一页显示几条数据
let limit = ref<number>(6);
// 路由对象
let $route = useRoute();
// 存储医院科室挂号的数据
let workData = ref<any>({});

// 组件挂载完毕就发送一次请求
onMounted(() => {
    fetchWorkData();
});
// 获取挂号的数据
const fetchWorkData = async () => {
    let res: HospitalWorkData = await repHospitalWork(pageNo.value, limit.value, $route.query.hoscode as string, $route.query.depcode as string);
    if(res.code == 200) {
        workData.value = res.data;
    }
}
</script>

<style scoped lang="scss">
    .wrap {
        .top {
            display: flex;
            color: #7f7f7f;

            .line {
                width: 1px;
                height: 20px;
                background-color: burlywood;
                margin: 0 5px;
            }

            .dot {
                margin: 0 8px;
                color: burlywood;
            }
        }

        .center {
            margin: 20px 0;
            display: flex;
            flex-direction: column;
            align-items: center;

            .time {
                font-weight: bold;
            }

            .container {
                width: 100%;
                display: flex;
                margin: 30px 0;

                .item {
                    flex: 1;
                    width: 100%;
                    border: 1px solid skyblue;
                    color: #000;
                    margin: 0 5px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    &.active {
                        border: 1px solid #7f7f7f; 
                        color: red;

                        .upper {
                            background-color: #ccc;
                            color: #7f7f7f;
                        }
                    }

                    .upper {
                        background-color:  #e8f2ff;
                        height: 30px;
                        width: 100%;
                        text-align: center;
                        line-height: 30px;
                    }

                    .lower {
                        width: 100%;
                        height: 60px;
                        text-align: center;
                        line-height: 60px;
                    }
                }
            }
        }
    }
</style>