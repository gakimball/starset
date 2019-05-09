import {useEffect} from 'react';
import PropTypes from 'prop-types';

const WindowEvent = ({event, handler}) => {
  useEffect(() => {
    if (!event) {
      return;
    }

    window.addEventListener(event, handler);

    return () => window.removeEventListener(event, handler);
  }, [event, handler]);

  return null;
};

WindowEvent.propTypes = {
  event: PropTypes.string,
  handler: PropTypes.func
};

WindowEvent.defaultProps = {
  event: null,
  handler: () => {}
};

export default WindowEvent;
