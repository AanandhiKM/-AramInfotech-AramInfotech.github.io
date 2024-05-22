import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function FilledFormDetails() {
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user has already filled the form
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || !user.formFilled) {
            // If the form is not filled, redirect to the submit page
            navigate('/submit');
        }
    }, [navigate]);

    const handleLogout = () => {
        // Clear local storage and redirect to login page
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/'); // Redirect to login page
    };

    // Get user data from local storage
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div>
            <h1>Filled Form Details</h1>
            <p>Welcome, {user ? user.username : ''}!</p>
            {/* Display filled form details here */}

            {/* Add a button or link to go back to the login page */}
            <button className="btn btn-primary" onClick={handleLogout}>Log Out</button>
        </div>
    );
}

export default FilledFormDetails;

