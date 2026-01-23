<script setup lang="ts">
import { Search as SearchIcon } from "lucide-vue-next"
import { ref } from 'vue';
import { dataOptions, typeOptions, sourceOptions,motionOptions } from "./constants";

defineOptions({
  name: "NewsReportFilter"
})

const searchValue = ref("")
const dateRange = ref("")
const dataMode = ref("")
const typeMode = ref("")
const sourceMode = ref("")
const motionMode = ref("")

function resetFilter() {
  searchValue.value = ""
  dateRange.value = ""
  dataMode.value = ""
  typeMode.value = ""
  sourceMode.value = ""
  motionMode.value = ""
}
</script>
<template>
  <div class="news-report-filter">
    <div class="news-report-filter-item">
      <el-input class="news-report-filter--search" v-model="searchValue" :prefix-icon="SearchIcon"
        placeholder="搜索关键字" />
      <el-date-picker class="news-report-filter--date" v-model="dateRange" type="daterange" range-separator="-"
        start-placeholder="开始时间" end-placeholder="结束时间" size="default" />
      <el-select v-model="dataMode" placeholder="数据: 全部" style="width: 240px">
        <el-option v-for="item in dataOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <div class="news-report-filter-item">
      <el-select v-model="typeMode" placeholder="类型: 全部" style="width: 240px">
        <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-select v-model="sourceMode" placeholder="数据源: 全部" style="width: 240px">
        <el-option v-for="item in sourceOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-select v-model="motionMode" placeholder="数据源: 全部" style="width: 240px">
        <el-option v-for="item in motionOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <div @click="resetFilter">清空筛选</div>
    </div>
  </div>
</template>
<style lang="less" src="./style.less"></style>import type { dataOptions } from "./constants";
