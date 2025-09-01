import './DashBoard.css'
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../utils";
import Header from '../header/Header';
// import Header from "./Header";


const Dashboard = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    const applications = [
        {
            id: 1, title: "Communications", content: [
                { title: "", route: '' }
            ]
        },
        {
            id: 2, title: "Club Activity", content: [
                { title: "", route: '' }
            ]
        },
        {
            id: 3, title: "Dining", content: [
                { title: "", route: '' }
            ]
        },
        {
            id: 4, title: "Advanced Configuration", content: [
                { title: "", route: '' }
            ]
        },
        {
            id: 5, title: "Art Directory", content: [
                { title: "", route: '' }
            ]
        },
        {
            id: 6, title: "Billing", content: [
                { title: "", route: '' }
            ]
        },
        {
            id: 7, title: "Membership", content: [
                { title: "Guest Classifications", route: 'Guest-Classifications' },
                { title: "Guest Directory", route: 'Guest-Directory' },
                { title: "Member Activities/Tracking", route: 'Member-Activities-Tracking' },
                { title: "Member Batch Edi", route: 'Member-Batch-Edi' },
                { title: "Member Dates Listing", route: 'Member-Dates-Listing' },
                { title: "Member Directory", route: 'member-profile' },
                { title: "Member Directory Summary", route: 'Member-Directory-Summary' },
            ]

        },
        {
            id: 8, title: "Account Statements", content: [
                { title: "", route: '' }
            ]
        }
    ];

    const handleNavigation = (route: string) => {
        navigate(`/${route}`, { replace: false, state: { screenName: route == "member-profile" ? "List" : "" } });
    }

    return (
        <div>
            <Header />
            <main className="container-lg container-fluid mt-2 mt-lg-2" id="main-container">
                <section>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="accordion mb-3 mb-lg-4 shadow-2" id="tab-quicklinks">
                                <div className="accordion-item">
                                    <div className="accordion-header" id="headingOne">
                                        <h5 className="font-2 bg-dark-primary text-white text-uppercase acc-white-arrow px-3 py-2 mb-0 rounded-1 accordion-button collapsed" role="button"
                                            data-bs-toggle="collapse" data-bs-target="#quicklinks" aria-expanded="false" aria-controls="quicklinks">
                                            Quick Links
                                        </h5>
                                    </div>
                                    <div id="quicklinks" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#tab-quicklinks">
                                        <div className="accordion-body p-2">
                                            This is the content inside the accordion. You can place text, images, or even other components here.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion mb-3 mb-lg-4 shadow-2" id="tab-applications">
                                <div className="accordion-item">
                                    <div className="accordion-header" id="headingOne">
                                        <h5 className="font-2 bg-dark-primary text-white text-uppercase acc-white-arrow px-3 py-2 mb-0 rounded-1 accordion-button" role="button"
                                            data-bs-toggle="collapse" data-bs-target="#applications" aria-expanded="true" aria-controls="applications">
                                            Applications
                                        </h5>
                                    </div>
                                    <div id="applications" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#tab-applications">
                                        <div className="accordion-body p-2">
                                            <div className="d-flex justify-content-end justify-content-sm-between mb-2">
                                                <div className="flex-1 fs-12 d-none d-sm-flex justify-content-start align-items-center ps-1">
                                                    Click a link below to expand the menu of applications
                                                </div>
                                            </div>
                                            <div className="accordion innerAccordion" id="tab-applications-inner">
                                                {
                                                    applications?.map((item) => {
                                                        return (
                                                            <div className="accordion-item mb-3 border rounded" key={item.id}>
                                                                <div className="accordion-header"
                                                                    id={`innerHeading-${item.id}`}
                                                                >
                                                                    <button className="accordion-button hide-accordion-arrow rounded shadow-1 d-flex justify-content-between align-items-center p-2 collapsed"
                                                                        type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target={`#innerCollapse-${item.id}`}
                                                                        aria-expanded="false"
                                                                        aria-controls={`innerCollapse-${item.id}`}
                                                                    >
                                                                        <span className="ps-2">
                                                                            <span className="ps-2 text-white">{item.title}</span>
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                                <div
                                                                    id={`innerCollapse-${item.id}`}
                                                                    className="accordion-collapse collapse"
                                                                    aria-labelledby={`innerHeading-${item.id}`}
                                                                >
                                                                    <div className="accordion-body">
                                                                        {
                                                                            item?.content?.map((subItem, index) =>
                                                                                <div className="d-flex justify-content-between align-items-center mb-1 pinter" key={index}>
                                                                                    <div className="flex-1 hover-primary py-1 px-2 bg-light rounded-start" onClick={() => handleNavigation(subItem.route)}>
                                                                                        <span>{subItem?.title}</span>
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="accordion mb-3 mb-lg-4 shadow-2" id="tab-summerprem">
                                <div className="accordion-item">
                                    <div className="accordion-header" id="headingOne">
                                        <h5 className="font-2 bg-dark-primary text-white text-uppercase acc-white-arrow px-3 py-2 mb-0 rounded-1 accordion-button collapsed" //type="button"
                                            data-bs-toggle="collapse" data-bs-target="#summerprem" aria-expanded="false" aria-controls="summerprem">
                                            Summer Prep Webinar | Website & Mobile Tips
                                        </h5>
                                    </div>
                                    <div id="summerprem" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#tab-summerprem">
                                        <div className="accordion-body p-2">
                                            This is the content inside the accordion. You can place text, images, or even other components here.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion mb-3 mb-lg-4 shadow-2" id="tab-currentissue">
                                <div className="accordion-item">
                                    <div className="accordion-header" id="headingOne">
                                        <h5 className="font-2 bg-dark-primary text-white text-uppercase acc-white-arrow px-3 py-2 mb-0 rounded-1 accordion-button collapsed" role="button"
                                            data-bs-toggle="collapse" data-bs-target="#currentissue" aria-expanded="false" aria-controls="currentissue">
                                            Current Issue with Firefox Browser
                                        </h5>
                                    </div>
                                    <div id="currentissue" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#tab-currentissue">
                                        <div className="accordion-body p-2">
                                            This is the content inside the accordion. You can place text, images, or even other components here.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
