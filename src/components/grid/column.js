import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import isObject from 'is-object';
import s from './column.module.css';

const Column = ({children, rules}) => {
  const style = useMemo(() => {
    // eslint-disable-next-line no-use-extend-native/no-use-extend-native
    return Object.fromEntries(
      Object.entries(rules).flatMap(([size, rule]) => {
        const width = `--width-${size}`;
        const margin = `--margin-${size}`;

        if (typeof rule === 'number') {
          return [
            [width, rule],
            [margin, 0]
          ];
        }

        if (isObject(rule)) {
          return [
            [width, rule.width],
            [margin, rule.margin]
          ];
        }

        return [
          [width, 12],
          [margin, 0]
        ];
      })
    );
  }, [rules]);

  return (
    <div
      className={s.column}
      style={style}
    >
      {children}
    </div>
  );
};

Column.propTypes = {
  children: PropTypes.node.isRequired,
  rules: PropTypes.objectOf(
    PropTypes.oneOf(
      PropTypes.number,
      PropTypes.shape({
        width: PropTypes.number.isRequired,
        margin: PropTypes.number.isRequired
      })
    )
  )
};

Column.defaultProps = {
  rules: {}
};

export default Column;
