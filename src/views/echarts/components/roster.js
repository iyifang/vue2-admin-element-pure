/* 图表配置 */
// 测报考核
const forecastRoster = ['ccompletionRate', 'effective', 'days', 'hour', 'mileage'];
const forecastName = {
  ccompletionRate: "周期完成率",
  effective: "有效词条",
  days: "测报天数",
  hour: "测报小时",
  mileage: "测报里程"
};
// 指导宣传
const guidePropagandaRoster = ['prevention', 'extension'];
const guidePropagandaRosterName = {
  prevention: "指导科学防治",
  extension: "推广应用",
};

// 学习培训
const trainRoster = ['studySituation', 'trainSituation'];
const trainName = {
  studySituation: "学习情况",
  trainSituation: "培训情况",
};

// 指导宣传
const taskRoster = ['plant', 'usePesticides', 'recovery', 'collection', 'otherTasks'];
const taskName = {
  plant: "上报自家种值情况",
  usePesticides: "上报自家农药使用情况",
  recovery: "自家农药包装废弃物回收",
  collection: "施药机械信息采集",
  otherTasks: "其他调查任务",
};

// 图表颜色
const echartStyle = {
  "assessment": { barColor: "#2ec5b0ed", hoveColor: "#78ff8e" },
  "guidePropaganda": { barColor: "#eb9b00", hoveColor: "#ffd942" },
  "train": { barColor: "#ec5b43", hoveColor: "#ffa25d" },
  "task": { barColor: "#ec438a", hoveColor: "#ff74d6" },

}
// 指导宣传
export {
  forecastRoster,
  forecastName,
  guidePropagandaRoster,
  guidePropagandaRosterName,
  trainRoster,
  trainName,
  taskRoster,
  taskName,
  echartStyle
}