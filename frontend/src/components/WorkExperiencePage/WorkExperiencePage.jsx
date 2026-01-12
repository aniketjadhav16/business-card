import React from "react";

const WorkExperiencePage = () => {
  return (
    <div className="name-page-container page-center-container">
      <h1 className="name-heading">Education/Work Experience</h1>
      <p>Summarize your educational background and professional experience.</p>
      <div className="name-input-container">
        <label className="name-label">Education details</label>
        <input className="name-input" placeholder="Enter education details" />
      </div>
      <button className="name-next-button">Next</button>
    </div>
  );
};

export default WorkExperiencePage;
