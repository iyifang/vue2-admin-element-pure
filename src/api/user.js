/*
 * @Description: 
 * @Version: 2.0
 * @Autor: yifang
 * @Date: 2022-06-18 11:21:00
 * @LastEditors: yifang
 * @LastEditTime: 2022-06-18 12:45:12
 * @Author: laptop-fpejg53f
 */
import request from '@/utils/request'

export function login (data) {
  return request({
    url: '/login',
    method: 'post',
    data: data
  })
}

export function getUserInfo (token) {
  return request({
    url: '/getUserInfo',
    method: 'get',
    data: { token }
  })
}