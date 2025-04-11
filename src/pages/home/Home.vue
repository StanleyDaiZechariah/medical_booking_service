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

</script>

<style scoped lang="scss">

</style>