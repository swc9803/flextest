import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Test1 from '@/pages/Test1.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test1',
    name: 'Test1',
    component: Test1
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
