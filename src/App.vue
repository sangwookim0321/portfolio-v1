<template>
    <Header/>
    <router-view/>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
    name: "App",
    components: {
        Header
    },
}
</script>

<style scoped>
#app {
    height: 100vh;
}
div, header {
    font-family: 'Pretendard', sans-serif;
}
</style>
