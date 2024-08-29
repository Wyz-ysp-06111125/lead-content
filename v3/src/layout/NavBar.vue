<template>
  <div class="main">
    <nav>
      <p class="logo" @click="toPath('/')">BLOG</p>

      <div class="menu">
        <span
          v-for="item in routes"
          :key="item.key"
          :class="{
            act: item.key == name,
          }"
          @click="toPath(item.path)"
          >{{ item.name }}</span
        >
      </div>
    </nav>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// 循环菜单
const routes = ref([
  {
    key: 'home',
    name: '首页',
    path: '/',
  },
  {
    key: 'imgs',
    name: '图文',
    path: '/imgs',
  },
  {
    key: 'message',
    name: '留言板',
    path: '/message',
  },
  {
    key: 'about',
    name: '关于',
    path: '/about',
  },
]);

// 路由实例 用来跳转
const router = useRouter();

// 当前路由
const route = useRoute();

// 当前地址名称
const name = computed(() => {
  return route.name;
});

// 跳转页面
const toPath = (path) => {
  router.push(path);
};
</script>

<style scoped>
.main {
  background: #fff;
  box-shadow: 0px 2px 4px #ddd;
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  max-width: var(--maxWidth);
  margin: 0 auto;
}

p.logo {
  color: #fff;
  background: var(--textColor);
  padding: 10px 15px;
  font-weight: bold;
  font-size: 18px;
  cursor: default;
  border: 1px solid var(--borderColor);
  transition: background 0.5s;
}

.logo:hover {
  color: #333;
  background: #fff;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

nav span {
  padding: 10px 30px;
  font-size: 14px;
  color: var(--infoColor);
  cursor: default;
}

span.act {
  color: var(--textColor);
  font-weight: bold;
  text-shadow: 2px 2px 2px #999;
}

span:hover {
  color: var(--textColor);
}
</style>
