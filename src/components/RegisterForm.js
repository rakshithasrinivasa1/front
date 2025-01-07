import React from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
  return (
    <div className="register-container">
      <div className="form-header">
        <h1 className="register-title">Get unlimited gigs for free</h1>
        <p className="register-subtitle">First Step towards becoming a zLanzer</p>
      </div>
      <form className="register-form">
        <label>
          First Name
          <input type="text" name="firstname" required />
        </label>
        <label>
          Last Name
          <input type="text" name="lastname" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Phone Number
          <input type="tel" name="phone" required />
        </label>
        <p className="data-safety-text">
          Your data is safe with us! We promise not to spam!
        </p>
        <label>
          Your Skill
          <input type="text" name="skill" />
        </label>
        <label>
          Language
          <input type="text" name="language" />
        </label>
        <label>
          Personal Website / LinkedIn
          <input type="url" name="website" />
        </label>
        <label>
          Fiverr / Upwork Account
          <input type="url" name="account" />
        </label>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default RegisterForm;