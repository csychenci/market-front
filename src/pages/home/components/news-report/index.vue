<script setup lang="ts">
import { ref } from "vue";
import NewsReportList from "./components/list/index.vue"
import NewsReportContainer from "./components/container/index.vue"
import type { NewsReportItemType } from "@/pages/home/components/news-report/components/list/components/container/item/type";
import { getNewsDetail } from "@/api/news";

defineOptions({
  name: "NewsReport"
})

const selectedItem = ref<NewsReportItemType | null>(null)
const isLoading = ref(false)

const handleSelect = async (item: NewsReportItemType) => {
  isLoading.value = true
  try {
    const res = await getNewsDetail(item.id)
    if (res.code === 200 && res.data) {
      selectedItem.value = res.data
    }
  } catch (error) {
    console.error("获取新闻详情失败:", error)
  } finally {
    isLoading.value = false
  }
}

</script>

<template>
  <div class="news-report">
    <NewsReportList :selected-item="selectedItem" :on-select="handleSelect" />
    <NewsReportContainer :selected-item="selectedItem" :is-loading="isLoading" />
  </div>
</template>

<style scoped lang="less" src="./style.less"></style>