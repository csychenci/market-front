export const homeRoutes = [
  {
    path: "",
    redirect: { name: "news-report" }
  },
  {
    path: "news-report",
    name: "news-report",
    label: "新闻报告",
    component: () => import("@/pages/home/components/news-report.vue"),
  },
  {
    path: "market-analysis",
    name: "market-analysis",
    label: "市场分析",
    component: () => import("@/pages/home/components/market-analysis.vue"),
  }
]