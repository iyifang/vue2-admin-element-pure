<template>
  <div id="radar"
       ref="radarChart">
  </div>
</template>

<script>
export default {
  name: 'radar',
  data () {
    return {

    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let radarChart = this.$echarts.init(this.$refs.radarChart);
      let option = {
        title: {
          text: 'Basic Radar Chart'
        },
        legend: {
          data: ['Allocated Budget', 'Actual Spending']
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: 'Sales', max: 6500 },
            { name: 'Administration', max: 16000 },
            { name: 'Information Technology', max: 30000 },
            { name: 'Customer Support', max: 38000 },
            { name: 'Development', max: 52000 },
            { name: 'Marketing', max: 25000 }
          ]
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: 'Allocated Budget'
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: 'Actual Spending'
              }
            ]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      radarChart.setOption(option);
    }
  }
}
</script>

<style lang="scss" scoped>
#radar {
  height: 300px;
  width: 100%;
}
</style>