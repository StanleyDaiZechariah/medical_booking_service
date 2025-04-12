<template>
    <div class="level">
        <h1>医院</h1>
        <div class="content">
            <div class="left">等级: </div>
            <ul class="hospital">
                <li :class="{active:activeFlag == ''}" @click="changeLevel('')">全部</li>
                <li v-for="item in levelArr" :key="item.value" :class="{active:activeFlag == item.value}" @click="changeLevel(item.value)">{{ item.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang='ts' name='Level'>
import type { HospitalLevelAndRegionArr, HospitalLevelAndRegionResponseData } from "@/api/home/types";
import {reqHospitalLevelAndRegion} from "@/api/home/home";
import { ref, onMounted } from "vue";

// 定义一个数组存储医院等级
const levelArr = ref<HospitalLevelAndRegionArr>([]);

// 控制医院等级高亮的数组
let activeFlag = ref<string>('');

// 组件挂载完毕
onMounted(() => {
    getLevel();
})

// 获取医院等级的数据
const getLevel = async () => {
    let res: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('HosType');
    
    // 如果数据正常返回则马上放入数组中去
    if(res.code === 200) {
        levelArr.value = res.data;
    }
}

// 点击等级的回调
const changeLevel = (value: string) => {
    // 高亮响应式数据存储于level数值
    activeFlag.value = value;
}
</script>

<style scoped lang="scss">
    .level {
        color: #7f7f7f;
        h1 {
            font-weight: 900;
            margin: 10px 0;
        }

        .content {
            display: flex;

            .left {
                margin-right: 10px;
            }

            .hospital {
                display: flex;

                li {
                    margin-right: 10px;

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