module.exports = {
  pathPrefix: '/starset',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/project-layout/project-layout')
        }
      }
    }
  ]
};
