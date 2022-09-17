<template>
  <div class="idea-container">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header"
                 class="clearfix">
              <b>两数之和</b>
              <el-button style="float: right; padding: 3px 0"
                         type="text"
                         @click="show=true">查看源码</el-button>
            </div>
            <div>
              <p style="font-size:13px">给定一个整数数组nums和一个整数目标值target,请你在该数组中找出和为目标值target
                你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
                你可以按任意顺序返回答案。</p>
              <br>
              <p style="font-size:13px">示例
                输入:nums=[2,7,11,15],target=9
                输出：[0,1]
                解释：因为nums[0]+nums[1]==9,返回 [0,1]</p>

            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header"
                 class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0"
                         type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4"
                 :key="o"
                 class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header"
                 class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0"
                         type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4"
                 :key="o"
                 class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header"
                 class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0"
                         type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4"
                 :key="o"
                 class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <drawer :show="show">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, delectus modi. Dolores eius animi dolorum accusamus eveniet, suscipit expedita! Officia accusamus laudantium eum voluptatem suscipit est pariatur beatae recusandae temporibus?</p>
    </drawer>
  </div>
</template>

<script>
import Drawer from "@/components/Drawer"
export default {
  components: { Drawer },
  data () {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss" scoped>
.idea-container {
  padding: 10px;
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}
</style>