import React from 'react';
import './form.css'


const Form: React.FC = () => {
  return (
    <div className="contact-form">
      <h2 className="contact-title">CONTACT US</h2>
      <p className="contact-subtitle">Are you looking for talented freelancers to elevate your digital products?</p>
      <form>
        <input type="text" placeholder="Full name*" className="input-field" />
        <input type="email" placeholder="Email*" className="input-field" />
        <textarea placeholder="Your message" className="textarea-field"></textarea>
        <button type="submit" className="submit-button">SUBMIT</button>
      </form>
    </div>
  );
};

export default Form;
