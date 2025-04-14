<script setup lang="ts">
// 引入用户仓库
import  useUserStore  from "@/store/modules/user";

// 用户仓库实例
const userStore = useUserStore();

</script>

<template>
  <div class="container">
    <!-- 顶部的全局组件 -->
    <HospitalTop />

    <!-- 展示整个路由组件的区域 -->
    <div class="content">
       <router-view />
    </div>

    <!-- 底部的全局组件 -->
    <HospitalBottom />
      
    <!-- 登录组件 -->
     <!-- 这里利用组件的生命周期来达到清楚校验信息的目的，不过是直接清楚了用户数据仓库 -->
    <Login v-if="userStore.visiable" />
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  // 路由展示区域
  .content {
    margin: 80px 0 10px;
    width: 1200px;
    min-height: 700px;
  }
}
</style>
