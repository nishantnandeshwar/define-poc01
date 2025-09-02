import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import './Header.css';
import { useAppDispatch } from '../../utils';
import { useState } from 'react';
import { logout } from '../../redux/actions/auth.action';
import { getReduxState } from '../../redux/store/Store';
import { faLock, faPowerOff, faCircleQuestion, faGears } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface OutletContextType {
    onLogout?: (value: boolean) => void;
    isLogIn: boolean;
}
const NewHeader = () => {
    const { onLogout, isLogIn } = useOutletContext<OutletContextType>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [optionMenuOpen, setOptionMenuOpen] = useState(false);
    const location = useLocation();

    const handleOptions = (value: string) => {
        switch (value) {
            case "logout":
                dispatch(logout());
                onLogout?.(false);
                navigate("/", { replace: true });
                break;
            case "Learning_Center":
                alert("Learning_Center click")
                break;
            case "Preferences":
                alert("Preferences click")
                break;
            case "Security_Score":
                alert("Security_Score click")
                break;
            default:
                break;
        }
    }
    const getUserName = () => {
        return getReduxState()?.auth?.user?.FirstName + " " + getReduxState()?.auth?.user?.LastName
    }

    const filterScreenHeaderOptions = [
        { title: "List", icon: <i className="fa-solid fa-list me-1"></i> },
        { title: "New", icon: <i className="fa-solid fa-circle-plus me-1"></i> },
        { title: "Related", icon: <i className="fa-solid fa-circle-chevron-down me-1"></i> },
        { title: "Summary", icon: <i className="fa-solid fa-circle-exclamation me-1"></i> },
    ]

    const actionOnHeaderOption = (value: string) => { // used in member-profile
        switch (value) {
            case "List":
                if (location.pathname !== "/member-profile") navigate("/member-profile", { replace: false, state: { screenName: 'List' } });
                break;
            case "New":
                if (location.pathname !== "/add-new-members") navigate("/add-new-members", { replace: false, state: { screenName: 'New' } });
                break;
            case "Related":
                alert(`you click on ${value}`)
                break;
            case "Summary":
                alert(`you click on ${value}`)
                break;
            default: break
        }
    }
    return (
        <header className="d-flex flex-column flex-md-row justify-content-between px-md-4 py-md-2 bg-white">
            {/* hamburger menu */}
            <div
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id="mobileSidebar"
                aria-labelledby="mobileSidebarLabel"
            >
                <div className="offcanvas-header">
                    <h5 id="mobileSidebarLabel">Menu</h5>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>

                <div className="offcanvas-body d-flex flex-column">
                    <div className="border-bottom pb-3 mb-3">
                        <div className="d-flex align-items-center">
                            <i className="fa-regular fa-user me-2"></i>
                            <div>
                                <h6 className="mb-0">{getUserName()}</h6>
                                <small>Club Administrator</small>
                            </div>
                        </div>
                    </div>

                    <ul className="list-unstyled flex-grow-1">
                        {filterScreenHeaderOptions.map((list, index) => (
                            <li key={index} className="mb-2">
                                <button
                                    className={`btn w-100 text-start ${location.state?.screenName === list.title ? "btn-active" : ""
                                        }`}
                                    onClick={() => {
                                        actionOnHeaderOption(list.title);
                                        // Close sidebar after navigation
                                        document.querySelector<HTMLButtonElement>(
                                            '[data-bs-dismiss="offcanvas"]'
                                        )?.click();
                                    }}
                                >
                                    {list.icon} {list.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="header-left d-flex justify-content-start align-items-center py-2 px-3 px-md-0 py-md-0">
                <img
                    src={require('../../assets/images/MFLogo-2019.png')}
                    alt="logo"
                    className="header-logo w-auto"
                />
            </div>
            <div className="header-right d-flex flex-row justify-content-between justify-content-md-end justify-content-xl-between align-items-center p-2 p-md-0">
                <div className="d-flex flex-row justify-content-end align-items-center">
                    {
                        (location.pathname == "/member-profile" || location.pathname == "/add-new-members") &&
                        <div className="d-none d-md-block">
                            <div className="header-buttons">
                                {filterScreenHeaderOptions.map((list, index) => (
                                    <button
                                        className={`btn small text-start mb-xl-0 me-xl-1 ${location.state.screenName == list.title ? "btn-active" : ""}`}
                                        key={index}
                                        onClick={() => actionOnHeaderOption(list.title)}
                                    >
                                        {list.icon} {list.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    }
                    <div className="btn-group border-0 border-start hide-border-start-down-md border-light rounded-0 ps-1 ps-sm-3 ms-1 ms-sm-3">
                        <div className="dropdown-toggle d-flex align-items-center hide-arrow hide" data-bs-toggle="dropdown" aria-expanded="false" role="button" onClick={() => setOptionMenuOpen(prev => !prev)} >
                            <div className="d-flex bg-light rounded-1 align-items-center">
                                <i className="h5 border-white border-end mb-0 fa-regular fa-user icon-padding"></i>
                                <h5 className="ps-3 pe-2 py-2 border-white border-end mb-0 rounded-1">{getUserName()}</h5>
                                <i className=" border-white border-end fa-solid fa-chevron-down d-flex align-items-center rounded-1 icon-padding"></i>
                            </div>
                        </div>
                        <button
                            className="btn d-md-none ms-2"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#mobileSidebar"
                            aria-controls="mobileSidebar"
                        >
                            <i className="fa-solid fa-bars"></i>
                        </button>

                        <div className="dropdown-menu fade-in dropdown-menu-end mt-1 mt-xl-3 rounded-3 border-0 shadow-sm p-0 w-14rem">
                            <div className="d-flex flex-column p-0">
                                <div className="d-flex flex-column justify-content-start align-items-start border-bottom p-2 p-md-3 mb-0">
                                    <h5 className="mb-1">Define Admin</h5>
                                    <small>Club Administrator</small>
                                </div>
                                <div className="d-flex flex-column justify-content-start align-items-start border-bottom p-1 p-md-2 mb-0">
                                    <button
                                        onClick={() => handleOptions("Learning_Center")}
                                        className="d-flex justify-content-start align-items-center bg-light w-100 px-2 py-2 rounded-1 text-primary hover-primary mb-1">
                                        <FontAwesomeIcon icon={faCircleQuestion} className="me-2" />
                                        <span>Learning Center</span>
                                    </button>
                                    <button
                                        onClick={() => handleOptions("Preferences")}
                                        className="d-flex justify-content-start align-items-center bg-light w-100 px-2 py-2 rounded-1 text-primary hover-primary mb-1">
                                        <FontAwesomeIcon icon={faGears} className="me-2" />
                                        <span>Preferences</span>
                                    </button>
                                    <button
                                        onClick={() => handleOptions("Security_Score")}
                                        className="d-flex justify-content-start align-items-center bg-light w-100 px-2 py-2 rounded-1 text-orange hover-orange pointer mb-0">
                                        <FontAwesomeIcon icon={faLock} className="me-2" />
                                        <span> Security Score: <span>D : 67%</span></span>
                                    </button>
                                </div>
                                <div className="d-flex flex-column justify-content-start align-items-start p-1 p-md-2">
                                    <button
                                        onClick={() => handleOptions("logout")}
                                        className="d-flex justify-content-start align-items-center bg-light w-100 px-2 py-2 rounded-1 text-danger hover-red">
                                        <FontAwesomeIcon icon={faPowerOff} className="me-2" />
                                        <span>Logout</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NewHeader