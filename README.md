# Mini Trading Terminal - Frontend

前端部分，采用 Vue 3 + TypeScript + Vite 架构，旨在模拟高性能、高可靠性的金融交易界面。

## 1. 技术栈说明

| 依赖库 | 作用 | 用法说明 |
| :--- | :--- | :--- |
| **Vue 3** | 核心框架 | 使用 Composition API (`<script setup>`) 进行逻辑组织。 |
| **TypeScript** | 类型安全 | 全局类型定义，确保金融数据（如资产、订单）的准确性。 |
| **Vite** | 构建工具 | 提供极致的开发启动速度和 HMR 体验。 |
| **Tailwind CSS** | 样式引擎 | 原子化 CSS，负责快速构建响应式的深色模式交易界面。 |
| **Less** | CSS 预处理器 | 处理复杂的样式逻辑、变量定义及自定义滚动条。 |
| **Lightweight Charts** | 行情图表 | TradingView 出品的高性能金融图表库，用于渲染实时 K 线及分时图。 |
| **Pinia** | 状态管理 | 存储全局行情数据、持仓状态及用户配置。 |
| **Vue Router** | 路由管理 | 处理多视图切换（如交易终端、持仓报告、资产中心）。 |
| **Axios** | HTTP 客户端 | 与 BFF 层 (Egg.js) 进行 REST 接口通信。 |
| **Lucide Vue Next** | 图标库 | 提供简洁、一致的图标系统。 |

## 2. 目录结构

```text
front/
├── src/
│   ├── api/            # 接口请求封装 (Axios instance & modules)
│   ├── assets/         # 静态资源 (图片、字体)
│   ├── components/     # 公共组件 (Button, Input, Modal 等)
│   ├── hooks/          # 自定义 Composition API (useSocket, useTick 等)
│   ├── router/         # 路由配置
│   ├── store/          # Pinia 全局状态管理
│   ├── styles/         # 全局样式 (main.less, tailwind 基础配置)
│   ├── types/          # TypeScript 类型定义文件 (.d.ts)
│   ├── utils/          # 工具函数 (大数计算、格式化等)
│   ├── views/          # 页面级组件 (MarketTerminal, Portfolio 等)
│   ├── App.vue         # 根组件 (布局骨架)
│   └── main.ts         # 入口文件
├── index.html          # HTML 模板
├── tailwind.config.js  # Tailwind 配置文件 (包含金融主题色设定)
├── vite.config.ts      # Vite 配置文件 (含路径别名与 API 代理)
└── tsconfig.json       # TypeScript 配置
```

## 3. 核心设计模式

*   **BFF 代理模式**: 前端通过 Vite Server Proxy 转发 `/api` 和 `/socket.io` 请求至 Egg.js，解决开发环境跨域问题。
*   **实时数据流**: 结合 WebSocket (后继步骤集成) 与 Pinia，实现行情数据的全局单向流订阅。
*   **性能优化**: 针对行情跳动频繁的场景，设计了响应式数据节流与 Lightweight Charts 的自适应调整。

## 4. 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```
