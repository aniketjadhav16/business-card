import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ContactInformationPage.css'

const ContactInformationPage = () => {
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const onClickNext = (e) => {
    e.preventDefault();
    localStorage.setItem('userEmail', email)
    navigate('/PreviewPage')
  }
  return (
    <div className='contact-page-container'>
      <h1 className="contact-heading">Contact Information</h1>
      <p className="contact-description">Provide ways for people to get in touch with you, such as email address and social media profiles (LinkedIn, Twitter, etc.).</p>
      <div className='contact-email-container'>
        <label className='contact-email-label'>Email:</label>
        <input
          type='email'
          placeholder='Enter email'
          className='contact-email-input'
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <button className="contact-next-button" onClick={onClickNext}>Next</button>
    </div>
  )
}

export default ContactInformationPage
