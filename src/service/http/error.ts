import type { AxiosError } from "axios";

export type ApiError = {
  status?: number;
  code?: string;
  message: string;
  raw?: unknown;
};

export function normalizeAxiosError(err: unknown): ApiError {
  const e = err as AxiosError<any>;

  const status = e.response?.status;
  const data = e.response?.data;

  // 你们后端可能返回 { code, msg } 或 { message }，自己对齐
  const code = data?.code ?? data?.errorCode;
  const message =
    data?.msg ??
    data?.message ??
    e.message ??
    "网络错误，请稍后再试";

  return { status, code, message, raw: data };
}