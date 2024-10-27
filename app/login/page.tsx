"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import '@/app/landing.scss';
import Logo from '@/app/Assets/Logo_Group.svg';
import signInImage from '@/app/Assets/signInPageImg.svg';
import './login.css';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  // State to handle password visibility
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  // State to store email input
  const [email, setEmail] = useState('');
  // State to store password input
  const [password, setPassword] = useState('');
  // State to store error messages
  const [error, setError] = useState('');
  // Router hook to navigate programmatically
  const router = useRouter();

  // Function to validate email format using regex
  const validateEmail = (email: string) => {
    return /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(email);
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation for empty fields
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Mock authentication logic
    if (email === 'test@lendsqr.com' && password === 'password123') {
      setError('');
      // Redirect to dashboard upon successful login
      router.replace('/dashboard/users');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        {/* Logo and sign-in illustration */}
        <div className="login-image">
          <div className="logoContainer">
            <Image className='logo' src={Logo} alt="Lendsqr Logo" />
          </div>
          <Image src={signInImage} alt="Sign In Illustration" width={600} height={600} />
        </div>
        <div className="login-form">
          {/* Welcome text */}
          <div className="loginFormText">
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
          </div>
          {/* Login form */}
          <form onSubmit={handleSubmit}>
            <div className="email-input-container">
              <input 
                autoFocus 
                type="text"
                placeholder="Email" 
                className="form-input" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password-input-container">
              <input 
                type={isPasswordVisible ? "text" : "password"} 
                placeholder="Password" 
                className="form-input" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* Toggle password visibility */}
              <span 
                className="show-password" 
                onClick={() => setPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? "HIDE" : "SHOW"}
              </span>
            </div>
            {/* Display error message if present */}
            {error && <div className="error-message">{error}</div>}
            <div className="login-third-section">
              <a href="#" className="forgot-password">FORGOT PASSWORD?</a>
              <button type="submit" className="login-button">LOG IN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
