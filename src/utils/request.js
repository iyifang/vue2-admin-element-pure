/*
 * @Description: 
 * @Version: 2.0
 * @Autor: yifang
 * @Date: 2022-06-18 11:21:13
 * @LastEditors: yifang
 * @LastEditTime: 2022-06-18 17:13:27
 * @Author: laptop-fpejg53f
 */
import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    if (store.getters.token)
    {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    console.log(error);
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {

    const res = response.data

    if (res.code !== 200)
    {
      Message({
        message: res.message || "Error",
        type: 'error',
        duration: 5 * 1000
      })

      if (res.code === 50008 || res.code === 50012 || res.code === 50014)
      {
        // to re-login
        MessageBox.confirm('您已注销，您可以取消以停留在此页面，或再次登录，确认注销', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 重置令牌
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else
    {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
