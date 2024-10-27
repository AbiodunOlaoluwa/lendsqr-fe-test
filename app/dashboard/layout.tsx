import React from "react";
import NavBar from "../components/AppNavbar/NavBar";
import SideBar from "../components/AppSideBar/SideBar";
import "./dashboard.css";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dashboard-container">
      <NavBar />
      <div className="dashboard-body-container">
        <SideBar />
        <main className="dashboard-main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
