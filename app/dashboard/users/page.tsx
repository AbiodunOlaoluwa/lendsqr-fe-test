"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';;
import Image from 'next/image';
import users from "@/app/Assets/users-page-users-icon.svg";
import activeUsers from "@/app/Assets/users-page-active-users-icon.svg";
import usersWithLoans from "@/app/Assets/users-page-users-with-loans-icon.svg";
import usersWithSavings from "@/app/Assets/users-page-users-with-savings-icon.svg";
import filterIcon from "@/app/Assets/users-page-filter-icon.svg";
import paginationArrow from "@/app/Assets/users-page-arrow-icon.svg";
import previousArrow from "@/app/Assets/users-page-previous-arrow.svg";
import nextArrow from "@/app/Assets/users-page-next-arrow.svg";
import filterDropDownArrow from "@/app/Assets/users-page-filter-menu-arrow.svg";
import filterCalendar from "@/app/Assets/users-page-filter-menu-calendar.svg";
import "./users.css";

interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: string;
  fullName: string;
  bvn: number;
  gender: string;
  maritalStatus: string;
  children: number;
  typeOfResidence: string;
  levelOfEducation: string;
  employmentStatus: string;
  sectorOfEmployment: string;
  monthlyIncome: string;
  loanRepayment: string;
  twitter: string;
  facebook: string;
  instagram: string;
}

const USERS_API_URL = 'https://run.mocky.io/v3/adec0ef3-5fe4-447b-b3b0-324258be9222';

const Page: React.FC = () => {
  const [usersData, setUsersData] = useState<User[]>([]);
  const [filteredUsersData, setFilteredUsersData] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filters, setFilters] = useState({
    organization: '',
    username: '',
    email: '',
    phone: '',
    date: '',
    status: '',
  });
  const [isFilterMenuVisible, setIsFilterMenuVisible] = useState<boolean>(false);
  const pageSize = 100;
  const router = useRouter();

  // Fetch users data from the mock API and store it in localStorage
  const fetchAndStoreUsers = async () => {
    try {
      const response = await fetch(USERS_API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch users data');
      }
      const data: User[] = await response.json();
      localStorage.setItem('usersData', JSON.stringify(data));
      setUsersData(data);
      setFilteredUsersData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Retrieve users data from localStorage
  const getUsersFromLocalStorage = () => {
    const storedUsers = localStorage.getItem('usersData');
    if (storedUsers) {
      const parsedUsers = JSON.parse(storedUsers);
      setUsersData(parsedUsers);
      setFilteredUsersData(parsedUsers);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem('usersData')) {
      fetchAndStoreUsers();
    } else {
      getUsersFromLocalStorage();
    }
  }, []);

  // Pagination logic: Get users for the current page
  const paginatedUsers = filteredUsersData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  // Handle navigating to the next page
  const goToNextPage = () => {
    if (currentPage * pageSize < filteredUsersData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle navigating to the previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Toggle filter menu visibility
  const toggleFilterMenu = () => {
    setIsFilterMenuVisible(!isFilterMenuVisible);
  };

  // Handle filter change
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setFilters({ ...filters, [key]: e.target.value });
  };

  // Apply filters to the users data
  const applyFilters = () => {
    let filteredData = usersData;
    if (filters.organization) {
      filteredData = filteredData.filter(user => user.organization.toLowerCase().includes(filters.organization.toLowerCase()));
    }
    if (filters.username) {
      filteredData = filteredData.filter(user => user.username.toLowerCase().includes(filters.username.toLowerCase()));
    }
    if (filters.email) {
      filteredData = filteredData.filter(user => user.email.toLowerCase().includes(filters.email.toLowerCase()));
    }
    if (filters.phone) {
      filteredData = filteredData.filter(user => user.phone.includes(filters.phone));
    }
    if (filters.date) {
      filteredData = filteredData.filter(user => user.dateJoined.includes(filters.date));
    }
    if (filters.status) {
      filteredData = filteredData.filter(user => user.status.toLowerCase().includes(filters.status.toLowerCase()));
    }
    setFilteredUsersData(filteredData);
    setCurrentPage(1); // Reset to first page after applying filters
  };

  const handleResetFilters = () => {
    setFilters({
      organization: '',
      username: '',
      email: '',
      phone: '',
      date: '',
      status: '',
    });
    // Manually reset filtered data after clearing filters
    setFilteredUsersData(usersData);
    setCurrentPage(1); // Reset to the first page
  };

  // Navigate to user details page
  const navigateToUserDetails = (userId: string) => {
    router.push(`/dashboard/users/${userId}`);
  };

  return (
    <div className="users-page-container">
      <div className="users-page-title-container">
        <h1 className="users-page-title-text">Users</h1>
      </div>
      <div className="informative-tabs-container">
        {/* Informative tab for total users */}
        <div className="informative-tab">
          <div className="icon-container">
            <div className="users-icon-container">
              <Image src={users} alt="users icon" />
            </div>
          </div>
          <div className="informative-tab-title-container">
            <p className="informative-tab-title-text">USERS</p>
          </div>
          <div className="informative-tab-summary-container">
            <h1 className="informative-tab-summary-text">{usersData.length}</h1>
          </div>
        </div>
        {/* Informative tab for active users (currently using total users count as placeholder) */}
        <div className="informative-tab">
          <div className="icon-container">
            <div className="active-users-icon-container">
              <Image src={activeUsers} alt="active users icon" />
            </div>
          </div>
          <div className="informative-tab-title-container">
            <p className="informative-tab-title-text">ACTIVE USERS</p>
          </div>
          <div className="informative-tab-summary-container">
            <h1 className="informative-tab-summary-text">{usersData.length}</h1>
          </div>
        </div>
        {/* Informative tab for users with loans (static data) */}
        <div className="informative-tab">
          <div className="icon-container">
            <div className="users-with-loans-icon-container">
              <Image src={usersWithLoans} alt="users with loans icon" />
            </div>
          </div>
          <div className="informative-tab-title-container">
            <p className="informative-tab-title-text">USERS WITH LOANS</p>
          </div>
          <div className="informative-tab-summary-container">
            <h1 className="informative-tab-summary-text">12,453</h1>
          </div>
        </div>
        {/* Informative tab for users with savings (static data) */}
        <div className="informative-tab">
          <div className="icon-container">
            <div className="users-with-savings-icon-container">
              <Image src={usersWithSavings} alt="users with savings icon" />
            </div>
          </div>
          <div className="informative-tab-title-container">
            <p className="informative-tab-title-text">USERS WITH SAVINGS</p>
          </div>
          <div className="informative-tab-summary-container">
            <h1 className="informative-tab-summary-text">102,453</h1>
          </div>
        </div>
      </div>
      <div className="users-content-table-container">
        {/* Table for users data */}
        <table className="users-table">
          <thead>
            <tr>
              {['ORGANIZATION', 'USERNAME', 'EMAIL', 'PHONE NUMBER', 'DATE JOINED', 'STATUS'].map((header, index) => (
                <th key={index} className="table-header">
                  <div className="table-header-content">
                    <span className="table-header-text">{header}</span>
                    <Image
                      src={filterIcon}
                      alt='filter icon'
                      className='filter'
                      onClick={toggleFilterMenu}
                    />
                    {/* Filter menu (initially hidden) */}
                    <div className="filter-menu hidden">
                      <div className="filter-options-container">
                        <div className="filter-option">
                          <p className="filter-option-title-text">Organization</p>
                          <div className="filter-option-input-container">
                            <input type="text" placeholder="Select" className="filter-option-input" onChange={(e) => handleFilterChange(e, 'organization')} value={filters.organization} />
                            <Image
                              src={filterDropDownArrow}
                              alt="filterDropDownArrow"
                            />
                          </div>
                        </div>
                        <div className="filter-option">
                          <p className="filter-option-title-text">Username</p>
                          <div className="filter-option-input-container">
                            <input type="text" placeholder="User" className="filter-option-input" onChange={(e) => handleFilterChange(e, 'username')} value={filters.username} />
                          </div>
                        </div>
                        <div className="filter-option">
                          <p className="filter-option-title-text">Email</p>
                          <div className="filter-option-input-container">
                            <input type="text" placeholder="Email" className="filter-option-input" onChange={(e) => handleFilterChange(e, 'email')} value={filters.email} />
                          </div>
                        </div>
                        <div className="filter-option">
                          <p className="filter-option-title-text">Date</p>
                          <div className="filter-option-input-container">
                            <input type="text" placeholder="Date" className="filter-option-input" onChange={(e) => handleFilterChange(e, 'date')} value={filters.date} />
                            <Image
                              src={filterCalendar}
                              alt="filter Calendar"
                            />
                          </div>
                        </div>
                        <div className="filter-option">
                          <p className="filter-option-title-text">Phone Number</p>
                          <div className="filter-option-input-container">
                            <input type="text" placeholder="Phone Number" className="filter-option-input" onChange={(e) => handleFilterChange(e, 'phone')} value={filters.phone} />
                          </div>
                        </div>
                        <div className="filter-option">
                          <p className="filter-option-title-text">Status</p>
                          <div className="filter-option-input-container">
                            <input type="text" placeholder="Select" className="filter-option-input" onChange={(e) => handleFilterChange(e, 'status')} value={filters.status} />
                            <Image
                              src={filterDropDownArrow}
                              alt="filterDropDownArrow"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="filter-buttons-container">
                        <div className="reset-button-container" onClick={handleResetFilters}>
                          <p className="reset-button-text">Reset</p>
                        </div>
                        <div className="filter-button-container" onClick={applyFilters}>
                          <p className="filter-button-text">Filter</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map(user => (
              <tr key={user.id} className="table-row" onClick={() => navigateToUserDetails(user.id)}>
                <td className="table-cell">{user.organization}</td>
                <td className="table-cell">{user.username}</td>
                <td className="table-cell">{user.email}</td>
                <td className="table-cell">{user.phone}</td>
                <td className="table-cell">{user.dateJoined}</td>
                <td className={`table-cell status-cell-container ${user.status.toLowerCase()}`}>{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div className="pagination-container">
        <div className="showing-container">
          <p>Showing</p>
          <div className="list-number">
            <p>100</p>
            <Image src={paginationArrow} alt='drop down arrow' />
          </div>
          <p>out of {usersData.length}</p>
        </div>
        <div className="buttons-container">
          <button onClick={goToPreviousPage} disabled={currentPage === 1} className="pagination-button-previous">
            <Image src={previousArrow} alt="previous page" className="pagination-arrow previous" />
          </button>
          <span className="current-page">Page {currentPage}</span>
          <button onClick={goToNextPage} disabled={currentPage * pageSize >= usersData.length} className="pagination-button-next">
            <Image src={nextArrow} alt="next page" className="pagination-arrow next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
