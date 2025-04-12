<template>
    <div class="search">
        <el-autocomplete
        clearable
        class="input"
        placeholder="请你输入医院的名称"
        v-model = "hosname"
        :fetch-suggestions="fetchData"
        :trigger-on-focus="false"
        @select="goDetail"></el-autocomplete>
      />
    <el-button type="primary" size="default" :icon="Search">
        搜索
    </el-button>
    </div>
</template>

<script setup lang='ts' name="Search">
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
// 引入请求方法
import { reqHospitalInfo } from '@/api/home/home'
// 引入接口类型
import type { HospitalInfo } from '@/api/home/types'
// 引入路由跳转
import { useRouter } from 'vue-router'

// 使用深度选择器来修改element-plus的默认样式

// 收集搜索的关键字
let hosname = ref<string>('');
// 引入路由
const $router = useRouter()


// 获取顶部组件的回调
const fetchData = async (keyword: string, cb: any) => {
    // 当用户输入完关键字，此函数会发送一次请求
    let res:HospitalInfo = await reqHospitalInfo(keyword);
    // 整理数据，把自己的数据变成对方想要的数据
    let showData = res.data.map(item => {
        return {
            value: item.hosname
        }
    });
    // 给组件提供展示的数组
    cb(showData);
}

// 跳转到详情页
const goDetail = (item: any) => {
    // 跳转到详情页，并把医院名称传递过去
    $router.push({
        path: '/hospital',
    })
}
</script>

<style scoped lang="scss">
    .search {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0;

        // 使用深度选择器来修改element-plus的默认样式
        :deep(.input) {
            width: 600px;
            margin-right: 10px;
        }
    }
</style>