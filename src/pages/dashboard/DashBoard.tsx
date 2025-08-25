import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./Dashboard.css";
import { getReduxState } from "../../redux/store/Store";
import { useAppDispatch } from "../../utils";
import { logout } from "../../redux/actions/auth.action";


interface OutletContextType {
  onLogout?: () => void;
  token?: string;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const { onLogout, token } = useOutletContext<OutletContextType>();

  const dispatch = useAppDispatch();

  // const handleLogout = () => {
  //   onLogout?.();
  //   navigate("/", { replace: true });
  // };


  const logoutAndClearStore = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  }

  const handleMembership = () => {
    navigate("/membership-directory");
  };

  // console.log("getReduxState>>>", JSON.stringify(getReduxState()?.auth))

  function getUserName() {
    return getReduxState()?.auth.user.FirstName + " " + getReduxState()?.auth.user.LastName
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>Dashboard</h1>
        <p><strong>{getUserName()}</strong>, You are logged in ✅</p>

        <div className="dashboard-buttons">
          <button className="btn btn-membership" onClick={handleMembership}>
            Membership Directory
          </button>
          <button className="btn btn-logout" onClick={logoutAndClearStore}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
