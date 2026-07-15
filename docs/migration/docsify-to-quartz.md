---
title: Docsify 到 Quartz 的迁移映射
---

# Docsify 到 Quartz 的迁移映射

旧 `wiki/` 目录保留到 Quartz 生产环境验收完成。Quartz 的 `AliasRedirects` 会为旧路径生成静态跳转；共享过的 Docsify `#/...` 链接由 `GlobalNav` 中的客户端映射接管，因为 URL fragment 不会发送到 Cloudflare。

| Docsify 深链接              | Quartz 页面                     |
| --------------------------- | ------------------------------- |
| `#/notes/service-roadmap`   | `/项目文档/service-roadmap`     |
| `#/notes/server-cloudflare` | `/Cloudflare/server-cloudflare` |
| `#/notes/image-hosting`     | `/Cloudflare/image-hosting`     |
| `#/ai/workflow`             | `/AI/ai-workflow`               |
| `#/design/ui-review`        | `/学习笔记/ui-review`           |
| `#/resources/tools`         | `/资源收藏/tools`               |

未知的旧 fragment 统一回到首页，避免展示 404。切换 `wiki.hfdz1119.top` 后，应逐项在预览和生产环境检查这张表；验收通过前不移除旧 Docsify 实现。
