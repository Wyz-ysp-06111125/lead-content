<template>
  <footer>{{ Config.footerText }}</footer>
</template>

<script setup>
import Config from '@/config';
</script>

<style scoped>
footer {
  height: 80px;
  background: #fff;
  text-align: center;
  line-height: 80px;
  font-size: 14px;
  color: var(--infoColor);
}
</style>
