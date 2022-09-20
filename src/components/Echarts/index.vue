<template>
  <div id="myLine"
       :style="echartStyle"></div>
</template>
<script>

export default {
  props: {
    echartStyle: {  // 样式
      type: Object,
      default () {
        return {}
      }
    },

    titleText: {   //标题文本
      type: String,
      default: ''
    },

    opinion: {    //区域名称
      type: Array,
      default () {
        return []
      }
    },

    opinionData: {   // 区域数据
      type: Array,
      default () {
        return []
      }
    },

    x: {  // x 轴
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('resize', this.test())
      this.drawLine('myLine')
    })

  },
  beforeRouteLeave (to, from, next) {
    // 离开页面时取消监听
    window.removeEventListener('resize', this.test())
    next()
  },
  methods: {
    test () {
    },
    // 绘制折线图
    drawLine (id) {
      this.charts = this.$echarts.init(document.getElementById(id));
      this.charts.on("click", this.eConsole);
      this.charts.setOption({
        title: {
          left: 'center',
          text: this.titleText, //标题文本
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          left: 'left',
          data: this.opinion // 区域名称
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {   // x 轴
          type: 'category',
          boundaryGap: false,
          data: this.x
        },
        yAxis: {   // y 轴
          type: 'value'
        },
        series: this.opinionData  // 区域数据
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
