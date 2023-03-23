import type { GatsbyConfig } from 'gatsby'
import path from 'path'

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://team-chaos.it`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'de',
        path: path.join(__dirname, '/src/data/projects/de'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'en',
        path: path.join(__dirname, '/src/data/projects/en'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, '/src/locales'),
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `de`],
        defaultLanguage: `de`,
        redirect: false,
        i18nextOptions: {
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-pdf',
      options: {
        allPages: false,
        useRegexPaths: false,
        paths: ['/', '/en/'],
        outputPath: '/public/pdf',
        pdfOptions: {
          printBackground: true,
          scale: 0.75,
          landscape: false,
          margin: {
            top: 56, // 3.5rem
            bottom: 40, // 2.5rem
          },
        },
      },
    },
  ],
}

export default config
