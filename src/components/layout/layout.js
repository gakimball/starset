/* eslint-disable import/no-unassigned-import */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ProjectGallery from '../project-gallery/project-gallery';
import ContactForm from '../contact-form/contact-form';
import Footer from '../footer/footer';
import 'modern-normalize/modern-normalize.css';
import './layout.css';

const Layout = ({children, projectGalleryTitle}) => (
  <>
    <Helmet
      titleTemplate="Starset Sound / %s"
      defaultTitle="Starset Sound"
    >
      <link rel="icon" sizes="16x16" href={require('../../assets/images/favicon-16.png')}/>
      <link rel="icon" sizes="32x32" href={require('../../assets/images/favicon-32.png')}/>
      <link rel="icon" sizes="64x64" href={require('../../assets/images/favicon-64.png')}/>

      <meta property="og:url" content="https://starsetsound.com"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content={require('../../assets/images/share.png')}/>
      <meta property="og:description" content="We make beautiful sounds for commercial and interactive projects."/>
      <meta property="og:site_name" content="Starser Sound"/>
      <meta property="og:locale" content="en_US"/>

      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:url" content="https://starsetsound.com"/>
      <meta name="twitter:title" content="Starset Sound"/>
      <meta name="twitter:description" content="We make beautiful sounds for commercial and interactive projects."/>
      <meta name="twitter:image" content={require('../../assets/images/share.png')}/>

      <meta itemProp="name" content="Starset Sound"/>
      <meta itemProp="description" content="We make beautiful sounds for commercial and interactive projects."/>
      <meta itemProp="image" content="https://starsetsound.com"/>
    </Helmet>
    {children}
    <ProjectGallery
      title={projectGalleryTitle || 'Selected Projects'}
    />
    <ContactForm
      text="Starset Sound was founded by Andrew Siner and is based in Los Angeles. We would love to hear about your project. Use this form or send us an email and we will get back to you as soon as possible!"
      email="hello@starsetsound.com"
      phone="317-374-0409"
      instagram="starsetsound"
    />
    <Footer/>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  projectGalleryTitle: PropTypes.string
};

Layout.defaultProps = {
  projectGalleryTitle: null
};

export default Layout;
