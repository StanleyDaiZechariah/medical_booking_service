<template>
    <div>
        <!-- 首页轮播图结构 -->
        <Carousel />
        <!-- 搜索框 -->
        <Search />
        <!-- 底部展示医院的信息 -->
         <el-row>
            <el-col :span="20">
                <!-- 等级子组件 -->
                <Level @getLevel="getLevel" />
                <!-- 地区 -->
                 <Region @getRegion="getRegion" />
                 <!-- 医院的结构 -->
                <div class="hospital" v-if="hospitalData.length > 0">
                    <Card class="item" v-for="(item, index) in hospitalData" :key="index" :hospitalInfo = "item" />
                </div>
                <el-empty v-else description="抱歉，没有找到相关医院" />

                <!-- 展示分页组件 -->
                <el-pagination
                            v-model:current-page="pageNo"
                            v-model:page-size="pageSize"
                            :page-sizes="[10, 20, 30, 40]"
                            :size="size"
                            :background="true"
                            layout="prev, pager, next, jumper, -> , total, sizes"
                            :total="total"
                            @current-change = "currentChange"
                            @size-change = "sizeChange"
                        />
            </el-col>
            <el-col :span="4">456</el-col>
         </el-row>
    </div>
</template>

<script setup lang='ts'>
// 引入首页轮播图组件
import Carousel from "@/pages/home/conponent/Carousel.vue";
// 引入首页搜索框组件
import Search from "./conponent/Search.vue";
// 引入首页等级的组件
import Level from "./conponent/Level.vue";
// 引入首页地区的组件
import Region from "./conponent/Region.vue";
// 引入首页医院的结构
import Card from "./conponent/Card.vue";


// 分页器需要的数据
import { onMounted, ref } from "vue";
// 分页器页码
let pageNo = ref<number>(1);
// 一页展示多少条数据
let pageSize = ref<number>(10);
// 选择分页器的尺寸
let size = ref<string>("small");

// 引入数据接口
import type { Content, HospitalResponseData } from "@/api/home/types"; 
// 引入二次封装的数据接口
import { reqHospital } from "../../api/home/home";
// 存储医院数据
let hospitalData = ref<Content>([]);
// 数据总数
let total = ref<number>(0);
// 存储医院的等级响应数据
let hostype = ref<string>('');
// 存储医院的地区响应数据
let districtCode = ref<string>('');


// 组件挂载完毕需要先发送一次请求
onMounted(() => {
    // 发送请求获取数据
    getHosipitalInfo();
});

// 获取已有的医院的数据
const getHosipitalInfo = async () => {
    const result: HospitalResponseData = await reqHospital(pageNo.value, pageSize.value, hostype.value, districtCode.value);
    if (result.code === 200) {
        // 存储数据
        hospitalData.value = result.data.content;
        // 存储数据总数
        total.value = result.data.totalElements;
    }
};

// 页码改变的回调函数
const currentChange = () => {
    // 再次发送请求获取数据
    getHosipitalInfo();
};

// 分页器下拉菜单发生变化的回调函数
const sizeChange = () => {
    // 当前页码归为第一页
    pageNo.value = 1;
    getHosipitalInfo();
};

// 子组件的自定义事件：向父组件传递等级数据
const getLevel = (value: string) => {
    // 收集等级参数
    hostype.value = value;
    // 再次发送请求
    getHosipitalInfo();
};

// 子组件的自定义事件：向父组件传递地区数据
const getRegion = (value: string) => {
    // 收集地区参数
    districtCode.value = value;
    // 再次发送请求
    getHosipitalInfo();
};

</script>

<style scoped lang="scss">

    .hospital {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .item {
            width: 48%;
            margin: 5px 0;
        }
    }
</style>