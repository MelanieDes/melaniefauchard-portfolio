import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => { 
      e.preventDefault(); 
      emailjs.sendForm( 
          "service_zessxeu", 
          "template_5z425aa", 
          form.current, 
          "R_SxnM0xmY6APlfch" 
      )
      .then(
          (result) => { 
          alert('votre message a bien été envoyé !'); 
          form.current.reset();
          console.log(result.text); 
      }, 

          (error) => { 
              console.log(error.text); 
          } 
      ); 
  };

  return (
    <div className="form-container">
      <h2>Contactez-nous</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Nom</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Message</label>
        <textarea name="message" id="mess" />
        <input type="submit" value="Envoyer" className="hover button" />
      </form>
      <div className="formMessage"></div>
    </div>
  );
};

export default ContactForm;
