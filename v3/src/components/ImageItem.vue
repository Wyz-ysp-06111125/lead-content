<template>
  <div class="img_item" @click="toPath">
    <!-- 左侧图片 -->
    <div class="img">
      <img :src="data.path || DEFAULT_IMG" alt="" />
    </div>

    <!-- 右侧内容 -->
    <div class="cont">
      <p class="title">{{ data.title }}</p>
      <p class="des">
        {{ data.desc }}
      </p>
      <p class="tag">
        <el-tag type="success">{{ data.tag }}</el-tag>
      </p>
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

import DEFAULT_IMG from '@/assets/banner.jpg';

const router = useRouter();

const toPath = () => {
  router.push('/imageDetail?id=' + props.data?.id);
};
</script>

<style scoped>
.img_item {
  padding: 30px;
  border-bottom: 1px solid var(--borderColor);
  display: flex;
  align-items: center;
}

.img {
  width: 300px;
  height: 180px;
  overflow: hidden;
  flex: none;
}

.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s;
}

img:hover {
  transform: scale(1.2);
}

.cont {
  padding-left: 30px;
  flex: 1;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
}

.title {
  font-size: 16px;
  color: var(--textColor);
  cursor: default;
}

.des {
  font-size: 14px;
  line-height: 24px;
  color: var(--infoColor);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
