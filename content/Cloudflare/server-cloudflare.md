---
title: 服务器与 Cloudflare
aliases:
  - notes/server-cloudflare
date: 2026-07-15
tags:
  - cloudflare
  - web
  - security
draft: false
description: 统一入口、子域名规划与公开服务的安全边界。
---

# 服务器与 Cloudflare

## 目标

将 `hfdz1119.top` 做成统一入口，逐步接入作品集、导航站、图床、网盘、知识库、监控和私人工具。

## 子域名规划

| 子域名    | 用途             | 当前状态 |
| --------- | ---------------- | -------- |
| `nav.`    | 资源导航站       | 第一阶段 |
| `image.`  | R2 图床          | 已上线   |
| `drive.`  | Alist 网盘       | 准备中   |
| `wiki.`   | Knowledge Hub    | 第一阶段 |
| `status.` | 服务器监控       | 准备中   |
| `vault.`  | Bitwarden 密码库 | 私人工具 |
| `panel.`  | 管理后台         | 私人工具 |

## 安全原则

- 私人工具优先使用 Cloudflare Zero Trust 或等效访问控制。
- 导航站不写后台真实路径、密钥、Token、数据库地址。
- 公开服务和私密服务分开配置，避免误把管理入口暴露为公开链接。

> [!warning] 公开边界
> 只引用公共域名；任何面向私人工具的说明固定使用“Access 保护”，不提供健康检查地址或认证信息。
