<script setup lang="ts">
import { ref } from "vue";
import NewsReportFilter from "./components/filter/index.vue";
import NewsReportContainer from "./components/container/index.vue"
import NewsCard, { type NewsItem } from "@/components/news-card/index.vue";

defineOptions({ name: "NewsReportList" });

const newsList = ref<NewsItem[]>([
  {
    id: 1,
    title: "对俄实施禁运和价格上限，中国和印度已成为俄罗斯原油的主要买家",
    tags: ["报告", "新闻"],
    content: "在西方对俄罗斯石油实施制裁以及最近因俄乌战争实施禁运和价格上限的情况下，中国和印度已成为俄罗斯原油的主要买家。政府数据显示，1月份印度的俄罗斯原油进口量攀升至创纪录的140万桶/日，比去年12月份增长9.20%，占印度原油总进口量的约27%。五位知情人士称，中国商务部已会见了独立炼油厂，讨论他们与俄罗斯的交易，进口俄罗斯产品已为中国买家节省了数十亿美元。",
    date: "2025-11-12 12:00:00",
    score: 80
  },
]);
</script>

<template>
  <div class="news-report-list">
    <NewsReportFilter />
    <NewsReportContainer :items="newsList" />
  </div>
</template>

<style scoped lang="less" src="./style.less"></style>