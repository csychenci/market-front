<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const isLoading = ref(false)

const handleLogin = async () => {
  isLoading.value = true
  // 模拟登录延迟
  setTimeout(() => {
    isLoading.value = false
    router.push('/')
  }, 1000)
}
</script>

<template>
  <div class="min-h-[80vh] flex items-center justify-center">
    <div class="w-full max-w-md bg-surface border border-border rounded-2xl p-8 shadow-2xl">
      <div class="text-center mb-8">
        <div class="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/20">
          <span class="text-background text-2xl font-bold">F</span>
        </div>
        <h1 class="text-2xl font-bold text-gray-100">欢迎回来</h1>
        <p class="text-gray-500 text-sm mt-2">请输入您的凭据以访问控制台</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">用户名 / 邮箱</label>
          <input 
            v-model="username"
            type="text" 
            placeholder="admin"
            class="w-full bg-gray-900 border border-border rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            required
          />
        </div>

        <div>
          <label class="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">密码</label>
          <input 
            v-model="password"
            type="password" 
            placeholder="••••••••"
            class="w-full bg-gray-900 border border-border rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            required
          />
        </div>

        <div class="flex items-center justify-between text-xs">
          <label class="flex items-center gap-2 cursor-pointer text-gray-400">
            <input type="checkbox" class="accent-primary" /> 记住我
          </label>
          <a href="#" class="text-primary hover:underline">忘记密码?</a>
        </div>

        <button 
          type="submit"
          :disabled="isLoading"
          class="w-full py-3 bg-primary text-background font-bold rounded-xl hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
        >
          <span v-if="isLoading" class="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin"></span>
          {{ isLoading ? '登录中...' : '立即登录' }}
        </button>
      </form>

      <div class="mt-8 text-center text-xs text-gray-500">
        还没有账号? <a href="#" class="text-primary hover:underline font-bold">立即注册</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
