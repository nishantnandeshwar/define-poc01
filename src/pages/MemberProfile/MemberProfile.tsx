import Header from '../header/Header';
import './MemberProfile.css';

const MemberProfile = () => {
    const quickSearchCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "! A-Z"]

    const memberList = [
        { member_no: '001', member_name: "John Doe", user_name: "jdoe", GHIN: "123456", home_phone: "555-1234", email: "john@example.com", member_type: "Regular", gender: "M", active: "Yes" },
        { member_no: '002', member_name: "Jane Smith", user_name: "jsmith", GHIN: "654321", home_phone: "555-5678", email: "jane@example.com", member_type: "Premium", gender: "F", active: "No" },
        { member_no: '003', member_name: "John Doq", user_name: "jdoq", GHIN: "123456", home_phone: "555-1234", email: "john@example.com", member_type: "Regular", gender: "M", active: "Yes" },
        { member_no: '004', member_name: "Jane Smiths", user_name: "jsmith", GHIN: "654321", home_phone: "555-5678", email: "jane@example.com", member_type: "Premium", gender: "F", active: "No" },
    ]
    return (
        <div>
            <Header />
            <main className="container-lg container-fluid mt-2 mt-lg-2" id="main-container">
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
                                                <select className="form-select" id="member-type">
                                                    <option value="" selected disabled>Member Type</option>
                                                    <option value="regular">Regular</option>
                                                    <option value="premium">Premium</option>
                                                    <option value="vip">VIP</option>
                                                </select>
                                            </div>

                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="member-group" className="form-label mb-1 fs-12">Member Group:</label>
                                                <select className="form-select" id="member-group">
                                                    <option value="" selected disabled>Member Group</option>
                                                    <option value="group1">Group 1</option>
                                                    <option value="group2">Group 2</option>
                                                    <option value="group3">Group 3</option>
                                                </select>
                                            </div>

                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="member-status" className="form-label mb-1 fs-12">Member Status:</label>
                                                <select className="form-select" id="member-status">
                                                    <option value="" selected disabled>Member Status</option>
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
                                                    <option value="pending">Pending</option>
                                                </select>
                                            </div>

                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="activity-selected" className="form-label mb-1 fs-12">Activity Selected:</label>
                                                <select className="form-select" id="activity-selected">
                                                    <option value="" selected disabled>Activity</option>
                                                    <option value="golf">Golf</option>
                                                    <option value="tennis">Tennis</option>
                                                    <option value="swimming">Swimming</option>
                                                </select>
                                            </div>

                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="tracking-selected" className="form-label mb-1 fs-12">Tracking Selected:</label>
                                                <select className="form-select" id="tracking-selected">
                                                    <option value="" selected disabled>Tracking</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
                                            </div>

                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="state" className="form-label mb-1 fs-12">State:</label>
                                                <select className="form-select" id="state">
                                                    <option value="" selected disabled>State</option>
                                                    <option value="state1">State 1</option>
                                                    <option value="state2">State 2</option>
                                                    <option value="state3">State 3</option>
                                                </select>
                                            </div>

                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="country" className="form-label mb-1 fs-12">Country:</label>
                                                <select className="form-select" id="country">
                                                    <option value="" selected disabled>Country</option>
                                                    <option value="india">India</option>
                                                    <option value="usa">USA</option>
                                                    <option value="uk">UK</option>
                                                </select>
                                            </div>

                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="member-org" className="form-label mb-1 fs-12">Member Org:</label>
                                                <select className="form-select" id="member-org">
                                                    <option value="" selected disabled>Member Org</option>
                                                    <option value="org1">Org 1</option>
                                                    <option value="org2">Org 2</option>
                                                </select>
                                            </div>

                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="email-address" className="form-label mb-1 fs-12">Email Address:</label>
                                                <select className="form-select" id="email-address">
                                                    <option value="" selected disabled>Email Option</option>
                                                    <option value="personal">Personal</option>
                                                    <option value="work">Work</option>
                                                </select>
                                            </div>

                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="active" className="form-label mb-1 fs-12">Active:</label>
                                                <select className="form-select" id="active">
                                                    <option value="" selected disabled>Is Active?</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
                                            </div>

                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="hidden" className="form-label mb-1 fs-12">Hidden:</label>
                                                <select className="form-select" id="hidden">
                                                    <option value="" selected disabled>Is Hidden?</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
                                            </div>

                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="gender" className="form-label mb-1 fs-12">Gender:</label>
                                                <select className="form-select" id="gender">
                                                    <option value="" selected disabled>Gender</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>

                                            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                                                <label htmlFor="term-reason" className="form-label mb-1 fs-12">Term Reason:</label>
                                                <select className="form-select" id="term-reason">
                                                    <option value="" selected disabled>Reason</option>
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
                                                <select id="search-date-type" className="form-select">
                                                    <option value="" disabled selected>Select Date Type</option>
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
                                                <select id="member-images" className="form-select">
                                                    <option value="" disabled selected>Select Option</option>
                                                    <option value="with">With Images</option>
                                                    <option value="without">Without Images</option>
                                                </select>
                                            </div>

                                            {/* <!-- Select Parent --> */}
                                            <div className="col-6 col-md-4 col-xl">
                                                <label htmlFor="select-parent" className="form-label mb-1 fs-12">Select Parent:</label>
                                                <select id="select-parent" className="form-select">
                                                    <option value="" disabled selected>Select Parent</option>
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
                                        data-bs-custom-className="tooltip-size">
                                        <i className="fa-solid fa-info"></i>
                                    </button>
                                </h5>
                            </div>

                            <div className="px-3">
                                <div className="row g-3 flex-wrap mt-2 px-2 pb-3 bg-light rounded">
                                    {/* <!-- Match Name --> */}
                                    <div className="col-6 col-md-4 col-lg-3 col-xl">
                                        <label htmlFor="match-name" className="form-label mb-1 fs-12">Match Name:</label>
                                        <select id="match-name" className="form-select">
                                            <option value="" selected disabled>Match Name</option>
                                            <option value="match1">Match 1</option>
                                            <option value="match2">Match 2</option>
                                            <option value="match3">Match 3</option>
                                        </select>
                                    </div>

                                    {/* <!-- with EMail Status --> */}
                                    <div className="col-6 col-md-4 col-lg-3 col-xl">
                                        <label htmlFor="email-status" className="form-label mb-1 fs-12">With Email Status:</label>
                                        <select id="email-status" className="form-select">
                                            <option value="" selected disabled>Email Status</option>
                                            <option value="sent">Sent</option>
                                            <option value="not-sent">Not Sent</option>
                                            <option value="bounced">Bounced</option>
                                        </select>
                                    </div>

                                    {/* <!-- Website Active --> */}
                                    <div className="col-6 col-md-4 col-lg-3 col-xl">
                                        <label htmlFor="website-active" className="form-label mb-1 fs-12">Website Active:</label>
                                        <select id="website-active" className="form-select">
                                            <option value="" selected disabled>Status</option>
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
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped mb-0 rounded-2">
                                    <thead className="bg-primary text-white">
                                        <tr>
                                            <th className="bg-dark-primary border border-light text-white" scope="col">Member No</th>
                                            <th className="bg-dark-primary border border-light text-white" scope="col">Member Name</th>
                                            <th className="bg-dark-primary border border-light text-white" scope="col">User Name</th>
                                            <th className="bg-dark-primary border border-light text-white" scope="col">GHIN #</th>
                                            <th className="bg-dark-primary border border-light text-white" scope="col">Home Phone</th>
                                            <th className="bg-dark-primary border border-light text-white" scope="col">Email</th>
                                            <th className="bg-dark-primary border border-light text-white" scope="col">Member Type</th>
                                            <th className="bg-dark-primary border border-light text-white text-center" scope="col">G</th>
                                            <th className="bg-dark-primary border border-light text-white text-center" scope="col">Active</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            memberList.map((item,index) =>
                                                <tr key={index}>
                                                    <td>{item.member_no}</td>
                                                    <td>{item.member_name}</td>
                                                    <td>{item.user_name}</td>
                                                    <td>{item.GHIN}</td>
                                                    <td>{item.home_phone}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.member_type}</td>
                                                    <td className="text-center">{item.gender}</td>
                                                    <td className="text-center">{item.active}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>

                    {/* Add member form */}
                    {/* <div className="tab-pane fade" id="MemberNew" role="tabpanel" aria-labelledby="MemberNew-tab">
                        <div className="quick-search-table-section p-2 px-3 rounded-2 shadow-2">
                            <div className="row g-3 flex-wrap mt-0 px-2 pb-3 bg-light rounded">

                                <div className="col-6 col-md-4 col-lg-3 col-xl-3">
                                    <label htmlFor="member-no" className="form-label mb-1 fs-12">Member Number (Club assigned Member #):</label>
                                    <input type="text" className="form-control" id="member-no" placeholder="Member Number" />
                                </div>
                                <div className="col-12 mt-0"></div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl-1">
                                    <label htmlFor="title" className="form-label mb-1 fs-12">Title:</label>
                                    <input type="text" className="form-control" id="title" placeholder="Title" />
                                </div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl">
                                    <label htmlFor="first-name" className="form-label mb-1 fs-12">First Name:</label>
                                    <input type="text" className="form-control" id="first-name" placeholder="First Name" />
                                </div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl">
                                    <label htmlFor="middle-name" className="form-label mb-1 fs-12">Middle:</label>
                                    <input type="text" className="form-control" id="middle-name" placeholder="Middle Name" />
                                </div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl">
                                    <label htmlFor="last-name" className="form-label mb-1 fs-12">Last Name:</label>
                                    <input type="text" className="form-control" id="last-name" placeholder="Last Name" />
                                </div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl-1">
                                    <label htmlFor="suffix" className="form-label mb-1 fs-12">Suffix:</label>
                                    <input type="text" className="form-control" id="suffix" placeholder="Suffix" />
                                </div>
                                <div className="col-12 mt-0"></div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl-3">
                                    <label htmlFor="email" className="form-label mb-1 fs-12">Email Address:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Email Address" />
                                </div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl-3">
                                    <label htmlFor="member-type" className="form-label mb-1 fs-12">Member Type:</label>
                                    <select className="form-select" id="gender">
                                        <option value="" selected disabled>Member Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                    </select>
                                </div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl-3">
                                    <label htmlFor="member-group" className="form-label mb-1 fs-12">Member Group:</label>
                                    <select className="form-select" id="member-group">
                                        <option value="" selected disabled>Member Group</option>
                                        <option value="1">Group 1</option>
                                        <option value="2">Group 2</option>
                                        <option value="3">Group 3</option>
                                    </select>
                                </div>
                                <div className="col-12 mt-0"></div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl-3">
                                    <label htmlFor="gender" className="form-label mb-1 fs-12">Gender:</label>
                                    <select className="form-select" id="gender">
                                        <option value="" selected disabled>Select Gender</option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                        <option value="O">Other</option>
                                    </select>
                                </div>
                                <div className="col-12 mt-0"></div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl-3">
                                    <label htmlFor="effective-date" className="form-label mb-1 fs-12">Effective Date:</label>
                                    <input type="date" className="form-control" id="effective-date" />
                                </div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl-3">
                                    <label htmlFor="expiration-date" className="form-label mb-1 fs-12">Expiration Date:</label>
                                    <input type="date" className="form-control" id="expiration-date" />
                                </div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl-3">
                                    <label htmlFor="birth-date" className="form-label mb-1 fs-12">Birth Date:</label>
                                    <input type="date" className="form-control" id="birth-date" />
                                </div>
                                <div className="col-12 mt-0"></div>

                                <div className="col-12 d-flex align-items-center">
                                    <div className="form-check mt-2">
                                        <input className="form-check-input" type="checkbox" id="force-pwd" />
                                        <label className="form-check-label pointer fs-14" htmlFor="force-pwd">Force Pwd Change?</label>
                                    </div>
                                </div>

                                <div className="col-12 d-flex align-items-center">
                                    <div className="form-check mt-0">
                                        <input className="form-check-input" type="checkbox" id="add-another" />
                                        <label className="form-check-label pointer fs-14" htmlFor="add-another">Add Another?</label>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center p-2 bg-white rounded-2 shadow-2 mt-1">
                            <button type="button" className="btn btn-outline-secondary hover-primary text-start me-2">
                                <i className="fa-solid fa-user-plus me-1"></i>
                                <span>Create</span>
                            </button>
                            <button type="button" className="btn btn-outline-secondary text-start">
                                <i className="fa-solid fa-broom me-1"></i>
                                <span>Clear</span>
                            </button>
                        </div>
                    </div> */}

                    {/* Related */}
                    {/* <div className="tab-pane fade" id="MemberRelated" role="tabpanel" aria-labelledby="MemberRelated-tab">
                        <section className="member-related-section">
                            <div className="row">
                                <div className="col-12 col-lg-6 mb-3 mb-lg-0">
                                    <section className="rounded-2 shadow-2">
                                        <div className="">
                                            <h5 className="font-2 bg-dark-primary text-white text-uppercase px-3 py-2 mb-0 rounded-2 d-flex justify-content-between align-items-center">
                                                Related
                                            </h5>
                                        </div>
                                        <div className="p-2">
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <a className="flex-1 hover-primary py-1 px-2 bg-light rounded" href="page_navig_admin.html">
                                                    <i className="i-16 fa-solid fa-cog me-2"></i>
                                                    <span>General Site Config</span>
                                                </a>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <a className="flex-1 hover-primary py-1 px-2 bg-light rounded" href="member_lockout_admin.html">
                                                    <i className="i-16 fa-solid fa-lock me-2"></i>
                                                    <span>Member Lockouts</span>
                                                </a>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <a className="flex-1 hover-primary py-1 px-2 bg-light rounded" href="member_org_import.html">
                                                    <i className="i-16 fa-solid fa-file-import me-2"></i>
                                                    <span>Member Org Import</span>
                                                </a>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <a className="flex-1 hover-primary py-1 px-2 bg-light rounded" href="member_password.html">
                                                    <i className="i-16 fa-solid fa-user-lock me-2"></i>
                                                    <span>Member Passwords</span>
                                                </a>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <a className="flex-1 hover-primary py-1 px-2 bg-light rounded" href="member_batch_edit.html">
                                                    <i className="i-16 fa-solid fa-edit me-2"></i>
                                                    <span>Member Batch Edit</span>
                                                </a>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <a className="flex-1 hover-primary py-1 px-2 bg-light rounded" href="member_org_edit.html">
                                                    <i className="i-16 fa-solid fa-building me-2"></i>
                                                    <span>Member Organizations</span>
                                                </a>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <a className="flex-1 hover-primary py-1 px-2 bg-light rounded" href="member_dateslist.html">
                                                    <i className="i-16 fa-solid fa-calendar me-2"></i>
                                                    <span>Member Dates Listing</span>
                                                </a>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <a className="flex-1 hover-primary py-1 px-2 bg-light rounded" href="member_acttrack.html">
                                                    <i className="i-16 fa-solid fa-compass me-2"></i>
                                                    <span>Member Activities/Tracking</span>
                                                </a>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <a className="flex-1 hover-primary py-1 px-2 bg-light rounded" href="member_export.html">
                                                    <i className="i-16 fa-solid fa-file-export me-2"></i>
                                                    <span>Member Export</span>
                                                </a>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <a className="flex-1 hover-primary py-1 px-2 bg-light rounded" href="scripts/userparent/userpar_list.html">
                                                    <i className="i-16 fa-solid fa-users-gear me-2"></i>
                                                    <span>User Parent Maintenance</span>
                                                </a>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <a className="flex-1 hover-primary py-1 px-2 bg-light rounded" href="Member_ChangeList.html">
                                                    <i className="i-16 fa-solid fa-list-check me-2"></i>
                                                    <span>Member Change Listing</span>
                                                </a>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <a className="flex-1 hover-primary py-1 px-2 bg-light rounded" href="member_password_reset_history.html">
                                                    <i className="i-16 fa-solid fa-history me-2"></i>
                                                    <span>Member Password Reset History</span>
                                                </a>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <section className="rounded-2 shadow-2">
                                        <div className="">
                                            <h5 className="font-2 bg-primary bg-dark-primary text-white text-uppercase px-3 py-2 mb-0 rounded-2 d-flex justify-content-between align-items-center">
                                                Quick Search by Name
                                            </h5>
                                        </div>
                                        <div className="p-2">
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <a className="flex-1 hover-primary py-1 px-2 bg-light rounded" href="page_navig_admin.html?type=member_type">
                                                    <i className="i-16 fa-solid fa-user-tag me-2"></i>
                                                    <span>Member Type</span>
                                                </a>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <a className="flex-1 hover-primary py-1 px-2 bg-light rounded" href="page_navig_admin.html?type=member_group">
                                                    <i className="i-16 fa-solid fa-users me-2"></i>
                                                    <span>Member Group</span>
                                                </a>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <a className="flex-1 hover-primary py-1 px-2 bg-light rounded" href="page_navig_admin.html?type=member_status">
                                                    <i className="i-16 fa-solid fa-circle-check me-2"></i>
                                                    <span>Member Status</span>
                                                </a>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <a className="flex-1 hover-primary py-1 px-2 bg-light rounded" href="page_navig_admin.html?type=member_activities">
                                                    <i className="i-16 fa-solid fa-list-check me-2"></i>
                                                    <span>Member Activities</span>
                                                </a>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <a className="flex-1 hover-primary py-1 px-2 bg-light rounded" href="page_navig_admin.html?type=member_act_groups">
                                                    <i className="i-16 fa-solid fa-layer-group me-2"></i>
                                                    <span>Member Activities Groups</span>
                                                </a>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <a className="flex-1 hover-primary py-1 px-2 bg-light rounded" href="page_navig_admin.html?type=member_tracking">
                                                    <i className="i-16 fa-solid fa-route me-2"></i>
                                                    <span>Member Tracking Codes</span>
                                                </a>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <a className="flex-1 hover-primary py-1 px-2 bg-light rounded" href="page_navig_admin.html?type=member_tracking_groups">
                                                    <i className="i-16 fa-solid fa-object-group me-2"></i>
                                                    <span>Member Tracking Groups</span>
                                                </a>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <a className="flex-1 hover-primary py-1 px-2 bg-light rounded" href="page_navig_admin.html?type=member_org">
                                                    <i className="i-16 fa-solid fa-building me-2"></i>
                                                    <span>Member Organizations</span>
                                                </a>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <a className="flex-1 hover-primary py-1 px-2 bg-light rounded" href="page_navig_admin.html?type=member_officers">
                                                    <i className="i-16 fa-solid fa-user-tie me-2"></i>
                                                    <span>Member Organization Officers</span>
                                                </a>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <a className="flex-1 hover-primary py-1 px-2 bg-light rounded" href="page_navig_admin.html?type=member_term_reason">
                                                    <i className="i-16 fa-solid fa-receipt me-2"></i>
                                                    <span>Member Termination Reason</span>
                                                </a>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </section>
                    </div> */}
                </div>
            </main>
        </div>
    )
}


export default MemberProfile;