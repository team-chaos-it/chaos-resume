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
        name: 'projects',
        path: path.join(__dirname, '/src/data/projects/'),
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-pdf',
      options: {
        allPages: true,
        outputPath: '/public/pdf',
        pdfOptions: {
          printBackground: true,
          scale: 0.75,
          landscape: false,
          margin: {
            top: 56, //3.5rem
            bottom: 40, //2.5rem
          },
        },
      },
    },
  ],
}

export default config
