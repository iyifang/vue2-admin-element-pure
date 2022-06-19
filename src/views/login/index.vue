<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: yifang
 * @Date: 2022-06-18 00:04:32
 * @LastEditors: yifang
 * @LastEditTime: 2022-06-19 14:20:38
 * @Author: laptop-fpejg53f
-->
<template>
  <div class="login-container">
    <svg-icon icon-class="admin" />

    <el-form :model="loginForm"
             :rules="loginRoles">
      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          
        </span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRoles: {
      }
    }
  },
  methods: {
    async login () {
      let userInfo = {
        username: 'admin',
        password: '123456'
      }
      let data = await this.$store.dispatch('user/login', userInfo)
    }
  }
}
</script>

<style>
</style>
