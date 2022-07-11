<template>
  <div class="radar-chart">
    <Radar />
  </div>
</template>

<script>
import Radar from "../components/radar.vue"
export default {
  components: { Radar }
}
</script>

<style lang="scss" scoped>
.radar-chart {
  background-color: #081752;
}
</style>