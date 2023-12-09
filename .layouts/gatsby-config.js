const path = require("path");
const pathPrefix = "/";
const siteMetadata = {
  title: "Obsidian Template for Gatsby Theme Primer Wiki",
  shortName: "Wiki",
  description:
    "Another Obsidian template that use gatsby-theme-primer-wiki, Welcome to your new Obsidian Knowledge Base!",
  twitterName: "theowenyoung",
  imageUrl: "/graph-visualisation.jpg",
  siteUrl: "https://buildtest.surgo.info",
};
module.exports = {
  siteMetadata,
  pathPrefix,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
       // sidebarComponents: ["latest", "tag"],
        name: "content",
        path: `${__dirname}/..`,
        ignore: [`**/\.*/**/*`],
      },
    },
    {
      resolve: "gatsby-theme-primer-wiki",
      options: {
        icon: "./static/logo.png",
		sidebarComponents: ["latest", "category", "tag"],		
		defaultIndexLatestPostCount: 3, // default is 25
        nav: [
          {
            title: "Github",
            url: "https://github.com/surgocode/buildnow/",
          },
          {
            title: "Twitter",
            url: "https://twitter.com/theowenyoung",
          },
        ],
        editUrl:
          "https://github.com/surgocode/buildnow/tree/main/",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: pathPrefix,
        background_color: `#f7f0eb`,
        display: `standalone`,
        icon: path.resolve(__dirname, "./static/logo.png"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [],
      },
    },
  ],
};
