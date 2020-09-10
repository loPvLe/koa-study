import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('@/pages/index'),
      children: [
        {
          path: '/',
          component: () => import('@/pages/home/index'),
        },
        {
          path: '/category',
          component: () => import('@/pages/category/index')
        },
        {
          path: '/food',
          component: () => import('@/pages/food/index')
        },
        {
          path: '/user',
          component: () => import('@/pages/user/index')
        },
      ]
    },
    {
      path: '/admin',
      component: () => import('@/pages/admin/add')
    },
  ]
})

export default router