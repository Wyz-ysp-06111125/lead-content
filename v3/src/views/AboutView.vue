<template>
  <div class="about">
    <!-- 左侧 -->
    <div class="user">
      <el-avatar :src="userInfo.avatar" :size="100" />
      <p>
        <span>昵称：</span>
        <span>{{ userInfo.name }}</span>
      </p>
      <p>
        <span>性别：</span>
        <span>{{ userInfo.sex }}</span>
      </p>
      <p>
        <span>城市：</span>
        <span>{{ userInfo.city }}</span>
      </p>
      <p>
        <span>电话：</span>
        <span>{{ userInfo.phone }}</span>
      </p>
    </div>

    <!-- 右侧 -->
    <div class="cont">
      <h4>个人简介</h4>
      <p class="info">{{ userInfo.desc }}</p>

      <el-divider />

      <h4>知识图谱</h4>
      <p class="info">{{ userInfo.about }}</p>
    </div>
  </div>
</template>

<script setup>
import User from '@/mock/about';
import { ref } from 'vue';

const userInfo = ref(User);
</script>

<style scoped>
.about {
  padding: 60px 30px;
  display: flex;
  height: 600px;
  background: #fff;
  gap: 30px;
}

.user {
  width: 300px;
  background: var(--bgColor);
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: none;
}

.user:hover,
.cont:hover {
  box-shadow: 2px 2px 8px #bbb;
}

.user p {
  margin-top: 40px;
  font-size: 16px;
  padding: 0 30px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--borderColor);
}

.cont {
  flex: 1;
  padding: 30px;
  background: var(--bgColor);
}

h4 {
  display: inline-block;
  padding-bottom: 4px;
  border-bottom: 2px solid var(--textColor);
}

.info {
  margin-top: 30px;
  font-size: 14px;
  line-height: 24px;
  color: #666;
}
</style>
