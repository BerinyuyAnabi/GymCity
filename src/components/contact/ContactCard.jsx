import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import image from './Gye Nyame.jpeg'


const ContactCard = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mi0kdds', 'template_x42qod8', form.current, 'A9fUpzSEQXfjaCkmB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contain">
    <img src={image} alt="" />
    <div className="form">
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
    </div>
  );
};

export default ContactCard