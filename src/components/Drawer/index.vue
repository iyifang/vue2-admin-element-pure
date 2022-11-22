<template>
  <div class="drawer-container">
    <el-drawer :title="title"
               :size="size"
               :visible.sync="show"
               :direction="direction"
               :before-close="handleClose">
      <span>
        <slot></slot>
      </span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'drawer',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '源码'
    },
    direction: {
      type: String,
      default: 'rtl' // 可选值rtl / ltr / ttb / btt
    },
    size: {
      type: String,
      default: '50%'
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleClose () {
      this.$emit('closeDrawer')
    }
  }
}
</script>

<style>
</style>