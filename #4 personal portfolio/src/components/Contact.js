import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p className='pp'>
        <strong>Email:</strong><br />
        <a href="mailto:kaviyavarshini.v@gmail.com">kaviyavarshini.v@gmail.com</a>
      </p>
      <br/>
      <p className='pp'>
        <strong>Address:</strong><br />
        SKCET, Kuniyamuthur,<br />
        Coimbatore - 641008
      </p>
      <br/>
      <div className="social-linkss">
        <h3 className='pp'>Connect with me:</h3>
        <a href="https://www.linkedin.com/in/kaviyavarshini-v-721912226/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/vkaviyavarshini" target="_blank" rel="noopener noreferrer">Git Hub</a>
        <a href="https://x.com/_kaviya_venkat" target="_blank" rel="noopener noreferrer">X</a>
        <a href="https://www.instagram.com/_kaviya_venkat" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <br/>
      <br/>
    </div>
  );
};

export default Contact;
