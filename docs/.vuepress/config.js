// SPDX-FileCopyrightText: 2022 Jesús García Gonzalez (Netherlands eScience Center) <j.g.gonzalez@esciencecenter.nl>
// SPDX-FileCopyrightText: 2022 Netherlands eScience Center
// SPDX-FileCopyrightText: 2023 Christian Meeßen (GFZ) <christian.meessen@gfz-potsdam.de>
// SPDX-FileCopyrightText: 2023 Helmholtz Centre Potsdam - GFZ German Research Centre for Geosciences
//
// SPDX-License-Identifier: Apache-2.0

let conf = {
  // site config
  lang: 'en-US',
  title: 'RSD Documentation',
  description: 'RSD As a Service documentation',
  base: '/documentation/',
  port: '3030',

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
      'register-organization',
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


try {
  conf = require('./custom_config')
  console.log("Loading custom configuration.")
} catch (ex) {
  console.log("No custom configuration found. Using standard configuration.")
}

module.exports = conf
