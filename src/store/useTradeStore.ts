import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTradeStore = defineStore('trade', () => {
  const currentSymbol = ref('AAPL')
  const orderBook = ref({
    bids: [],
    asks: [],
  })
  
  const setSymbol = (symbol: string) => {
    currentSymbol.value = symbol
  }

  return {
    currentSymbol,
    orderBook,
    setSymbol,
  }
})
