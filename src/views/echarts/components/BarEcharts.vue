<template>
  <div id="myChart"
       :style="echartStyle"></div>
</template>

<script>
import { forecastRoster, forecastName } from "./roster"
export default {
  name: 'barEchart',
  props: {
    echartStyle: {  // 样式
      type: Object,
      default () {
        return {
          'height': '300px',
          'wihte': '100%'
        }
      }
    },
    chartData: {
      type: Object,
      default () {
        return {}
      }
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      nameList: {
        assessment: "测报考核",
        propaganda: "指导宣传",
        train: "学习培训",
        task: "其他任务"
      },
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let { cycle } = this.chartData
      let seriesData = [] // 每个周期数据
      let xData = [] // X轴数据
      let dataType = []
      cycle.forEach((item, index) => {
        xData.push(`第${index + 1}周期`)
      })
      // 递归重装数组,Y轴数据
      let yData = this.recursionForecast(cycle)
      forecastRoster.forEach((item, index) => {
        seriesData.push({
          name: forecastName[item],
          type: 'bar',
          barWidth: 25,
          data: yData[index],
          zlevel: 11,
          itemStyle: {
            // normal是柱状图的正常样式
            normal: {
              barBorderRadius: [10, 10, 0, 0], // （顺时针左上，右上，右下，左下）
              color: '#2ec5b0',
            },
            // 移入当前的柱状图时改变颜色
            emphasis: {
              color: '#78ff8e',
            }
          },
        })
      })
      console.log(seriesData);

      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: `${this.nameList[this.title]}得分周期情况`,
          left: "center", // 标题居中
          textStyle: {
            color: '#0984e3',
          }
        },
        tooltip: { // 鼠标hover效果
          trigger: 'axis',
          axisPointer: {  // 添加背景,展示多个当前x轴数据
            type: 'shadow',
            shadowStyle: {
              color: '#0000001a'
            },
            z: 0
          }
        },
        legend: { // 图例组件
          // data: ["销量", "数量"],
          show: false
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: { // 工具栏
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
        },
        dataZoom: [
          {
            type: "inside",
            startValue: 0,
            endValue: 4,

          }
        ],
        xAxis: [
          {
            type: 'category',
            axisTick: { show: false }, // 刻度
            data: xData.reverse(), // x轴数据
            offset: 1,  // 偏移;结合onZero: false,生效
            axisLabel: {
              textStyle: {
                color: '#fff'
              },
            },
            axisLine: { // X轴线条样式
              show: true,
              onZero: false,
              lineStyle: {
                color: '#fff',
                width: 1.5
              }
            }
          }
        ],
        yAxis: [
          {
            name: '(得分)',

            
            type: 'value',
            offset: 15,
            axisLabel: {
              textStyle: {
                color: '#fff'
              }
            },
            nameTextStyle: {
              color: "#fff"
            },
            axisLine: {
              show: false
            },
            splitLine: { // X坐标轴在 grid 区域中的分隔线。
              show: true,
              lineStyle: {
                color: '#f9f9f9',
                width: .3
              }
            }
          },
        ],
        series: seriesData.reverse()
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    recursionForecast (data) {
      let arr = [[], [], [], [], []]
      data.forEach(item => {
        item.forEach((val, index) => {
          if (forecastRoster.includes(val.name))
          {
            arr[index].push(val.number)
          }
        })
      })
      return arr
    }
  }
}
</script>

<style>
</style>