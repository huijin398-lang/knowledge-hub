# Giscus 预留配置

第一版默认不加载评论脚本。启用前必须满足：

1. 新的 `knowledge-hub` GitHub 仓库为公开仓库。
2. 仓库已启用 GitHub Discussions。
3. 已为该仓库安装 Giscus App，并创建 `Announcements` 分类。
4. 从 Giscus 配置页取得 `repoId` 与 `categoryId`。

启用时在 `quartz.layout.ts` 的 `sharedPageComponents.afterBody` 中加入 `Component.Comments`，并填入仓库、分类和 ID。样式位置已经预留在 `quartz/static/giscus/`；默认不应填写占位 ID，也不应加载任何评论脚本。
