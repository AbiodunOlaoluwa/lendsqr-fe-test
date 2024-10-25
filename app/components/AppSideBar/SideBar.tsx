"use client";
import React, {useState} from 'react';
import Image from "next/image";
import briefcase from "@/app/Assets/sidebar-briefcase.svg";
import dropdown from "@/app/Assets/sidebar-dropdown.svg";
import house from "@/app/Assets/sidebar-house.svg";
import usersIcon from "@/app/Assets/sidebar-users-tab.svg";
import guarantorIcon from "@/app/Assets/sidebar-guarantors.svg";
import loansIcon from "@/app/Assets/sidebar-loans.svg";
import decisionModelsIcon from "@/app/Assets/sidebar-decision-models.svg";
import savingsIcon from "@/app/Assets/sidebar-savings.svg";
import loanRequestsIcon from "@/app/Assets/sidebar-loan-requests.svg";
import whitelistIcon from "@/app/Assets/sidebar-whitelist.svg";
import karmaIcon from "@/app/Assets/sidebar-karma.svg";
import loanProductsIcon from "@/app/Assets/sidebar-loan-products.svg";
import savingsProductsIcon from "@/app/Assets/sidebar-savings-products.svg";
import feesAndChargesIcon from "@/app/Assets/sidebar-fees-and -charges.svg";
import transactionsIcon from "@/app/Assets/sidebar-transactions.svg";
import servicesIcon from "@/app/Assets/sidebar-services.svg";
import serviceAccountIcon from "@/app/Assets/sidebar-service-account.svg";
import settlementsIcon from "@/app/Assets/sidebar-settlements.svg";
import reportsIcon from "@/app/Assets/sidebar-reports.svg";
import preferencesIcon from "@/app/Assets/sidebar-preferences.svg";
import feesAndPricingIcon from "@/app/Assets/sidebar-fees-and-pricing.svg";
import auditLogsIcon from "@/app/Assets/sidebar-audit-logs.svg";
import "./sidebar.css";

const SideBar = () => {
  // State to manage the visibility of the sidebar on mobile devices
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar open/close state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Hamburger Menu for Mobile View */}
      <div className={`sidebar-hamburger-menu ${isSidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Sidebar Container */}
      <div className={`sidebar-container ${isSidebarOpen ? 'active' : ''}`}>
      {/* Switch Organization Section */}
      <div aria-disabled className="switch-organization-container">
        {/* Icon representing switching organization */}
        <div className="briefcase-image-container">
          <Image 
            src={briefcase}
            alt="briefcase icon"
            width={20}
            height={20}
          />
        </div>
        {/* Text for switching organization */}
        <p className="switch-organization-text">Switch Organization</p>
        {/* Dropdown icon for switching organization */}
        <Image 
          src={dropdown}
          alt="dropdown"
          width={16}
          height={16}
        />
      </div>

      {/* Dashboard Indicator Section */}
      <div aria-disabled className="dashboard-indicator-container">
        {/* Icon representing dashboard */}
        <div className="house-image-container">
          <Image 
            src={house}
            alt="house icon"
            width={20}
            height={20}
          />
        </div>
        {/* Text for dashboard */}
        <p className="dashboard-indicator-text">Dashboard</p>
      </div>

      {/* Customers Section */}
      <div className="sub-tab-container">
        <p className="title">CUSTOMERS</p>
        {/* Users Sub-tab */}
        <div className="users sub-tab">
          <Image 
            src={usersIcon}
            alt="user icon"
            width={20}
            height={20}
          />
          <p className="sub-tab-text">Users</p>
        </div>
        {/* Guarantors Sub-tab */}
        <div className="sub-tab">
          <Image 
            src={guarantorIcon}
            alt="subtab icon"
            width={20}
            height={20}
          />
          <p className="sub-tab-text">Guarantors</p>
        </div>
        {/* Loans Sub-tab */}
        <div className="sub-tab">
          <Image 
            src={loansIcon}
            alt="subtab icon"
            width={20}
            height={20}
          />
          <p className="sub-tab-text">Loans</p>
        </div>
        {/* Decision Models Sub-tab */}
        <div className="sub-tab">
          <Image 
            src={decisionModelsIcon}
            alt="subtab icon"
            width={20}
            height={20}
          />
          <p className="sub-tab-text">Decision Models</p>
        </div>
        {/* Savings Sub-tab */}
        <div className="sub-tab">
          <Image 
            src={savingsIcon}
            alt="subtab icon"
            width={20}
            height={20}
          />
          <p className="sub-tab-text">Savings</p>
        </div>
        {/* Loan Requests Sub-tab */}
        <div className="sub-tab">
          <Image 
            src={loanRequestsIcon}
            alt="subtab icon"
            width={20}
            height={20}
          />
          <p className="sub-tab-text">Loan Requests</p>
        </div>
        {/* Whitelist Sub-tab */}
        <div className="sub-tab">
          <Image 
            src={whitelistIcon}
            alt="subtab icon"
            width={20}
            height={20}
          />
          <p className="sub-tab-text">Whitelist</p>
        </div>
        {/* Karma Sub-tab */}
        <div className="sub-tab">
          <Image 
            src={karmaIcon}
            alt="subtab icon"
            width={20}
            height={20}
          />
          <p className="sub-tab-text">Karma</p>
        </div>
      </div>

      {/* Businesses Section */}
      <div className="sub-tab-container">
        <p className="title">BUSINESSES</p>
        {/* Organization Sub-tab */}
        <div className="sub-tab">
          <Image 
            src={briefcase}
            alt="user icon"
            width={20}
            height={20}
          />
          <p className="sub-tab-text">Organization</p>
        </div>
        {/* Loan Products Sub-tab */}
        <div className="sub-tab">
          <Image 
            src={loanProductsIcon}
            alt="subtab icon"
            width={20}
            height={20}
          />
          <p className="sub-tab-text">Loan Products</p>
        </div>
        {/* Savings Products Sub-tab */}
        <div className="sub-tab">
          <Image 
            src={savingsProductsIcon}
            alt="subtab icon"
            width={20}
            height={20}
          />
          <p className="sub-tab-text">Savings Products</p>
        </div>
        {/* Fees and Charges Sub-tab */}
        <div className="sub-tab">
          <Image 
            src={feesAndChargesIcon}
            alt="subtab icon"
            width={20}
            height={20}
          />
          <p className="sub-tab-text">Fees and Charges</p>
        </div>
        {/* Transactions Sub-tab */}
        <div className="sub-tab">
          <Image 
            src={transactionsIcon}
            alt="subtab icon"
            width={20}
            height={20}
          />
          <p className="sub-tab-text">Transactions</p>
        </div>
        {/* Services Sub-tab */}
        <div className="sub-tab">
          <Image 
            src={servicesIcon}
            alt="subtab icon"
            width={20}
            height={20}
          />
          <p className="sub-tab-text">Services</p>
        </div>
        {/* Service Account Sub-tab */}
        <div className="sub-tab">
          <Image 
            src={serviceAccountIcon}
            alt="subtab icon"
            width={20}
            height={20}
          />
          <p className="sub-tab-text">Service Account</p>
        </div>
        {/* Settlements Sub-tab */}
        <div className="sub-tab">
          <Image 
            src={settlementsIcon}
            alt="subtab icon"
            width={20}
            height={20}
          />
          <p className="sub-tab-text">Settlements</p>
        </div>
        {/* Reports Sub-tab */}
        <div className="sub-tab">
          <Image 
            src={reportsIcon}
            alt="subtab icon"
            width={20}
            height={20}
          />
          <p className="sub-tab-text">Reports</p>
        </div>
      </div>

      {/* Settings Section */}
      <div className="sub-tab-container">
        <p className="title">SETTINGS</p>
        {/* Preferences Sub-tab */}
        <div className="sub-tab">
          <Image 
            src={preferencesIcon}
            alt="user icon"
            width={20}
            height={20}
          />
          <p className="sub-tab-text">Preferences</p>
        </div>
        {/* Fees and Pricing Sub-tab */}
        <div className="sub-tab">
          <Image 
            src={feesAndPricingIcon}
            alt="subtab icon"
            width={20}
            height={20}
          />
          <p className="sub-tab-text">Fees and Pricing</p>
        </div>
        {/* Audit Logs Sub-tab */}
        <div className="sub-tab">
          <Image 
            src={auditLogsIcon}
            alt="subtab icon"
            width={20}
            height={20}
          />
          <p className="sub-tab-text">Audit Logs</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default SideBar;
