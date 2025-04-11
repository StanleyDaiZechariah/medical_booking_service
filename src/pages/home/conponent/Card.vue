<template>
    <el-card class="box-card" shadow="hover">
        <div class="content">
            <div class="left">
                <div class="hospital_name">
                    北京市隆福医院
                </div>
                <div class="tip">
                    <div class="level">
                        <svg t="1744361321957" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2031" width="16" height="16"><path d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z" p-id="2032"></path></svg>
                        <span>三级甲等</span>
                    </div>
                    <div class="time">
                        <svg t="1744361368946" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3190" width="16" height="16"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m0-960C265.6 64 64 265.6 64 512s201.6 448 448 448 448-201.6 448-448S758.4 64 512 64z" fill="#666666" p-id="3191"></path><path d="M512 304c9.6 0 16 6.4 16 16v256c0 9.6-6.4 16-16 16s-16-6.4-16-16v-256c0-9.6 6.4-16 16-16z" fill="#D8D8D8" p-id="3192"></path><path d="M512 608c-19.2 0-32-12.8-32-32v-256c0-19.2 12.8-32 32-32s32 12.8 32 32v256c0 19.2-12.8 32-32 32z m0-304v16-16z" fill="#666666" p-id="3193"></path><path d="M646.4 662.4c-3.2 6.4-12.8 9.6-22.4 6.4l-108.8-67.2c-6.4-3.2-9.6-12.8-6.4-22.4 3.2-6.4 12.8-9.6 22.4-6.4L640 640c9.6 3.2 12.8 16 6.4 22.4z" fill="#D8D8D8" p-id="3194"></path><path d="M633.6 684.8c-6.4 0-12.8 0-16-3.2l-108.8-67.2c-16-9.6-19.2-28.8-9.6-44.8 9.6-16 28.8-19.2 44.8-9.6l108.8 67.2c16 9.6 19.2 28.8 9.6 44.8-6.4 9.6-19.2 12.8-28.8 12.8z m-108.8-96l124.8 73.6-12.8-9.6-112-64z" fill="#666666" p-id="3195"></path></svg>
                        <span>2023</span>
                    </div>
                </div>
            </div>

            <div class="right">
                <img src="../../../asset/images/logo.png" alt="医院的logo">
            </div>
        </div>
    </el-card>
</template>

<script setup lang='ts' name='Card'>

</script>

<style scoped lang="scss">
   .content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .right {
            img {
                width: 50px;
                height: 50px;
            }
        }

        .left {
            width: 60%;

            .tip {
                color:#7f7f7f;
                margin-top: 20px;
                display: flex;
                justify-content: space-between;

                .level,.time {
                    display: flex;
                    align-items: center;
                    font-size: 16px;

                    span {
                        margin-left: 6px;
                    }
                }
            }
        }
   }

</style>