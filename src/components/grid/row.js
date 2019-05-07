import React from 'react';
import PropTypes from 'prop-types';
import s from './row.module.css';

const Row = ({align, children}) => (
  <div
    className={s.row}
    style={{
      '--align': align
    }}
  >
    {children}
  </div>
);

Row.propTypes = {
  align: PropTypes.oneOf(['center', 'stretch']),
  children: PropTypes.node.isRequired
};

Row.defaultProps = {
  align: 'stretch'
};

export default Row;
