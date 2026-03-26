import { request } from "@/service";
import type { NewsReportItemType } from "@/pages/home/components/news-report/components/list/components/container/item/type";

export interface ApiResponse<T = any> {
  code: number;
  message?: string;
  msg?: string;
  data: T;
}

export interface NewsListResult {
  list: NewsReportItemType[];
  total: number;
}

export function getNewsList(params?: {
  keyword?: string;
  tag?: string;
  page?: number;
  pageSize?: number;
}): Promise<NewsListResult> {
  return request.get<any, ApiResponse<NewsListResult>>("/news", {
    params: {
      pageNum: params?.page ?? 1,
      pageSize: params?.pageSize ?? 10,
      keyword: params?.keyword,
      tag: params?.tag,
    }
  }).then(res => {
    if (res.code === 200 && res.data) {
      if (res.data.list && Array.isArray(res.data.list)) {
        return res.data as NewsListResult;
      }
      if (Array.isArray(res.data)) {
        return { list: res.data, total: res.data.length };
      }
    }
    console.warn('API返回格式异常:', res);
    return { list: [], total: 0 };
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