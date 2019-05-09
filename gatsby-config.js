module.exports = {
  pathPrefix: '/starset',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /src\/assets\/.*\.svg$/
        }
      }
    },
    {
      resolve: 'gatsby-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/project/project-template')
        }
      }
    }
  ]
};
