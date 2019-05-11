import React from 'react';
import PropTypes from 'prop-types';
import s from './project-block.module.css';

const ProjectBlock = ({caption, content, kind}) => (
  <div className={s.container}>
    <div className={s.content}>
      {content}
      <div className={s.kind} aria-hidden="true">
        {kind}&nbsp;/
      </div>
    </div>
    <div className={s.caption}>
      {caption}
    </div>
  </div>
);

ProjectBlock.propTypes = {
  caption: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  kind: PropTypes.string.isRequired
};

export default ProjectBlock;
