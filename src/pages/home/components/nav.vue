<script setup lang="ts">
import { ref } from 'vue'
import { homeRoutes } from '../routes'
defineOptions({
  name: 'home-nav'
})

const open = ref(false)

function toggle() {
  open.value = !open.value
}
</script>

<template>
  <ul class="home-nav">
    <li class="nav-header">
      <img src="@/assets/Frame1056.png" alt="logo"></img>
    </li>

    <li class="nav-item">
      <div class="nav-item-inner">
        <img class="icon" src="@/assets/Frame.svg" />
        <span>市场洞察</span>
        <img class="icon icon-right" :class="{ rotated: open }" src="@/assets/Frame1058.png" @click.stop="toggle" />
      </div>
    </li>

    <li v-if="open" class="sub-list">
      <ul class="sub-ul">
        <li v-for="route in homeRoutes" :key="route.name" class="sub-item">
          <router-link class="sub-link" :to="route.path">
            {{ route.label }}
          </router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped src="./style.less" lang="less"></style>