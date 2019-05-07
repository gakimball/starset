/* eslint-disable import/no-unassigned-import */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Container from '../container/container';
import ProjectGallery from '../project-gallery/project-gallery';
import 'modern-normalize/modern-normalize.css';
import './layout.css';

const Layout = ({children}) => (
  <>
    <Helmet
      titleTemplate="Starset Sound / %s"
      defaultTitle="Starset Sound"
    />
    {children}
    <Container>
      <ProjectGallery/>
    </Container>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
