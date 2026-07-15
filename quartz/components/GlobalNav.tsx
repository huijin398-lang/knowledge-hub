import { QuartzComponent, QuartzComponentConstructor } from "./types"
import style from "./styles/globalNav.scss"

const legacyDocsifyRedirect = `
  const docsifyAliases = {
    "notes/service-roadmap": "项目文档/service-roadmap",
    "notes/server-cloudflare": "Cloudflare/server-cloudflare",
    "notes/image-hosting": "Cloudflare/image-hosting",
    "ai/workflow": "AI/ai-workflow",
    "design/ui-review": "学习笔记/ui-review",
    "resources/tools": "资源收藏/tools"
  }
  const redirectLegacyDocsifyHash = () => {
    const legacyPath = window.location.hash.replace(/^#\\/?/, "").replace(/\\/$/, "")
    if (!legacyPath) return
    const target = docsifyAliases[legacyPath] ?? ""
    window.location.replace(target ? "/" + target : "/")
  }
  redirectLegacyDocsifyHash()
`

const GlobalNav: QuartzComponent = () => (
  <nav class="global-nav" aria-label="Global navigation">
    <a href="https://hfdz1119.top">Home</a>
    <a href="https://nav.hfdz1119.top">Navigation</a>
    <a href="https://wiki.hfdz1119.top" aria-current="page">
      Knowledge
    </a>
    <a href="https://hfdz1119.top/#projects">Projects</a>
    <a href="https://nav.hfdz1119.top">Tools</a>
    <a href="https://hfdz1119.top/#about">About</a>
  </nav>
)

GlobalNav.css = style
GlobalNav.afterDOMLoaded = legacyDocsifyRedirect

export default (() => GlobalNav) satisfies QuartzComponentConstructor
