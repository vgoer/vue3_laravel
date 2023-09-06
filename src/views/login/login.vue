<style scoped lang="less"></style>
<!-- Login -->
<template>
    <h3>Login Index</h3>

    <button @click="handleLogin">Login</button>
</template>
<script setup>
import { reactive } from 'vue';
import { user_login_api } from '@/api/user';

const form_value = reactive({
    user_info: {
        username: 'goer',
        password: 'goer123...',
    },
});

const handleLogin = async () => {
    let res = await user_login_api(form_value.user_info);
    console.log(res);
};
</script>
