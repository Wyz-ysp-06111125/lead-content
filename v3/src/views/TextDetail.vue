<template>
  <div class="text_detail">
    <h2 class="title">{{ detail.title }}</h2>

    <div class="info">
      <!-- 时间 -->
      <div class="item">
        <el-icon color="var(--infoColor)"><Clock /></el-icon>
        <span>{{ detail.time }}</span>
      </div>

      <!-- 查看量 -->
      <div class="item">
        <el-icon color="var(--infoColor)"><View /></el-icon>
        <span>{{ detail.view }}</span>
      </div>

      <!-- 分享 -->
      <div class="item">
        <el-icon color="var(--infoColor)"><Share /></el-icon>
        <span>{{ detail.share }}</span>
      </div>
    </div>

    <pre class="cont">
      {{ detail.desc }}
    </pre>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import TextList from '@/mock/textNews';
import { computed } from 'vue';

const route = useRoute();

const { id } = route.query;

const detail = computed(() => {
  return TextList.find((v) => v.id == id) || {};
});
</script>

<style scoped>
.text_detail {
  background: #fff;
  padding: 30px;
  min-height: 700px;
}
.title {
  color: var(--textColor);
  text-align: center;
}
.info {
  margin-top: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
}

.item span {
  font-size: 14px;
  margin-left: 8px;
  color: var(--infoColor);
}

.cont {
  color: #666;
  line-height: 32px;
  font-size: 14px;
  text-wrap: wrap;
}
</style>
