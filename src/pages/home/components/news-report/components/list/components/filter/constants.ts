import type { CommonOptionType } from "@/types/common";

export const dataOptions: CommonOptionType<"全部" | "未关注" | "已关注", "" | "0" | "1">[] = [
  {
    label: "全部",
    value: ""
  },
  {
    label: "未关注",
    value: "0"
  },
  {
    label: "已关注",
    value: "1"
  }
]

export const typeOptions: CommonOptionType<"全部" | "新闻" | "报告", "" | "0" | "1">[] = [
  {
    label: "全部",
    value: ""
  },
  {
    label: "新闻",
    value: "0"
  },
  {
    label: "报告",
    value: "1"
  }
]