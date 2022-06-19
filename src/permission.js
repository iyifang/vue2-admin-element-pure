import router from "./router"
import store from "./store"
import { Message } from 'element-ui'
import NProgress from "nprogress"
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login'] // 白名单

router.beforeEach(async (to, form, next) => {
  NProgress.start()

  // 设置页面标题
  document.title = getPageTitle(to.meta.title)

  const hasToken = getToken()
  if (hasToken)
  {
    if (to.path === '/login')
    {
      next({ path: '/' })
      NProgress.done()
    } else
    {
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo)
      {
        next()
      } else
      {
        try
        {
          // 获取最新用户信息
          await store.dispatch('user/getInfo')
          next()
        } catch (error)
        {
          // 清除令牌跳转登录页
          // 
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else
  {
    // 没有令牌
    if (whiteList.indexOf(to.path) !== -1)
    {
      // 在白名单内
      next()
    } else
    {
      // 都没有就跳转到登录页
      next(`login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
