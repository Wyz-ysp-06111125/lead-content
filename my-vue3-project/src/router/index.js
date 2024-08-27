// src/router/index.js  
import { createRouter, createWebHistory } from 'vue-router'
import IndexFinancial from '../containers/Financialsystem/entry/indexFinancial.vue'

// import About from '../views/About.vue'

const routes = [
    {
        path: '/',
        name: 'IndexFinancial',
        component: IndexFinancial
    }
    // 可以继续添加更多路由...  
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router