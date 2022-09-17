<template>
  <div class="drawer-container">
    <el-drawer title="我是标题"
               :visible.sync="drawer"
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
    }
  },
  data () {
    return {
      direction: 'rtl',
      drawer:false
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          
          done();
        })
        .catch(_ => { });
    }
  },
  watch:{
    show:(Nval,Oval)=>{
      this.drawer = Nval
    }
  }
}
</script>

<style>
</style>