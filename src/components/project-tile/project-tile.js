import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import cls from 'classnames';
import s from './project-tile.module.css';

const ProjectTile = ({client, image, path, reverse, title}) => (
  <Link className={cls(s.container, {[s.reverse]: reverse})} to={path}>
    <img className={s.thumbnail} src={image} alt=""/>
    <p className={s.title}>{title}</p>
    <p>{client}</p>
  </Link>
);

ProjectTile.propTypes = {
  client: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  reverse: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default ProjectTile;
