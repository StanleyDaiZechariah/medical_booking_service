<template>
    <div>
        <el-carousel indicator-position="outside" height="350px">
            <el-carousel-item v-for="item in 4" :key="item">
                <img src="../../../asset/images/web-banner-1.png" alt="网页轮播图">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup lang='ts' name='Carousel'>

</script>

<style scoped lang='scss'>
    img{
        width: 100%;
        height: 350px;
    }
</style>