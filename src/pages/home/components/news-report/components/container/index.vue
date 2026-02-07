<script setup lang="ts">
import type { NewsReportContainerProps } from "./type"
import NewsReportDetail from "./components/detail/index.vue"

const props = defineProps<NewsReportContainerProps>()
</script>

<template>
  <div class="news-report-container">
    <div class="news-report-scroll-area">
      <NewsReportDetail :item="props.selectedItem" />
    </div>
  </div>
</template>

<style scoped lang="less" src="./style.less"></style>