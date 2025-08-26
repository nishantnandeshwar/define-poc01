import React, { useRef, useState } from "react";
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

  const applicatios = [
    {
      'COMMUNICATIONS': []
    },
    {
      'CLUB ACTIVITY': []
    },
    {
      'DINING': []
    },
    {
      'MEMBERSHIP': [
        { route: '/member-activities', value: 'Member Activities/Tracking' },
        { route: '/member-batch-edit', value: 'Member Batch Edit' },
        { route: '/member-dates-isting', value: 'Member Dates Listing' },
        { route: '/member-directory', value: 'Member Directory' },
        { route: '/member-export', value: 'Member Export' },
        { route: '/member-password', value: 'Member Passwords' },

         { route: '/member-activities', value: 'Member Activities/Tracking' },
        { route: '/member-batch-edit', value: 'Member Batch Edit' },
        { route: '/member-dates-isting', value: 'Member Dates Listing' },
        { route: '/member-directory', value: 'Member Directory' },
        { route: '/member-export', value: 'Member Export' },
        { route: '/member-password', value: 'Member Passwords' },
         { route: '/member-activities', value: 'Member Activities/Tracking' },
        { route: '/member-batch-edit', value: 'Member Batch Edit' },
        { route: '/member-dates-isting', value: 'Member Dates Listing' },
        { route: '/member-directory', value: 'Member Directory' },
        { route: '/member-export', value: 'Member Export' },
        { route: '/member-password', value: 'Member Passwords' },
         { route: '/member-activities', value: 'Member Activities/Tracking' },
        { route: '/member-batch-edit', value: 'Member Batch Edit' },
        { route: '/member-dates-isting', value: 'Member Dates Listing' },
        { route: '/member-directory', value: 'Member Directory' },
        { route: '/member-export', value: 'Member Export' },
        { route: '/member-password', value: 'Member Passwords' },
         { route: '/member-activities', value: 'Member Activities/Tracking' },
        { route: '/member-batch-edit', value: 'Member Batch Edit' },
        { route: '/member-dates-isting', value: 'Member Dates Listing' },
        { route: '/member-directory', value: 'Member Directory' },
        { route: '/member-export', value: 'Member Export' },
        { route: '/member-password', value: 'Member Passwords' },
      ]
    },
    {
      'ACCOUNT STATEMENTS': []
    },
  ]

  const [expanded, setExpanded] = useState<string | null>(null);
  const handleApplication = (header: string) => {
    setExpanded((prev) => (prev === header ? null : header));
  };

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
      <div className={styles.dashboardBodyContainer}>
        <div className={styles.dashboardCard}>
          <div className={styles.applicationHead}>
            <span className={styles.title}>APPLICATIONS</span>
          </div>
          <div className={styles.applicationBody}>
            <div className={styles.description}>
              Click a link below to expand the menu of applications
            </div>
            <div className={styles.applicationItemContainer}>
              {
                applicatios.map((item, index) => {
                  const header = Object.keys(item)[0];
                  const values = item[header as keyof typeof item] as {
                    route: string;
                    value: string;
                  }[];

                  return (
                    <div key={index} className={styles.section}>
                      <div className={styles.itemContainer} onClick={() => handleApplication(header)}>
                        <li className={styles.headerLabel}>
                          {expanded === header ? "-" : "+"} {header}
                        </li>
                      </div>
                      {expanded === header && values.length > 0 && (
                        <ul className={styles.subList}>
                          {values.map((subItem, subIndex) => (
                            <li key={subIndex} className={styles.subItem}>
                              <a href={subItem.route}>{subItem.value}</a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
