/* eslint-disable camelcase */

import React from 'react';
import PropTypes from 'prop-types';
import {StaticQuery, graphql, Link} from 'gatsby';
import Container from '../container/container';
import Row from '../grid/row';
import Column from '../grid/column';
import s from './project-gallery.module.css';

const requireProjectImage = require.context('../../assets/images/projects', true, /^.*\.jpg$/);

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
              largeImage
            }
          }
        }
      }
    }
  }
`;

const ProjectGallery = ({title}) => (
  <Container>
    <h2 className={s.title}>{title}</h2>

    <Row>
      <StaticQuery query={query}>
        {data => {
          const PLACEHOLDER_theOneProject = data.allSitePage.edges[0].node;
          const PLACEHOLDER_projects = (new Array(5)).fill(PLACEHOLDER_theOneProject);

          const halfwayIndex = Math.ceil(PLACEHOLDER_projects.length / 2);
          const splitProjects = [
            PLACEHOLDER_projects.slice(0, halfwayIndex),
            PLACEHOLDER_projects.slice(halfwayIndex)
          ];

          return splitProjects.map((projects, index) => (
            <Column key={index} width={6}>
              <div className={s[`column${index + 1}`]}>
                {projects.map(project => (
                  <Link key={project.id} to={project.path} className={s.tile}>
                    <img
                      className={s.thumbnail}
                      src={requireProjectImage(project.context.frontmatter.largeImage)}
                      alt=""
                    />
                    <p className={s.projectTitle}>{project.context.frontmatter.title}</p>
                    <p className={s.projectClient}>{project.context.frontmatter.client}</p>
                  </Link>
                ))}
              </div>
            </Column>
          ));
        }}
      </StaticQuery>
    </Row>
  </Container>
);

ProjectGallery.propTypes = {
  title: PropTypes.string.isRequired
};

export default ProjectGallery;
