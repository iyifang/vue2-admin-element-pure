<template>
  <div class="container">
    <div class="face">
      <div class="eye">
        <div class="white">
          <div class="black1"></div>
        </div>
        <div class="white">
          <div class="black2"></div>
        </div>
      </div>
      <div class="mouse"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // this.fn();
  },
  destroyed() {},
  methods: {
    fn() {
      var eye1 = document.querySelector(".black1");
      var eye2 = document.querySelector(".black2");
      let x = 0;
      let y = 0;
      let top = 75;
      let left = 75;

      //添加鼠标移动监听
      window.addEventListener("mousemove", function (e) {
        //获取鼠标到眼睛模块中心的距离
        x =
          e.x - document.querySelector(".eye").getBoundingClientRect().x - 200;
        y =
          e.y - document.querySelector(".eye").getBoundingClientRect().y - 100;
      });

      //创建定时器，每10ms图片移动一次
      setInterval(() => {
        if (x > 50) {
          left = 100;
        } else if (x < -50) {
          left = 50;
        } else {
          left = 75;
        }
        if (y > 50) {
          top = 100;
        } else if (y < -50) {
          top = 50;
        } else {
          top = 75;
        }

        eye1.style.left = left + "px";
        eye1.style.top = top + "px";
        eye2.style.left = left + "px";
        eye2.style.top = top + "px";
      }, 10);
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #929292;
}
.face {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: #e7d90f;
  margin: 50px auto;
}
.eye {
  width: 200px;
  height: 100px;
  margin: auto;
  display: flex;
}

.white {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #ffffff;
  position: relative;
  margin: auto;
}
.black1 {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #000000;
  position: absolute;
  top: 35px;
  left: 35px;
}
.black2 {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #000000;
  position: absolute;
  top: 35px;
  left: 35px;
}

.mouse {
  width: 50px;
  height: 25px;
  background: rgb(245, 84, 84);
  border-radius: 25px;
  margin: 30px auto;
}
</style>