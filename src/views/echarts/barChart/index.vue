<template>
  <div class="bar-chart">
    <div class="chart-wrapper">
      <div class="item"
           v-if="evaluationData[nameList['测报考核']]">
        <bar-echarts :chartData="evaluationData[nameList['测报考核']]"
                     :title="nameList['测报考核']" />
      </div>
    </div>
  </div>
</template>

<script>
import BarEcharts from '../components/BarEcharts.vue'
import { evaluation } from "@/api/echarts";
export default {
  components: {
    BarEcharts,
  },
  data () {
    return {
      evaluationData: {},
      nameList: {
        测报考核: "assessment",
        指导宣传: "propaganda",
        学习培训: "train",
        其他任务: "task"
      },
    }
  },
  created () {
    this.getEvaluation()
  },
  methods: {
    async getEvaluation () {
      const { data } = await evaluation()
      this.evaluationData = data
    }
  }
}
</script>

<style lang="scss" scoped>
.bar-chart {
  .chart-wrapper {
    width: 100%;
    .item {
      width: 100%;
      height: 300px;
      background-color: #223068;
    }
  }
}
</style>