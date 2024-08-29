import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '@/layout';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/imgs',
    name: 'imgs',
    component: () => import('../views/ImagesView.vue'),
    meta: {
      title: '图文',
    },
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('../views/MessageBoard.vue'),
    meta: {
      title: '留言板',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: '关于',
    },
  },
  {
    path: '/textDetail',
    name: 'textDetail',
    component: () => import('../views/TextDetail.vue'),
    meta: {
      title: '详情',
    },
  },
  {
    path: '/imageDetail',
    name: 'imageDetail',
    component: () => import('../views/ImageDetail.vue'),
    meta: {
      title: '详情',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
