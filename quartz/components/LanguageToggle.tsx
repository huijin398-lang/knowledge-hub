import { QuartzComponent, QuartzComponentConstructor } from "./types"
import style from "./styles/languageToggle.scss"

const languageToggleScript = `
  const translations = {
    zh: {
      ".search-button p": "搜索",
      ".explorer .title-button h2": "探索",
      ".toc-header h3": "目录",
      ".backlinks h3": "反向链接",
      ".recent-notes > h3": "最近更新",
      ".graph > h3": "关系图谱"
    },
    en: {
      ".search-button p": "Search",
      ".explorer .title-button h2": "Explorer",
      ".toc-header h3": "Contents",
      ".backlinks h3": "Backlinks",
      ".recent-notes > h3": "Recent updates",
      ".graph > h3": "Graph view"
    }
  }
  const applyLanguage = (language) => {
    const dictionary = translations[language]
    for (const [selector, text] of Object.entries(dictionary)) {
      document.querySelectorAll(selector).forEach((element) => { element.textContent = text })
    }
    document.documentElement.lang = language === "en" ? "en" : "zh-CN"
    document.documentElement.dataset.interfaceLanguage = language
    const button = document.getElementById("language-toggle")
    if (button) {
      button.textContent = language === "en" ? "中文" : "EN"
      button.setAttribute("aria-label", language === "en" ? "Switch to Chinese" : "Switch to English")
    }
  }
  const setupLanguageToggle = () => {
    const button = document.getElementById("language-toggle")
    if (!button || button.dataset.ready === "true") return
    const saved = localStorage.getItem("knowledge-hub-language") || "zh"
    applyLanguage(saved)
    button.dataset.ready = "true"
    button.addEventListener("click", () => {
      const next = document.documentElement.dataset.interfaceLanguage === "en" ? "zh" : "en"
      localStorage.setItem("knowledge-hub-language", next)
      applyLanguage(next)
    })
  }
  setupLanguageToggle()
  document.addEventListener("nav", setupLanguageToggle)
`

const LanguageToggle: QuartzComponent = () => (
  <button id="language-toggle" class="language-toggle" type="button" aria-label="Switch to English">
    EN
  </button>
)

LanguageToggle.css = style
LanguageToggle.afterDOMLoaded = languageToggleScript

export default (() => LanguageToggle) satisfies QuartzComponentConstructor
