import React, { useState } from "react";
import "./NamePage.css";
import { useNavigate } from "react-router-dom";

const NamePage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();
  const onClickNext = (e) => {
    e.preventDefault();
    localStorage.setItem("userFirstName", firstName);
    localStorage.setItem("userLastName", lastName);
    navigate("/ProfilePicturePage");
  };
  return (
    <div className="name-page-container">
      <h1 className="name-heading">Name details</h1>

      <div className="name-input-container">
        <label className="name-label">First name:</label>
        <input
          className="name-input"
          placeholder="Enter first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="name-input-container">
        <label className="name-label">Last name:</label>
        <input
          className="name-input"
          placeholder="Enter last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <button className="name-next-button" onClick={onClickNext}>
        Next
      </button>
    </div>
  );
};

export default NamePage;
