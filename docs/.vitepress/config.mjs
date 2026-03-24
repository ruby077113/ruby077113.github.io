export default {
  title: "Ruby Lin",
  base: "/",
  description:
    "Frontend-strong Full-stack Engineer｜個人履歷、技術筆記與專案整理",
  lang: "zh-Hant",
  cleanUrls: true,
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Ruby Lin",
    nav: [
      { text: "首頁", link: "/" },
      { text: "About", link: "/about" },
      { text: "履歷", link: "/resume" },
      { text: "專案", link: "/projects/go-ticket" },
    ],
    sidebar: [
      {
        text: "Profile",
        items: [
          { text: "首頁", link: "/" },
          { text: "About", link: "/about" },
          { text: "履歷", link: "/resume" },
        ],
      },
      {
        text: "Projects",
        items: [
          { text: "UrMart 電商平台", link: "/projects/urmart" },
          { text: "UrMart 雙平台 App", link: "/projects/urmart-app" },
          { text: "UrMart 營運後台系統", link: "/projects/urmart-admin" },
          { text: "GO-Ticket", link: "/projects/go-ticket" },
        ],
      },
      {
        text: "Notes",
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: "Frontend",
            link: "/notes/frontend",
            collapsible: true,
            collapsed: true,
            items: [{ text: "React", link: "/notes/frontend/react" }],
          },
          { text: "Backend", link: "/notes/backend" },
          { text: "AWS / DevOps", link: "/notes/aws" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/your-github-account" },
    ],
    footer: {
      message: "Built with VitePress",
      copyright: "Copyright © 2026 Ruby Lin",
    },
    search: {
      provider: "local",
    },
    outline: {
      level: [2, 3],
      label: "頁面目錄",
    },
    docFooter: {
      prev: "上一頁",
      next: "下一頁",
    },
    returnToTopLabel: "回到頂部",
    sidebarMenuLabel: "選單",
    darkModeSwitchLabel: "深色模式",
    lightModeSwitchTitle: "切換到淺色模式",
    darkModeSwitchTitle: "切換到深色模式",
  },
};
