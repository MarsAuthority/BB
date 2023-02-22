import { navbar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default navbar([
  { text: "博客", icon: "blog", link: "/blog" },
  {
    text: "网络安全",
    icon: "note",
    prefix: "/cybersecurity/",
    children: [
      "newsletter",
      "安全工具库",
    ],
  },
  {
    text: "知识管理",
    icon: "book",
    prefix: "/km/",
    
  },
  {
    text: "日常折腾",
    icon: "emmet",
    prefix: "/family/",
  },
  { text: "RSS信息流", icon: "rss", link: "https://mars0run.notion.site/5ccdf71345c2440da2ccd385e98dd71d?v=edfc490b781d435ba1e066a4d1b2dd48" },
  { text: "RedBlue Wiki", icon: "icon-light", link: "http://redblue.wiki/" },
]);
