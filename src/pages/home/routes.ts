export const homeRoutes = [
  {
    path: "",
    redirect: { name: "news-report" }
  },
  {
    path: "news-report",
    name: "news-report",
    label: "新闻报告",
    component: () => import("@/pages/home/components/news-report/index.vue"),
    meta: { auth: true }
  },
  {
    path: "publish-news",
    name: "publish-news",
    label: "发布新闻",
    component: () => import("@/pages/home/components/publish-news/index.vue"),
    meta: { auth: true }
  },
  {
    path: "market-analysis",
    name: "market-analysis",
    label: "市场分析",
    component: () => import("@/pages/home/components/market-analysis/index.vue"),
    meta: { auth: false }
  }
]