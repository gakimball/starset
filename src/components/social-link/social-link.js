import React from 'react';
import PropTypes from 'prop-types';
import s from './social-link.module.css';

const SocialLink = ({children, icon: Icon, link}) => (
  <a className={s.container} href={link}>
    <div className={s.icon}>
      <Icon/>
    </div>
    <span className={s.text}>{children}</span>
  </a>
);

SocialLink.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.func,
  link: PropTypes.string.isRequired
};

SocialLink.defaultProps = {
  children: '',
  icon: () => null
};

export default SocialLink;
