import { request } from "@/service";
import type { NewsReportItemType } from "@/types/news";

export function getNewsList(params?: { 
  keyword?: string; 
  tag?: string;
  page?: number;
  pageSize?: number;
}): Promise<NewsReportItemType[]> {
  return request.get("/api/news", {
    params,
    auth: true
  }).then(res => res.data);
}
