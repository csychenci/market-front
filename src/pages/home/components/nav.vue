<script setup lang="ts">
import { homeRoutes } from '../routes'
defineOptions({
  name: 'home-nav'
})
</script>

<template>
  <ul class="home-nav">
    <li v-for="route in homeRoutes" :key="route.name">
      <router-link :to="route.path">{{ route.label }}</router-link>
    </li>
  </ul>
</template>

<style scoped lang="less">
.home-nav {
  border-right: 0.5px solid #000;
}
</style>