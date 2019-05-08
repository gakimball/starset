/* eslint-disable import/no-unassigned-import */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Container from '../container/container';
import ProjectGallery from '../project-gallery/project-gallery';
import ContactForm from '../contact-form/contact-form';
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
    <ContactForm
      text="Starset Sound was founded by Andrew Siner and is based in Los Angeles. We would love to hear about your project. Use this form or send us an email and we will get back to you as soon as possible!"
    />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
