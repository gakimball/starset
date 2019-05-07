import React from 'react';
import PropTypes from 'prop-types';
import s from './column.module.css';

const Column = ({children, width}) => (
  <div
    className={s.column}
    style={{
      '--width': width
    }}
  >
    {children}
  </div>
);

Column.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number
};

Column.defaultProps = {
  width: 0
};

export default Column;
