import NavBar from "../components/AppNavbar/NavBar";
import SideBar from "../components/AppSideBar/SideBar";
import "./dashboard.css";

const Page = () => {
  return (
    <div className="dashboard-container">
      <NavBar />
      <div className="dashboard-body-container">
        <SideBar />
      </div>
    </div>
  )
}

export default Page