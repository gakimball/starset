import React from 'react';
import PropTypes from 'prop-types';
import ProjectBlock from './project-block';
import s from './project-image.module.css';

const ProjectImage = ({alt, caption, src}) => (
  <ProjectBlock
    kind="Image"
    content={<img className={s.image} src={src} alt={alt}/>}
    caption={<p>{caption}</p>}
  />
);

ProjectImage.propTypes = {
  alt: PropTypes.string,
  caption: PropTypes.string,
  src: PropTypes.string.isRequired
};

ProjectImage.defaultProps = {
  alt: '',
  caption: null
};

export default ProjectImage;
