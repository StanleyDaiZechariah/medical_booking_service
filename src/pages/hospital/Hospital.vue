<template>
  <div class="hospital">
    <!-- 左侧导航区 -->
    <div class="menu">

      <!-- 顶部图表和文字 -->
      <div class="top">
        <el-icon><HomeFilled /></el-icon>
        <span>/ 医院详情</span>
      </div>

      <!-- 左侧菜单 -->
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"

      >
        <!-- 预约挂号 -->
        <el-menu-item index="/hospital/register" @click="changeActive('/hospital/register')">
          <el-icon><InconMenu /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>

        <!-- 医院详情  -->
        <el-menu-item index="/hospital/detail" @click="changeActive('/hospital/detail')">
          <el-icon><Document /></el-icon>
          <span>医院详情</span>
        </el-menu-item>

        <!-- 预约通知  -->
        <el-menu-item index="/hospital/notice" @click="changeActive('/hospital/notice')">
          <el-icon><Setting /></el-icon>
          <span>预约通知</span>
        </el-menu-item>

        <!-- 停诊信息  -->
        <el-menu-item index="/hospital/close" @click="changeActive('/hospital/close')">
          <el-icon><InfoFilled /></el-icon>
          <span>停诊信息</span>
        </el-menu-item>

        <!-- 查询/取消  -->
        <el-menu-item index="/hospital/lookup" @click="changeActive('/hospital/lookup')">
          <el-icon><Search /></el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
    </div>

    <!-- 右侧内容区 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang='ts' name='Hospital'>
// 引入左侧菜单需要的组件
import { Document, Menu as InconMenu, Setting, InfoFilled, Search, HomeFilled } from '@element-plus/icons-vue';
// 引入路由
import { useRouter, useRoute } from 'vue-router';
// 引入生命周期函数
import { onMounted } from 'vue';
// 引入pinia仓库
import useDetailStore from '@/store/modules/hospitalDetail';


// 引入路由
const $router = useRouter();
// 获取当前的路由信息
const $route = useRoute();
// 获取仓库对象
const detailStore = useDetailStore();


// 路由切换的回调函数
const changeActive = (path: string) => {
  $router.push({
    path: path,
    query: {
            hoscode: detailStore.hospitalDetail.hospital.hoscode,
        }
  });
}

// 组件挂载完毕，就通知pinia仓库发送获取医院详情的数据，并存储在仓库中
onMounted(() => {
  // 获取医院详情的数据
  detailStore.getHospitalDetail($route.query.hoscode as string);
  // 获取医院部门详情的数据
  detailStore.getDepartmentDetail($route.query.hoscode as string);
});

</script>

<style scoped lang='scss'>
  .hospital {
    display: flex;

    .menu {
      flex: 2;
      display: flex;
      flex-direction: column;
      align-items: center;

      .top {
        color: #7f7f7f;
      }
    }

    .content {
      flex: 8;
    }
  }
</style>