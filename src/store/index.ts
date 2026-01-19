import { createPinia } from 'pinia'

const pinia = createPinia()

export default pinia

// 显式导出各个 store 模块，避免使用 export * 可能导致的类型冲突
export { useTradeStore } from './useTradeStore'
