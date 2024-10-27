// This component displays the details of a specific user.
// "use client" directive is used to specify this as a client component in Next.js.
"use client";
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import leftArrow from "@/app/Assets/user-details-page-left-arrow.svg";
import avatar from "@/app/Assets/user-details-avatar.svg";
import filledStar from "@/app/Assets/fill-star.svg";
import emptyStar from "@/app/Assets/empty-star.svg";
import Image from 'next/image';
import "./userDetails.css";

// Defining a User interface to type-check the user's data.
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
  durationOfEmployment: string;
  officeEmail: string;
  guarantorFullName: string;
  guarantorPhoneNumber: string;
  guarantorEmailAddress: string;
  relationshipToGuarantor: string;
}

const UserDetailsPage: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  // useEffect hook to retrieve user data from localStorage based on the user ID from the pathname.
  useEffect(() => {
    // Extract the user ID from the pathname.
    const userId = pathname.split('/').pop();
    if (userId) {
      const storedUsers = localStorage.getItem('usersData');
      if (storedUsers) {
        // Parse the stored user data from JSON and find the user by ID.
        const parsedUsers: User[] = JSON.parse(storedUsers);
        const foundUser = parsedUsers[parseInt(userId) - 1];
        if (foundUser) {
          setUser(foundUser);
        }
      }
    }
  }, [pathname]);

  // Display a loading message while user data is being fetched.
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-details-page-container">
      {/* Back button to navigate back to the users list */}
      <div className="back-to-users" onClick={() => router.push('/dashboard/users')}>
        <Image
          src={leftArrow}
          alt='left arrow'
          width={30}
          height={10}
        />
        <p className="back-to-users-text">Back to Users</p>
      </div>
      
      {/* Page header block containing user status buttons */}
      <div className="page-header-block">
        <p className="page-header-text">User Details</p>
        <div className="user-status-buttons">
          <button disabled className="blacklist-button">BLACKLIST USER</button>
          <button disabled className="activate-button">ACTIVATE USER</button>
        </div>
      </div>
      
      {/* User details header containing general information */}
      <div className="user-details-header">
        <div className="user-info-container">
          <div className="user-info">
            <Image
              src={avatar}
              alt='avatar'
            />
            <div className="user-info-text">
              <h2>{user.fullName}</h2>
              <p>{user.id}</p>
            </div>
          </div>
          
          {/* User tier representation */}
          <div className="user-tier">
            <p>User&apos;s Tier</p>
            <div className="stars">
              <Image
                src={filledStar}
                alt='filled in star'
              />
              <Image
                src={emptyStar}
                alt='empty star'
              />
              <Image
                src={emptyStar}
                alt='empty star'
              />
            </div>
          </div>
          
          {/* User balance information */}
          <div className="user-balance-container">
            <h2>₦200,000.00</h2>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>
        
        {/* Tabs for different user details sections */}
        <div className="user-details-tabs">
          <button className="tab active">General Details</button>
          <button className="tab">Documents</button>
          <button className="tab">Bank Details</button>
          <button className="tab">Loans</button>
          <button className="tab">Savings</button>
          <button className="tab">App and System</button>
        </div>
      </div>
      
      {/* User details content sections */}
      <div className="user-details-content">
        {/* Personal Information Section */}
        <div className="personal-info">
          <div className="content-header">
            <h2>Personal Information</h2>
          </div>
          <div className="content-body">
            {/* Personal information fields */}
            <div className="content-body-text">
              <h3>FULL NAME</h3>
              <p>{user.fullName}</p>
            </div>
            <div className="content-body-text">
              <h3>PHONE NUMBER</h3>
              <p>{user.phone}</p>
            </div>
            <div className="content-body-text">
              <h3>EMAIL ADDRESS</h3>
              <p>{user.email}</p>
            </div>
            <div className="content-body-text">
              <h3>BVN</h3>
              <p>{user.bvn}</p>
            </div>
            <div className="content-body-text">
              <h3>GENDER</h3>
              <p>{user.gender}</p>
            </div>
            <div className="content-body-text">
              <h3>MARITAL STATUS</h3>
              <p>{user.maritalStatus}</p>
            </div>
            <div className="content-body-text">
              <h3>CHILDREN</h3>
              <p>{user.children}</p>
            </div>
            <div className="content-body-text">
              <h3>TYPE OF RESIDENCE</h3>
              <p>{user.typeOfResidence}</p>
            </div>
          </div>
        </div>
        
        {/* Education and Employment Section */}
        <div className="education-employment">
          <div className="content-header">
            <h2>Education and Employment</h2>
          </div>
          <div className="content-body">
            {/* Education and employment fields */}
            <div className="content-body-text">
              <h3>LEVEL OF EDUCATION</h3>
              <p>{user.levelOfEducation}</p>
            </div>
            <div className="content-body-text">
              <h3>EMPLOYMENT STATUS</h3>
              <p>{user.employmentStatus}</p>
            </div>
            <div className="content-body-text">
              <h3>SECTOR OF EMPLOYMENT</h3>
              <p>{user.sectorOfEmployment}</p>
            </div>
            <div className="content-body-text">
              <h3>DURATION OF EMPLOYMENT</h3>
              <p>{user.durationOfEmployment} Months</p>
            </div>
            <div className="content-body-text">
              <h3>OFFICE EMAIL</h3>
              <p>{user.officeEmail}</p>
            </div>
            <div className="content-body-text">
              <h3>MONTHLY INCOME</h3>
              <p>{user.monthlyIncome}</p>
            </div>
            <div className="content-body-text">
              <h3>LOAN REPAYMENT</h3>
              <p>{user.loanRepayment}</p>
            </div>
          </div>
        </div>
        
        {/* Socials Section */}
        <div className="socials">
          <div className="content-header">
            <h2>Socials</h2>
          </div>
          <div className="content-body">
            {/* Social media fields */}
            <div className="content-body-text">
              <h3>TWITTER</h3>
              <a href={user.twitter}><p>Visit</p></a>
            </div>
            <div className="content-body-text">
              <h3>FACEBOOK</h3>
              <a href={user.facebook}><p>Visit</p></a>
            </div>
            <div className="content-body-text">
              <h3>INSTAGRAM</h3>
              <a href={user.instagram}><p>Visit</p></a>
            </div>
          </div>
        </div>
        
        {/* Guarantor Information Section */}
        <div className="guarantor-info">
          <div className="content-header">
            <h2>Guarantor</h2>
          </div>
          <div className="content-body">
            {/* Guarantor information fields */}
            <div className="content-body-text">
              <h3>FULL NAME</h3>
              <p>{user.guarantorFullName}</p>
            </div>
            <div className="content-body-text">
              <h3>PHONE NUMBER</h3>
              <p>{user.guarantorPhoneNumber}</p>
            </div>
            <div className="content-body-text">
              <h3>EMAIL ADDRESS</h3>
              <p>{user.guarantorEmailAddress}</p>
            </div>
            <div className="content-body-text">
              <h3>RELATIONSHIP</h3>
              <p>{user.relationshipToGuarantor}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
