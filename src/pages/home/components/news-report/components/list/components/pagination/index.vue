<script setup lang="ts">
import { ref } from "vue";

defineOptions({ name: "NewsReportPagination" });
const props = defineProps<{
  total: number;
}>();

const emit = defineEmits<{
  (e: "page-change", page: number): void;
}>();
</script>

<template>
  <div class="news-report-pagination">
    <el-pagination
      layout="total, prev, pager, next"
      :total="props.total"
      :page-size="10"
      @current-change="(page: number) => emit('page-change', page)"
    />
  </div>
</template>

<style scoped lang="less" src="./style.less"></style>
