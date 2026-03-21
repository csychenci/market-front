<script setup lang="ts">
import dayjs from "dayjs";
import type { NewsReportItemProps } from "./type";
import { Star as StarIcon } from "lucide-vue-next";
import { getStarForScore } from "./utils";
import { computed } from "vue";

defineOptions({
  name: "NewsReportItem",
});
const { item, selectedItem, onSelect } = defineProps<NewsReportItemProps>();
const starCount = computed(() => getStarForScore(item.score ?? 0));
</script>
<template>
  <div
    :class="['news-report-item', selectedItem?.id === item.id && 'active']"
    @click="
      () => {
        onSelect?.(item);
      }
    "
  >
    <div class="news-report-item__header">
      <span class="news-report-item__title">{{ item.title }}</span>
      <StarIcon class="news-report-item__star" />
    </div>
    <ul class="news-report-item__tags">
      <li v-for="(tag, tagIndex) in item.tags" :key="tagIndex">
        {{ tag }}
      </li>
    </ul>
    <p class="news-report-item__content">{{ item.content }}</p>
    <div class="news-report-item__actions">
      <span>{{ dayjs(item.publishTime)?.format("YYYY-MM-DD") }}</span>
      <div class="news-report-item__scores">
        <span>{{ starCount >= 4 ? "看涨" : "看跌" }}</span>
        <ul class="news-report-item__score__list">
          <StarIcon
            v-for="scoreIndex in 5"
            :key="scoreIndex"
            :class="starCount >= scoreIndex ? 'active' : ''"
          />
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped src="./style.less"></style>
