import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import s from './text-field.module.css';

const TextField = ({disabled, errors, label, name, onChange, placeholder, required, type, value}) => {
  const handleChange = useCallback(event => onChange(event.target.value), [onChange]);
  const hasErrors = errors.length > 0;
  const errorBlockId = `${name}-errors`;

  return (
    <div className={cls(s.container, {[s.hasErrors]: hasErrors})}>
      <label
        className={s.label}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={s.input}
        type={type}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        required={required}
        aria-describedby={hasErrors ? errorBlockId : undefined}
        onChange={handleChange}
      />
      {hasErrors && (
        <div id={errorBlockId}>
          {errors.map(error => (
            <p key={error} className={s.error}>
              {error}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

TextField.propTypes = {
  disabled: PropTypes.bool,
  errors: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string.isRequired
};

TextField.defaultProps = {
  disabled: false,
  errors: [],
  onChange: () => {},
  placeholder: undefined,
  required: false,
  type: 'text'
};

export default TextField;
