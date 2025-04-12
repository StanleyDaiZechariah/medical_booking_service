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
                <Level />
                <!-- 地区 -->
                 <Region />
                 <!-- 医院的结构 -->
                <div class="hospital">
                    <Card class="item" v-for="(item, index) in hospitalData" :key="index" :hospitalInfo = "item" />
                    <!-- 展示分页组件 -->
                    <div>
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
                    </div>
                </div>
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

// 组件挂载完毕需要先发送一次请求
onMounted(() => {
    // 发送请求获取数据
    getHosipitalInfo();
});

// 获取已有的医院的数据
const getHosipitalInfo = async () => {
    const result: HospitalResponseData = await reqHospital(pageNo.value, pageSize.value);
    if (result.code === 200) {
        // 存储数据
        hospitalData.value = result.data.content;
        // 存储数据总数
        total.value = result.data.totalElements;
    }
    console.log(result);
    for(let atrr in result){
        console.log(atrr);
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