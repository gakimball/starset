import React from 'react';
import PropTypes from 'prop-types';
import Container from '../container/container';
import Row from '../grid/row';
import Column from '../grid/column';
import TextField from '../text-field/text-field';
import Button from '../button/button';
import useContactForm, {FormStatus} from '../../utils/use-contact-form';
import s from './contact-form.module.css';

const ContactForm = ({text}) => {
  const {
    status,
    fields,
    updateField,
    submitForm
  } = useContactForm();

  return (
    <Container>
      <h2 className={s.title}>Contact</h2>
      <Row>
        <Column width={5}>
          <TextField
            name="name"
            label="Name/Company"
            placeholder="William Riker"
            value={fields.name.value}
            error={fields.name.error}
            onChange={value => updateField('name', value)}
          />
          <TextField
            name="email"
            label="Email Address"
            type="email"
            placeholder="number.one@starfleet.co"
            value={fields.email.value}
            error={fields.email.error}
            onChange={value => updateField('email', value)}
          />
          <TextField
            multiline
            name="message"
            label="Message"
            placeholder="Describe your project"
            value={fields.message.value}
            error={fields.message.error}
            onChange={value => updateField('message', value)}
          />
          <Button
            disabled={status === FormStatus.Sending}
            onClick={submitForm}
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
