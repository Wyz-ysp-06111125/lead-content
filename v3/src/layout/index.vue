<template>
  <NavBar />
  <main>
    <router-view />
  </main>
  <el-backtop :right="100" :bottom="100">
    <el-icon color="var(--textColor)"><ArrowUpBold /></el-icon>
  </el-backtop>
  <Footer />
</template>

<script setup>
import { ref } from 'vue';
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
</script>

<style scoped>
main {
  width: var(--maxWidth);
  margin: 0 auto;
  padding: 30px 0;
}
</style>
