<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import type { NewsReportListProps } from "./type";
import NewsReportFilter from "./components/filter/index.vue";
import NewsReportContainer from "./components/container/index.vue";
import NewsReportPagination from "./components/pagination/index.vue";
import type { NewsReportItemType } from "@/pages/home/components/news-report/components/list/components/container/item/type";
import { getNewsList } from "@/api/news";

defineOptions({ name: "NewsReportList" });

const props = defineProps<NewsReportListProps>();
const newsList = ref<NewsReportItemType[]>([]);
const newsTotal = ref<number>(0);
const currentPage = ref(1);
const pageSize = 10;

onMounted(async () => {
  try {
    newsList.value = await getNewsList();
    newsTotal.value = newsList.value.length;
    console.log("获取成功", newsList.value);
  } catch (error) {
    console.error("获取新闻列表失败:", error);
  }
});

const pagedNewsList = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize
  return newsList.value.slice(start, end)
})
</script>

<template>
  <div class="news-report-list">
    <NewsReportFilter />
    <NewsReportContainer
      :selected-item="selectedItem"
      :items="pagedNewsList"
      :on-select="props.onSelect"
    />
    <NewsReportPagination
      :total="newsTotal"
      @page-change="
        (page) => {
          currentPage = page;

        }
      "
    />
  </div>
</template>

<style scoped lang="less" src="./style.less"></style>
