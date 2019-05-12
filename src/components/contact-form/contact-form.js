import React from 'react';
import PropTypes from 'prop-types';
import Container from '../container/container';
import Row from '../grid/row';
import Column from '../grid/column';
import TextField from '../text-field/text-field';
import Button from '../button/button';
import SocialLink from '../social-link/social-link';
import useContactForm, {FormStatus} from '../../utils/use-contact-form';
import MailIcon from '../../assets/images/mail.svg';
import PhoneIcon from '../../assets/images/phone.svg';
import InstagramIcon from '../../assets/images/instagram.svg';
import s from './contact-form.module.css';

const ContactForm = ({email, instagram, phone, text}) => {
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
        <Column
          rules={{
            medium: 6,
            large: {
              width: 5,
              margin: 1
            }
          }}
        >
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
            icon="arrow-right"
            disabled={status === FormStatus.Sending}
            onClick={submitForm}
          >
            Submit
          </Button>
        </Column>
        <Column
          rules={{
            medium: 6,
            large: 5
          }}
        >
          <p className={s.text}>
            {text}
          </p>
          <div className={s.socialLink}>
            <SocialLink icon={MailIcon} link={`mailto:${email}`}>
              {email}
            </SocialLink>
          </div>
          <div className={s.socialLink}>
            <SocialLink icon={PhoneIcon} link={`tel:${phone}`}>
              {phone}
            </SocialLink>
          </div>
          <div className={s.socialLink}>
            <SocialLink icon={InstagramIcon} link={`https://instagram.com/${instagram}`}>
              {instagram}
            </SocialLink>
          </div>
        </Column>
      </Row>
    </Container>
  );
};

ContactForm.propTypes = {
  email: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default ContactForm;
