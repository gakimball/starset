import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import s from './text-field.module.css';

const TextField = ({disabled, error, label, multiline, name, onChange, placeholder, required, type, value}) => {
  const handleChange = useCallback(event => onChange(event.target.value), [onChange]);
  const errorBlockId = `${name}-errors`;
  const hasError = error !== null;
  const InputElement = multiline ? 'textarea' : 'input';

  return (
    <div className={cls(s.container, {[s.hasError]: hasError, [s.multiline]: multiline})}>
      <label
        className={s.label}
        htmlFor={name}
      >
        {label}
      </label>
      <InputElement
        className={s.input}
        type={type}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        required={required}
        aria-required={String(required)}
        aria-describedby={hasError ? errorBlockId : undefined}
        aria-invalid={String(hasError)}
        onChange={handleChange}
      />
      {hasError && (
        <p key={error} id={errorBlockId} className={s.error}>
          {error}
        </p>
      )}
    </div>
  );
};

TextField.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string.isRequired
};

TextField.defaultProps = {
  disabled: false,
  error: null,
  multiline: false,
  onChange: () => {},
  placeholder: undefined,
  required: false,
  type: 'text'
};

export default TextField;
