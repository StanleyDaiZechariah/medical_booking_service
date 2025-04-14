<template>
    <div>
        <span>获取验证码({{ time }})</span>
    </div>
</template>

<script setup lang='ts' name="CountDown">
import { ref, watch } from 'vue'

// 倒计时时间
let time = ref<number>(5);
// 接收父组件传来的倒计时标识
let countDownFlag = defineProps(['flag']);
// 向父组件传递倒计时结束的信息
let $emit = defineEmits(['getFlag']);

// 组件挂载以后立刻开始监听父组件的状态变化
watch(() => countDownFlag, () => {
    // 开启定时器
    let timer = setInterval(() => {
        time.value--;
        // 倒计时结束
        if (time.value === 0) {
            // 通知父组件显示原来的组件
            $emit('getFlag', false);
            // 清楚定时器
            clearInterval(timer);
        }
    }, 1000);
}, { immediate: true });

</script>

<style scoped lang="scss">

</style>