<script setup lang="ts">
import NewsReportItem from "./item/index.vue"
import { NewsReportContainerProps } from "./type";
defineOptions({
  name: "NewsReportContainer",
})
const props = defineProps<NewsReportContainerProps>()
</script>
<template>
  <div class="news-report-container">
    <div class="news-report-scroll-area">
      <NewsReportItem v-for="item in props.items" :key="item.id" :item="item" />
    </div>
  </div>
</template>
<style scoped lang="less" src="./style.less"></style>