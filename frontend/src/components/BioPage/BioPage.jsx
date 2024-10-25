import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BioPage.css';

const BioPage = () => {
  const [bio, setBio] = useState('');
  const navigate = useNavigate();
  const onClickNext = (e) => {
    e.preventDefault();
    localStorage.setItem('userBio', bio);
    navigate('/ContactInformationPage');
  };

  return (
    <div className="bio-page-container">
      <h1 className="bio-heading">Bio</h1>
      <p className="bio-description">A brief description of who you are and what you do. This should be concise and attention-grabbing.</p>
      <textarea 
        className="bio-textarea" 
        placeholder="Enter your bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      ></textarea>
      <button className="bio-next-button" onClick={onClickNext}>Next</button>
    </div>
  );
};

export default BioPage;
