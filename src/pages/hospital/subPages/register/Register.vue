<template>
  <div class="register">
    <!-- 顶部区域 -->
    <div class="top">
      <!-- 医院名称 -->
      <div class="title">{{ hospitalStore.hospitalDetail.hospital?.hosname }}</div>
      <!-- 医院等级 -->
      <div class="level">
        <svg t="1744463253203" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2600" width="16" height="16"><path d="M621.674667 408.021333c16.618667-74.24 28.224-127.936 34.837333-161.194666C673.152 163.093333 629.941333 85.333333 544.298667 85.333333c-77.226667 0-116.010667 38.378667-138.88 115.093334l-0.586667 2.24c-13.728 62.058667-34.72 110.165333-62.506667 144.586666a158.261333 158.261333 0 0 1-119.733333 58.965334l-21.909333 0.469333C148.437333 407.808 106.666667 450.816 106.666667 503.498667V821.333333c0 64.8 52.106667 117.333333 116.394666 117.333334h412.522667c84.736 0 160.373333-53.568 189.12-133.92l85.696-239.584c21.802667-60.96-9.536-128.202667-70.005333-150.186667a115.552 115.552 0 0 0-39.488-6.954667H621.674667zM544.256 149.333333c39.253333 0 59.498667 36.48 49.888 84.928-7.573333 38.144-21.984 104.426667-43.221333 198.666667-4.512 20.021333 10.56 39.093333 30.912 39.093333h218.666666c6.101333 0 12.16 1.066667 17.909334 3.168 27.445333 9.984 41.674667 40.554667 31.776 68.266667l-85.568 239.573333C744.981333 838.026667 693.301333 874.666667 635.402667 874.666667H223.498667C194.314667 874.666667 170.666667 850.784 170.666667 821.333333V503.498667c0-17.866667 14.144-32.448 31.829333-32.821334l21.866667-0.469333a221.12 221.12 0 0 0 167.381333-82.56c34.346667-42.602667 59.146667-99.306667 74.869333-169.877333C482.101333 166.336 499.552 149.333333 544.266667 149.333333z" fill="#000000" p-id="2601"></path></svg>
        <span>{{ hospitalStore.hospitalDetail.hospital?.param.hostypeString }}</span>
      </div>
    </div>

    <!-- 内容区域 -->
    <div class="content">
      <!-- 左侧区域 -->
      <div class="left">
          <img :src="`data:image/jpeg;base64,${hospitalStore.hospitalDetail.hospital?.logoData}`" alt="医院logo">
      </div>

      <!-- 右侧区域 -->
      <div class="right">
          <div class="title">挂号规则</div>
          <div class="time">
            预约的周期：{{ hospitalStore.hospitalDetail.bookingRule?.cycle }} &nbsp;开始时间：{{ hospitalStore.hospitalDetail.bookingRule?.releaseTime }} &nbsp;结束时间：{{ hospitalStore.hospitalDetail.bookingRule?.stopTime }}
          </div>
          <div class="address">
            具体位置: {{ hospitalStore.hospitalDetail.hospital?.param.fullAddress }}
          </div>
          <div class="route">
            规划路线： {{ hospitalStore.hospitalDetail.hospital?.route }}
          </div>
          <div class="releaseTime">
            退号时间：就诊前一天{{ hospitalStore.hospitalDetail.bookingRule?.quitTime }} 前取消
          </div>

          <div class="title">预约挂号规则</div>
          <div class="rule" v-for="(item, index) in hospitalStore.hospitalDetail.bookingRule?.rule" :key="index">
            {{ item }}
          </div>
      </div>
    </div>

    <!-- 展示相应的科室数据 -->
    <div class="department">
      <div class="leftNav">
        <ul>
          <li @click="changeInfo(index)" @mouseenter="changeIndex(index)"  v-for="(depart, index) in hospitalStore.departmentArr" :key="depart.depcode" :class="{active: index == currentIndex}">{{ depart.depname }}</li>
        </ul>
      </div>

      <div class="departmentInfo">
        <!-- 用一个div表示大科室与小科室 -->
         <div class="showDepartment"  v-for="(depart) in hospitalStore.departmentArr" :key="depart.depcode">
          <h1 class="cur">{{ depart.depname }}</h1>
          <!-- 每一个大科室下的小科室 -->
           <ul>
            <li @click="showLogin(item)" v-for="(item) in depart?.children" :key="item.depcode"> {{ item.depname }} </li>
           </ul>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts' name='Register'>
// 引入医院详情仓库的数据
import type { Department } from '@/api/hospital/types';
import useDetailStore from '@/store/modules/hospitalDetail';
// 引入用户仓库的数据
// import useUserStore from '@/store/modules/user';
// 引入响应式数据
import { ref } from 'vue';
// 引入路由
import { useRouter, useRoute } from 'vue-router';




// 拿到数据
let hospitalStore = useDetailStore();
// 控制科室高亮的响应式数据
let currentIndex = ref<number>(0);
// 用户仓库实例
// let userStore = useUserStore();
// 获取路由器
let $router = useRouter();
// 获取路由对象
let $route = useRoute();

// 当鼠标悬浮到导航上面时切换科室高亮
const changeIndex = (myindex: number) => {
  currentIndex.value = myindex;
}
// 点击导航获取右侧科室（h1的标题）
const changeInfo = (index: number) => {
  let allH1 = document.querySelectorAll('.cur');
  // 滚动到对应科室的位置
  allH1[currentIndex.value].scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
// 点击科室弹出登录页面
const showLogin = (item: Department) => {
  // 未登录就弹出对话框
  // userStore.visiable = true;

  // 点击某一个医院的科室就可以跳转到预约挂号详情页面
  $router.push({
    path: '/hospital/register_step1',
    query: {
      hoscode: $route.query.hoscode,
      depcode: item.depcode
    }
  })
  
}
</script>

<style scoped lang='scss'>
   .register {
    .top {
      display: flex;

      .title {
        font-size: 30px;
        font-weight: 900;
      }

      .level {
        color: #7f7f7f;
        margin-left: 10px;
        height: 40px;
        line-height: 40px;
        text-align: center;

        span {
          margin-left: 5px;
        }
      }
    }

    .content {
      display: flex;
      margin-top: 20px;

      .left {
        width: 80px;
        margin-right: 10px;
        border-radius: 50%;

        img {
          width: 80px;
          height: 80px;

        }
      }

      .right {
        flex: 1;
        font-size: 14px;

        .title {
          font-weight: bold;
          margin-top: 12px;
        }

        .time,.address,.route,.releaseTime,.rule {
          margin-top: 10px;
          color: #7f7f7f;
        }
      }
    }

    .department {
      width: 100%;
      height: 500px;
      margin: 20px 0;
      display: flex;

      .leftNav {
        width: 80px;
        height: 500px;

        ul {
          width: 100%;
          height: 100%;
          background-color: rgb(248, 248, 248);
          display: flex;
          flex-direction: column;

          li {
            flex: 1;
            text-align: center;
            color: #7f7f7f;
            font-size: 14px;
            line-height: 30px;
            cursor: pointer;

            &.active {
              border-left: 1px solid red;
              color: red;
              background-color: white;
            }
          }
        }
      }

      .departmentInfo{
        flex: 1;
        margin-left: 20px;
        height: 100%;
        overflow: auto;
        &::-webkit-scrollbar {
          display: none;
        }

        .showDepartment {
          h1 {
            background-color: silver;
            color: black;
            font-size: 16px;
            font-weight: bold;
            line-height: 30px;
          }

          ul {
            display: flex;
            flex-wrap: wrap;

            li {
              color: #7f7f7f;
              width: 33%;
              line-height: 30px;
              font-size: 14px;
              cursor: pointer;

              &:hover {
                color: skyblue;
              }
            }
          }
        }
      }
    }
   }
</style>