import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {MDXProvider} from '@mdx-js/react';
import Layout from '../layout/layout';
import Container from '../container/container';
import ProjectHero from './project-hero';
import ProjectImage from './project-image';
import ProjectVideo from './project-video';
import s from './project-template.module.css';

const requireProjectImage = require.context('../../assets/images/projects', true, /^.*\.jpg$/);

const customComponents = {
  Image: ProjectImage,
  Video: ProjectVideo
};

const ProjectTemplate = ({children, pageContext}) => {
  const project = pageContext.frontmatter;

  return (
    <Layout projectGalleryTitle="More Projects">
      <Helmet title={project.title}/>
      <ProjectHero
        project={project.title}
        client={project.client}
        largeImage={requireProjectImage(project.largeImage)}
        smallImage={requireProjectImage(project.smallImage)}
      />
      <Container>
        <article className={s.main}>
          <div className={s.main__inner}>
            <h2 className={s.intro}>{project.intro}</h2>
            <div className={s.meta}>
              <span className={s.meta__item}><strong>When /</strong> {project.year}</span>
              <span className={s.meta__item}><strong>What /</strong> {project.work}</span>
            </div>
            <div className={s.body}>
              <MDXProvider components={components => ({...components, ...customComponents})}>
                {children}
              </MDXProvider>
            </div>
          </div>
        </article>
      </Container>
    </Layout>
  );
};

ProjectTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.shape({
    frontmatter: PropTypes.object.isRequired
  }).isRequired
};

export default ProjectTemplate;
