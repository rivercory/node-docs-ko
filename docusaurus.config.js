import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Node.js Docs (Korean)',
  favicon: 'img/logo-nodejs.svg',
  url: 'https://ndocko.netlify.app',
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
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/rivercory/node-docs-ko/tree/master/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
          alt: 'My Site Logo',
          src: 'img/logo-nodejs.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '문서',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/rivercory/node-docs-ko',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
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
