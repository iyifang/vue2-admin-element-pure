import { getUserInfo, login, logout } from '@/api/user'
import { getToken, removeToken, setToken } from '@/utils/auth'
import { resetRouter } from "@/router"

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: ''
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
  },

  SET_NAME: (state, name) => {
    state.name = name
  },

  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  login ({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((reverse, reject) => {
      login({ username: username.trim(), password: password.trim() }).then(res => {
        const { data } = res
        commit('SET_TOKEN', data.user.token)
        setToken(data.user.token)
        reverse()
      }).catch(error => {
        reject(error)
      })
    })
  },

  getInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo(state.token).then(res => {
        const { data } = res
        if (!data.info)
        {
          return reject('验证失败，请重新登录。')
        }
        const { name, avatar } = data.info
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  logout ({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
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