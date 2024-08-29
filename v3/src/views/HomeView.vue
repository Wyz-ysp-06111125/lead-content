<template>
  <div class="home">
    <TextItem v-for="item in list" :key="item.id" :data="item" />

    <el-divider> END </el-divider>
  </div>
</template>

<script setup>
import TextList from '@/mock/textNews';
import TextItem from '@/components/TextItem.vue';
import { ref } from 'vue';
const list = ref(TextList);
</script>

<style scoped>
.home {
  padding: 30px;
}

.end {
  text-align: center;
  font-size: 14px;
}
</style>
