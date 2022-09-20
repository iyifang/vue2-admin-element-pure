<template>
  <div class="function-container">
    <el-link type="primary"  @click="promiseFn">基本用法</el-link>
    <el-link type="primary" @click="changeTimeout">延迟触发</el-link>
    <el-link type="primary" @click="changeImmediately">立即执行</el-link>
    <el-link
      type="primary"
      @click="
        loadImageAsync(
          'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        )
      "
      >异步加载图片</el-link
    >
    <img :src="image" alt="img" />
    <el-link type="primary" @click="changeCatch">异常捕获</el-link>
    <el-link type="primary" @click="someAsyncThing"
      >异常不会退出进程、终止脚本执行</el-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "",
    };
  },
  methods: {
    newPromise(falg) {
      return new Promise((resolve, reject) => {
        // 异常捕获
        /* if (falg) {
          resolve("成功");
        } else {
          reject('错误信息');
        } */

        // 异常不会退出进程、终止脚本执行
        resolve(x + 2);
      });
    },

    // 基本用法
    promiseFn() {
      const promise = new Promise((resolve, reject) => {
        // 请求数据
        if (true) {
          resolve("成功");
        } else {
          reject("失败");
        }
      });
      promise.then(
        function (val) {
          console.log(val);
        },
        function (err) {
          console.log(err);
        }
      );
    },

    // 延迟触发
    timeout(ms) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, "done");
      });
    },
    changeTimeout() {
      this.timeout(500)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 立即执行顺序
    changeImmediately() {
      const promise = new Promise((resolve, reject) => {
        console.log("promise"); // 1
        resolve();
      });
      promise.then((res) => {
        console.log("resolve"); // 3
      });
      console.log("666"); // 2
    },

    // 异步加载图片
    loadImageAsync(url) {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = function () {
          resolve(image);
        };
        image.onerror = function () {
          reject(new Error("Could not load image at " + url));
        };
        this.image = url;
      });
    },

    // 捕获异常
    changeCatch() {
      this.newPromise(false)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    },

    // 异常不会退出进程、终止脚本执行
    // Promise 内部的错误不会影响到 Promise 外部的代码，通俗的说法就是“Promise 会吃掉错误”。
    someAsyncThing() {
      this.newPromise()
        .then((res) => {
          console.log("异常不会退出进程、终止脚本执行");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log('必定执行');
        });
      setTimeout(() => {
        console.log(123);
      }, 2000);
    },

  },
};
</script>

<style lang="scss" scoped>
a {
  margin: 10px;
}
img {
  width: 100px;
  height: 100px;
}
</style>