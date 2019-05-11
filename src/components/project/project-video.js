import React from 'react';
import PropTypes from 'prop-types';
import ProjectBlock from './project-block';
import s from './project-video.module.css';

const ProjectVideo = ({caption, id, length, title}) => (
  <ProjectBlock
    kind="Video"
    content={(
      <div className={s.video}>
        <iframe
          allowFullScreen
          className={s.iframe}
          src={`https://player.vimeo.com/video/${id}?color=00CECB&title=0&byline=0&portrait=0`}
          frameBorder="0"
          allow="autoplay; fullscreen"
        />
      </div>
    )}
    caption={(
      <>
        <p><strong>{title}</strong> ({length})</p>
        <p>{caption}</p>
      </>
    )}
  />
);

ProjectVideo.propTypes = {
  caption: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default ProjectVideo;
