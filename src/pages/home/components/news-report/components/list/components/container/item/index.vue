<script setup lang="ts">
import dayjs from "dayjs"
import { NewsReportItemProps } from "./type"
import { Star as StarIcon } from "lucide-vue-next"
import { getStarForScore } from "./utils"
import { computed } from "vue";

defineOptions({
  name: "NewsReportItem"
})
const { item } = defineProps<NewsReportItemProps>()
const starCount = computed(() => getStarForScore(item.score ?? 0))
</script>
<template>
  <div class="news-report-item">
    <div class="news-report-item__header">
      <span class="news-report-item__title">{{ item.title }}</span>
      <StarIcon class="news-report-item__star" />
    </div>
    <ul class="news-report-item__tags">
      <li v-key="tagIndex" v-for="(tag, tagIndex) in item.tags">{{ tag }}</li>
    </ul>
    <p class="news-report-item__content">{{ item.content }}</p>
    <div class="news-report-item__actions">
      <span>{{ dayjs(item.date)?.format("YYYY-MM-DD") }}</span>
      <div class="news-report-item__scores">
        <span>{{ starCount >= 4 ? "看涨" : "看跌" }}</span>
        <ul class="news-report-item__score__list">
          <StarIcon :class="starCount >= (scoreIndex + 1) ? 'active' : ''" v-key="scoreIndex" v-for="scoreIndex in 5" />
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped src="./style.less"></style>