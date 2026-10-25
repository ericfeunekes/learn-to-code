import { themes } from 'prism-react-renderer';

const baseUrl = process.env.BASE_URL || '/learn-to-code/';
if (!baseUrl.startsWith('/') || !baseUrl.endsWith('/')) {
  throw new Error('BASE_URL must start and end with /');
}

export default {
  title: 'Learn to Code',
  tagline: 'Understand what you build.',
  favicon: 'img/mark.svg',
  url: process.env.SITE_URL || 'https://ericfeunekes.github.io',
  baseUrl,
  staticDirectories: ['static', '.generated'],
  trailingSlash: true,
  onBrokenLinks: 'throw',
  markdown: { format: 'md', hooks: { onBrokenMarkdownLinks: 'throw' } },
  i18n: { defaultLocale: 'en', locales: ['en'] },
  presets: [
    [
      'classic',
      {
        docs: { routeBasePath: '/', sidebarPath: './sidebars.js' },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      },
    ],
  ],
  themeConfig: {
    colorMode: { respectPrefersColorScheme: true },
    navbar: {
      title: 'Learn to Code',
      logo: { alt: '', src: 'img/mark.svg' },
      items: [
        { to: '/learning-path/', label: 'Learning path', position: 'left' },
        { to: '/for-ai/', label: 'For AI', position: 'left' },
        { to: '/search/', label: 'Search', position: 'right' },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Explore',
          items: [
            { label: 'Learning path', to: '/learning-path/' },
            { label: 'Search the site', to: '/search/' },
          ],
        },
        {
          title: 'Read with AI',
          items: [
            { label: 'AI reading guide', to: '/for-ai/' },
            {
              label: 'Markdown index',
              href: 'pathname:///llms.txt',
            },
          ],
        },
      ],
      copyright: 'Learn to Code · Understand what you build.',
    },
    prism: { theme: themes.github, darkTheme: themes.dracula },
  },
};
