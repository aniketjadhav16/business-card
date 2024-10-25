import React, { useState } from 'react';
import "./SkillsPage.css"
import { useNavigate } from 'react-router-dom';

const SkillsPage = () => {
  // State to manage selected skill and custom skill
  const [selectedSkill, setSelectedSkill] = useState('');
  const [customSkill, setCustomSkill] = useState('');

  // List of skills for the dropdown
  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'Java',
    'Python',
    'HTML/CSS',
    'SQL',
    'Docker',
    'AWS',
    'Git',
    'Others' // The option for a custom skill
  ];

  // Handles skill selection
  const handleSkillChange = (e) => {
    setSelectedSkill(e.target.value);

    // Reset custom skill if something other than 'Others' is selected
    if (e.target.value !== 'Others') {
      setCustomSkill('');
    }
  };

  const handleCustomSkillChange = (e) => {
    setCustomSkill(e.target.value);
  };

  const navigate = useNavigate();
  const onClickNext =() => {
    navigate('/ProfessionalLinksPage')
  }

  return (
    <div className="skills-page-container">
      <h1>Skills</h1>
      <p>Highlight key skills or areas of expertise.</p>

      <div className="dropdown-container">
        <label htmlFor="skills">Choose a skill:</label>
        <select
          id="skills"
          value={selectedSkill}
          onChange={handleSkillChange}
          className="dropdown"
        >
          <option value="" disabled>Select a skill</option>
          {skills.map((skill, index) => (
            <option key={index} value={skill}>
              {skill}
            </option>
          ))}
        </select>
      </div>

      {/* Conditionally render input field if "Others" is selected */}
      {selectedSkill === 'Others' && (
        <div className="custom-skill-container">
          <label htmlFor="customSkill">Enter your custom skill:</label>
          <input
            id="customSkill"
            type="text"
            value={customSkill}
            onChange={handleCustomSkillChange}
            placeholder="Type your skill"
            className="custom-skill-input"
          />
        </div>
      )}

      <button className='skills-next-button' onClick={onClickNext}>Next</button>
    </div>
  );
};

export default SkillsPage;
