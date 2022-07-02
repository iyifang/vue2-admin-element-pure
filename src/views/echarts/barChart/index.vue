<template>
  <div class="bar-chart">
    <bar-echarts />
  </div>
</template>

<script>
import BarEcharts from '../components/BarEcharts.vue'
export default {
  components: {
    BarEcharts,
  },
  data () {
    return {
      style: {
        height: ''
      },
      title: '柱状图',
      barName: ['文档数', '任务数'],
      barX: ['2019/03/01', '2019/03/02', '2019/03/03', '2019/03/04', '2019/03/05', '2019/03/06', '2019/03/07'],
      info: [
        {
          name: '文档数',
          type: 'bar',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '任务数',
          type: 'bar',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        }
      ],
    }
  },
  created () {
    this.style.height = 300 + 'px'
  }
}
</script>

<style>
</style>