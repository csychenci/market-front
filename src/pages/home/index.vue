<script setup lang="ts">
  import HomeNav from './components/nav.vue'
</script>

<template>
  <div class="home-page">
      <HomeNav />
    <router-view />
  </div>
</template>

<style lang="scss" scoped src="./style.less">
</style>
