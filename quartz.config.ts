import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Knowledge Hub",
    pageTitleSuffix: " | hfdz1119.top",
    enableSPA: true,
    enablePopovers: true,
    // Enable Cloudflare Web Analytics in the Pages dashboard. It injects its own beacon.
    analytics: null,
    locale: "zh-CN",
    baseUrl: "wiki.hfdz1119.top",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Sans SC",
        body: "Noto Sans SC",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f7f9f8",
          lightgray: "#dce7e4",
          gray: "#9ba9a6",
          darkgray: "#38504b",
          dark: "#16241f",
          secondary: "#087d78",
          tertiary: "#c84f8b",
          highlight: "rgba(8, 125, 120, 0.12)",
          textHighlight: "#fff0a8",
        },
        darkMode: {
          light: "#0f1117",
          lightgray: "#27322f",
          gray: "#71817d",
          darkgray: "#d5e2de",
          dark: "#f4fbf8",
          secondary: "#4de1c1",
          tertiary: "#ef79ad",
          highlight: "rgba(77, 225, 193, 0.13)",
          textHighlight: "#665d1d",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
