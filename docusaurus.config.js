import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Node.js Docs (Korean)',
  favicon: 'img/logo-nodejs.svg',
  url: 'https://ndocko.pages.dev',
  baseUrl: '/',
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/rivercory/node-docs-ko/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/logo-nodejs.svg',
      navbar: {
        title: 'Node.js Docs (Korean)',
        logo: {
          alt: 'Node.js logo',
          src: 'img/logo-nodejs.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '문서',
          },
          {
            href: 'https://github.com/rivercory/node-docs-ko',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '커뮤니티',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
            ],
          },
          {
            title: '링크',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/rivercory/node-docs-ko',
              },
            ],
          },
        ]
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
