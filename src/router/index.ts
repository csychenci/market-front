import { homeRoutes } from '@/pages/home/routes'
import { createRouter, createWebHistory } from 'vue-router'
import { getToken } from '@/service/http/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/home/index.vue'),
      children: homeRoutes,
      meta: { auth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login/index.vue'),
      meta: { auth: false }
    }
  ],
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const token = getToken()
  const requiresAuth = to.meta.auth !== false // 默认需要登录，除非明确设置为 false

  if (requiresAuth && !token) {
    // 需要登录但未登录，跳转到登录页
    next({ path: '/login', query: { redirect: to.fullPath } })
  } else if (to.path === '/login' && token) {
    // 已登录访问登录页，跳转到首页
    next({ path: '/' })
  } else {
    next()
  }
})

export default router
