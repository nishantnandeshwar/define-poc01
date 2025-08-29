// import Header from "../dashboard/Header";

// const AddNewMembers = () => {
//     return (
//         <div>
//             <Header />
//             <main className="container-lg container-fluid mt-3 mt-lg-4" id="main-container">
//                 <section>
//                     <div className="tab-pane fade" id="MemberNew" role="tabpanel" aria-labelledby="MemberNew-tab">
//                         <div className="quick-search-table-section p-2 px-3 rounded-2 shadow-2">
//                             <div className="row g-3 flex-wrap mt-0 px-2 pb-3 bg-light rounded">

//                                 <div className="col-6 col-md-4 col-lg-3 col-xl-3">
//                                     <label for="member-no" className="form-label mb-1 fs-12">Member Number (Club assigned Member #):</label>
//                                     <input type="text" className="form-control" id="member-no" placeholder="Member Number">
//                                 </div>
//                                 <div className="col-12 mt-0"></div>

//                                 <div className="col-6 col-md-4 col-lg-3 col-xl-1">
//                                     <label for="title" className="form-label mb-1 fs-12">Title:</label>
//                                     <input type="text" className="form-control" id="title" placeholder="Title">
//                                 </div>

//                                 <div className="col-6 col-md-4 col-lg-3 col-xl">
//                                     <label for="first-name" className="form-label mb-1 fs-12">First Name:</label>
//                                     <input type="text" className="form-control" id="first-name" placeholder="First Name">
//                                 </div>

//                                 <div className="col-6 col-md-4 col-lg-3 col-xl">
//                                     <label for="middle-name" className="form-label mb-1 fs-12">Middle:</label>
//                                     <input type="text" className="form-control" id="middle-name" placeholder="Middle Name">
//                                 </div>

//                                 <div className="col-6 col-md-4 col-lg-3 col-xl">
//                                     <label for="last-name" className="form-label mb-1 fs-12">Last Name:</label>
//                                     <input type="text" className="form-control" id="last-name" placeholder="Last Name">
//                                 </div>

//                                 <div className="col-6 col-md-4 col-lg-3 col-xl-1">
//                                     <label for="suffix" className="form-label mb-1 fs-12">Suffix:</label>
//                                     <input type="text" className="form-control" id="suffix" placeholder="Suffix">
//                                 </div>
//                                 <div className="col-12 mt-0"></div>

//                                 <div className="col-6 col-md-4 col-lg-3 col-xl-3">
//                                     <label for="email" className="form-label mb-1 fs-12">Email Address:</label>
//                                     <input type="email" className="form-control" id="email" placeholder="Email Address">
//                                 </div>

//                                 <div className="col-6 col-md-4 col-lg-3 col-xl-3">
//                                     <label for="member-type" className="form-label mb-1 fs-12">Member Type:</label>
//                                     <select className="form-select" id="gender">
//                                         <option value="" selected disabled>Member Type</option>
//                                         <option value="1">Type 1</option>
//                                         <option value="2">Type 2</option>
//                                         <option value="3">Type 3</option>
//                                     </select>
//                                 </div>

//                                 <div className="col-6 col-md-4 col-lg-3 col-xl-3">
//                                     <label for="member-group" className="form-label mb-1 fs-12">Member Group:</label>
//                                     <select className="form-select" id="member-group">
//                                         <option value="" selected disabled>Member Group</option>
//                                         <option value="1">Group 1</option>
//                                         <option value="2">Group 2</option>
//                                         <option value="3">Group 3</option>
//                                     </select>
//                                 </div>
//                                 <div className="col-12 mt-0"></div>

//                                 <div className="col-6 col-md-4 col-lg-3 col-xl-3">
//                                     <label for="gender" className="form-label mb-1 fs-12">Gender:</label>
//                                     <select className="form-select" id="gender">
//                                         <option value="" selected disabled>Select Gender</option>
//                                         <option value="M">Male</option>
//                                         <option value="F">Female</option>
//                                         <option value="O">Other</option>
//                                     </select>
//                                 </div>
//                                 <div className="col-12 mt-0"></div>

//                                 <div className="col-6 col-md-4 col-lg-3 col-xl-3">
//                                     <label for="effective-date" className="form-label mb-1 fs-12">Effective Date:</label>
//                                     <input type="date" className="form-control" id="effective-date">
//                                 </div>

//                                 <div className="col-6 col-md-4 col-lg-3 col-xl-3">
//                                     <label for="expiration-date" className="form-label mb-1 fs-12">Expiration Date:</label>
//                                     <input type="date" className="form-control" id="expiration-date">
//                                 </div>

//                                 <div className="col-6 col-md-4 col-lg-3 col-xl-3">
//                                     <label for="birth-date" className="form-label mb-1 fs-12">Birth Date:</label>
//                                     <input type="date" className="form-control" id="birth-date">
//                                 </div>
//                                 <div className="col-12 mt-0"></div>

//                                 <div className="col-12 d-flex align-items-center">
//                                     <div className="form-check mt-2">
//                                         <input className="form-check-input" type="checkbox" id="force-pwd">
//                                             <label className="form-check-label pointer fs-14" for="force-pwd">Force Pwd Change?</label>
//                                     </div>
//                                 </div>

//                                 <div className="col-12 d-flex align-items-center">
//                                     <div className="form-check mt-0">
//                                         <input className="form-check-input" type="checkbox" id="add-another">
//                                             <label className="form-check-label pointer fs-14" for="add-another">Add Another?</label>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                         <div className="d-flex justify-content-start align-items-center p-2 bg-white rounded-2 shadow-2 mt-1">
//                             <button type="button" className="btn btn-outline-secondary hover-primary text-start me-2">
//                                 <i className="fa-solid fa-user-plus me-1"></i>
//                                 <span>Create</span>
//                             </button>
//                             <button type="button" className="btn btn-outline-secondary text-start">
//                                 <i className="fa-solid fa-broom me-1"></i>
//                                 <span>Clear</span>
//                             </button>
//                         </div>
//                     </div>
//                 </section>
//             </main>
//         </div>

//     )
// }

// export default AddNewMembers;
import Header from "../dashboard/Header";

const AddNewMembers = () => {
    return (
        <div>
            <Header />
            <main
                className="container-lg container-fluid mt-3 mt-lg-4"
                id="main-container"
            >
                <section>
                    <div
                        className="tab-pane " //fade
                        id="MemberNew"
                        role="tabpanel"
                        aria-labelledby="MemberNew-tab"
                    >
                        <div className="quick-search-table-section p-2 px-3 rounded-2 shadow-2">
                            <div className="row g-3 flex-wrap mt-0 px-2 pb-3 bg-light rounded">
                                <div className="col-6 col-md-4 col-lg-3 col-xl-4">
                                    <label htmlFor="member-no" className="form-label mb-1 fs-12">
                                        Member Number (Club assigned Member #):
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="member-no"
                                        placeholder="Member Number"
                                    />
                                </div>
                                <div className="col-12 mt-0"></div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl-1">
                                    <label htmlFor="title" className="form-label mb-1 fs-12">
                                        Title:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        placeholder="Title"
                                    />
                                </div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl">
                                    <label htmlFor="first-name" className="form-label mb-1 fs-12">
                                        First Name:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="first-name"
                                        placeholder="First Name"
                                    />
                                </div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl">
                                    <label htmlFor="middle-name" className="form-label mb-1 fs-12">
                                        Middle:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="middle-name"
                                        placeholder="Middle Name"
                                    />
                                </div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl">
                                    <label htmlFor="last-name" className="form-label mb-1 fs-12">
                                        Last Name:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="last-name"
                                        placeholder="Last Name"
                                    />
                                </div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl-1">
                                    <label htmlFor="suffix" className="form-label mb-1 fs-12">
                                        Suffix:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="suffix"
                                        placeholder="Suffix"
                                    />
                                </div>

                                <div className="col-12 mt-0"></div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl-3">
                                    <label htmlFor="email" className="form-label mb-1 fs-12">
                                        Email Address:
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email Address"
                                    />
                                </div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl-3">
                                    <label htmlFor="member-type" className="form-label mb-1 fs-12">
                                        Member Type:
                                    </label>
                                    <select className="form-select" id="member-type" defaultValue="">
                                        <option value="" disabled>
                                            Member Type
                                        </option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                    </select>
                                </div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl-3">
                                    <label htmlFor="member-group" className="form-label mb-1 fs-12">
                                        Member Group:
                                    </label>
                                    <select className="form-select" id="member-group" defaultValue="">
                                        <option value="" disabled>
                                            Member Group
                                        </option>
                                        <option value="1">Group 1</option>
                                        <option value="2">Group 2</option>
                                        <option value="3">Group 3</option>
                                    </select>
                                </div>

                                <div className="col-12 mt-0"></div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl-3">
                                    <label htmlFor="gender" className="form-label mb-1 fs-12">
                                        Gender:
                                    </label>
                                    <select className="form-select" id="gender" defaultValue="">
                                        <option value="" disabled>
                                            Select Gender
                                        </option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                        <option value="O">Other</option>
                                    </select>
                                </div>

                                <div className="col-12 mt-0"></div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl-3">
                                    <label htmlFor="effective-date" className="form-label mb-1 fs-12">
                                        Effective Date:
                                    </label>
                                    <input type="date" className="form-control" id="effective-date" />
                                </div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl-3">
                                    <label htmlFor="expiration-date" className="form-label mb-1 fs-12">
                                        Expiration Date:
                                    </label>
                                    <input type="date" className="form-control" id="expiration-date" />
                                </div>

                                <div className="col-6 col-md-4 col-lg-3 col-xl-3">
                                    <label htmlFor="birth-date" className="form-label mb-1 fs-12">
                                        Birth Date:
                                    </label>
                                    <input type="date" className="form-control" id="birth-date" />
                                </div>

                                <div className="col-12 mt-0"></div>

                                <div className="col-12 d-flex align-items-center">
                                    <div className="form-check mt-2">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="force-pwd"
                                        />
                                        <label
                                            className="form-check-label pointer fs-14"
                                            htmlFor="force-pwd"
                                        >
                                            Force Pwd Change?
                                        </label>
                                    </div>
                                </div>

                                <div className="col-12 d-flex align-items-center">
                                    <div className="form-check mt-0">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="add-another"
                                        />
                                        <label
                                            className="form-check-label pointer fs-14"
                                            htmlFor="add-another"
                                        >
                                            Add Another?
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-start align-items-center p-2 bg-white rounded-2 shadow-2 mt-1">
                            <button
                                type="button"
                                className="btn btn-outline-secondary hover-primary text-start me-2"
                            >
                                <i className="fa-solid fa-user-plus me-1"></i>
                                <span>Create</span>
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-secondary text-start"
                            >
                                <i className="fa-solid fa-broom me-1"></i>
                                <span>Clear</span>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AddNewMembers;
