import React, { useEffect, useState } from "react";
import './PreviewPage.css'

const PreviewPage = () => {
    const [image, setImage] = useState(null)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [occupationToSubmit, setOccupationToSubmit] = useState('');
    const [bio, setBio] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const storedImage = localStorage.getItem('userProfilePicture');
        if(storedImage){
            setImage(storedImage)
        }

        const storedFirstName = localStorage.getItem('userFirstName');
        if (storedFirstName){
            setFirstName(storedFirstName);
        }

        const storedLastName = localStorage.getItem('userLastName');
        if(storedLastName){
            setLastName(storedLastName);
        }

        const storedOccupation = localStorage.getItem('userOccupation');
        if(storedOccupation){
            setOccupationToSubmit(storedOccupation);
        }

        const storedBio = localStorage.getItem('userBio');
        if(storedBio){
            setBio(storedBio);
        }

        const storedEmail = localStorage.getItem('userEmail');
        if(storedEmail){
            setEmail(storedEmail);
        }
    },[]);

    const sendEmail = () => {
        if (email) {
            const mailToLink = `mailto:${email}`;
            window.location.href = mailToLink;
          }
    }

    return(
        <div className="container">
                <div className="card">
                    <div className="profileImageWrapper">
                        <div className="profileImageBorder"></div>
                        <img src={image} className="profileImage"></img>
                    </div>
                    <h1 className="name">{firstName} {lastName}</h1>
                    <h2 className="occupation">{occupationToSubmit}</h2>
                    <p className="bio">{bio}</p>
                    <button className="contactButton" onClick={sendEmail}>
                        <i data-lucide="mail" className="mail-icon"></i>
                        Email me
                    </button>
                </div>
            </div>
    )
}

export default PreviewPage;