<template>
    <div>
        <div v-if="$route.query.id">
            <OrderAll />
        </div>
        <div v-else>
            <OrderDetail />
        </div>
    </div>
</template>

<script setup lang='ts' name="Order">
import { useRoute } from 'vue-router';
// 引入两个子组件
import OrderDetail from './OrderDetail.vue';
import OrderAll from './OrderAll.vue';

// 获取路由对象
let $route = useRoute();

</script>

<style scoped>

</style>