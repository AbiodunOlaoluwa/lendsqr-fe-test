import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '@/app/login/page';
import { useRouter } from 'next/navigation';
import React from 'react';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('LoginPage', () => {
  let replaceMock: jest.Mock;

  beforeEach(() => {
    replaceMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ replace: replaceMock });
  });

  it('should render login page elements correctly', () => {
    render(<LoginPage />);
    
    // Check for logo
    expect(screen.getByAltText('Lendsqr Logo')).toBeInTheDocument();
    // Check for welcome text
    expect(screen.getByText('Welcome!')).toBeInTheDocument();
    // Check for email input
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    // Check for password input
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    // Check for login button
    expect(screen.getByText('LOG IN')).toBeInTheDocument();
  });

  it('should show error if fields are empty and submit is pressed', () => {
    render(<LoginPage />);
    
    // Click login button without filling inputs
    fireEvent.click(screen.getByText('LOG IN'));

    // Check for error message
    expect(screen.getByText('Both fields are required')).toBeInTheDocument();
  });

  it('should show error for invalid email format', () => {
    render(<LoginPage />);

    // Fill email with incorrect format and password
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'invalid-email' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
    
    // Click login button
    fireEvent.click(screen.getByText('LOG IN'));

    // Use a regex matcher to ensure we find the error message, even if broken across elements
    expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
  });

  it('should show error for incorrect email or password', () => {
    render(<LoginPage />);

    // Fill email and password with incorrect credentials
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'wrong@lendsqr.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'wrongpassword' } });
    
    // Click login button
    fireEvent.click(screen.getByText('LOG IN'));

    // Check for error message
    expect(screen.getByText('Invalid email or password')).toBeInTheDocument();
  });

  it('should navigate to dashboard on successful login', () => {
    render(<LoginPage />);

    // Fill email and password with correct credentials
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@lendsqr.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
    
    // Click login button
    fireEvent.click(screen.getByText('LOG IN'));

    // Check if router replace was called with dashboard route
    expect(replaceMock).toHaveBeenCalledWith('/dashboard/users');
  });

  it('should toggle password visibility', () => {
    render(<LoginPage />);

    const passwordInput = screen.getByPlaceholderText('Password');
    const toggleButton = screen.getByText('SHOW');

    // Initially, password input should be of type 'password'
    expect(passwordInput).toHaveAttribute('type', 'password');

    // Click toggle button to show password
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'text');

    // Click toggle button to hide password
    fireEvent.click(screen.getByText('HIDE'));
    expect(passwordInput).toHaveAttribute('type', 'password');
  });
});
