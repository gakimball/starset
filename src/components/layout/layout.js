import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const Layout = ({children}) => (
  <>
    <Helmet
      titleTemplate="Starset Sound / %s"
      defaultTitle="Starset Sound"
    />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
