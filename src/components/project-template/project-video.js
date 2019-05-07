import React from 'react';
import PropTypes from 'prop-types';

const ProjectVideo = ({caption, id, length, thumbnail, title}) => (
  <div style={{fontSize: 'var(--type-size-1)'}}>
    <img src={thumbnail} alt=""/>
    <p>Vimeo ID {id}</p>
    <p><strong>{title}</strong> ({length})</p>
    <p>{caption}</p>
  </div>
);

ProjectVideo.propTypes = {
  caption: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default ProjectVideo;
