<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'
import { createChart, IChartApi, ISeriesApi, Time, CandlestickSeries } from 'lightweight-charts'
import { Activity, List } from 'lucide-vue-next'

const chartContainer = ref<HTMLElement | null>(null)
let chart: IChartApi | null = null
let candlestickSeries: ISeriesApi<"Candlestick", Time> | null = null

onMounted(() => {
  if (chartContainer.value) {
    chart = createChart(chartContainer.value, {
      layout: {
        background: { color: '#121212' },
        textColor: '#d1d4dc',
      },
      grid: {
        vertLines: { color: 'rgba(42, 46, 57, 0.5)' },
        horzLines: { color: 'rgba(42, 46, 57, 0.5)' },
      },
      rightPriceScale: {
        borderColor: 'rgba(197, 203, 206, 0.1)',
      },
      timeScale: {
        borderColor: 'rgba(197, 203, 206, 0.1)',
        timeVisible: true,
      },
    })

    candlestickSeries = chart.addSeries(CandlestickSeries, {
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderVisible: false,
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
    })

    // Mock initial data
    const data = [
      { time: '2018-12-22' as Time, open: 75.16, high: 82.84, low: 36.16, close: 45.72 },
      { time: '2018-12-23' as Time, open: 45.12, high: 53.90, low: 45.12, close: 48.09 },
      { time: '2018-12-24' as Time, open: 60.71, high: 60.71, low: 53.39, close: 59.29 },
      { time: '2018-12-25' as Time, open: 68.26, high: 68.26, low: 59.04, close: 60.50 },
      { time: '2018-12-26' as Time, open: 67.71, high: 105.85, low: 66.67, close: 91.46 },
    ]

    candlestickSeries.setData(data)

    // Auto-resize
    const resizeObserver = new ResizeObserver(entries => {
      if (entries.length === 0 || !chart) return;
      const { width, height } = entries[0].contentRect;
      chart.resize(width, height);
    });
    resizeObserver.observe(chartContainer.value);
  }
})

onUnmounted(() => {
  if (chart) {
    chart.remove()
    chart = null
  }
})
</script>

<template>
  <div class="grid grid-cols-12 gap-4">
    <!-- Market Overview & Main Chart -->
    <div class="col-span-12 lg:col-span-9 space-y-4">
      <div class="bg-surface border border-border rounded-xl overflow-hidden shadow-lg p-4">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-4">
            <h2 class="text-xl font-mono tracking-wider">AAPL <span class="text-sm text-gray-500">APPLE INC.</span></h2>
            <div class="text-success font-mono">214.32 (+1.42%)</div>
          </div>
          <div class="flex gap-2">
            <button class="p-1 px-3 bg-gray-800 rounded text-xs hover:bg-gray-700 transition-colors">1m</button>
            <button class="p-1 px-3 bg-gray-800 rounded text-xs hover:bg-gray-700 transition-colors">5m</button>
            <button class="p-1 px-3 bg-primary text-background rounded text-xs font-bold">1d</button>
          </div>
        </div>

        <div ref="chartContainer" class="h-[500px] w-full"></div>
      </div>
    </div>

    <!-- Right Sidebar: Order Entry & Book -->
    <div class="col-span-12 lg:col-span-3 space-y-4">
      <!-- Quick Order Entry -->
      <div class="bg-surface border border-border rounded-xl p-5 shadow-lg">
        <h3 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
          <Activity :size="14" /> Order Entry
        </h3>

        <div class="flex gap-2 mb-4">
          <button
            class="flex-1 py-3 bg-success/20 text-success border border-success/30 rounded-lg text-sm font-bold hover:bg-success/30 transition-all">BUY</button>
          <button
            class="flex-1 py-3 bg-danger/20 text-danger border border-danger/30 rounded-lg text-sm font-bold hover:bg-danger/30 transition-all">SELL</button>
        </div>

        <div class="space-y-3">
          <div>
            <label class="text-[10px] text-gray-500 uppercase block mb-1">Price Type</label>
            <select
              class="w-full bg-gray-900 border border-border rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary">
              <option>Limit Order</option>
              <option>Market Order</option>
            </select>
          </div>
          <div>
            <label class="text-[10px] text-gray-500 uppercase block mb-1">Price (USD)</label>
            <input type="number" value="214.32"
              class="w-full bg-gray-900 border border-border rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
          </div>
          <div>
            <label class="text-[10px] text-gray-500 uppercase block mb-1">Quantity</label>
            <input type="number" placeholder="0"
              class="w-full bg-gray-900 border border-border rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
          </div>

          <div class="pt-4 mt-4 border-t border-border flex justify-between items-center text-xs">
            <span class="text-gray-500">Estimated Total:</span>
            <span class="font-mono">$0.00</span>
          </div>

          <button
            class="w-full py-3 bg-primary text-background rounded-lg font-bold mt-2 hover:opacity-90 active:scale-[0.98] transition-all">
            PLACE ORDER
          </button>
        </div>
      </div>

      <!-- Compact Order Book -->
      <div class="bg-surface border border-border rounded-xl p-5 shadow-lg flex-1">
        <h3 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
          <List :size="14" /> Order Book
        </h3>
        <div class="space-y-1 font-mono text-[11px]">
          <div class="flex justify-between text-danger/80">
            <span>214.45</span>
            <span>1,420</span>
          </div>
          <div class="flex justify-between text-danger/80">
            <span>214.40</span>
            <span>850</span>
          </div>
          <div class="flex justify-between text-danger/80 bg-danger/5 border-y border-danger/10">
            <span>214.35</span>
            <span>2,100</span>
          </div>
          <div class="py-2 text-center text-sm border-y border-border my-2 bg-gray-900/50">
            214.32 <span class="text-[10px] text-gray-500">LAST</span>
          </div>
          <div class="flex justify-between text-success/80 bg-success/5 border-y border-success/10">
            <span>214.30</span>
            <span>1,250</span>
          </div>
          <div class="flex justify-between text-success/80">
            <span>214.25</span>
            <span>3,300</span>
          </div>
          <div class="flex justify-between text-success/80">
            <span>214.20</span>
            <span>670</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
