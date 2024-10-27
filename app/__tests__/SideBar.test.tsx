import { render, screen } from '@testing-library/react';
import SideBar from '../components/AppSideBar/SideBar';
import React from 'react';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, width, height }: { src: string, alt: string, width?: number, height?: number }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} width={width} height={height} />
  ),
}));

describe('SideBar', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it('should render switch organization section correctly', () => {
    render(<SideBar />);
    // Check if the Switch Organization text is rendered
    expect(screen.getByText('Switch Organization')).toBeInTheDocument();
    // Check if the briefcase icon is rendered
    expect(screen.getByAltText('briefcase icon')).toBeInTheDocument();
  });

  it('should render dashboard indicator correctly', () => {
    render(<SideBar />);
    // Check if the Dashboard text is rendered
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    // Check if the house icon is rendered
    expect(screen.getByAltText('house icon')).toBeInTheDocument();
  });

  it('should render customers section correctly', () => {
    render(<SideBar />);
    // Check if the Customers title is rendered
    expect(screen.getByText('CUSTOMERS')).toBeInTheDocument();
    // Check if the Users sub-tab is rendered
    expect(screen.getByText('Users')).toBeInTheDocument();
    // Check if the Guarantors sub-tab is rendered
    expect(screen.getByText('Guarantors')).toBeInTheDocument();
  });

  it('should render businesses section correctly', () => {
    render(<SideBar />);
    // Check if the Businesses title is rendered
    expect(screen.getByText('BUSINESSES')).toBeInTheDocument();
    // Check if the Loan Products sub-tab is rendered
    expect(screen.getByText('Loan Products')).toBeInTheDocument();
    // Check if the Transactions sub-tab is rendered
    expect(screen.getByText('Transactions')).toBeInTheDocument();
  });

  it('should render settings section correctly', () => {
    render(<SideBar />);
    // Check if the Settings title is rendered
    expect(screen.getByText('SETTINGS')).toBeInTheDocument();
    // Check if the Preferences sub-tab is rendered
    expect(screen.getByText('Preferences')).toBeInTheDocument();
    // Check if the Audit Logs sub-tab is rendered
    expect(screen.getByText('Audit Logs')).toBeInTheDocument();
  });
});
