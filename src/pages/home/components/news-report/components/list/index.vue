<script setup lang="ts">
  import { ref } from "vue";
  import NewsReportFilter from "./components/filter/index.vue";
  import NewsCard, { type NewsItem } from "@/components/news-card/index.vue";
  
  defineOptions({ name: "NewsReportList" });
  
  const newsList = ref<NewsItem[]>([
    {
      id: 1,
      title: "俄实施禁运和价格上限，中国和印度已成为俄罗斯原油的主要买家",
      tag: "报告",
      summary: "……",
      dateText: "2023年11月9日",
      liked: true,
      rating: 1,
    },
  ]);
  
  function onToggleLike(item: NewsItem) {
    // 你可以在这里调接口，然后更新本地状态（示例：本地直接切换）
    const target = newsList.value.find((x) => x.id === item.id);
    if (target) target.liked = !target.liked;
  }
  
  function onReadMore(item: NewsItem) {
    // 这里做跳转/打开详情/埋点
    console.log("read more:", item.id);
  }
  
  function onRate(payload: { item: NewsItem; rating: number }) {
    const target = newsList.value.find((x) => x.id === payload.item.id);
    if (target) target.rating = payload.rating;
  }
  </script>
  
  <template>
    <div class="news-report-list">
      <NewsReportFilter />
  
      <NewsCard
        :list="newsList"
        @toggle-like="onToggleLike"
        @read-more="onReadMore"
        @rate="onRate"
      />
    </div>
  </template>
  
  <style scoped lang="less" src="./style.less"></style>