import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://team-chaos.it`,
  },
  graphqlTypegen: true,
  plugins: ['gatsby-plugin-emotion'],
}

export default config
