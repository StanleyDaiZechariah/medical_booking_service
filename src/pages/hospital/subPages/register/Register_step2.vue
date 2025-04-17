<template>
  <div class="container">
    <h1 class="tip">确认挂号信息</h1>
    <!-- 展示就诊人的卡片信息 -->
    <el-card class="box-card">
      <!-- 卡片的头部 -->
      <template #header>
        <div class="card-header">
          <span>请你选择就诊人</span>
          <el-button type="primary" size="default" :icon="Edit"
            >添加就诊人</el-button
          >
        </div>
      </template>

      <!-- 卡片的主体要展示就诊人的具体信息 -->
      <div class="user">
        <Visitor
          @click="changeIndex(index)"
          v-for="(user, index) in userArr"
          :key="user.id"
          class="item"
          :user="user"
          :index="index"
          :currentIndex="currentIndex"
        />
      </div>
    </el-card>
    <!-- 展示医生的信息 -->
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>挂号信息</span>
        </div>
      </template>
      <!-- 卡片身体：展示医生的详细信息 -->
      <el-descriptions class="margin-top" :column="2" border>
        <!-- 第一个描述项：就诊日期 -->
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">就诊日期：</div>
          </template>
          {{ doctorInfo?.workDate }}
        </el-descriptions-item>

        <!-- 第二个描述项：就诊医院 -->
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">就诊医院：</div>
          </template>
          {{ doctorInfo.param?.hosname }}
        </el-descriptions-item>

        <!-- 第三个描述项：就诊科室 -->
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">就诊科室：</div>
          </template>
          {{ doctorInfo.param?.depname }}
        </el-descriptions-item>

        <!-- 第四个描述项：医生姓名 -->
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">医生姓名：</div>
          </template>
          {{ doctorInfo?.docname }}
        </el-descriptions-item>

        <!-- 第五个描述项：医生职称-->
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">医生职称：</div>
          </template>
          {{ doctorInfo?.title }}
        </el-descriptions-item>

        <!-- 第六个描述项：医生专长 -->
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">医生专长：</div>
          </template>
          {{ doctorInfo?.skill }}
        </el-descriptions-item>

        <!-- 第七个描述项：医事服务费 -->
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">医事服务费：</div>
          </template>
          {{ doctorInfo?.amount }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>

    <!-- 确定挂号按钮 -->
    <div class="btn">
      <el-button
        type="primary"
        size="default"
        :disabled="currentIndex == -1 ? true : false"
        @click="submitOrder"
        >确定挂号</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts" name="Register_step2">
// 引入element-plus的icon组件
import { Edit } from "@element-plus/icons-vue";
// 展示就诊人的组件
import Visitor from "./Visitor.vue";
// 引入获取就诊人信息接口
import { repGetUser, repDoctorInfo } from "@/api/hospital/hospital";
// 引入vueAPI
import { onMounted, ref } from "vue";
// 引入用户的数据类型
import type {
  UserResponseData,
  UserArr,
  DoctorInfoData,
  Doctor,
} from "@/api/hospital/types";
// 获取路由对象
import { useRoute, useRouter } from "vue-router";
// 引入提交订单接口
import { repSubmitOrder } from "@/api/user/user";
// 引入订单接口数据类型
import type { SubmitOrder } from "@/api/user/type";
import { ElMessage } from "element-plus";

// 存储就诊人的信息
let userArr = ref<UserArr>([]);
// 获取路由对象
let $route = useRoute();
// 存储医生的信息
let doctorInfo = ref<Doctor>({} as Doctor);
// 存储用户确定就诊人的信息的索引值
let currentIndex = ref<number>(-1);
// 获取路由器对象
let $router = useRouter();

// 组件挂载完毕就获取用户的就诊人信息
onMounted(() => {
  // 获取就诊人信息
  fetchUserData();
  // 获取某个具体医生的信息
  fetchDocInfo($route.query.docId as string);
});
// 获取就诊人的信息的函数
const fetchUserData = async () => {
  //
  let res: UserResponseData = await repGetUser();
  console.log(res);
  if (res.code == 200) {
    userArr.value = res.data;
  }
};
// 获取某个具体医生的信息的函数
const fetchDocInfo = async (schedule: string) => {
  let res: DoctorInfoData = await repDoctorInfo(schedule);
  console.log(res);
  if (res.code == 200) {
    doctorInfo.value = res.data;
  }
};
// 点击就诊人子组件的回调
const changeIndex = (index: number) => {
  // 存储当前用户选择的就诊人的信息索引值
  currentIndex.value = index;
};
// 确定挂号按钮的回调
const submitOrder = async () => {
    // console.log("确定挂号按钮的回调");
    // 医院编号
    let hoscode = doctorInfo.value.hoscode;
    // 医生的ID
    let docId = doctorInfo.value.id;
    // 就诊人的ID
    let userId = userArr.value[currentIndex.value].id;
    // console.log(userId, docId, hoscode);
    // 提交订单
    let res: SubmitOrder =  await repSubmitOrder(hoscode, docId, userId);
    console.log(res);
    if (res.code == 200) {
        $router.push({
            path: '/user/order',
            query: {
                orderId: res.data
            }
        })
    } else {
        ElMessage({
            type: 'error',
            message: '提交订单失败'
        })
    }
}
</script>

<style scoped lang="scss">
.container {
  .tip {
    font-weight: 900;
    color: #000;
    font-size: 30px;
  }

  .box-card {
    margin: 20px 0;
    cursor: pointer;

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .user {
      display: flex;
      flex-wrap: wrap;

      .item {
        width: 32%;
        margin: 5px;
      }
    }
  }

  .btn {
    display: flex;
    justify-content: center;
    margin: 10px 0;
  }
}
</style>
