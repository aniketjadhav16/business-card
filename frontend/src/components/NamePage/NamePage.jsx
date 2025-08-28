import React, { useState } from 'react';
import './NamePage.css';
import { useNavigate } from 'react-router-dom';

const NamePage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const navigate = useNavigate();
  const onClickNext = (e) => {
    e.preventDefault();
    localStorage.setItem('userFirstName', firstName);
    localStorage.setItem('userLastName', lastName);
    navigate('/ProfilePicturePage');
  }
  return (
    <div className="">
      <h1 className="">Name details</h1>

      <div className="">
        <label className="">First name:</label>
        <input 
          className="" 
          placeholder="Enter first name"
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
      </div>

      <div className="">
        <label className="n">Last name:</label>
        <input 
          className="" 
          placeholder="Enter last name" 
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
      </div>

      <button 
        className="name-next-button"
        onClick={onClickNext}
      >Next</button>
    </div>
  );
};

export default NamePage;
