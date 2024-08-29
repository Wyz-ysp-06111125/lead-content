<template>
  <!-- 文本内容 -->
  <div class="text_item" @click="toPath">
    <!-- 标题 -->
    <h4 class="title">{{ data.title }}</h4>

    <!-- 内容 -->
    <p class="cont">
      {{ data.desc }}
    </p>

    <div class="footer">
      <!-- 时间 -->
      <div class="item">
        <el-icon color="var(--infoColor)"><Clock /></el-icon>
        <span>{{ data.time }}</span>
      </div>

      <!-- 查看量 -->
      <div class="item">
        <el-icon color="var(--infoColor)"><View /></el-icon>
        <span>{{ data.view }}</span>
      </div>

      <!-- 分享 -->
      <div class="item">
        <el-icon color="var(--infoColor)"><Share /></el-icon>
        <span>{{ data.share }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});

const router = useRouter();

const toPath = () => {
  router.push('/textDetail?id=' + props.data.id);
};
</script>

<style scoped>
.text_item {
  padding: 30px;
  /* background: #fff; */
  margin-bottom: 20px;
  color: var(--textColor);
  border-bottom: 1px solid var(--borderColor);
}

.title {
  margin-bottom: 10px;
  cursor: default;
  padding-bottom: 8px;
  position: relative;
}

.title::after {
  content: '';
  display: block;
  width: 80px;
  height: 2px;
  background: var(--textColor);
  position: absolute;
  left: 0;
  bottom: 0;
  transition: width 0.3s;
}

.title:hover::after {
  width: 100%;
}

.cont {
  line-height: 30px;
  font-size: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: var(--infoColor);
}

.footer {
  margin-top: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
</style>
