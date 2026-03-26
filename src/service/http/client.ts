import axios from "axios"
import type { AxiosInstance } from "axios"
import { getToken, clearToken, setToken } from "./auth";
import { normalizeAxiosError } from "./error";
import router from "@/router"; // 你的路由实例路径自己对齐

type RequestConfigExt = {
  auth?: boolean; // 这个请求是否需要携带token
};

declare module "axios" {
  export interface AxiosRequestConfig extends RequestConfigExt { }
}

export function createHttpClient(): AxiosInstance {
  const client = axios.create({
    baseURL: "/api",
    timeout: 15000,
  });

  // 请求拦截：按需添加 token
  client.interceptors.request.use((config) => {
    console.log("config", config)
    const token = getToken();
    debugger
    if (token) {
      config.headers.Authorization = `Bearer ` + token;
    }
    return config;
  });

  // 响应拦截：统一解包 + 统一错误处理
  client.interceptors.response.use(
    (res) => {
      console.log("res", res);
      if (res.config.url == "/user/login" && res.status === 200) {
        setToken(res.data.data.token)
      }
      return res.data
    },
    async (err) => {
      debugger
      const apiErr = normalizeAxiosError(err);

      // 你们定的是 406 表示 token 过期，就在这里统一处理
      if (apiErr.status === 401 || apiErr.status === 406) {
        clearToken();

        // 避免无限跳转：如果已经在登录页就别 push
        if (router.currentRoute.value.path !== "/login") {
          router.push({
            path: "/login",
            query: { reason: "expired" },
          });
        }
      }

      return Promise.reject(apiErr);
    }
  );

  return client;
}