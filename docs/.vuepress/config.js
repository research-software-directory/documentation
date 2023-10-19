// SPDX-FileCopyrightText: 2022 Jesús García Gonzalez (Netherlands eScience Center) <j.g.gonzalez@esciencecenter.nl>
// SPDX-FileCopyrightText: 2022 Netherlands eScience Center
//
// SPDX-License-Identifier: Apache-2.0

module.exports = {
  // site config
  lang: 'en-US',
  title: 'RSD Documentation',
  description: 'RSD As a Service documentation',
  base: '/documentation/',
  port: '3030',

  head: [['link', { rel: 'icon', href: '/documentation/favicon.ico' }]],

  themeConfig: {
    logo: '/images/circle.webp',
    // logoDark: '/images/heroDark.webp',
    repo: 'research-software-directory/documentation',
    docsDir: 'docs',
    docsBranch: 'main',
    displayAllHeaders: false, // Default: false

    navbar: [
      {
        text: 'Documentation',
        link: 'introduction'
      },
      {
        text: 'RSD Site',
        link: 'https://research-software-directory.org'
      },
    ],
    sidebarDepth: 2,

    sidebar: [
      'introduction',
      'navigation',
      'online-demo',
      'getting-access',
      'register-organisation',
      'adding-software',
      'adding-projects',
      'faq',
    ],
  },

  plugins: [
    // '@vuepress/plugin-back-to-top'
    '@vuepress/plugin-external-link-icon',
    '@vuepress/plugin-nprogress',
    '@vuepress/plugin-prismjs',
     [ '@vuepress/plugin-palette', { preset: 'sass' } ],
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
        },
      },
    ],
  ],


}
