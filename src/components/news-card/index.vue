<script setup lang="ts">
  import { computed } from "vue";
  
  defineOptions({
    name: "NewsReportContainer",
  });
  
  export type NewsItem = {
    id: string | number;
    title: string;
    tag?: string; // 例如：报告
    summary: string;
    dateText: string; // 例如：2023年11月9日
    liked?: boolean;  // 收藏
    rating?: number;  // 0~5
  };
  
  const props = withDefaults(
    defineProps<{
      list?: NewsItem[];
    }>(),
    {
      list: () => [
        {
          id: 1,
          title: "俄实施禁运和价格上限，中国和印度已成为俄罗斯原油的主要买家",
          tag: "默认值",
          summary:
            "在西方对俄罗斯石油实施制裁以及最近因俄乌争实施禁运和价格上限的情况下，中国和印度已成为俄罗斯原油的主要买家。政府数据显示，1月份印度的俄罗斯原油进口量攀升至创纪录的140万桶/日，比去年12月份增长9.20%，占印度原油总进口量的约27%。五位知情人士称，中国商务部已会见了独立炼油厂，讨论他们与俄罗斯的交易，进口俄罗斯产品已为中国买家节省了数十亿美元。",
          dateText: "2023年11月9日",
          liked: true,
          rating: 1,
        },
      ],
    }
  );
  
  const emit = defineEmits<{
    (e: "toggle-like", item: NewsItem): void;
    (e: "read-more", item: NewsItem): void;
    (e: "rate", payload: { item: NewsItem; rating: number }): void;
  }>();
  
  function toggleLike(item: NewsItem) {
    emit("toggle-like", item);
  }
  
  function readMore(item: NewsItem) {
    emit("read-more", item);
  }
  
  function setRating(item: NewsItem, r: number) {
    emit("rate", { item, rating: r });
  }
  
  const hasList = computed(() => (props.list?.length ?? 0) > 0);

  function starPath() {
    // 经典五角星路径
    return "M12 2.3l2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 17.9 6.2 20.3l1.1-6.5L2.5 9.2l6.6-.9L12 2.3z";
  }
  </script>
  
  <template>
    <div class="news-report-container">
      <div v-if="!hasList" class="empty">
        暂无数据
      </div>
  
      <div v-else class="card-list">
        <article
          v-for="item in list"
          :key="item.id"
          class="news-card"
        >
          <!-- 右上角收藏 -->
          <button
            class="news-card__fav"
            type="button"
            :aria-pressed="!!item.liked"
            @click="toggleLike(item)"
            title="收藏"
          >
            <svg viewBox="0 0 24 24" class="icon-star" aria-hidden="true">
              <path :d="starPath()" />
            </svg>
          </button>
  
          <!-- 标题 -->
          <h3 class="news-card__title">
            {{ item.title }}
          </h3>
  
          <!-- 标签 -->
          <div v-if="item.tag" class="news-card__tag">
            {{ item.tag }}
          </div>
  
          <!-- 摘要 -->
          <p class="news-card__summary">
            {{ item.summary }}
          </p>
  
          <!-- 底部：日期 + 看多 + 评分 -->
          <div class="news-card__footer">
            <div class="news-card__date">
              {{ item.dateText }}
            </div>
  
            <div class="news-card__actions">
              <button class="link" type="button" @click="readMore(item)">
                看多
              </button>
  
              <div class="rating" role="radiogroup" aria-label="评分">
                <button
                  v-for="r in 5"
                  :key="r"
                  type="button"
                  class="rating__star"
                  :class="{ 'is-on': (item.rating ?? 0) >= r }"
                  :aria-label="`评分 ${r} 星`"
                  @click="setRating(item, r)"
                >
                  <svg viewBox="0 0 24 24" class="icon-star" aria-hidden="true">
                    <path :d="starPath()" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </template>
  
  <style scoped lang="less" src="./style.less"></style>