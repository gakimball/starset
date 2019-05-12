import {useCallback, useState} from 'react';
import mapValues from './map-values';

export const FormStatus = {
  Default: 'Default',
  Sending: 'Sending',
  Sent: 'Sent',
  Failed: 'Failed'
};

const defaultFieldValues = {
  name: {
    value: '',
    error: null
  },
  email: {
    value: '',
    error: null
  },
  message: {
    value: '',
    error: null
  }
};

const runValidations = fields => mapValues(fields, field => {
  if (field.value.trim() === '') {
    return {
      value: field.value,
      error: 'Please fill in this field.'
    };
  }

  return {
    value: field.value,
    error: null
  };
});

export default () => {
  const [fields, setFields] = useState(defaultFieldValues);
  const [status, setStatus] = useState(FormStatus.Default);

  const updateField = useCallback((key, value) => {
    setFields(state => ({
      ...state,
      [key]: {
        ...state[key],
        value
      }
    }));
  }, []);

  const submitForm = useCallback(async () => {
    const nextFieldState = runValidations(fields);
    const hasErrors = Object.values(nextFieldState).some(field => field.error !== null);

    setFields(nextFieldState);

    if (!hasErrors) {
      setStatus(FormStatus.Sending);

      const res = await fetch('https://example.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify()
      });

      if (res.ok) {
        setStatus(FormStatus.Sent);
      } else {
        setStatus(FormStatus.Failed);
      }
    }
  }, [fields]);

  return {
    status,
    fields,
    updateField,
    submitForm
  };
};
