import { sidebar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar([
  "/DailyRoutine",
  "/Fitness",
  // 读书笔记架构更换到 docsify，不能使用相对链接
  { text: "读书笔记", icon: "read", link: "https://mars.run/reading/" },
  // 指定显示页面
  {
    text: "⭐ 网络安全",
    icon: "",
    prefix: "/cybersecurity/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "📰 安全通讯 Newsletter",
    icon: "",
    prefix: "/newsletter/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "📕 知识管理",
    icon: "",
    prefix: "/km/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🚀 代码学习",
    icon: "",
    prefix: "/code/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  /*
  {
    text: "🚀 代码学习",
    icon: "",
    prefix: "/code/",
    link: "",
    collapsible: true,
    children: [
      "README.md",
      {
        text: "Basic",
        icon: "emmet",
        collapsible: true,
        children: ["Markdown.md", "Electron.md", "AutoHotkey.md", "Regex.md"],
      },
      {
        text: "FrondEnd",
        icon: "app",
        collapsible: true,
        children: ["Vue.md", "HTML.md", "JavaScript.md", "Python.md"],
      },
    ],
  },
  */
  {
    text: "🛖 日常折腾",
    icon: "",
    prefix: "/family/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "博客文章",
    icon: "blog",
    prefix: "/_posts/",
    link: "/blog",
    collapsible: true,
    children: "structure",
  },
]);
