import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useField, useForm} from 'react-jeff';
import Container from '../container/container';
import Row from '../grid/row';
import Column from '../grid/column';
import TextField from '../text-field/text-field';
import Button from '../button/button';

// eslint-disable-next-line camelcase
const PLACEHOLDER_waitThen = time => new Promise(resolve => setTimeout(resolve, time));

const required = value => {
  if (value.trim() === '') {
    return ['Please fill in this field'];
  }

  return [];
};

const ContactForm = ({text}) => {
  const handleSubmit = async () => {
    // eslint-disable-next-line new-cap
    await PLACEHOLDER_waitThen(1000);
  };

  const name = useField({defaultValue: '', validations: [required]});
  const email = useField({defaultValue: '', validations: [required]});
  const message = useField({defaultValue: '', validations: [required]});
  const form = useForm({fields: [name, email, message], onSubmit: handleSubmit});

  const handleSubmitButtonClick = useCallback(() => {}, []);

  return (
    <Container>
      <Row>
        <Column width={5}>
          <TextField
            name="name"
            label="Name/Company"
            placeholder="William Riker"
            errors={name.errors}
            {...name.props}
          />
          <TextField
            name="email"
            label="Email Address"
            type="email"
            placeholder="number.one@starfleet.co"
            errors={email.errors}
            {...email.props}
          />
          <TextField
            multiline
            name="message"
            label="Project Description"
            placeholder="Describe your project"
            errors={message.errors}
            {...message.props}
          />
          <Button
            disabled={form.validating || form.submitting}
            onClick={handleSubmitButtonClick}
          >
            Submit
          </Button>
        </Column>
        <Column width={5}>
          <p>{text}</p>
        </Column>
      </Row>
    </Container>
  );
};

ContactForm.propTypes = {
  text: PropTypes.string.isRequired
};

export default ContactForm;
