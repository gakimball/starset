import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {MDXProvider} from '@mdx-js/react';
import Layout from '../layout/layout';
import Container from '../container/container';
import Row from '../grid/row';
import Column from '../grid/column';
import ProjectHero from './project-hero';
import ProjectImage from './project-image';
import ProjectVideo from './project-video';
import s from './project-template.module.css';

const requireProjectFile = require.context('../../assets/images/projects', true, /^.*\.jpg$/);

const customComponents = {
  Image: ProjectImage,
  Video: ProjectVideo
};

const ProjectTemplate = ({children, pageContext}) => {
  const project = pageContext.frontmatter;

  return (
    <Layout>
      <Helmet title={project.title}/>
      <ProjectHero
        project={project.title}
        client={project.client}
        largeImage={requireProjectFile(project.largeImage)}
        smallImage={requireProjectFile(project.smallImage)}
      />
      <Container>
        <div className={s.main}>
          <Row>
            <Column width={8}>
              <h2 className={s.intro}>{project.intro}</h2>
              <div className={s.meta}>
                <span className={s.meta__item}><strong>When:</strong> {project.year}</span>
                <span className={s.meta__item}><strong>What:</strong> {project.work}</span>
              </div>
              <div className={s.body}>
                <MDXProvider components={components => ({...components, ...customComponents})}>
                  {children}
                </MDXProvider>
              </div>
            </Column>
          </Row>
        </div>
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
