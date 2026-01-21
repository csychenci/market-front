<script setup lang="ts">
import { ref } from 'vue';
import HomeNav from './components/nav.vue'
import { List as ListIcon } from "lucide-vue-next"

defineOptions({
  name: "HomePage"
})

</script>

<template>
  <div class="home-page">
    <HomeNav />
    <div class="home-container">
      <div class="home-container--header">
        <ListIcon class="home-container--header-icon" />
        <span>新闻报告</span>
      </div>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped src="./style.less"></style>
