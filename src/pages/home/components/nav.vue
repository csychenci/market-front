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

<style scoped lang="less">
.home-nav {
  position: relative;
  border-right: 0.5px solid #000;
  background-color: #06253A;
  width: 200px;
  --text-left: 44px;

  .nav-header {
      padding: 18px 20px 12px;
  
      img {
        display: block;
        width: 100%;
        max-width: 180px;
        height: auto;
      }
    }
}

.nav-item {
  padding: 8px 20px;
  color: #fff;
}

.nav-item-inner {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
}

.nav-item-inner::before {
  content: '';
  position: absolute;
  inset: -6px -12px;
  background: transparent;
  border-radius: 8px;
  z-index: 0;
  pointer-events: none;
}

.nav-item-inner>* {
  position: relative;
  z-index: 1;
}

.nav-item-inner:hover::before {
  background-color: #1199F0;
}

.nav-item .icon {
  width: 16px;
  height: 16px;
}

.nav-item .icon-right {
  margin-left: auto;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.nav-item .icon-right.rotated {
  transform: rotate(180deg);
}

.sub-ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.sub-list {
  margin-top: -10px;
}

.sub-item {
  padding-left: var(--text-left);
}

.sub-link {
  display: block;
  padding: 10px 0;
  color: #cbd5e1;
  text-decoration: none;
}

.sub-link:hover {
  color: #fff;
}
</style>