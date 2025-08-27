import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import { getReduxState } from "../../redux/store/Store";
import { logout } from "../../redux/actions/auth.action";
import { useAppDispatch } from "../../utils";
import { useNavigate, useOutletContext } from "react-router-dom";
import { dashBoardData } from "./constant/DashBoardConstant";

interface OutletContextType {
    onLogout?: (value: boolean) => void;
    isLogIn: boolean;
}


const Dashboard: React.FC = () => {
    const [openCards, setOpenCards] = useState<string[]>([]);
    const [optionMenuOpen, setOptionMenuOpen] = useState<boolean>(false);
    const { onLogout, isLogIn } = useOutletContext<OutletContextType>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const toggleCard = (id: string) => {
        setOpenCards((prev) =>
            prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
        );
    };

    function getUserName() {
        return getReduxState()?.auth?.user?.FirstName + " " + getReduxState()?.auth?.user?.LastName
    }

    const handleOptionMenu = () => {
        setOptionMenuOpen(prev => !prev)
    }

    const logoutAndClearStore = () => {
        dispatch(logout());
        onLogout?.(false);
        navigate("/", { replace: true });
    }

    return (
        <div className={styles.dashboardContainer}>
            <header className={styles.header}>
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

            <main className={styles.body}>
                <div className={styles.cardsContainer}>
                    {dashBoardData.map((itemList, idx) => {
                        const key = Object.keys(itemList)[0];
                        const children = itemList[key as keyof typeof itemList] as {
                            route: string;
                            value: string;
                        }[];

                        return (
                            <div key={idx} className={styles.card}>
                                <div className={styles.cardHeader} onClick={() => toggleCard(key)} >
                                    <span className={styles.headerTitle}>
                                        {key}
                                    </span>
                                    {
                                        <span className={styles.toggleIcon}>
                                            {openCards.includes(key) ?
                                                <img
                                                    src={require('../../assets/images/downArrow.png')}
                                                    alt="down-arrow-image"
                                                    className={styles.updownArrowImg}
                                                />
                                                :
                                                <img
                                                    src={require('../../assets/images/upArrow.png')}
                                                    alt="up-arrow-image"
                                                    className={styles.updownArrowImg}
                                                />
                                            }
                                        </span>
                                    }
                                </div>

                                {
                                    openCards.includes(key) && children?.length > 0 && (
                                        <div className={styles.cardBody}>
                                            {children.map((child, idx2) => (
                                                <div key={idx2} className={styles.childContainer}>
                                                    <a href={child.route}>{child.value}</a>
                                                </div>
                                            ))}
                                        </div>
                                    )
                                }
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
