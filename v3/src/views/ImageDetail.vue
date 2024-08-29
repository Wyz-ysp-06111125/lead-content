<template>
  <div class="image_detail">
    <!-- 标题 -->
    <h2 class="title">{{ detail.title }}</h2>

    <!-- 标签 -->
    <p class="tag">
      <el-tag type="success">{{ detail.tag }}</el-tag>
    </p>

    <!-- 封面 -->
    <div class="image">
      <!-- <img :src="detail.path || DEFAULT_IMG" alt="" class="img" /> -->
      <el-image
        class="img"
        :src="detail.path || DEFAULT_IMG"
        :zoom-rate="1.2"
        :max-scale="7"
        :min-scale="0.2"
        :preview-src-list="[detail.path || DEFAULT_IMG]"
        fit="cover"
      />
    </div>

    <!-- 文本 -->
    <pre class="dec">{{ detail.desc }}</pre>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ImgList from '@/mock/images';
import { computed } from 'vue';
import DEFAULT_IMG from '@/assets/banner.jpg';

const route = useRoute();

const { id } = route.query;

const detail = computed(() => {
  return ImgList.find((v) => v.id == id) || {};
});
</script>

<style scoped>
.image_detail {
  background: #fff;
  padding: 30px;
  min-height: 800px;
}

.title {
  color: var(--textColor);
  text-align: center;
}

.tag {
  text-align: center;
  margin: 20px 0;
}

.image {
  width: 100%;
  max-height: 400px;
  overflow: hidden;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s;
}

.img:hover {
  /* transform: scale(1.2); */
}

.dec {
  color: #666;
  line-height: 32px;
  margin-top: 30px;
  text-wrap: wrap;
  font-size: 14px;
}
</style>
