import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import cls from 'classnames';
import s from './project-tile.module.css';

const ProjectTile = ({client, image, path, reverse, title}) => (
  <Link className={cls(s.container, {[s.reverse]: reverse})} to={path}>
    <div className={s.thumbnail}>
      <div className={s.prompt} aria-hidden="true">
        <p className={s.prompt__text}>
          View Project
        </p>
      </div>
      <img className={s.image} src={image} alt=""/>
    </div>
    <p className={s.title}>{title}</p>
    <p className={s.client}>{client}</p>
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
