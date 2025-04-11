<template>
    <div class="search">
        <el-autocomplete
        clearable
        class="input"
        placeholder="请你输入医院的名称"
        
      />
    <el-button type="primary" size="default" :icon="Search">
        搜索
    </el-button>
    </div>
</template>

<script setup lang='ts'>
import { Search } from '@element-plus/icons-vue'

// 使用深度选择器来修改element-plus的默认样式

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