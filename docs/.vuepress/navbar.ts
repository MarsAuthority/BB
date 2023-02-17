import { navbar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default navbar([
  { text: "博客", icon: "blog", link: "/blog" },
  {
    text: "网络安全",
    icon: "star",
    prefix: "/",
    children: [
      "newsletter",
      "code/AutoHotkey",
      "code/Electron",
      {
        text: "页面开发",
        icon: "vue",
        prefix: "",
        children: ["web/VuePress", "web/docsify", "deploy/VPS"],
      },
    ],
  },
  {
    text: "应用",
    icon: "app",
    prefix: "/",
    children: [
      "apps/Applist",
      "apps/ChatGPT",
      { text: "直播手册", icon: "quote", link: "apps/livestreaming/1_obs_basic" },
      {
        text: "服务/系统",
        icon: "any",
        prefix: "",
        children: ["services/NAS", "windows/faq"],
      },
    ],
  },
  {
    text: "生活",
    icon: "emmet",
    prefix: "/family/",
    children: ["Diet", "Shoppinglist", "Coupon"],
  },
  { text: "RSS信息流", icon: "rss", link: "https://mars0run.notion.site/5ccdf71345c2440da2ccd385e98dd71d?v=edfc490b781d435ba1e066a4d1b2dd48" },
]);
