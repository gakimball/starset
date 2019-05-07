import React from 'react';
import PropTypes from 'prop-types';
import ArrowSvg from '../../assets/images/arrow.svg';
import s from './button.module.css';

const icons = {
  'arrow-down': ArrowSvg
};
const empty = () => null;

const Button = ({children, icon, onClick}) => {
  const Icon = icons[icon] || empty;

  return (
    <button
      className={s.button}
      type="button"
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
  icon: PropTypes.oneOf(['arrow-down']),
  onClick: PropTypes.func
};

Button.defaultProps = {
  children: '',
  icon: null,
  onClick: () => {}
};

export default Button;
