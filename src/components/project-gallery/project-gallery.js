import React from 'react';
import {StaticQuery, graphql, Link} from 'gatsby';

const query = graphql`
  query ProjectGallery {
    allSitePage(filter: {
      path: {
        regex: "/^\/projects\/.*/"
      }
    }) {
      edges {
        node {
          id
          path
          context {
            frontmatter {
              title
              client
            }
          }
        }
      }
    }
  }
`;

const ProjectGallery = () => (
  <>
    <StaticQuery query={query}>
      {data => data.allSitePage.edges.map(edge => (
        <Link key={edge.node.id} to={edge.node.path}>
          <p>{edge.node.context.frontmatter.title}</p>
          <p>{edge.node.context.frontmatter.client}</p>
        </Link>
      ))}
    </StaticQuery>
  </>
);

export default ProjectGallery;
