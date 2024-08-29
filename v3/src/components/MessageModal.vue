<template>
  <el-dialog
    :model-value="modelValue"
    title="留言"
    width="500"
    @close="onClose"
    @open="onOpen"
  >
    <el-form
      ref="formRef"
      label-position="top"
      label-width="auto"
      :model="form"
      :rules="rules"
    >
      <el-form-item label="类型" prop="type">
        <el-select v-model="form.type" placeholder="请选择类型" size="large">
          <el-option
            v-for="(k, v) in TYPE_TEXT"
            :key="v"
            :label="k"
            :value="v"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="昵称" prop="name">
        <el-input v-model="form.name" maxlength="10" placeholder="请输入昵称" />
      </el-form-item>
      <el-form-item label="内容" prop="cont">
        <el-input
          type="textarea"
          :rows="4"
          maxlength="100"
          v-model="form.cont"
          placeholder="请输入内容"
        />
      </el-form-item>
    </el-form>

    <template #footer>
      <el-button @click="onClose">取消</el-button>
      <el-button type="primary" @click="onSend"> 提交 </el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { TYPE_TEXT } from '@/const';
import { formatDate } from '@/utils';

const emit = defineEmits(['update:modelValue', 'send']);

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const formRef = ref();

const form = ref({
  type: '1',
});

const rules = ref({
  type: [
    {
      message: '请选择类型',
      required: true,
    },
  ],
  name: [
    {
      message: '请输入昵称',
      required: true,
    },
  ],
  cont: [
    {
      message: '请输入内容',
      required: true,
    },
  ],
});

const onOpen = () => {
  emit('update:modelValue', true);
};

const onClose = () => {
  emit('update:modelValue', false);
};

const onSend = async () => {
  
  await formRef.value.validate((valid) => {
    if (!valid) return;
    emit('send', { ...form.value, time: formatDate(Date.now()) });
    formRef.value.resetFields();
  });
};
</script>

<style></style>
