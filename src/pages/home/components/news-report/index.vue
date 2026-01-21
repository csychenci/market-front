<script setup lang="ts">
import NewsReportList from "./components/list/index.vue"
import NewsReportContainer from "./components/container/index.vue"

defineOptions({
  name: "NewsReport"
})
</script>

<template>
  <div class="news-report">
    <NewsReportList />
    <NewsReportContainer />
  </div>
</template>

<style scoped lang="less" src="./style.less"></style>