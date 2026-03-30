<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { NewsReportListProps } from "./type";
import NewsReportFilter from "./components/filter/index.vue";
import NewsReportContainer from "./components/container/index.vue";
import NewsReportPagination from "./components/pagination/index.vue";
import type { NewsReportItemType } from "@/pages/home/components/news-report/components/list/components/container/item/type";
import { getNewsList, toggleFavorite } from "@/api/news";

defineOptions({ name: "NewsReportList" });

const props = defineProps<NewsReportListProps>();
const newsList = ref<NewsReportItemType[]>([]);
const newsTotal = ref<number>(0);
const currentPage = ref(1);
const pageSize = 10;

const fetchNews = async (page: number) => {
  try {
    const result = await getNewsList({ page, pageSize });
    newsList.value = result.list;
    newsTotal.value = result.total;
    console.log(result);
  } catch (error) {
    console.error("获取新闻列表失败:", error);
  }
};

const handleFavorite = async (item: NewsReportItemType) => {
  try {
    const result = await toggleFavorite(item.id);
    const index = newsList.value.findIndex(n => n.id === item.id);
    if (index !== -1) {
      newsList.value[index] = { ...newsList.value[index], isFavorited: result.data.favorited };
    }
  } catch (error) {
    console.error("收藏操作失败:", error);
  }
};

onMounted(() => fetchNews(1));
</script>

<template>
  <div class="news-report-list">
    <NewsReportFilter />
    <NewsReportContainer
      :selected-item="selectedItem"
      :items="newsList"
      :on-select="props.onSelect"
      :on-favorite="handleFavorite"
    />
    <NewsReportPagination
      :total="newsTotal"
      @page-change="(page) => { currentPage = page; fetchNews(page); }"
    />
  </div>
</template>

<style scoped lang="less" src="./style.less"></style>
