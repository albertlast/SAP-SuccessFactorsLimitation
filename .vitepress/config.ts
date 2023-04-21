import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SAP-SuccessFactors Limitation",
  description: "A collection of Limitation of SuccessFactors",
  lang: "en",
  base: "/SAP-SuccessFactorsLimitation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "General", link: "/general" },
    ],

    sidebar: [
      {
        text: "Topics",
        items: [
          { text: "General", link: "/general" },
          { text: "Learning Management System", link: "/lms" },
          { text: "Role-Based Permissions", link: "/rbp" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/albertlast/SAP-SuccessFactorsLimitation",
      },
    ],
  },
});
