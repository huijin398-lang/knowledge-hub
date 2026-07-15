---
title: 图床部署记录
aliases:
  - notes/image-hosting
date: 2026-07-15
tags:
  - cloudflare
  - r2
  - image-hosting
draft: false
description: Cloudflare Pages Functions、R2 和 D1 图床的当前能力与整理方向。
---

# 图床部署记录

## 当前方案

图床项目基于 Cloudflare Pages Functions、R2 和 D1。唯一正式公开地址为 [image.hfdz1119.top](https://image.hfdz1119.top)。

## 已有能力

- 管理员登录。
- 拖拽、点击、粘贴上传图片。
- R2 存储原图，D1 保存图片元数据。
- 复制 URL 和 Markdown。
- 公共上传和公共图片展示。
- Telegram-only 存储与缩略图预览。

## 后续整理

- 补一篇完整部署步骤。
- 记录 D1 迁移命令和版本升级注意事项。
- 整理公共上传入口的防滥用策略。
- 把常用图片外链规则写成速查表。

相关内容：[[服务器与 Cloudflare]]、[[工具与链接]]。
