<template>
  <div>
    <div id="myChart"
         ref="myChart"
         v-resize="resize"></div>
  </div>
</template>

<script>
export default {
  name: "barEchart",
  props: {
    echartStyle: {
      // 样式
      type: Object,
      default () {
        return {}
      }
    },
    chartData: {
      type: Object,
      default () {
        return {};
      },
    },

    title: {
      type: String,
      default: "",
    },
    forecastRoster: {
      tyle: Object,
      default: {},
    },
    forecastName: {
      tyle: Object,
      default: {},
    }
  },
  data () {
    return {
      nameList: {
        assessment: "测报考核",
        guidePropaganda: "指导宣传",
        train: "学习培训",
        task: "其他任务",
      },
    };
  },
  mounted () {
    console.log(this.echartStyle);
    this.init();
  },
  methods: {
    init () {
      console.log(this.title);
      let { cycle } = this.chartData;
      let seriesData = []; // 每个周期数据
      let xData = []; // X轴数据
      cycle.forEach((item, index) => {
        xData.push(`第${index + 1}周期`);
      });
      // 递归重装数组,Y轴数据
      let yData = this.recursionForecast(cycle);
      this.forecastRoster.forEach((item, index) => {
        seriesData.push({
          name: this.forecastName[item],
          type: "bar",
          barWidth: 25, // 柱子宽度
          data: yData[index],
          zlevel: 11,
          barGap: "100%", // 不同系列的柱间距离
          barCategoryGap: "20%", // 每簇之间的间距，有barWidth会失效
          itemStyle: {
            // normal是柱状图的正常样式
            normal: {
              barBorderRadius: [10, 10, 0, 0], // （顺时针左上，右上，右下，左下）
              color: this.echartStyle.barColor,
              // 柱形图顶部文字
              label: {
                formatter: `{c} \n\n {a}`,
                show: true,
                position: "top",
                rotate: this.title == 'task' ? 45 : 0,
                textStyle: {
                  fontSize: "8",
                  color: "#fff",
                },
              },
            },
            // 移入当前的柱状图时改变颜色
            emphasis: {
              color: this.echartStyle.hoveColor,
            },
          },
          tooltip: {
            trigger: "axis",
          },
        });
      });

      // 添加折线图数据
      let lineData = this.sumLineData(cycle);
      seriesData.unshift({
        type: "line",
        data: lineData,
        color: this.echartStyle.hoveColor,
        zlevel: 11,
        symbol: "roundRect",
        hoverAnimation: false,
        itemStyle: {
          opacity: 0.65,
          borderWidth: 10,
          borderColor: "#68d786",
          borderType: "solid",
          shadowColor: "rgba(187, 255, 0, 1)",
          color: this.echartStyle.hoveColor
          /*  normal: {
           } */
        },
      });


      let myChart = this.$echarts.init(this.$refs.myChart);
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: `${this.nameList[this.title]}得分周期情况`,
          left: "center", // 标题居中
          textStyle: {
            color: "#fff",
          },
        },
        // 鼠标hover效果
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 添加背景,展示多个当前x轴数据
            type: "shadow",
            shadowStyle: {
              color: "#0000001a",
            },
            z: 0,
            formatter: function (params) {
              console.log(params);
            },
          },
        },
        // 图例组件
        legend: {
          // data: ["销量", "数量"],
          show: false,
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        // 工具栏
        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          top: "center",
        },
        dataZoom: [
          {
            type: "inside",
            startValue: 0,
            endValue: 4,
            zoomLock: false,
            // disabled: true
          }
        ],
        xAxis: [
          {
            type: "category",
            axisTick: { show: false }, // 刻度
            data: xData.reverse(), // x轴数据
            offset: 1, // 偏移;结合onZero: false,生效
            axisLabel: {
              textStyle: {
                color: "#fff",
              },
            },
            axisLine: {
              // X轴线条样式
              show: true,
              onZero: false,
              lineStyle: {
                color: "#fff",
                width: 1.5,
              },
            },
          },
        ],
        yAxis: [
          {
            name: "(得分)",

            type: "value",
            offset: 15,
            axisLabel: {
              textStyle: {
                color: "#fff",
              },
            },
            nameTextStyle: {
              color: "#fff",
            },
            axisLine: {
              show: false,
            },
            splitLine: {
              // X坐标轴在 grid 区域中的分隔线。
              show: true,
              lineStyle: {
                color: "#f9f9f9",
                width: 0.3,
              },
            },
          },
        ],
        series: seriesData.reverse(),
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },

    // 处理返回分类数据
    recursionForecast (data) {
      let arr = [[], [], [], [], []];
      data.forEach((item) => {
        item.forEach((val, index) => {
          if (this.forecastRoster.includes(val.name))
          {
            arr[index].push(val.number);
          }
        });
      });
      return arr;
    },
    // 处理返回每个周期总数seriesData数组
    sumLineData (data) {
      let arr = [];
      data.forEach((item) => {
        let s = 0;
        item.forEach((val) => {
          s += val.number;
        }, 0);
        arr.push(s);
      });
      return arr;
    },

    // 自适应图表
    resize () {
      this.myChart = this.$echarts.init(this.$refs.myChart);
      this.myChart.resize();
    },
  },
  //监控data中的数据变化
  watch: {
    chartData: {
      handler (nvl, ovl) {
        // console.log(nvl);
        this.init();
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
#myChart {
  height: 300px;
  width: 100%;
}
</style>