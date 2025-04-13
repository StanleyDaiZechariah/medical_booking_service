<template>
    <div class="detail">
        <!-- 医院的名字和医院的等级结构 -->
        <div class="top">
            <!-- 医院名字 -->
            <div class="title">{{ hospitalStore.hospitalDetail.hospital?.hosname }}</div>
            <!-- 医院等级 -->
            <div class="level">
                <svg t="1744463253203" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2600" width="16" height="16"><path d="M621.674667 408.021333c16.618667-74.24 28.224-127.936 34.837333-161.194666C673.152 163.093333 629.941333 85.333333 544.298667 85.333333c-77.226667 0-116.010667 38.378667-138.88 115.093334l-0.586667 2.24c-13.728 62.058667-34.72 110.165333-62.506667 144.586666a158.261333 158.261333 0 0 1-119.733333 58.965334l-21.909333 0.469333C148.437333 407.808 106.666667 450.816 106.666667 503.498667V821.333333c0 64.8 52.106667 117.333333 116.394666 117.333334h412.522667c84.736 0 160.373333-53.568 189.12-133.92l85.696-239.584c21.802667-60.96-9.536-128.202667-70.005333-150.186667a115.552 115.552 0 0 0-39.488-6.954667H621.674667zM544.256 149.333333c39.253333 0 59.498667 36.48 49.888 84.928-7.573333 38.144-21.984 104.426667-43.221333 198.666667-4.512 20.021333 10.56 39.093333 30.912 39.093333h218.666666c6.101333 0 12.16 1.066667 17.909334 3.168 27.445333 9.984 41.674667 40.554667 31.776 68.266667l-85.568 239.573333C744.981333 838.026667 693.301333 874.666667 635.402667 874.666667H223.498667C194.314667 874.666667 170.666667 850.784 170.666667 821.333333V503.498667c0-17.866667 14.144-32.448 31.829333-32.821334l21.866667-0.469333a221.12 221.12 0 0 0 167.381333-82.56c34.346667-42.602667 59.146667-99.306667 74.869333-169.877333C482.101333 166.336 499.552 149.333333 544.266667 149.333333z" fill="#000000" p-id="2601"></path></svg>
                <span>{{ hospitalStore.hospitalDetail.hospital.param?.hostypeString }}</span>
            </div>
        </div>

        <!-- 医院的logo与路线 -->
      <div class="content">
        <!-- 左侧区域 -->
        <div class="left">
          <img :src="`data:image/jpeg;base64,${hospitalStore.hospitalDetail.hospital?.logoData}`" alt="医院logo">
        </div>

        <!-- 右侧区域 -->
        <div class="right">
          <div class="address">
            <svg t="1744511965051" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4372" width="16" height="16"><path d="M874.048 533.333C863.424 716.63 716.629 863.424 533.333 874.048v43.285a21.333 21.333 0 0 1-42.666 0v-43.285C307.37 863.424 160.576 716.629 149.952 533.333h-43.285a21.333 21.333 0 0 1 0-42.666h43.285c10.624-183.296 157.419-330.091 340.715-340.715v-43.285a21.333 21.333 0 0 1 42.666 0v43.285c183.296 10.624 330.091 157.419 340.715 340.715h42.816a21.333 21.333 0 1 1 0 42.666h-42.837z m-42.752 0H703.509a21.333 21.333 0 0 1 0-42.666h127.787c-10.517-159.744-138.24-287.446-297.963-297.963V320a21.333 21.333 0 0 1-42.666 0V192.704c-159.744 10.517-287.446 138.24-297.963 297.963H320a21.333 21.333 0 0 1 0 42.666H192.704c10.517 159.744 138.24 287.446 297.963 297.963V704a21.333 21.333 0 0 1 42.666 0v127.296c159.744-10.517 287.446-138.24 297.963-297.963zM512 554.667a42.667 42.667 0 1 1 0-85.334 42.667 42.667 0 0 1 0 85.334z" p-id="4373" fill="#1296db"></path></svg>
            <span>具体位置: {{ hospitalStore.hospitalDetail.hospital?.address }}</span>
          </div>
          <div class="route">
            规划路线： {{ hospitalStore.hospitalDetail.hospital?.route }}
          </div>
        </div>
      </div>

      <!-- 医院介绍 -->
      <div class="footer">
        <h1>医院介绍</h1>
        <p>{{ hospitalStore.hospitalDetail.hospital?.intro }}</p>
      </div>
    </div>
</template>

<script setup lang='ts' name='Detail'>
// 获取医院详情的数组
import useDetailStore from '@/store/modules/hospitalDetail';

let hospitalStore = useDetailStore();


</script>

<style scoped lang='scss'>
    .detail {
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
          margin: 20px 0;

          .left {
            width: 80px;
            border-radius: 50%;

          img {
            width: 80px;
            height: 80px;

            }
          }

          .right {
            flex: 1;
            font-size: 14px;
            margin-left: 10px;

            .address {
              display: flex;
              
              span {
                margin-left: 6px;
              }
            }
            
            .address,.route {
              margin-top: 10px;
              color: #7f7f7f;
            }
          }
        }

        .footer {
         
          h1{
            font-size: 16px;
            font-weight: 900;
          }

          p {
            color: #7f7f7f;
            font-size: 14px;
            line-height: 30px;
            margin-top: 10px;
          }
        }
      }
</style>