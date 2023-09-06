<style scoped lang="less"></style>
<!-- Home -->
<template>
    <h3>Home index</h3>

    <p>{{ sayMsg }}</p>

    <p>电话： {{ setPhone }}</p>
    <p>用户信息: {{ age }}</p>

    <button @click="store.setSatte">chage</button>
</template>
<script setup>
import { mainStore } from '@/store/index.js';
import { storeToRefs } from 'pinia';

const store = mainStore();
const { name, sayMsg, setPhone, age } = storeToRefs(store);
</script>
