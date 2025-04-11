<template>
    <div class="region">
        <div class="content">
            <div class="left">地区: </div>
            <ul>
                <li class="active">首页</li>
                <li v-for="item in 28" :key="item">首页</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang='ts' name="Region">

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