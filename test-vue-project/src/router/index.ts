import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const CookieComponent = () => import('@/components/CookieComponent.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'CookieComponent',
    component: CookieComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
