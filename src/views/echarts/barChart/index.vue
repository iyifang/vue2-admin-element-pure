<template>
  <div class="bar-chart">
    <div class="chart-wrapper">
      <!-- 测报考核 -->
      <div class="item"
           v-if="evaluationData[nameList['测报考核']]">
        <bar-echarts :chartData="evaluationData[nameList['测报考核']]"
                     :title="nameList['测报考核']"
                     :forecastRoster="forecastRoster"
                     :forecastName="forecastName"
                     :echartStyle="echartStyle['assessment']" />
      </div>
      <!-- 指导宣传 -->
      <div class="item"
           v-if="evaluationData[nameList['指导宣传']]">
        <bar-echarts :chartData="evaluationData[nameList['指导宣传']]"
                     :title="nameList['指导宣传']"
                     :forecastRoster="guidePropagandaRoster"
                     :forecastName="guidePropagandaRosterName"
                     :echartStyle="echartStyle['guidePropaganda']" />
      </div>
       <!-- 学习培训 -->
      <div class="item"
           v-if="evaluationData[nameList['学习培训']]">
        <bar-echarts :chartData="evaluationData[nameList['学习培训']]"
                     :title="nameList['学习培训']"
                     :forecastRoster="trainRoster"
                     :forecastName="trainName"
                     :echartStyle="echartStyle['train']" />
      </div>
       <!-- 其他任务 -->
      <div class="item"
           v-if="evaluationData[nameList['其他任务']]">
        <bar-echarts :chartData="evaluationData[nameList['其他任务']]"
                     :title="nameList['其他任务']"
                     :forecastRoster="taskRoster"
                     :forecastName="taskName"
                     :echartStyle="echartStyle['task']" />
      </div>
    </div>
  </div>
</template>

<script>
import BarEcharts from '../components/Bar.vue'
import { evaluation } from "@/api/echarts";
import {
  forecastRoster,
  forecastName,
  guidePropagandaRoster,
  guidePropagandaRosterName,
  echartStyle,
  trainRoster,
  trainName,
  taskRoster,
  taskName,
} from "../components/roster";
export default {
  components: {
    BarEcharts,
  },
  data () {
    return {
      evaluationData: {},
      nameList: {
        测报考核: "assessment",
        指导宣传: "guidePropaganda",
        学习培训: "train",
        其他任务: "task"
      },
      forecastRoster,
      forecastName,
      guidePropagandaRoster,
      guidePropagandaRosterName,
      trainRoster,
      trainName,
      taskRoster,
      taskName,
      echartStyle,
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
  background-color: #081752;
  .chart-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    .item {
      width: 100%;
      height: 300px;
      background-color: #223068;
      margin-bottom: 10px;
    }
  }
}
</style>