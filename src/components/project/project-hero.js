import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import scaleValue from 'scale-value';
import WindowEvent from '../window-event/window-event';
import Header from '../header/header';
import Container from '../container/container';
import s from './project-hero.module.css';

const maxPixelShift = 20;

const ProjectHero = ({client, largeImage, project, smallImage}) => {
  const [windowSize, setWindowSize] = useState({width: 0, height: 0});
  const [position, setPosition] = useState({x: 0, y: 0});

  const handleWindowResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  const handleMouseMove = useCallback(event => {
    setPosition({
      x: scaleValue(0, windowSize.width, -maxPixelShift, maxPixelShift)(event.nativeEvent.offsetX),
      y: scaleValue(0, windowSize.height, -maxPixelShift, maxPixelShift)(event.nativeEvent.offsetY)
    });
  }, [windowSize.width, windowSize.height]);

  useEffect(handleWindowResize, []);

  return (
    <>
      <WindowEvent
        event="resize"
        handler={handleWindowResize}
      />
      <div
        className={s.hero}
        style={{
          '--background-large': `url('${largeImage}')`,
          '--background-small': `url('${smallImage}')`,
          '--x': `${position.x}px`,
          '--y': `${position.y}px`,
          '--shift': `-${maxPixelShift}px`
        }}
        onMouseMove={handleMouseMove}
      >
        <div className={s.background}/>
        <Header
          noBorder
        />
        <div className={s.container}>
          <Container>
            <div className={s.text}>
              <p className={s.eyebrow}>Project</p>
              <h1 className={s.title}>
                <span className={s.project}>{project}</span>
                <span className={s.client}>{client}</span>
              </h1>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

ProjectHero.propTypes = {
  client: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  smallImage: PropTypes.string.isRequired
};

export default ProjectHero;
