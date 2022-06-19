/*
 * @Description: 
 * @Version: 2.0
 * @Autor: yifang
 * @Date: 2022-06-18 11:08:53
 * @LastEditors: yifang
 * @LastEditTime: 2022-06-18 17:14:45
 * @Author: laptop-fpejg53f
 */
import { getUserInfo, login } from '@/api/user'
import { getToken, removeToken, setToken } from '@/utils/auth'
import { Message } from 'element-ui'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    acatar: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    //  Object.assign合并对象，重置state
    Object.assign(state, getDefaultState())
  },

  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions = {
  login ({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((reverse, reject) => {
      login({ username: username.trim(), password: password.trim() }).then(res => {
        const { Data } = res
        commit('SET_TOKEN', Data.user.token)
        setToken(Data.user.token)
        reverse()
      }).catch(error => {
        reject(error)
      })
    })
  },

  getInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo().then(res => {
        resolve(res)
      })
    })
  },

  resetToken ({ commit }) {
    return new Promise(resolve => {
      removeToken()
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}