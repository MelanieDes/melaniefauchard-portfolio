import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => { 
      e.preventDefault(); 

    const formMess = document.querySelector('.formMessage')

      emailjs.sendForm( 
          "service_zessxeu", 
          "template_5z425aa", 
          form.current,
          "R_SxnM0xmY6APlfch" 
          // process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
          (result) => { 
            console.log(result.text);  
            form.current.reset();
            formMess.innerHTML = "<p class='succes'>Message envoyé !</p>";
          
            setTimeout(() => {
              formMess.innerHTML = "";
            }, 2500);
      }, 

          (error) => { 
              console.log(error.text); 
              formMess.innerHTML = "<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";

              setTimeout(() => {
                formMess.innerHTML = "";
              }, 2500);
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
