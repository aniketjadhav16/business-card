import React, { useState } from 'react';
import "./ProfessionalLinksPage.css"
import { useNavigate } from 'react-router-dom';

const ProfessionalLinksPage = () => {
  // State to manage selected platform and the link entered by the user
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [enteredLink, setEnteredLink] = useState('');

  const navigate = useNavigate('');
  const onClickNext = (e) => {
    e.preventDefault();
    localStorage.setItem('userLinks', enteredLink)
    navigate('/OccupationPage');
  }

  // List of platforms for the dropdown
  const platforms = [
    'Portfolio Website',
    'LinkedIn',
    'GitHub',
    'Twitter',
    'Personal Website',
    'Others' // "Others" option to allow custom entry
  ];

  // Handle dropdown change
  const handlePlatformChange = (e) => {
    setSelectedPlatform(e.target.value);
    setEnteredLink(''); // Reset entered link when platform changes
  };

  // Handle link input change
  const handleLinkChange = (e) => {
    setEnteredLink(e.target.value);
  };

  // Handle form submission
  const handleNext = () => {
    const linkToSubmit = {
      platform: selectedPlatform,
      link: enteredLink
    };
    console.log('Submitted Link:', linkToSubmit);
    // Handle submission logic here
  };

  return (
    <div className="professional-links-container">
      <h1>Professional Links</h1>
      <p>Include links to your portfolio, personal website, or any other relevant online presence.</p>

      <div className="dropdown-container">
        <label htmlFor="platforms">Choose a platform:</label>
        <select
          id="platforms"
          value={selectedPlatform}
          onChange={handlePlatformChange}
          className="dropdown"
        >
          <option value="" disabled>Select a platform</option>
          {platforms.map((platform, index) => (
            <option key={index} value={platform}>
              {platform}
            </option>
          ))}
        </select>
      </div>

      {/* Conditionally render input field for entering the link */}
      {selectedPlatform && (
        <div className="link-input-container">
          <label htmlFor="link">Enter your {selectedPlatform} link:</label>
          <input
            id="link"
            type="text"
            value={enteredLink}
            onChange={handleLinkChange}
            placeholder={`Enter your ${selectedPlatform} link`}
            className="link-input"
          />
        </div>
      )}

      <button onClick={onClickNext}>Next</button>
    </div>
  );
};

export default ProfessionalLinksPage;
