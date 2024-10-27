import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../dashboard/users/page';
import { useRouter } from 'next/navigation';
import React from 'react';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Users Page', () => {
  let pushMock: jest.Mock;

  beforeEach(() => {
    pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
    localStorage.setItem('usersData', JSON.stringify(mockUsersData));
  });

  afterEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  const mockUsersData = [
    {
      id: '1',
      organization: 'Realfire',
      username: 'Ado Emeline',
      email: 'cionnidis0@51.la',
      phone: '247-597-8433',
      dateJoined: '4/30/2020',
      status: 'Active',
      fullName: 'Booth Beamiss',
      bvn: 92032831581,
      gender: 'Male',
      maritalStatus: 'Divorced',
      children: 6,
      typeOfResidence: 'Rented',
      levelOfEducation: 'B.Sc',
      employmentStatus: 'Self-Employed',
      sectorOfEmployment: 'Technology',
      monthlyIncome: 'Ruble',
      loanRepayment: 'Yuan Renminbi',
      durationOfEmployment: '35 months',
      officeEmail: 'cionnidis0@goo.gl',
      twitter: 'http://twitter.com/booth',
      facebook: 'http://facebook.com/booth',
      instagram: 'http://instagram.com/booth'
    }
  ];

  it('should render users page with informative tabs', () => {
    render(<Page />);
    expect(screen.getByText(/Users/i)).toBeInTheDocument();
    expect(screen.getByText(/Active Users/i)).toBeInTheDocument();
    expect(screen.getByText(/Users with Loans/i)).toBeInTheDocument();
    expect(screen.getByText(/Users with Savings/i)).toBeInTheDocument();
  });

  it('should render user data in the table', async () => {
    render(<Page />);
    await waitFor(() => expect(screen.getByText(/Realfire/i)).toBeInTheDocument());
    expect(screen.getByText(/Ado Emeline/i)).toBeInTheDocument();
    expect(screen.getByText(/cionnidis0@51.la/i)).toBeInTheDocument();
    expect(screen.getByText(/247-597-8433/i)).toBeInTheDocument();
    expect(screen.getByText(/4\/30\/2020/i)).toBeInTheDocument();
    expect(screen.getByText(/Active/i)).toBeInTheDocument();
  });

  it('should navigate to user details page when a user row is clicked', async () => {
    render(<Page />);
    await waitFor(() => expect(screen.getByText(/Realfire/i)).toBeInTheDocument());
    const userRow = screen.getByText(/Realfire/i).closest('.table-row');
    if (userRow) fireEvent.click(userRow);
    expect(pushMock).toHaveBeenCalledWith('/dashboard/users/1');
  });

  it('should display the filter menu when filter icon is clicked', async () => {
    render(<Page />);
    const filterIcon = screen.getAllByAltText(/filter icon/i)[0];
    fireEvent.click(filterIcon);
    await waitFor(() => {
      const filterOption = screen.getByText(/Organization/i);
      expect(filterOption).toBeInTheDocument();
    });
  });

  it('should apply filters correctly', async () => {
    render(<Page />);
    const filterIcon = screen.getAllByAltText(/filter icon/i)[0];
    fireEvent.click(filterIcon);
    const organizationInput = screen.getByPlaceholderText(/Select/i);
    fireEvent.change(organizationInput, { target: { value: 'Realfire' } });
    const filterButton = screen.getByText(/Filter/i);
    fireEvent.click(filterButton);
    await waitFor(() => expect(screen.getByText(/Realfire/i)).toBeInTheDocument());
    expect(screen.queryByText(/Nonexistent Organization/i)).not.toBeInTheDocument();
  });

  it('should reset filters correctly', async () => {
    render(<Page />);
    const filterIcon = screen.getAllByAltText(/filter icon/i)[0];
    fireEvent.click(filterIcon);
    const organizationInput = screen.getByPlaceholderText(/Select/i);
    fireEvent.change(organizationInput, { target: { value: 'Realfire' } });
    const resetButton = screen.getByText(/Reset/i);
    fireEvent.click(resetButton);
    await waitFor(() => expect(screen.getByText(/Realfire/i)).toBeInTheDocument());
  });

  it('should navigate to the next and previous pages correctly', async () => {
    render(<Page />);
    const nextPageButton = screen.getByAltText(/next page/i);
    fireEvent.click(nextPageButton);
    const previousPageButton = screen.getByAltText(/previous page/i);
    fireEvent.click(previousPageButton);
    await waitFor(() => {
      expect(screen.getByText(/Users/i)).toBeInTheDocument();
    });
  });
});
