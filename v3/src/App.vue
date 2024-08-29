<template>
  <Layout />
</template>

<script setup>
import Layout from '@/layout';
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bgColor: #f7f7f7;
  --borderColor: #f1f1f1;
  --infoColor: #b1b1b1;
  --textColor: #2b2b2b;
  --maxWidth: 1200px;
}

html,
body {
  background: var(--bgColor);
  min-height: 100vh;
  min-width: var(--maxWidth);
}

body::-webkit-scrollbar {
  width: 0;
}

#app {
  min-height: 100vh;
}
</style>
