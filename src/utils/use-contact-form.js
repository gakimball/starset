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
    const nextFieldState = mapValues(fields, field => ({
      value: field.value,
      error: field.value.trim() === '' ? 'Please fill in this field.' : null
    }));
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
