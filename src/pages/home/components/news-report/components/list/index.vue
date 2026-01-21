<script setup lang="ts">
import NewsReportFilter from "./components/filter/index.vue"
defineOptions({
  name: "NewsReportList"
})
</script>

<template>
  <div class="news-report-list">
    <NewsReportFilter />
  </div>
</template>

<style scoped lang="less" src="./style.less"></style>