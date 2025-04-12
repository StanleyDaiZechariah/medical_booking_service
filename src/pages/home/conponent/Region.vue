<template>
    <div class="region">
        <div class="content">
            <div class="left">地区: </div>
            <ul>
                <li :class="{active:regionFlag == ''}" @click="changeRegion('')">全部</li>
                <li v-for="item in regionArr" :key="item.value" :class="{active:regionFlag == item.value}" @click="changeRegion(item.value)">{{ item.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang='ts' name="Region">
import type { HospitalLevelAndRegionArr, HospitalLevelAndRegionResponseData } from "@/api/home/types";
import {reqHospitalLevelAndRegion} from "@/api/home/home";
import { ref, onMounted } from "vue";

// 存储地区的数组
let regionArr = ref<HospitalLevelAndRegionArr>([]);

// 地区高亮响应式数据
let regionFlag = ref<string>('');

// 地区粗剪挂载完毕就加载数据
onMounted(() => {
    getRegion();
});

// 获取地区的数据
const getRegion = async () => {
    let res: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('Beijin');
    
    // 存储地区的数组
    if (res.code === 200){
        regionArr.value = res.data;
    }
}

// 点击高亮回调
const changeRegion = (value: string) => {
    regionFlag.value = value;

    // 触发父组件的自定义事件
    $emit('getRegion', value);
}

let $emit = defineEmits(['getRegion']);
</script>

<style scoped lang='scss'>
    .region {
        color: #7f7f7f;
        margin-top: 10px;

        .content {
            display: flex;

            .left {
                margin-right: 10px;
                width: 36px;
            }

            ul {
                display: flex;
                flex-wrap: wrap;
                width: 800px;

                li {
                    margin-right: 10px;
                    margin-bottom: 10px;

                    &.active {
                        color: #55a6fe;
                    }
                }
                li:hover {
                    color:#55a6fe;
                    cursor: pointer;
                }
            }
        }
    }
</style>