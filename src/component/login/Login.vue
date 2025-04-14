<template>
    <div class="login_container">
        <!-- title属性控制对话框的标题，v-model控制对话框的显示与隐藏 -->
        <el-dialog v-model="userStore.visiable" title="用户登录" width="500">
    
    
        </el-dialog>
    </div>
</template>

<script setup lang='ts' name='Login'>
// 获取user仓库的数据(visable)可以控制login组件的对话框的显示与隐藏
import useUserStore from '@/store/modules/user';
let userStore = useUserStore();

</script>

<style scoped lang="scss">

</style>