import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
  {
    path: '/echarts',
    redirect: 'echarts/lineChart',
    component: Layout,
    meta: { title: 'Echarts', icon: 'chart' },
    children: [
      {
        path: '/lineChart',
        component: () => import('@/views/echarts/lineChart/index'),
        meta: { title: 'lineChart' }
      },
      {
        path: '/barChart',
        component: () => import('@/views/echarts/barChart/index'),
        meta: { title: 'barChart' }
      },
      {
        path: '/radarChart',
        component: () => import('@/views/echarts/radarChart/index'),
        meta: { title: 'radarChart' }
      }
    ],
  },
  {
    path: '/icon',
    redirect: 'icon',
    component: Layout,
    children: [
      {
        path: '/icon',
        component: () => import('@/views/icon/index'),
        meta: { title: 'Icon', icon: 'star' }
      }
    ],
  },
  {
    path: "/leetCode",
    redirect: 'leetCode',
    component: Layout,
    children: [
      {
        path: '/leetCode',
        component: () => import('@/views/leetCode/index.vue'),
        meta: { title: 'LeetCode', icon: 'idea' }
      }
    ]
  },
  {
    path: "/map",
    redirect: 'map/ArcGisMap',
    meta: { title: 'ArcGisMap', icon: 'el-icon-location' },
    component: Layout,
    children: [
      {
        path: '/ArcGisMap',
        component: () => import('@/views/map/ArcGisMap/index'),
        meta: { title: 'ArcGisMap' }
      },
      {
        path: '/gaodeMap',
        component: () => import('@/views/map/gaodeMap/index'),
        meta: { title: 'gaodeMap' }
      }
    ]
  }
]

const createRouter = () => new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // 重置路由器
}

export default router
