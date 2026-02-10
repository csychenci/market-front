import Mock from "mockjs";

// 新闻列表Mock
Mock.mock("/api/news", "get", {
  code: 200,
  "data|33": [{
    "id|+1": 1,
    title: "@ctitle(10, 30)",
    "tags|2-4": ["@pick(['新闻','报告','分析','快讯','深度','独家'])"],
    content: "@cparagraph(3,5)",
    date: "@datetime",
    "score|1-100": 1,
  }]
});

