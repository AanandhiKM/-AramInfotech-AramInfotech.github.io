import React, { useState } from 'react';
import axios from 'axios';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/Signup', {
        email,
        password,
        position: parseInt(position)
      });
      console.log('Signup successful!');
      // Clear the form after successful submission
      setEmail('');
      setPassword('');
      setPosition('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
        <label htmlFor="position">Position:</label><br />
        <select id="position" value={position} onChange={(e) => setPosition(e.target.value)} required>
          <option value="">Select Position</option>
          <option value="1">Admin</option>
          <option value="2">Tester</option>
          <option value="3">Dveloper</option>
          {/* Add more positions as needed */}
        </select><br />
        <input type="submit" value="Signup" />
      </form>
    </div>
  );
}

export default SignupForm;
