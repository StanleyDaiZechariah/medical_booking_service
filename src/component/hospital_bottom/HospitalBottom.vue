<template>
    <div class="bottom">
        <!-- 内容区域 -->
        <div class="content">
            <!-- 左侧 -->
            <div class="left">
                京ICP备12028258号 &nbsp;京公网安备11010802020178号 &nbsp;京ICP证110513号 &nbsp;京网文[2019]0059-0009号
            </div>

            <!-- 右侧 -->
             <div class="right">
                <span>联系我们</span>
                <span>合作伙伴</span>
                <span>用户协议</span>
                <span>隐私协议</span>
             </div>
        </div>
    </div>
</template>

<script setup lang='ts' name='HospitalBottom'>

</script>

<style scoped lang="scss">
    // 底部的总体样式
    .bottom {
        width: 100%;
        height: 50px;
        background-color: #f0f2f5;
        display: flex;
        justify-content: center;

        // 内容区域的总体样式
        .content {
            width: 1200px;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            color: #bbb;

            // 右侧的样式
            .right {
                span {
                    margin: 0 5px;
                }
            }
        }
    }
</style>