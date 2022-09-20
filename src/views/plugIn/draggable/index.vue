<template>
  <div class="draggable-container">
    <draggable
      v-model="list"
      group="people"
      @start="drag = true"
      @end="drag = false"
      class="list"
      animation="300"
    >
      <div class="item" v-for="element in list" :key="element.id">
        <i :class="element.icon" :style="{ color: element.color }"></i>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: { draggable },
  data() {
    return {
      list: [
        { icon: "el-icon-platform-eleme", id: 1, color: "red" },
        { icon: "el-icon-eleme", id: 2, color: "blue" },
        { icon: "el-icon-delete-solid", id: 3, color: "skyblue" },
        { icon: "el-icon-delete", id: 4, color: "grren" },
        { icon: "el-icon-platform-eleme", id: 5, color: "red" },
        { icon: "el-icon-eleme", id: 6, color: "blue" },
        { icon: "el-icon-delete-solid", id: 7, color: "skyblue" },
        { icon: "el-icon-delete", id: 8, color: "grren" },
        { icon: "el-icon-platform-eleme", id: 9, color: "red" },
        { icon: "el-icon-eleme", id: 10, color: "blue" },
        { icon: "el-icon-delete-solid", id: 11, color: "skyblue" },
        { icon: "el-icon-delete", id: 12, color: "grren" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.draggable-container {
  padding: 20px;
}
.list {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px 20px;
  text-align: center;

  .item {
    box-sizing: border-box;
    border: 1px solid #999;
    height: 0;
    padding-bottom: 100%; /*高度设置为0，使用内间距100%，将匡高设置为一致*/
    background-color: white;
    border-radius: 5px;
    display: block;

    i {
      margin-top: 50%;
      font-size: 2rem;
      transform: translateY(-50%);
    }
  }
}
</style>