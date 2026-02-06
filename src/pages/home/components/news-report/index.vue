<script setup lang="ts">
import { ref } from "vue";
import NewsReportList from "./components/list/index.vue"
import NewsReportContainer from "./components/container/index.vue"
import type { NewsReportItemType } from "@/pages/home/components/news-report/components/list/components/container/item/type";

defineOptions({
  name: "NewsReport"
})

const selectedItem = ref<NewsReportItemType | null>(null)

const handleSelect = (item: NewsReportItemType) => {
  console.log("select-item", item)
  selectedItem.value = item
}

</script>

<template>
  <div class="news-report">
    <NewsReportList :selected-item="selectedItem" :on-select="handleSelect" />
    <NewsReportContainer :selected-item="selectedItem" />
  </div>
</template>

<style scoped lang="less" src="./style.less"></style>