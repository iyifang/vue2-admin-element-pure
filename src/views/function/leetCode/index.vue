<template>
  <div class="leet-code">
    <el-button type="primary" @click="changeFn">两数之和</el-button>
    <el-button type="primary" @click="changeBS">二分查找</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    // 两数之和
    fn(nums, target) {
      /* for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
            return [i, j];
          }
        }
      }
      return []; */

      let hash = {};
      for (let i = 0; i < nums.length; i++) {
        if (hash[target - nums[i]] !== undefined) {
          return [i, hash[target - nums[i]]];
        }
        hash[nums[i]] = i;
      }
      return [];
    },
    changeFn() {
      const nums = [2, 7, 11, 15];
      console.log(this.fn(nums, 9));
    },

    // 二分查找
    binarySearch(nums, target) {
      // right是数组最后一个数的下标，num[right]在查找范围内，是左闭右闭区间
      let left = 0, // 左边界
        right = nums.length - 1; // 右边界
      while (left <= right) {
        let middle = Math.floor((left + right) / 2); // 取中间值
        if (nums[middle] > target) {
          // 去左边
          // 更新右边界
          right = middle - 1;
        } else if (nums[middle] < target) {
          // 去右边
          // 更新左边界
          left = middle + 1;
        } else {
          return middle;
        }
        return -1;
      }
    },
    changeBS() {
      const nums = [2, 7, 1, 9, 11, 15];
      // this.binarySearch(nums, 9);
      console.info(this.binarySearch(nums, 9));
    },
  },
};
</script>

<style lang="scss" scoped>
.leet-code {
  height: 100%;
  width: 100%;
  padding: 15px;
}
</style>