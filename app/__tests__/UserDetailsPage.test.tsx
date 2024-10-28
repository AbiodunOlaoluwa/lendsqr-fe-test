import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserDetailsPage from '../dashboard/users/[id]/page';
import { useRouter } from 'next/navigation';
import { jest } from '@jest/globals';

// This test doesn't work and I've tried but honestly can't figure it out
// I think it has to do with the useRouter navigation

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/dashboard/users/1'),
  useRouter: jest.fn(() => ({ push: jest.fn() }))
}));

// const mockUsePathname = usePathname as jest.Mock;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockUseRouter = useRouter as jest.Mock<any>; // Specify the type of useRouter to allow functions like `mockReturnValue`

// Mock data for localStorage
const mockUsersData = [
  {
    id: "1",
    organization: "Realfire",
    username: "Ado Emeline",
    email: "cionnidis0@51.la",
    phone: "247-597-8433",
    dateJoined: "4/30/2020",
    status: "Active",
    fullName: "Booth Beamiss",
    bvn: 92032831581,
    gender: "Male",
    maritalStatus: "Divorced",
    children: 6,
    typeOfResidence: "Rented",
    levelOfEducation: "B.Sc",
    employmentStatus: "Self-Employed",
    sectorOfEmployment: "Technology",
    monthlyIncome: "Ruble",
    loanRepayment: "Yuan Renminbi",
    durationOfEmployment: "35 months",
    officeEmail: "cionnidis0@goo.gl",
    twitter: "http://twitter.com/booth",
    facebook: "http://facebook.com/booth",
    instagram: "http://instagram.com/booth",
    guarantorFullName: "Crawford Ionnidis",
    guarantorPhoneNumber: "324-488-3805",
    guarantorEmailAddress: "cionnidis0@europa.eu",
    relationshipToGuarantor: "Sister",
  }
];

beforeEach(() => {
  localStorage.setItem('usersData', JSON.stringify(mockUsersData));
});

afterEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
});

test('renders loading state initially', () => {
  render(<UserDetailsPage />);
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});

test('renders user details correctly', async () => {
  render(<UserDetailsPage />);

  await waitFor(() => expect(screen.getByText(/Booth Beamiss/i)).toBeInTheDocument());

  expect(screen.getByText(/Booth Beamiss/i)).toBeInTheDocument();
  expect(screen.getByText(/247-597-8433/i)).toBeInTheDocument();
  expect(screen.getByText(/cionnidis0@51.la/i)).toBeInTheDocument();
  expect(screen.getByText(/92032831581/i)).toBeInTheDocument();
  expect(screen.getByText(/Male/i)).toBeInTheDocument();
  expect(screen.getByText(/Divorced/i)).toBeInTheDocument();
  expect(screen.getByText(/6/i)).toBeInTheDocument();
  expect(screen.getByText(/Rented/i)).toBeInTheDocument();
  expect(screen.getByText(/B.Sc/i)).toBeInTheDocument();
  expect(screen.getByText(/Self-Employed/i)).toBeInTheDocument();
  expect(screen.getByText(/Technology/i)).toBeInTheDocument();
  expect(screen.getByText(/35 months/i)).toBeInTheDocument();
});

test('navigates back to users list when clicking back button', async () => {
  const mockRouter = mockUseRouter();

  render(<UserDetailsPage />);

  await waitFor(() => expect(screen.getByText(/Booth Beamiss/i)).toBeInTheDocument());

  const backButton = screen.getByText(/Back to Users/i);
  backButton.click();

  expect(mockRouter.push).toHaveBeenCalledWith('/dashboard/users');
});

test('renders guarantor details correctly', async () => {
  render(<UserDetailsPage />);

  await waitFor(() => expect(screen.getByText(/Crawford Ionnidis/i)).toBeInTheDocument());

  expect(screen.getByText(/Crawford Ionnidis/i)).toBeInTheDocument();
  expect(screen.getByText(/324-488-3805/i)).toBeInTheDocument();
  expect(screen.getByText(/cionnidis0@europa.eu/i)).toBeInTheDocument();
  expect(screen.getByText(/Sister/i)).toBeInTheDocument();
});
