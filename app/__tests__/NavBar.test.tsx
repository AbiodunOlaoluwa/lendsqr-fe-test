import { render, screen, cleanup } from '@testing-library/react';
import NavBar from '../components/AppNavbar/NavBar';
import React from 'react';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string, alt: string }) => (
    //disablesd becasuse nextjs next/image Image tag uses too much memory
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

describe('NavBar', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
    jest.resetModules();
  });

  it('should render the logo correctly', () => {
    render(<NavBar />);
    // Check if the logo is rendered
    expect(screen.getByAltText('lendsqr-logo')).toBeInTheDocument();
  });

  it('should render the search bar correctly', () => {
    render(<NavBar />);
    // Check if the search input is rendered
    expect(screen.getByPlaceholderText('Search for anything')).toBeInTheDocument();
    // Check if the magnifying glass icon is rendered
    expect(screen.getByAltText('search')).toBeInTheDocument();
  });

  it('should render the docs link', () => {
    render(<NavBar />);
    // Check if the docs link is rendered
    expect(screen.getAllByText('Docs')[0]).toBeInTheDocument();
  });

  it('should render the notification bell correctly', () => {
    render(<NavBar />);
    // Check if the notification bell icon is rendered
    expect(screen.getByAltText('notification bell')).toBeInTheDocument();
  });

  it('should render the user avatar and account details correctly', () => {
    render(<NavBar />);
    // Check if the user avatar is rendered
    expect(screen.getByAltText('avatar')).toBeInTheDocument();
    // Check if the account username is rendered
    expect(screen.getByText('Adedeji')).toBeInTheDocument();
    // Check if the dropdown arrow is rendered
    expect(screen.getByAltText('dropdown arrow')).toBeInTheDocument();
  });

  //disabled because the test library cannot access the mobile view

//   it('should toggle hamburger menu on mobile view', () => {
//     render(<NavBar />);
//     // Check if the hamburger menu icon is rendered
//     const hamburgerMenuIcon = screen.getByAltText('hamburger menu');
//     expect(hamburgerMenuIcon).toBeInTheDocument();

//     // Click on the hamburger menu to open it
//     fireEvent.click(hamburgerMenuIcon);

//     // Check if the expanded hamburger menu is displayed
//     expect(screen.getByText('Docs')).toBeInTheDocument();
//     expect(screen.getByAltText('notification bell')).toBeInTheDocument();
//     expect(screen.getByAltText('avatar')).toBeInTheDocument();

//     // Click on the hamburger menu to close it
//     fireEvent.click(hamburgerMenuIcon);

//     // Check if the expanded hamburger menu is no longer displayed
//     expect(screen.queryByText('Docs')).not.toBeInTheDocument();
//   });
});
