module.exports = {
  siteMetadata: {
    title: `Wamaitha`,
    description: `Wamaitha's blog on machine learning`,
    keywords: [`machine learning`,`datascientist in kenya`, `datascience `, `machine learning for your business`, `blog`],
    author: `Wamaitha Nyamu`,
    siteUrl: `https://www.wamaithanyamu.com`, //Change to you site address, required for sitemap.xml and robots.txt file
    // among other things
    menuLinks: [
      {
        name: `Blog`,
        link: `/`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Work`,
        link: `/work`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Contact`,
        link: `/contact`,
        type: `internal`, //internal or anchor
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        link: `hello@wamaithanyamu.com`,
        location: `all`, //Options are "all", "header", "footer"
      },
      {
        name: `Github`,
        link: `https://www.github.com/wamaithanyamu`,
        location: `all`, //Options are "all", "header", "footer"
      },
      {
        name: `Twitter`,
        link: `https://www.twitter.com/wamaithanyamu`,
        location: `all`, //Options are "all", "header", "footer"
      },
      {
        name: `Instagram`,
        link: `https://www.instagram.com/wamaithanyamu`,
        location: `all`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-helium`,
      options: {
        // Core theme
        displaySiteLogo: false,
        displaySiteLogoMobile: false,
        useColorMode:false,
        footerContentLocation: "right",
        remarkImagesWidth: 1920,
        // Blog theme
        excerptLength: 200,
        // Helium
        useHero: true,
        useKatex:true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wamaitha`,
        short_name: `wamaitha`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `content/assets/avatar.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `content/posts/`,
},
},

    {
      resolve: `gatsby-plugin-netlify-cms`,

    },

  ],
}
