<script setup lang="ts">
import request from "@/utils/request";
import { onMounted } from 'vue';

// 测试axios请求
onMounted(() => {
  request.get('/hosp/hospital/1/10')
  .then(res => res.data)
  .then(data => console.log('请求成功：', JSON.stringify(data)))
  .catch(err => console.log('请求失败：', err));
});

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
