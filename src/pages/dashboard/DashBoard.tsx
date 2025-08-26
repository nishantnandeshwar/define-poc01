import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styles from './Dashboard.module.css';
import { getReduxState } from "../../redux/store/Store";
import { useAppDispatch } from "../../utils";
import { logout } from "../../redux/actions/auth.action";


interface OutletContextType {
  onLogout?: (value: boolean) => void;
  isLogIn: boolean;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const { onLogout, isLogIn } = useOutletContext<OutletContextType>();
  const [optionMenuOpen, setOptionMenuOpen] = useState<boolean>(false);


  const dispatch = useAppDispatch();

  const logoutAndClearStore = () => {
    dispatch(logout());
    onLogout?.(false);
    navigate("/", { replace: true });
  }

  const handleMembership = () => {
    navigate("/membership-directory");
  };

  function getUserName() {
    return getReduxState()?.auth?.user?.FirstName + " " + getReduxState()?.auth?.user?.LastName
  }

  const handleOptionMenu = () => {
    setOptionMenuOpen(prev => !prev)
  }

  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.headerContainer}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={require('../../assets/images/member_first_logo.png')}
            alt="logo"
            className={styles.logoImg}
          />
          <div className={styles.verticalBar}></div>
          <span className={styles.mrmText}>MRM</span>
        </div>
        <div className={styles.userOuterContainer}>
          <button className={styles.userLogIn} onClick={handleOptionMenu}>
            <img
              src={require('../../assets/images/user.png')}
              alt="user-image"
              className={styles.userImg}
            />
            <span className={styles.userNameStyle}>{getUserName()}</span>
            <img
              src={optionMenuOpen ? require('../../assets/images/downArrow.png') : require('../../assets/images/upArrow.png')}
              alt="user-image"
              className={styles.userImg}
            />
          </button>
          {
            optionMenuOpen &&
            <div className={styles.optionMenuContainer}>
              <div className={styles.optionHeader}>
                {getUserName()}
              </div>
              <div className={styles.horizontalLine}></div>
              <button className={styles.optionTitle} onClick={logoutAndClearStore}>
                <img
                  src={require('../../assets/images/logout.png')}
                  alt="user-image"
                  className={styles.logOutImg}
                />
                <span className={styles.logOutText}>Logout</span>
              </button>
            </div>
          }

        </div>
      </header>
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardCard}>
          <h1>Dashboard</h1>
          <div className={styles.dashboardButtons}>
            <button
              className={`${styles.btn} ${styles.btnMembership}`}
              onClick={handleMembership}>
              Membership Directory
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
