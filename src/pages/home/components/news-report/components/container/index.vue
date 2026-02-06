<script setup lang="ts">
import type { NewsReportContainerProps } from "./type"
const props = defineProps<NewsReportContainerProps>()
// import NewsReportCardItem from "./item/index.vue"
// import type { NewsReportCardContainerProps } from "./type";
// defineOptions({
//   name: "NewsReportCardContainer"
// })
// const props = defineProps<NewsReportCardContainerProps>()



</script>

<template>
  <div class="news-report-container">
    <div class="news-report-scroll-area">
      <!-- <NewsReportCardItem v-for="item in props.items" :key="item.id" :item="item" /> -->
      {{ props?.selectedItem?.content }}
    </div>
  </div>
</template>

<style scoped lang="less" src="./style.less"></style>

