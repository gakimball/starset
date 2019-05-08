/* eslint-disable react/button-has-type */

import React from 'react';
import PropTypes from 'prop-types';
import ArrowSvg from '../../assets/images/arrow.svg';
import s from './button.module.css';

const icons = {
  'arrow-down': ArrowSvg
};
const empty = () => null;

const Button = ({children, disabled, icon, onClick, type}) => {
  const Icon = icons[icon] || empty;

  return (
    <button
      className={s.button}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      <Icon className={s.icon}/>
      <span className={s.text}>
        {children}
      </span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOf(['arrow-down']),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit'])
};

Button.defaultProps = {
  children: '',
  disabled: false,
  icon: null,
  onClick: () => {},
  type: 'button'
};

export default Button;
