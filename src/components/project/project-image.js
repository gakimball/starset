import React from 'react';
import PropTypes from 'prop-types';
import s from './project-image.module.css';

const ProjectImage = ({alt, caption, src}) => (
  <div className={s.container}>
    <figure>
      <img src={src} alt={alt}/>
      {caption && (
        <figcaption className={s.caption}>
          {caption}
        </figcaption>
      )}
    </figure>
  </div>
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
