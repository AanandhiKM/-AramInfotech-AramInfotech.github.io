import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import '../css/form-validation.css';

function LoginForm() {
  const navigate = useNavigate();
  const [admissionId, setAdmissionId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/login', {
        admissionid: admissionId,
        password,
      });
      const { message } = response.data;
      console.log('Login response:', response);
      setMessage(message);
      if (message === 'Login successful!') {
        navigate('/submit');  // Change this to the route you want to navigate to after successful login
      }
    } catch (error) {
      setMessage('Invalid admission ID or password');
      console.error('Error:', error);
    }
  };

  return (
    <div className="text-center">
      <main className="form-signin">
        <form onSubmit={handleSubmit}>
          <img className="d-block mx-auto mb-4" src="/assets/images/mcc-logo.png" alt="MCC Logo" width="250" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              name="admissionid"
              id="admissionid"
              placeholder="Admission ID"
              value={admissionId}
              onChange={(e) => setAdmissionId(e.target.value)}
              autoComplete="off"
              maxLength="25"
            />
            <label htmlFor="admissionid">Admission ID</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="checkbox mb-3">
            {message && (
              <div className={`alert ${message.includes('Invalid') ? 'alert-danger' : 'alert-success'}`}>
                {message}
              </div>
            )}
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit" name="submit" value="Submit">
            Login
          </button>
        </form>
      </main>
    </div>
  );
}

export default LoginForm;
