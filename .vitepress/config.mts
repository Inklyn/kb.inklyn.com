import { defineConfig } from 'vitepress'
import { defineConfig, type DefaultTheme } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Inklyn",
  description: "Knowledge Base",

  ignoreDeadLinks: true,
  lastUpdated: false,
  cleanUrls: true,
  sitemap: { hostname: 'https://kb.inklyn.com' },

  srcExclude: [ 'README.md'],

  themeConfig: {
    logo: { src: '/inklyn-logo.svg' },
    siteTitle: 'Inklyn’s KB',
    search: { provider: 'local' },

    lastUpdated: {
      text: 'Edited',
      formatOptions: {
        dateStyle: 'medium',
      },
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'inklyn.com', link: 'https://inklyn.com' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/inklyn/kb.inklyn.com' },
    ],

    // https://github.com/jooy2/vitepress-sidebar
    sidebar: generateSidebar({
      // documentRootPath: '/',
      // scanStartPath: null,
      // resolvePath: null,
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      useFolderTitleFromIndexFile: true,
      useFolderLinkFromIndexFile  : true,
      hyphenToSpace: true,
      underscoreToSpace: true,
      capitalizeFirst: true,
      capitalizeEachWords: true,
      collapsed: false,
      collapseDepth: 2,
      sortMenusByName: true,
      // sortMenusByFrontmatterOrder: true,
      // sortMenusOrderByDescending: false,
      // sortMenusOrderNumericallyFromTitle: true,
      // manualSortFileNameByPriority: [ 'folder-1', 'folder-2' ],
      excludePattern: ['README.md', 'node_modules/', 'public/'],
      includeDotFiles: false,
      // includeRootIndexFile: false,
      // includeFolderIndexFile: false,
      includeEmptyFolder: false,
      // rootGroupText: 'Contents',
      // rootGroupLink: 'https://github.com/jooy2',
      // rootGroupCollapsed: false,
      // convertSameNameSubFileToGroupIndexPage: false,
      // folderLinkNotIncludesFileName: false,
      // keepMarkdownSyntaxFromTitle: false,
      debugPrint: false,
    }),

  }
})
