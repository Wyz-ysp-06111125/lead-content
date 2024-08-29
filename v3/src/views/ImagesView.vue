<template>
  <div class="home">
    <ImageItem v-for="item in list" :key="item.id" :data="item" />

    <el-divider> END </el-divider>
  </div>
</template>

<script setup>
import ImageItem from '@/components/ImageItem.vue';
import ImgList from '@/mock/images';
import { ref } from 'vue';

const list = ref(ImgList);
</script>

<style scoped>
.imgs {
  padding: 30px;
}
</style>
