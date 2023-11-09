import React  from "react";

const ContactForm = () => {
    const handleSubmit = (e) => {
      e.preventDefault();

      const form = e.target;

      const formData = new FormData(form);
      const name = formData.get("username");
      const email = formData.get("email");

      form.reste();

      alert(`Ùsername: ${name} Email: ${email}`)
    }

  return (
    <div className="form-container">
      <h2>contactez-nous</h2>
      <form onSubmit={handleSubmit} className="form-content">
        <label>nom</label>
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
