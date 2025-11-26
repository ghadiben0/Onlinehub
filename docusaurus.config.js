// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome to ZUMConnect',
  tagline: 'Your online documentation hub',
  favicon: 'img/zumconnect-logo.jpg',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'ghadiben',
  projectName: 'donlinehelp',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Documentation Hub',
      logo: {
        alt: 'To ZC',
        src: 'img/zumconnect-logo.jpg',
      },
      items: [
  {
    type: 'docSidebar',
    sidebarId: 'tutorialSidebar',
    position: 'left',
    label: 'Admin Guide',
  },
  {
    type: 'docSidebar',
    sidebarId: 'tutorialSidebar',
    position: 'right',
    label: 'Need Help?',
  },
  { to: '/blog', label: 'Customer Guide', position: 'left' },
  {
    href: 'https://stage.zumport.com/home',
    label: 'ZUMConnect',
    position: 'right',
  },

  // 🎨 VALID Custom Theme Button
 {
      type: 'html',
      position: 'right',
      value: `
        <a 
          href="/custom-theme"
          class="navbar__item navbar__link"
          style="display:flex; align-items:center; gap:4px;"
          title="Customize Theme"
        >
          🎨 Customize
        </a>
      `,
    },
  ],
},

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Query Request',
          items: [
            { label: 'Find Support', href: 'mailto:contact@zum-it.com' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'ZUM-IT', href: 'https://www.zum-it.com/' },
            { label: 'Partners to Innovate', href: 'https://p2-innovate.com/' },
            { label: 'Infor', href: 'https://www.infor.com/fr-fr' },
          ],
        },
        {
          title: 'Site News',
          items: [
            { label: 'Website', href: 'https://www.zum-it.com/' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/showcase/zumconnect-infor-portal/' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ghada Inc. Built with Ghadghouda.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
