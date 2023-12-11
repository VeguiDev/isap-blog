// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ISAP Blog",
  tagline: "El blog del Instituto San Antonio de Padua",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://ipadua.edu.ar",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/blog",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "VeguiDev", // Usually your GitHub org/user name.
  projectName: "isap-blog", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: "./sidebars.js",
        // },
        blog: {
          showReadingTime: true,
          routeBasePath: "/",
          blogSidebarTitle: "Todos los posts",
          blogSidebarCount: "ALL",

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Blog",
        logo: {
          alt: "ISAP Isologo",
          src: "img/isap-logo.png",
        },
        items: [
          {
            to: "https://ipadua.edu.ar",
            label: "Institucional",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Comunidad",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/elpaduaisap",
              },
              {
                label: "Instagram",
                href: "https://instagram.com/elpaduaisap",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/elpaduaisap",
              },
            ],
          },
          {
            title: "Más",
            items: [
              {
                label: "Institucional",
                href: "https://ipadua.edu.ar",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
