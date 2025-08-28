import { useNavigate, useOutletContext } from "react-router-dom";
import { useAppDispatch } from "../../utils";
import { logout } from "../../redux/actions/auth.action";
import { getReduxState } from "../../redux/store/Store";
import { faLock, faPowerOff, faCircleQuestion, faGears, faUser, faChevronDown, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface OutletContextType {
    onLogout?: (value: boolean) => void;
    isLogIn: boolean;
}
const Header = () => {
    const { onLogout, isLogIn } = useOutletContext<OutletContextType>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [optionMenuOpen, setOptionMenuOpen] = useState(false);

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
    return (
        <header className="d-flex flex-column flex-md-row justify-content-between px-md-4 py-md-3 bg-white">
            <div className="header-left d-flex justify-content-start align-items-center py-2 px-3 px-md-0 py-md-0">
                <img
                    src={require('../../assets/images/MFLogo-2019.png')}
                    alt="logo"
                    className="header-logo w-auto"
                />
            </div>
            <div className="header-right d-flex flex-row justify-content-between justify-content-md-end justify-content-xl-between align-items-center p-2 p-md-0">
                <div className="d-flex flex-row justify-content-end align-items-center">
                    <div className="btn-group border-0 border-start hide-border-start-down-md border-light rounded-0 ps-1 ps-sm-3 ms-1 ms-sm-3">
                        <div className="dropdown-toggle d-flex align-items-center hide-arrow hide" data-bs-toggle="dropdown" aria-expanded="false" role="button" onClick={() => setOptionMenuOpen(prev => !prev)} >
                            <div className="d-flex bg-light rounded-1 align-items-center">
                                <FontAwesomeIcon icon={faUser} className="me-2 h5 px-2 py-2 border-white border-end mb-0" />
                                <h5 className="ps-3 pe-2 py-2 border-white border-end mb-0 rounded-1">{getUserName()}</h5>
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className="ps-2 pe-2 py-2 border-white border-end d-flex align-items-center rounded-1"
                                    style={{
                                        transform: optionMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                                        transition: "transform 0.3s ease",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="dropdown-menu fade-in dropdown-menu-end mt-1 mt-xl-3 rounded-3 border-0 shadow-sm p-0">
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

export default Header;