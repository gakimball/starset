import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout/layout';

const ProjectLayout = ({children, pageContext}) => (
  <Layout>
    <h1>{pageContext.frontmatter.title}</h1>
    <p>{pageContext.frontmatter.client}</p>
    <p><strong>When:</strong> {pageContext.frontmatter.year}</p>
    <p><strong>What:</strong> {pageContext.frontmatter.work}</p>
    {children}
  </Layout>
);

ProjectLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.shape({
    frontmatter: PropTypes.object.isRequired
  }).isRequired
};

export default ProjectLayout;
