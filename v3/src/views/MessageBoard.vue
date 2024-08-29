<template>
  <div class="message_board">
    <MessageItem v-for="item in msgList" :key="item.id" :data="item" />

    <p class="btn">
      <el-button type="info" @click="show = true">我要留言</el-button>
    </p>
  </div>

  <MessageModal v-model="show" @send="onSend" />
</template>

<script setup>
import MessageList from '@/mock/message';
import MessageItem from '@/components/MessageItem.vue';
import MessageModal from '@/components/MessageModal.vue';
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

// 留言列表
const msgList = ref(MessageList.reverse());

const show = ref(false);

const onSend = (v) => {
  v.id = msgList.value.length;
  msgList.value.unshift(v);
  show.value = false;
  ElMessage.success('留言成功');
};
</script>

<style scoped>
.message_board {
  padding: 30px;
  background: #fff;
}

h4 {
  text-align: center;
}

.btn {
  text-align: center;
  margin-top: 40px;
}
</style>
