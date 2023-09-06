<style scoped lang="less">
.box {
    text-align: center;

    h3 {
        font-weight: bold;
    }
}
</style>
<!-- layout 首页 -->
<template>
    <Header></Header>

    <RouterView></RouterView>

    <Footer></Footer>
</template>
<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>
