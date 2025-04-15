<template>
    <div class="wrap">
        <!-- 顶部结构 -->
        <div class="top">
            <div class="hosname">北京xxx医院</div>
            <div class="line"></div>
            <div>专科</div>
            <div class="dot">.</div>
            <div class="hosdepartment">多发性硬化专科门诊</div>
        </div>
        <!-- 预约功能主页面 -->
        <div class="center">
            <!-- 时间 -->
            <h1 class="time">2023年12月1日</h1>
            <!-- 预约主体 -->
            <div class="container">
                <div class="item" v-for="item in 6" :key="item">
                    <div class="upper">123</div>
                    <div class="lower">435</div>
                </div>
            </div>

            <!-- 分页器 -->
            <el-pagination layout="prev, pager, next" :total="1000" />
        </div>
    </div>
</template>

<script setup lang='ts' name="Register_step1">

</script>

<style scoped lang="scss">
    .wrap {
        .top {
            display: flex;
            color: #7f7f7f;

            .line {
                width: 1px;
                height: 20px;
                background-color: burlywood;
                margin: 0 5px;
            }

            .dot {
                margin: 0 8px;
                color: burlywood;
            }
        }

        .center {
            margin: 20px 0;
            display: flex;
            flex-direction: column;
            align-items: center;

            .time {
                font-weight: bold;
            }

            .container {
                width: 100%;
                display: flex;
                margin: 30px 0;

                .item {
                    flex: 1;
                    width: 100%;
                    border: 1px solid skyblue;
                    margin: 0 5px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;


                    .upper {
                        background-color:  #e8f2ff;
                        height: 30px;
                        width: 100%;
                        color: #000;
                        text-align: center;
                        line-height: 30px;
                    }

                    .lower {
                        width: 100%;
                        height: 60px;
                        text-align: center;
                        line-height: 60px;
                    }
                }
            }
        }
    }
</style>