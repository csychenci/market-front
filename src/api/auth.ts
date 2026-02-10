import { request } from "@/service";
import { setToken, clearToken } from "@/service/http/auth";

export async function login(payload: { username: string; password: string }) {
  // 登录一般不需要 token
  const data = await request.post("/auth/login", payload, { auth: false });

  // 你们返回字段自己对齐，比如 data.token
  setToken(data.token);
  return data;
}

export async function logout() {
  // 登出通常需要 token
  const data = await request.post("/auth/logout", null, { auth: true });
  clearToken();
  return data;
}

export async function register(payload: {
  username: string;
  password: string;
  email?: string;
}) {
  return request.post("/auth/register", payload, { auth: false });
}