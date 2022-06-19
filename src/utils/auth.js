/*
 * @Description: 
 * @Version: 2.0
 * @Autor: yifang
 * @Date: 2022-06-18 10:45:35
 * @LastEditors: yifang
 * @LastEditTime: 2022-06-18 11:49:24
 * @Author: laptop-fpejg53f
 */
import Cookies from "js-cookie"

// 默认的token，实际开发按需定义
const TokenKey = 'andem-token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}
