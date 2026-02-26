import { request } from "@/service";
import type { NewsReportItemType } from "@/types/news";

export interface ApiResponse<T = any> {
  code: number;
  message?: string;
  msg?: string;
  data: T;
}

export function getNewsList(params?: { 
  keyword?: string; 
  tag?: string;
  page?: number;
  pageSize?: number;
}): Promise<NewsReportItemType[]> {
  return request.get<any, ApiResponse<NewsReportItemType[]>>("/news", {
    params,
    auth: false
  }).then(res => {
    if (res.code === 200 && res.data) {
      if (Array.isArray(res.data)) {
        return res.data;
      }
      if (res.data.list && Array.isArray(res.data.list)) {
        return res.data.list;
      }
    }
    console.warn('API返回格式异常:', res);
    return [];
  });
}

export interface CreateNewsParams {
  title: string;
  content?: string;
  sourceUrl?: string;
  tags?: unknown;
  images?: unknown;
  summary?: string;
  viewpoints?: unknown;
  score?: number;
  publishTime: string | Date;
}

export function createNews(data: CreateNewsParams): Promise<ApiResponse<NewsReportItemType>> {
  return request.post<any, ApiResponse<NewsReportItemType>>("/news", data, {
    auth: false
  });
}