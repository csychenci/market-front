<script setup lang="ts">
import NewsReportItem from "./item/index.vue";
import type { NewsReportContainerProps } from "./type";
defineOptions({
  name: "NewsReportContainer",
});
const props = defineProps<NewsReportContainerProps>();
</script>
<template>
  <div class="news-report-container">
    <div class="news-report-scroll-area">
      <NewsReportItem
        :selected-item="props.selectedItem"
        v-for="item in props.items"
        :key="item.id"
        :item="item"
        :on-select="props.onSelect"
        :on-favorite="props.onFavorite"
      />
    </div>
  </div>
</template>
<style scoped lang="less" src="./style.less"></style>
