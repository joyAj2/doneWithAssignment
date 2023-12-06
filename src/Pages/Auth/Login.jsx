import React, { useState } from 'react';
import './auth.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [studentID, setStudentID] = useState('');
  const [pin, setPin] = useState('');

  const navigate = useNavigate()

  const handleLogin = () => {
    // Implement authentication logic here (mock-up for simulation)
    alert(`Logging in with Student ID: ${studentID}`);
    navigate("/")
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label htmlFor="studentID">Student ID:</label>
        <input
          type="text"
          id="studentID"
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
        />

        <label htmlFor="pin">PIN:</label>
        <input
          type="password"
          id="pin"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
