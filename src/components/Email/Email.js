import React, { useState } from 'react';
import emailjs from 'react';

const Email = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  

  const handleSubmit = (e) => {
    console.log("formadata.....",formData);
    e.preventDefault();

    emailjs.sendForm(
      'service_5fkzb1b', // Replace with your EmailJS service ID
      'template_5bldvmp', // Replace with your EmailJS template ID
      e.target,
      'lZ2OTpKbbkpC3lr98-avE' // Replace with your EmailJS user ID
    ).then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message.');
    });
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input 
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input 
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea 
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default Email;
