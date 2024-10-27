"use client"
import React, { useState } from 'react';
import Image from "next/image";
import logo from "@/app/Assets/Logo_Group.svg";
import magnifyingGlass from "@/app/Assets/searchbar-magnifying-glass.svg";
import bell from "@/app/Assets/searchbar-notification-bell.svg";
import avatar from "@/app/Assets/avatar.svg";
import navbarDropdownArrow from "@/app/Assets/searchbar-dropdown-arrow.svg";
import "./navbar.css";

const NavBar = () => {
  // State to manage the visibility of the hamburger menu on mobile devices
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  // Function to toggle the hamburger menu open/close state
  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <nav>
      <div className="navbar-container">
        {/* Container for the logo and search bar */}
        <div className="logo-searchbar-container">
          {/* Logo container */}
          <div className="navbar-logo-container">
            <Image
              src={logo}
              alt="lendsqr-logo"
              width={150}
              height={50}
            />
          </div>
          {/* Search bar container */}
          <div className="searchbar-container">
            <input type="text" placeholder="Search for anything" name="search" id="search" className="searchbar-input" />
            <div className="magnifying-glass-container">
              <Image 
                src={magnifyingGlass}
                alt="search"
              />
            </div>
          </div>
        </div>
        {/* Container for links and profile details */}
        <div className="links-profile-container">
          {/* Link to the documentation */}
          <a href="/docs" aria-disabled><p className="docs-link">Docs</p></a>
          {/* Notification bell icon */}
          <div className="notification-bell-container">
            <Image 
              src={bell}
              alt="notification bell"
              height={24}
              width={24}
            />
          </div>
          {/* User avatar and dropdown details */}
          <div className="avatar-dropdown-container">
            <div className="avatar-container">
              <Image 
                src={avatar}
                alt="avatar"
                width={48}
                height={48}
              />
            </div>
            <div aria-disabled className="account-details-container">
              <p className="account-username">Adedeji</p>
              <Image 
                src={navbarDropdownArrow}
                alt="dropdown arrow"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        {/* Hamburger menu icon for mobile view */}
        <div className={`hamburger-menu ${isHamburgerOpen ? 'active' : ''}`} onClick={toggleHamburgerMenu}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
      </div>
      {/* Hamburger menu expanded view for mobile */}
      {isHamburgerOpen && (
        <div className="hamburger-menu-expanded">
          {/* Link to the documentation */}
          <a href="/docs" className="docs-link">Docs</a>
          {/* Notification bell icon */}
          <div className="notification-bell-container">
            <Image 
              src={bell}
              alt="notification bell"
              height={32}
              width={32}
            />
          </div>
          {/* User avatar and dropdown details */}
          <div className="avatar-dropdown-container">
            <div className="avatar-container">
              <Image 
                src={avatar}
                alt="avatar"
                width={48}
                height={48}
              />
            </div>
            <div className="account-details-container">
              <p className="account-username">Adedeji</p>
              <Image 
                src={navbarDropdownArrow}
                alt="dropdown arrow"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
