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
  const entries = Object.entries(fields).map(field => {
    if (field.trim() === '') {
      return {
        value: field.value,
        error: 'Please fill in this field'
      };
    }

    return field;
  });

  // Object.fromEntries is a real function, strong and also my friend
  // eslint-disable-next-line no-use-extend-native/no-use-extend-native
  return Object.fromEntries(entries);
};

const

export default () => {
  const [fields, setField] = useState(defaultFieldValues);
  const [status, setStatus] = useState(FormStatus.Default);

  const updateField = useCallback((key, value) => {
    setField(state => ({
      ...state,
      [key]: {
        ...state[key],
        value
      }
    }));
  }, []);

  const validate = useCallback(() => {
    setField(runValidations(fields));
  }, [fields]);

  const submitForm = useCallback(async () => {
    const nextFieldState = validate();
    const hasErrors = Object.entries(nextFieldState).some(field => field.error !== null);

    if (!hasErrors) {
      setStatus(FormStatus.Sending);

      const res = await fetch('https://example.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify()
      });
    }
  }, [validate]);

  return {
    status,
    fields,
    updateField,
    validate,
    submitForm
  };
};
