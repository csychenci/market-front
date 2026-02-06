<script setup lang="ts">
import NewsReportFilter from "./components/filter/index.vue";
import NewsReportContainer from "./components/container/index.vue"
import type { NewsReportItemType } from "@/pages/home/components/news-report/components/list/components/container/item/type";

defineOptions({ name: "NewsReportList" });

const props = defineProps<{
  items: NewsReportItemType[]
}>()
const emit = defineEmits<{
  (e: "select", item: NewsReportItemType): void
}>()
</script>

<template>
  <div class="news-report-list">
    <NewsReportFilter />
    <NewsReportContainer :items="props.items" @click="emit('select', item)"/>
  </div>
</template>

<style scoped lang="less" src="./style.less"></style>