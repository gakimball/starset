import {useCallback, useState} from 'react';

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

const runValidations = fields => {
  const entries = Object.entries(fields).map(([fieldName, field]) => {
    if (field.value.trim() === '') {
      return [fieldName, {
        value: field.value,
        error: 'Please fill in this field.'
      }];
    }

    return [fieldName, field];
  });

  // Object.fromEntries is a real function, strong and also my friend
  // eslint-disable-next-line no-use-extend-native/no-use-extend-native
  return Object.fromEntries(entries);
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
