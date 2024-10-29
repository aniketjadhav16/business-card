import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./OccupationPage.css"

const OccupationPage = () => {
    const navigate = useNavigate();

    const [selectedOccupation, setSelectedOccupation] = useState('');
    const [customOccupation, setCustomOccupation] = useState('');

    const occupations = [
        'Software Engineer',
        'Data Scientist',
        'Product Manager',
        'Designer',
        'Marketing Specialist',
        'Business Analyst',
        'Consultant',
        'Teacher',
        'Others'
    ];

    const handleOccupationChange = (e) => {
        setSelectedOccupation(e.target.value);
        if (e.target.value !== 'Others') {
            setCustomOccupation('');
        }
    };

    const handleCustomOccupationChange = (e) => {
        setCustomOccupation(e.target.value);
    };

    const onClickNext = (e) => {
        e.preventDefault();

        const occupationToSubmit = selectedOccupation === 'Others' ? customOccupation : selectedOccupation;

        localStorage.setItem('userOccupation', occupationToSubmit);

        navigate('/BioPage');
    };

    return (
        <div className="occupation-page-container">
            <h1 className='occupation-page-heading'>Occupation</h1>
            <p className='occupation-page-heading-p'>Select your occupation or enter a custom one if not listed.</p>

            <div className="dropdown-container">
                <label htmlFor="occupations">Choose your occupation:</label>
                <select
                    id="occupations"
                    value={selectedOccupation}
                    onChange={handleOccupationChange}
                    className="dropdown"
                >
                    <option value="" disabled>Select an occupation</option>
                    {occupations.map((occupation, index) => (
                        <option key={index} value={occupation}>
                            {occupation}
                        </option>
                    ))}
                </select>
            </div>

            {selectedOccupation === 'Others' && (
                <div className="custom-occupation-container">
                    <label htmlFor="customOccupation">Enter your custom occupation:</label>
                    <input
                        id="customOccupation"
                        type="text"
                        value={customOccupation}
                        onChange={handleCustomOccupationChange}
                        placeholder="Type your occupation"
                        className="custom-occupation-input"
                    />
                </div>
            )}

            <button onClick={onClickNext} className='occupation-page-next-button'>Next</button>
        </div>
    );
};

export default OccupationPage;
