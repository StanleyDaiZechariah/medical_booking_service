<template>
    <div class="vistor">
        <!-- 卡片顶部 -->
        <div class="top">
            <div class="left">
                <span class="free">医保</span>
                <span class="username">我的名字</span>
            </div>
            <div class="right">
                <el-button type="primary" size="default" :icon="Edit" circle></el-button>
            </div>
        </div>
        <!-- 卡片内容 -->
        <div class="bottom">
            <p>证件类型：身份证</p>
            <p>证件类型：身份证</p>
            <p>证件类型：身份证</p>
            <p>证件类型：身份证</p>
            <p>证件类型：身份证</p>
            <p>证件类型：身份证</p>
            <p>证件类型：身份证</p>
            <p>证件类型：身份证</p>
            <p>证件类型：身份证</p>
            <p>证件类型：身份证</p>
        </div>
    </div>
</template>

<script setup lang='ts'>
// 引入element-plus图标组件
import { Edit } from '@element-plus/icons-vue';

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