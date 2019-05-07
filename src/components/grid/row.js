import React from 'react';
import PropTypes from 'prop-types';
import s from './row.module.css';

const Row = ({children}) => (
  <div className={s.row}>
    {children}
  </div>
);

Row.propTypes = {
  children: PropTypes.node.isRequired
};

export default Row;
