<template>
  <div class="line-chart">
    <m-line :echartStyle="style"
            :titleText="title"
            :opinion="barName"
            :opinionData="info"
            :x="barX">
    </m-line>

    <m-line :echartStyle="style"
            :titleText="title"
            :opinion="barName"
            :opinionData="info"
            :x="barX">
    </m-line>
  </div>
</template>

<script>
import mLine from '@/components/Echarts'
export default {
  components: {
    mLine,
  },
  data () {
    return {
      style: {
        height: ''
      },
      title: '折线图',
      barName: ['文档数', '任务数'],
      barX: ['2019/03/01', '2019/03/02', '2019/03/03', '2019/03/04', '2019/03/05', '2019/03/06', '2019/03/07'],
      info: [
        {
          name: '文档数',
          type: 'line',
          width: '20px',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '任务数',
          type: 'line',
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

<style lang="scss" scoped>
.line-chart {
  display: flex;
  flex-direction: column;
}
</style>