<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="size-full">
    <!-- Basic Layout Header -->
    <!-- <header class="h-14 border-b border-border flex items-center px-6 bg-surface shadow-sm sticky top-0 z-10">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span class="text-background font-bold">F</span>
        </div>
        <h1 class="text-lg font-bold tracking-tight">Mini Trading Console</h1>
      </div>
      
      <nav class="ml-10 flex gap-6 text-sm font-medium text-gray-400">
        <a href="#" class="text-primary border-b-2 border-primary py-4">Terminal</a>
        <a href="#" class="hover:text-gray-200 py-4 transition-colors">Positions</a>
        <a href="#" class="hover:text-gray-200 py-4 transition-colors">Reports</a>
      </nav>

      <div class="ml-auto flex items-center gap-4">
        <div class="flex items-center gap-2 px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700/50">
          <div class="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span class="text-xs font-mono">BFF Connected</span>
        </div>
      </div>
    </header> -->
    

    <!-- <main class="p-4">
      <RouterView />
    </main> -->
    <RouterView />
  </div>
</template>

<style scoped>
</style>
