module.exports = {
  siteName: 'puppyous.com',
  siteDescription: 'A full-featured Shopify starter kit for Gridsome, including an login page',
  siteUrl: 'https://puppyous.com',
  templates: {
 

    ContentfulBlog: [
      {path: '/blog/:slug',
      component: './src/templates/ContentfulBlog.vue'
  }
  ],
  },
  plugins: [
 
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
      }
    },{
      use: "@gridsome/source-contentful",
      options: {
        space: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_TOKEN,
        host: "cdn.contentful.com",
        environment: process.env.CONTENTFUL_ENVIRONMENT,
        typename: "Contentful"
      },
    },

 
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/', '/collections', '/collection/*'],
        width: 1300,
        height: 900
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/account'],
        config: {
          '/product/*': {
            changefreq: 'daily',
            priority: 0.5
          },
          '/collection/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/collections': {
            changefreq: 'monthly',
            priority: 0.7
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.GRIDSOME_ANALYTICS_ID
      }
    },


  ]
}
