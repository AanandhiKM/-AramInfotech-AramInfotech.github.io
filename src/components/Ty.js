import React from 'react';
import {  useNavigate } from 'react-router-dom';

function ThankYou() {
    const navigate = useNavigate(); // Initialize useNavigate hook

    // Function to handle back button click
    const handleBackClick = () => {
        // Navigate back to the Submit page and replace the history entry
        navigate('/', { replace: true });
    };

    return (
        <div className="container">
            <div className="row">
                
                <div className="col-md-9">
                    <div style={{ maxWidth: '600px', padding: '20px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                        <h2>Thank You!</h2>
                        <p>Your form has been submitted successfully.</p>
                        
                        <p>Thank you for your participation!</p>
                        <button onClick={handleBackClick} className="btn btn-primary">Back to login </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThankYou;
