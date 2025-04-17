<template>
    <div class="vistor">
        <!-- 卡片顶部 -->
        <div class="top">
            <div class="left">
                <span class="free">{{ user.isInsure == 1 ? '医保' : '自费' }}</span>
                <span class="username"> {{ user.name }}</span>
            </div>
            <div class="right">
                <el-button type="primary" size="default" :icon="Edit" circle></el-button>
            </div>
        </div>
        <!-- 卡片内容 -->
        <div class="bottom">
            <p>证件类型：{{ user.param.certificatesTypeString }}</p>
            <p>证件号码：{{ user.certificatesNo }}</p>
            <p>用户性别：{{ user.sex == 1 ? '男' : '女' }}</p>
            <p>出生日期：{{ user.birthdate }}</p>
            <p>手机号码：{{ user.contactsPhone }}</p>
            <p>婚姻状况：{{ user.isMarry == 1 ? '已婚' : '未婚' }}</p>
            <p>当前住址：{{ user.address }}</p>
            <p>详细地址：{{ user.param.fullAddress }}</p>
        </div>
    </div>
</template>

<script setup lang='ts'>
// 引入element-plus图标组件
import { Edit } from '@element-plus/icons-vue';
// 引入vueAPI
import { defineProps } from 'vue';

// 从父组件那里拿来的数据
defineProps(['user']);

</script>

<style scoped lang="scss">
.vistor {
    box-shadow: 0px 0px 12px rgb(0, 0, 0, 0.12);
    .top {
        height: 60px;
        background-color: #e5e5e5;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .left {

            .free {
                background-color: #fff;
                padding: 3px;
                text-align: center;
                font-size: 12px;
                border-radius: 10px;
            }

            .username {
                color: #7f7f7f;
                margin-left: 10px;
            }
        }
    }

    .bottom {
        padding: 20px;

        p {
            line-height: 30px;
        }
    }
}
</style>