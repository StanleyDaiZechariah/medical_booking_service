<template>
    <div>
        <div class="info">
            <h1>{{ hospitalStore.hospitalDetail.hospital?.hosname }}停诊信息</h1>
            <el-empty description="暂无信息" />
        </div>
    </div>
</template>

<script setup lang='ts' name='Close'>
// 引入医院的详情的仓库数据
import useDetailStore from '@/store/modules/hospitalDetail';
let hospitalStore = useDetailStore();
</script>

<style scoped lang='scss'>
    .info {
        h1 {
            text-align: center;
            font-size: 30px;
        }
    }
</style>