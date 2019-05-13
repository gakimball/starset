import {useState, useEffect, useCallback} from 'react';

/**
 * React Hook to track the width and height of the window.
 * @returns {Object} Window `width` and `height`.
 */
export default () => {
  const [windowSize, setWindowSize] = useState({width: 0, height: 0});

  const handleWindowResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [handleWindowResize]);

  useEffect(handleWindowResize, []);

  return windowSize;
};
