<template>
  <div class="message_item">
    <!-- 留言内容 -->
    <p class="cont">{{ data.cont }}</p>

    <!-- 用户名 -->
    <p class="name">{{ data.name }}</p>

    <!-- 其他 -->
    <p class="info">
      <!-- 标签 -->
      <el-tag :type="TYPE_MAP[data.type]">{{ TYPE_TEXT[data.type] }}</el-tag>

      <!-- 时间 -->
      <span>{{ data.time }}</span>
    </p>
  </div>
</template>

<script setup>
import { TYPE_MAP, TYPE_TEXT } from '@/const';

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});
</script>

<style scoped>
.message_item {
  padding: 30px;
  position: relative;
  text-align: center;
}

.message_item::after {
  content: '';
  display: block;
  height: 1px;
  display: block;
  background: var(--borderColor);
  position: absolute;
  bottom: 0;
  left: calc(50% - 100px);
  width: 200px;
}

.cont {
  font-size: 18px;
  font-weight: bold;
  color: var(--textColor);
  line-height: 40px;
}

.cont:hover {
  text-shadow: 1px 1px 2px #999;
}

.info {
  font-size: 14px;
  color: var(--infoColor);
}

.info span {
  margin-right: 30px;
}

p.name {
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  color: var(--infoColor);
}

span:last-child {
  margin-right: 0;
}
</style>
