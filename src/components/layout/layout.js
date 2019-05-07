import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ProjectGallery from '../project-gallery/project-gallery';

const Layout = ({children}) => (
  <>
    <Helmet
      titleTemplate="Starset Sound / %s"
      defaultTitle="Starset Sound"
    />
    {children}
    <ProjectGallery/>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
