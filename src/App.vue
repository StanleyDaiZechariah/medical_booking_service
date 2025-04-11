<script setup lang="ts">


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
