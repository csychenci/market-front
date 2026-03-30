<script setup lang="ts">
import type { NewsReportContainerProps } from "../../type"
import dayjs from "dayjs"

const props = defineProps<{
  item: NewsReportContainerProps | null
  isLoading?: boolean
}>()
</script>

<template>
    <div class="detail">
      <template v-if="props.isLoading">
        <div class="detail__loading">加载中...</div>
      </template>
      <template v-else-if="props.item">
        <div class="detail__header">
          <h2 class="detail__title">{{ props.item.title }}</h2>

          <div class="detail__meta">
            <span class="detail__date">{{ dayjs(props.item.publishTime).format("YYYY-MM-DD") }}</span>
            <div class="detail__tags">
              <span v-for="tag in props.item.tags" :key="tag" class="detail__tag">{{ tag }}</span>
            </div>
          </div>
        </div>

        <div class="detail__body">
          <div class="detail__content">{{ props.item.content }}</div>
        </div>
      </template>

      <template v-else>
        <div class="detail__empty">请选择一条新闻</div>
      </template>
    </div>
  </template>

<style scoped lang="less" src="./style.less"></style>