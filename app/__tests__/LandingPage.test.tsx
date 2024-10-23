import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LandingPage from '@/app/page';
import { BrowserRouter } from 'react-router-dom';
import { FC } from 'react';

// Wrapper to use next/link in testing environment
const RenderWithRouter: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

describe('LandingPage', () => {
  it('should render the login link', () => {
    render(<LandingPage />, { wrapper: RenderWithRouter });
    const loginLink = screen.getByRole('link', { name: /log in/i });
    expect(loginLink).toBeInTheDocument();
  });

  it('should navigate to the login page on click', () => {
    render(<LandingPage />, { wrapper: RenderWithRouter });
    const loginLink = screen.getByRole('link', { name: /log in/i });
    expect(loginLink).toHaveAttribute('href', '/login');
  });

  it('should render the disabled buttons correctly', () => {
    render(<LandingPage />, { wrapper: RenderWithRouter });
    const createAccountButton = screen.getByRole('button', { name: /create free account/i });
    const getStartedButton = screen.getByRole('button', { name: /get started free/i });
    const contactSalesButton = screen.getByRole('button', { name: /contact sales/i });
    
    expect(createAccountButton).toBeDisabled();
    expect(getStartedButton).toBeDisabled();
    expect(contactSalesButton).toBeDisabled();
  });
});
