import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./OccupationPage.css"

const OccupationPage = () => {
    const navigate = useNavigate();

    // State to manage selected occupation and custom occupation
    const [selectedOccupation, setSelectedOccupation] = useState('');
    const [customOccupation, setCustomOccupation] = useState('');

    // List of occupations for the dropdown
    const occupations = [
        'Software Engineer',
        'Data Scientist',
        'Product Manager',
        'Designer',
        'Marketing Specialist',
        'Business Analyst',
        'Consultant',
        'Teacher',
        'Others' // "Others" option for a custom occupation
    ];

    const handleOccupationChange = (e) => {
        setSelectedOccupation(e.target.value);
        // Reset custom occupation if anything other than 'Others' is selected
        if (e.target.value !== 'Others') {
            setCustomOccupation('');
        }
    };

    const handleCustomOccupationChange = (e) => {
        setCustomOccupation(e.target.value);
    };

    const onClickNext = (e) => {
        e.preventDefault();

        // Handle the occupation submission based on whether "Others" was selected
        const occupationToSubmit = selectedOccupation === 'Others' ? customOccupation : selectedOccupation;

        // Save the occupation in localStorage
        localStorage.setItem('userOccupation', occupationToSubmit);

        // Navigate to the next page
        navigate('/BioPage');
    };

    return (
        <div className="occupation-page-container">
            <h1>Occupation</h1>
            <p>Select your occupation or enter a custom one if not listed.</p>

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

            {/* Conditionally render input field if "Others" is selected */}
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

            <button onClick={onClickNext}>Next</button>
        </div>
    );
};

export default OccupationPage;
