/*
 * @Description: 
 * @Version: 2.0
 * @Autor: yifang
 * @Date: 2022-06-19 13:59:30
 * @LastEditors: yifang
 * @LastEditTime: 2022-06-19 13:59:52
 * @Author: laptop-fpejg53f
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername (str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}
