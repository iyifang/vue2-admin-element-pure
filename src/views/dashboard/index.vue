<template>
  <div class="container">
    <header>
      <h4>工作台</h4>
      <div class="h-top">
        <div class="h-left">
          <img
            class="head-img"
            src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
            alt=""
          />
          <div class="user-info">
            <div class="tips">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div class="info">
              repudiandae iure id aspernatur deleniti dolorum corporis?
            </div>
          </div>
        </div>
        <div class="h-right"></div>
      </div>
    </header>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  computed:{
    ...mapGetters(['userInfo'])
  },
  created(){
    this.getInfo()
  },
  methods:{
    async getInfo(){
      // console.log(this.userInfo);
      // console.log(this.$store.getters.userInfo);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  header {
    padding: 15px;
    height: 120px;
    background-color: white;
    width: 100vw;
    .h-top {
      display: flex;
      justify-content: space-between;
      .h-left {
        display: flex;
        font-size: 13px;
        margin-top: 10px;
        .head-img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .user-info {
          margin-left: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
      }
    }
  }
}
</style>