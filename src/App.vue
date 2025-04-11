<script setup lang="ts">



</script>

<template>
  <div class="container">
    <!-- 顶部的全局组件 -->
    <HospitalTop />
    <!-- 展示整个路由组件的区域 -->
     <div class="content">
      xxxxxxxxx
     </div>
     <!-- 底部的全局组件 -->
     <div class="bottom">
       123456
     </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  // 路由展示区域
  .content {
    margin-top: 80px;
    width: 1200px;
    min-height: 700px;
    background-color: red;
  }

  // 底部区域
  .bottom {
    width: 100%;
    height: 50px;
    background-color: green;
  }
}
</style>
