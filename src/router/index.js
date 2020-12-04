import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Test from '@/components/Test'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import('../views/About.vue')
  },
  {
    path: '/test/:main',
    name: 'Test',
    component: Test,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
