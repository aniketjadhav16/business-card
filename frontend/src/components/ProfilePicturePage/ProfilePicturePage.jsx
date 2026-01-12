import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfilePicturePage.css";
import defaultProfile from "../../assets/default-profile.jpg";

const ProfilePicturePage = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  useEffect(() => {
    const storedImage = localStorage.getItem("userProfilePicture");
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result;
      localStorage.setItem("userProfilePicture", base64String);
      setImage(base64String);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const onClickNext = () => {
    navigate("/OccupationPage");
  };

  return (
    <div className="profile-picture-page-container">
      <h1 className="profile-picture-heading">Profile Picture</h1>
      <img
        className="profile-picture-img"
        src={image || defaultProfile}
        alt="Profile"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = defaultProfile;
        }}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="profile-picture-upload-input"
      />
      <button className="profile-picture-next-button" onClick={onClickNext}>
        Next
      </button>
    </div>
  );
};

export default ProfilePicturePage;
