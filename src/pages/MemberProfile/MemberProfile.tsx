import { useEffect, useRef, useState } from 'react';
import Header from '../header/Header';
import './MemberProfile.css';
import { useNavigate } from 'react-router-dom';
import LoaderModal from '../../components/loader/LoaderModal';
import { memberListService } from '../../redux/actions/memberList.action';
import { useAppDispatch } from '../../utils';
import { MEMBER_LIST_ACTION_TYPES } from '../../redux/types/memberList.type';


type Member = {
    id: number;
    firstName: string;
    username: string;
    email: string;
    ip: string;
    phone: string;
    role: string;
    gender: string;
    bloodGroup: string;
};


const MemberProfile = () => {
    const quickSearchCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "! A-Z"]

    const [membersList, setMembersList] = useState<Member[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const [totalPage, setTotalPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const LIMIT = 30
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log("useEffect call")
        fetchPage(1);
    }, []);

    const fetchPage = async (page: number) => {
        try {
            console.log("fetchPage call for page:", page)
            setLoading(true);
            setCurrentPage(page)
            const requestBody = {
                limit: LIMIT, skip: (LIMIT * (page - 1)),
                select: "id,firstName,username,ip,phone,email,role,gender,bloodGroup"
            }

            const data: any = await dispatch(memberListService(requestBody));
            if (data.type === MEMBER_LIST_ACTION_TYPES.MEMBER_LIST_SUCCESS) {
                setMembersList(data.payload.users)
                setTotalPage(Math.ceil(data.payload.total / LIMIT))
            }
        } catch (e) {
            alert("Failed to fetch members.");
        } finally {
            setLoading(false);
        }
    };

    const handleNext = () => {

        if (currentPage < totalPage) {
            fetchPage(currentPage + 1)
        }
    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            fetchPage(currentPage - 1)
        }
    }

    const navigateInDetail = (item: Member) => {
        navigate("/detail-members", { state: { member: item } });
    }


    return (
        <div>
            <Header />
            <main className="container-lg container-fluid mt-2 mt-lg-2" id="main-container" >
                <section className="breadcrumb-section w-100 d-flex mb-3">
                    <div className="d-flex align-items-center px-3 py-2 bg-white text-primary rounded-2 shadow-2 me-2 card-30">
                        <i className="fa-solid fa-desktop me-2"></i>
                        <strong>Project Management Site #1</strong>
                    </div>
                    <nav aria-label="breadcrumb" className="d-flex justify-content-start align-items-center flex-1 px-3 py-2 bg-white rounded-2 shadow-2 card-70">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item text-primary"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Member Directory</li>
                        </ol>
                    </nav>
                </section>

                {/* Tab Content  */}
                <div className="tab-content member-all-tabs">
                    <div className="tab-pane fade show active" id="MemberList" role="tabpanel" aria-labelledby="MemberList-tab">
                        <section className="w-100 d-flex mb-3 ">
                            <div className="d-flex flex-1 align-items-center px-3 py-2 bg-white rounded-2 shadow-2 card-100">
                                <strong className="me-2">Email Address htmlFor Member Profile changes:</strong>
                                <a href="page_navig_admin.html">Update</a>
                            </div>
                        </section>

                        <section className="tab-section">
                            <ul className="nav nav-tabs" id="member-list-tabs" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link me-1 active"
                                        id="member-list-tab-1"
                                        data-bs-toggle="tab"
                                        data-bs-target="#member-list-content-1"
                                        type="button"
                                        role="tab"
                                        aria-controls="member-list-content-1"
                                        aria-selected="true">
                                        General
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link"
                                        id="member-list-tab-2"
                                        data-bs-toggle="tab"
                                        data-bs-target="#member-list-content-2"
                                        type="button"
                                        role="tab"
                                        aria-controls="member-list-content-2"
                                        aria-selected="false">
                                        Advanced
                                    </button>
                                </li>
                            </ul>

                            <div className="tab-content" id="member-list-tabs-content">
                                <div className="tab-pane fade show active"
                                    id="member-list-content-1"
                                    role="tabpanel"
                                    aria-labelledby="member-list-tab-1">

                                    <div className="d-flex flex-column px-3 py-2 bg-white rounded-2 navTab-shodow">
                                        <div className="row g-3 flex-wrap mt-0 px-2 pb-3 bg-light rounded">
                                            <div className="col-6 col-md-4 col-lg-3 col-xl">
                                                <label htmlFor="member-no" className="form-label mb-1 fs-12">Member No:</label>
                                                <input type="number" placeholder="Member No" className="form-control" id="member-no" />
                                            </div>
                                            <div className="col-6 col-md-4 col-lg-3 col-xl">
                                                <label htmlFor="member-card-id" className="form-label mb-1 fs-12">Card ID:</label>
                                                <input type="text" className="form-control" id="member-card-id" placeholder="Card ID" />
                                            </div>
                                            <div className="col-6 col-md-4 col-lg-3 col-xl">
                                                <label htmlFor="username" className="form-label mb-1 fs-12">Username:</label>
                                                <input type="text" className="form-control" id="username" placeholder="Username" />
                                            </div>
                                            <div className="col-6 col-md-4 col-lg-3 col-xl">
                                                <label htmlFor="first-name" className="form-label mb-1 fs-12">First Name:</label>
                                                <input type="text" className="form-control" id="first-name" placeholder="First Name" />
                                            </div>
                                            <div className="col-6 col-md-4 col-lg-3 col-xl">
                                                <label htmlFor="last-name" className="form-label mb-1 fs-12">Last Name:</label>
                                                <input type="text" className="form-control" id="last-name" placeholder="Last Name" />
                                            </div>
                                            <div className="col-6 col-md-4 col-lg-3 col-xl">
                                                <label htmlFor="email" className="form-label mb-1 fs-12">Email Address:</label>
                                                <input type="email" className="form-control" id="email" placeholder="Email Address" />
                                            </div>
                                            <div className="col-6 col-md-4 col-lg-3 col-xl">
                                                <label htmlFor="city" className="form-label mb-1 fs-12">City:</label>
                                                <input type="text" className="form-control" id="city" placeholder="City" />
                                            </div>
                                        </div>

                                        <div className="row g-3 flex-wrap mt-2 px-2 pb-3 bg-light rounded">
                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="member-type" className="form-label mb-1 fs-12">Member Type:</label>
                                                <select className="form-select" id="member-type" defaultValue="">
                                                    <option value="">Member Type</option>
                                                    <option value="regular">Regular</option>
                                                    <option value="premium">Premium</option>
                                                    <option value="vip">VIP</option>
                                                </select>
                                            </div>

                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="member-group" className="form-label mb-1 fs-12">Member Group:</label>
                                                <select className="form-select" id="member-group" defaultValue="">
                                                    <option value="" >Member Group</option>
                                                    <option value="group1">Group 1</option>
                                                    <option value="group2">Group 2</option>
                                                    <option value="group3">Group 3</option>
                                                </select>
                                            </div>

                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="member-status" className="form-label mb-1 fs-12">Member Status:</label>
                                                <select className="form-select" id="member-status" defaultValue="">
                                                    <option value="" >Member Status</option>
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
                                                    <option value="pending">Pending</option>
                                                </select>
                                            </div>

                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="activity-selected" className="form-label mb-1 fs-12">Activity Selected:</label>
                                                <select className="form-select" id="activity-selected" defaultValue="">
                                                    <option value="" >Activity</option>
                                                    <option value="golf">Golf</option>
                                                    <option value="tennis">Tennis</option>
                                                    <option value="swimming">Swimming</option>
                                                </select>
                                            </div>

                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="tracking-selected" className="form-label mb-1 fs-12">Tracking Selected:</label>
                                                <select className="form-select" id="tracking-selected" defaultValue="">
                                                    <option value="" >Tracking</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
                                            </div>

                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="state" className="form-label mb-1 fs-12">State:</label>
                                                <select className="form-select" id="state" defaultValue="">
                                                    <option value="" >State</option>
                                                    <option value="state1">State 1</option>
                                                    <option value="state2">State 2</option>
                                                    <option value="state3">State 3</option>
                                                </select>
                                            </div>

                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="country" className="form-label mb-1 fs-12">Country:</label>
                                                <select className="form-select" id="country" defaultValue="">
                                                    <option value="" >Country</option>
                                                    <option value="india">India</option>
                                                    <option value="usa">USA</option>
                                                    <option value="uk">UK</option>
                                                </select>
                                            </div>

                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="member-org" className="form-label mb-1 fs-12">Member Org:</label>
                                                <select className="form-select" id="member-org" defaultValue="">
                                                    <option value="" >Member Org</option>
                                                    <option value="org1">Org 1</option>
                                                    <option value="org2">Org 2</option>
                                                </select>
                                            </div>

                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="email-address" className="form-label mb-1 fs-12">Email Address:</label>
                                                <select className="form-select" id="email-address" defaultValue="">
                                                    <option value="" >Email Option</option>
                                                    <option value="personal">Personal</option>
                                                    <option value="work">Work</option>
                                                </select>
                                            </div>

                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="active" className="form-label mb-1 fs-12">Active:</label>
                                                <select className="form-select" id="active" defaultValue="">
                                                    <option value="" >Is Active?</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
                                            </div>

                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="hidden" className="form-label mb-1 fs-12">Hidden:</label>
                                                <select className="form-select" id="hidden" defaultValue="">
                                                    <option value="" >Is Hidden?</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
                                            </div>

                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="gender" className="form-label mb-1 fs-12">Gender:</label>
                                                <select className="form-select" id="gender" defaultValue="">
                                                    <option value="" >Gender</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>

                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="term-reason" className="form-label mb-1 fs-12">Term Reason:</label>
                                                <select className="form-select" id="term-reason" defaultValue="">
                                                    <option value="" >Reason</option>
                                                    <option value="expired">Membership Expired</option>
                                                    <option value="voluntary">Voluntary Termination</option>
                                                    <option value="ban">Banned</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="tab-pane fade"
                                    id="member-list-content-2"
                                    role="tabpanel"
                                    aria-labelledby="member-list-tab-2">
                                    <div className="d-flex flex-column px-3 py-2 bg-white rounded-2 navTab-shodow">
                                        <div className="row g-3 flex-wrap mt-0 px-2 pb-3 bg-light rounded">
                                            {/* Search Date Type  */}
                                            <div className="col-6 col-md-4 col-xl-4">
                                                <label htmlFor="search-date-type" className="form-label mb-1 fs-12">Search Date Type:</label>
                                                <select id="search-date-type" className="form-select" defaultValue="">
                                                    <option value="" >Select Date Type</option>
                                                    <option value="created">Created Date</option>
                                                    <option value="updated">Updated Date</option>
                                                    <option value="last-login">Last Login</option>
                                                </select>
                                            </div>

                                            {/* Search Date Range Start  */}
                                            <div className="col-6 col-md-4 col-xl-4">
                                                <label htmlFor="search-date-start" className="form-label mb-1 fs-12">Search Date Start:</label>
                                                <input type="date" id="search-date-start" className="form-control" placeholder="Start Date" />
                                            </div>

                                            {/* Search Date Range End  */}
                                            <div className="col-6 col-md-4 col-xl-4">
                                                <label htmlFor="search-date-end" className="form-label mb-1 fs-12">Search Date End:</label>
                                                <input type="date" id="search-date-end" className="form-control" placeholder="End Date" />
                                            </div>

                                            {/* <!-- Search Text --> */}
                                            <div className="col-6 col-md-4 col-xl">
                                                <label htmlFor="search-text" className="form-label mb-1 fs-12">Search Text:</label>
                                                <input type="text" id="search-text" className="form-control" placeholder="Enter keyword" />
                                            </div>

                                            {/* <!-- Member Images --> */}
                                            <div className="col-6 col-md-4 col-xl">
                                                <label htmlFor="member-images" className="form-label mb-1 fs-12">Member Images:</label>
                                                <select id="member-images" className="form-select" defaultValue="">
                                                    <option value="" >Select Option</option>
                                                    <option value="with">With Images</option>
                                                    <option value="without">Without Images</option>
                                                </select>
                                            </div>

                                            {/* <!-- Select Parent --> */}
                                            <div className="col-6 col-md-4 col-xl">
                                                <label htmlFor="select-parent" className="form-label mb-1 fs-12">Select Parent:</label>
                                                <select id="select-parent" className="form-select" defaultValue="">
                                                    <option value="" >Select Parent</option>
                                                    <option value="parent1">Parent 1</option>
                                                    <option value="parent2">Parent 2</option>
                                                    <option value="parent3">Parent 3</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-start align-items-center p-2 bg-white rounded-2 shadow-2 mt-1">
                                <button type="button" className="btn btn-outline-secondary hover-primary text-start me-2">
                                    <i className="fa-solid fa-magnifying-glass me-1"></i>
                                    <span>Search</span>
                                </button>
                                <button type="button" className="btn btn-outline-secondary text-start">
                                    <i className="fa-solid fa-broom me-1"></i>
                                    <span>Clear</span>
                                </button>
                            </div>
                        </section>

                        {/* Quick Search bar */}
                        <section className="quick-search-section rounded-2 shadow-2 mt-3 mt-lg-4">
                            <div className="quick-search-head">
                                <h5 className="font-2 bg-dark-primary text-white text-uppercase px-3 py-2 mb-0 rounded-2 d-flex justify-content-between align-items-center">
                                    Quick Search by Name
                                    <button type="button" className="btn btn-outline-light btn-sm hover-primary pointer fs-12 py-0 text-start ms-3 rounded-5"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Click Letter to Search"
                                    // data-bs-custom-className="tooltip-size"
                                    >
                                        <i className="fa-solid fa-info"></i>
                                    </button>
                                </h5>
                            </div>

                            <div className="px-3">
                                <div className="row g-3 flex-wrap mt-2 px-2 pb-3 bg-light rounded">
                                    {/* <!-- Match Name --> */}
                                    <div className="col-6 col-md-4 col-lg-3 col-xl">
                                        <label htmlFor="match-name" className="form-label mb-1 fs-12">Match Name:</label>
                                        <select id="match-name" className="form-select" defaultValue="">
                                            <option value="" >Match Name</option>
                                            <option value="match1">Match 1</option>
                                            <option value="match2">Match 2</option>
                                            <option value="match3">Match 3</option>
                                        </select>
                                    </div>

                                    {/* <!-- with EMail Status --> */}
                                    <div className="col-6 col-md-4 col-lg-3 col-xl">
                                        <label htmlFor="email-status" className="form-label mb-1 fs-12">With Email Status:</label>
                                        <select id="email-status" className="form-select" defaultValue="">
                                            <option value="" >Email Status</option>
                                            <option value="sent">Sent</option>
                                            <option value="not-sent">Not Sent</option>
                                            <option value="bounced">Bounced</option>
                                        </select>
                                    </div>

                                    {/* <!-- Website Active --> */}
                                    <div className="col-6 col-md-4 col-lg-3 col-xl">
                                        <label htmlFor="website-active" className="form-label mb-1 fs-12">Website Active:</label>
                                        <select id="website-active" className="form-select" defaultValue="">
                                            <option value="" >Status</option>
                                            <option value="active">Active</option>
                                            <option value="inactive">Inactive</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="d-flex justify-content-start align-items-center flex-wrap p-2 bg-light rounded search-letter-holder">
                                    {
                                        quickSearchCharacter.map((item: string, index: number) =>
                                            <button type="button" className="btn-letter btn btn-outline-secondary hover-primary btn-flex-1" key={index}>{item}</button>
                                        )
                                    }
                                </div>
                            </div>
                        </section>

                        {/* Member list Table */}
                        <section className="quick-search-table-section p-2 rounded-2 shadow-2 mt-3 mt-lg-4">
                            <div className="table-responsive" >
                                <table className="table table-bordered table-striped mb-0 rounded-2" >
                                    <thead className="bg-primary text-white">
                                        <tr>
                                            <th className="bg-dark-primary border border-light text-white" scope="col">Member Id</th>
                                            <th className="bg-dark-primary border border-light text-white" scope="col">Member Name</th>
                                            <th className="bg-dark-primary border border-light text-white" scope="col">User Name</th>
                                            <th className="bg-dark-primary border border-light text-white" scope="col">IP</th>
                                            <th className="bg-dark-primary border border-light text-white" scope="col">Phone</th>
                                            <th className="bg-dark-primary border border-light text-white" scope="col">Email</th>
                                            <th className="bg-dark-primary border border-light text-white" scope="col">Member Type</th>
                                            <th className="bg-dark-primary border border-light text-white text-center" scope="col">Gender</th>
                                            <th className="bg-dark-primary border border-light text-white text-center" scope="col">Blood Group</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {membersList?.map((m) => (
                                            <tr key={m.id}
                                                onClick={() => navigateInDetail(m)}
                                                className='pointer'
                                            >
                                                <td>{m.id}</td>
                                                <td>{m.firstName}</td>
                                                <td>{m.username}</td>
                                                <td>{m.ip}</td>
                                                <td>{m.phone}</td>
                                                <td>{m.email}</td>
                                                <td>{m.role}</td>
                                                <td>{m.gender}</td>
                                                <td>{m.bloodGroup}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="d-flex justify-content-center align-items-center p-2 bg-white rounded-2 shadow-2 mt-1 gap-3">
                                    <button type="button" className="btn btn-outline-secondary text-start" onClick={handlePrevious} disabled={currentPage <= 1 ? true : false}>
                                        <i className="fa-solid fa-angle-left me-1"></i>
                                        <span>Previous</span>
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary text-start" onClick={handleNext} disabled={currentPage == totalPage}>
                                        <i className="fa-solid fa-angle-right me-1"></i>
                                        <span>Next</span>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            {
                loading &&
                <LoaderModal loading={loading} message="Loading . ." />
            }
        </div>
    )
}


export default MemberProfile;