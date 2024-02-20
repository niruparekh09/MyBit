import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/SingIn.css';
import { Navigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://localhost:8443/auth/signin', {
        email,
        password,
      });

      localStorage.setItem('jwt', response.data.jwt); // Store the JWT token
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${response.data.jwt}`; // Set the authorization header for future requests

      // Handle successful login (e.g., redirect to a protected page)
      console.log('Login successful!');
      navigate('/home');
      // ...
    } catch (error) {
      setError(error.response.data.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for email and password */}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Submit button and error handling */}
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Signing in...' : 'Sign In'}
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default SignIn;
