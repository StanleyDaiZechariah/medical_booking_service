<template>
    <div class="container">
        <h1 class="tip">确认挂号信息</h1>
        <!-- 展示就诊人的卡片信息 -->
        <el-card class="box-card">
            <!-- 卡片的头部 -->
            <template #header>
                <div class="card-header">
                    <span>请你选择就诊人</span>
                    <el-button type="primary" size="default" :icon="Edit">添加就诊人</el-button>
                </div>
            </template>

            <!-- 卡片的主体要展示就诊人的具体信息 -->
            <div class="user">
                <Visitor v-for="item in 4" :key="item" class="item" />
            </div>
        </el-card>
        <!-- 展示医生的信息 -->
    </div>
</template>

<script setup lang="ts" name="Register_step2">
// 引入element-plus的icon组件
import {Edit} from '@element-plus/icons-vue';
// 展示就诊人的组件
import Visitor from './Visitor.vue';

</script>

<style scoped lang="scss">
.container {
    .tip {
        font-weight: 900;
        color: #000;
        font-size: 30px;
    }

    .box-card {
        margin: 20px 0;

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .user {
            display: flex;
            flex-wrap: wrap;

            .item {
                width: 32%;
                margin: 5px;
            }
        }
    }
}
</style>
