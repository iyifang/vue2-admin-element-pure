<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>居中</span>
        <el-button style="float: right; padding: 3px 0" type="text"
          >操作按钮</el-button
        >
      </div>
      <div class="flex__container box">
        <div class="flex__item"></div>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>垂直居中</span>
        <el-button style="float: right; padding: 3px 0" type="text"
          >操作按钮</el-button
        >
      </div>
      <div class="flex__container_2 box">
        <i class="el-icon-question"></i>
        <i class="el-icon-info"></i>
        <i class="el-icon-warning"></i>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  background-color: aquamarine;
  width: 200px;
  height: 100px;
}
.flex__container {
  display: flex;
  justify-content: center;
  align-items: center;
  .flex__item {
    width: 50px;
    height: 50px;
    background-color: rgb(135, 183, 222);
  }
}
.flex__container_2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>