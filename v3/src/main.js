import { createApp } from 'vue';

import Config from './config';

// 入口文件
import App from './App.vue';

// 引入路由
import router from './router';

// vuex
import store from './store';

// 引入饿了么
import ElementPlus from 'element-plus';

// 引入对应样式
import 'element-plus/dist/index.css';

// 引入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);

// 注册组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 路由拦截 处理标题
router.beforeEach((from, to, next) => {
  // 存在名字，则使用 否则使用自定义 或默认文案
  document.title = from.meta?.title || Config.title || 'BLOG';
  next();
});

app.use(store);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
