const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Little Universe',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/yunxi/Self-Learning/littleUniverse/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Little Universe',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/yunxi/Self-Learning/littleUniverse',
          templates:
            '/Users/yunxi/Self-Learning/littleUniverse/node_modules/docz-core/dist/templates',
          docz: '/Users/yunxi/Self-Learning/littleUniverse/.docz',
          cache: '/Users/yunxi/Self-Learning/littleUniverse/.docz/.cache',
          app: '/Users/yunxi/Self-Learning/littleUniverse/.docz/app',
          appPackageJson:
            '/Users/yunxi/Self-Learning/littleUniverse/package.json',
          appTsConfig:
            '/Users/yunxi/Self-Learning/littleUniverse/tsconfig.json',
          gatsbyConfig:
            '/Users/yunxi/Self-Learning/littleUniverse/gatsby-config.js',
          gatsbyBrowser:
            '/Users/yunxi/Self-Learning/littleUniverse/gatsby-browser.js',
          gatsbyNode:
            '/Users/yunxi/Self-Learning/littleUniverse/gatsby-node.js',
          gatsbySSR: '/Users/yunxi/Self-Learning/littleUniverse/gatsby-ssr.js',
          importsJs:
            '/Users/yunxi/Self-Learning/littleUniverse/.docz/app/imports.js',
          rootJs:
            '/Users/yunxi/Self-Learning/littleUniverse/.docz/app/root.jsx',
          indexJs:
            '/Users/yunxi/Self-Learning/littleUniverse/.docz/app/index.jsx',
          indexHtml:
            '/Users/yunxi/Self-Learning/littleUniverse/.docz/app/index.html',
          db: '/Users/yunxi/Self-Learning/littleUniverse/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
