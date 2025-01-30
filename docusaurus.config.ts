import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { Analytics } from "@vercel/analytics/react"

const config: Config = {
  title: 'Forum: Le romanum',
  tagline: 'Bienvenue!',
  favicon: 'img/favicon.ico',

  url: 'https://leforumsite.vercel.app/',
  baseUrl: '/',

  organizationName: 'Dada972dev',
  projectName: 'leforumsite',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/Dada972dev/leforumsite',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    announcementBar: {
      id: "prerelease",
      content: 'The Wiki is currently in development, some pages may be incomplete or missing.',
      backgroundColor: "#fd5440",
      textColor: "#ffffff",
      isCloseable: true,
    },
    navbar: {
      title: 'Le romanum',
      logo: {
        alt: '',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'La visite',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;