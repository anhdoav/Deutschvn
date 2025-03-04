import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Deutsch.vn',
  tagline: 'Cộng đồng tiếng Đức dành cho bạn',
  favicon: 'img/avt.png',

  // Set the production url of your site here
  url: 'https://deutsch.vn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KhoaVo', // Usually your GitHub org/user name.
  projectName: 'Deutsch.vn', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'de'],
    localeConfigs: {
      vi: {
        label: 'Tiếng Việt',
        direction: 'ltr',
      },
      de: {
        label: 'Deutsch',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/avt.jpeg',
    navbar: {
      title: 'Deutsch.vn',
      logo: {
        alt: 'Deutsch.vn',
        src: 'img/blank.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialA1Sidebar',
          position: 'left',
          label: 'A1 Niveau',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialA2Sidebar',
          position: 'left',
          label: 'A2 Niveau',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialB1Sidebar',
          position: 'left',
          label: 'B1 Niveau',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialDuHocSidebar',
          position: 'left',
          label: 'Du Học',
        },
        {
          type: 'dropdown',
          label: 'Giới thiệu',
          position: 'right',
          items: [
            {
              label: 'Dự án',
              to: '/uberdeutsch',
            },
            {
              label: 'Đội nhóm',
              to: '/founder',
            },
          ],
        },        
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Deutsch.vn',
          items: [            
          ],
        },
        {
          title: 'Cộng đồng',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/deutschvn/',
            },
          ],
        },
        {
          title: 'Thông tin',
          items: [
            {
              label: 'Dự án',
              to: '/uberdeutsch',
            },
            {
              label: 'Đội nhóm',
              href: '/founder',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Deutsch.vn.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
