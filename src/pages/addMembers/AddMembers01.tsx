import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroom, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Header from "../dashboard/Header";
import "./AddMembers.css";

const AddNewMembers = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [formData, setFormData] = useState({
        memberNo: "",
        title: "",
        firstName: "",
        middleName: "",
        lastName: "",
        suffix: "",
        email: "",
        memberType: "",
        memberGroup: "",
        gender: "",
        effectiveDate: "",
        expirationDate: "",
        birthDate: "",
        forcePwdChange: false,
        addAnother: false,
    });

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateForm = (data: typeof formData) => {
        let errors: Record<string, string> = {};

        if (!data.memberNo.trim()) {
            errors.memberNo = "Member number is required";
        }
        if (!data.title.trim()) {
            errors.title = "Title is required";
        }

        if (!data.firstName.trim()) {
            errors.firstName = "First name is required";
        }
        if (!data.middleName.trim()) {
            errors.middleName = "Middle name is required";
        }

        if (!data.lastName.trim()) {
            errors.lastName = "Last name is required";
        }
        if (!data.suffix.trim()) {
            errors.suffix = "Suffix is required";
        }
        
        if (!data.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = "Invalid email address";
        }

        if (!data.memberType) {
            errors.memberType = "Member type is required";
        }
        if (!data.memberGroup) {
            errors.memberGroup = "Member group is required";
        }

        if (!data.gender) {
            errors.gender = "Gender is required";
        }

        if (!data.effectiveDate.trim()) {
            errors.effectiveDate = "Effective date is required";
        }
        if (!data.expirationDate.trim()) {
            errors.expirationDate = "Expiration date is required";
        }
        if (!data.birthDate.trim()) {
            errors.birthDate = "Birth date is required";
        }
        if (!data.forcePwdChange) {
            errors.forcePwdChange = "Force password change is required";
        }
        if (!data.addAnother) {
            errors.addAnother = "Add another is required";
        }
        return errors;
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

    };

    // Clear form
    const handleClear = () => {
        setFormData({
            memberNo: "",
            title: "",
            firstName: "",
            middleName: "",
            lastName: "",
            suffix: "",
            email: "",
            memberType: "",
            memberGroup: "",
            gender: "",
            effectiveDate: "",
            expirationDate: "",
            birthDate: "",
            forcePwdChange: false,
            addAnother: false,
        });
        setErrors({})
    };


    return (
        <div>
            <Header />
            <main className="container-lg container-fluid mt-3 mt-lg-4" id="main-container">
                <section>
                    <form
                        onSubmit={handleSubmit}
                        className="quick-search-table-section p-2 px-3 rounded-2 box-Shadow"
                    >
                        <div className="row g-3 flex-wrap mt-0 px-2 pb-3 bg-light rounded">
                            <div className="col-6 col-md-4 col-lg-3 col-xl-4">
                                <label htmlFor="memberNo" className="form-label mb-1 fs-12">
                                    Member Number (Club assigned Member #):
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="memberNo"
                                    name="memberNo"
                                    value={formData.memberNo}
                                    onChange={handleChange}
                                    placeholder="Member Number"
                                />
                                {errors.memberNo && <small className="text-danger mx-1">{errors.memberNo}</small>}
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
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Title"
                                />
                                {errors.title && <small className="text-danger mx-1">{errors.title}</small>}
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl">
                                <label htmlFor="firstName" className="form-label mb-1 fs-12">
                                    First Name:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                />
                                {errors.firstName && <small className="text-danger mx-1">{errors.firstName}</small>}

                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl">
                                <label htmlFor="middleName" className="form-label mb-1 fs-12">
                                    Middle:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="middleName"
                                    name="middleName"
                                    value={formData.middleName}
                                    onChange={handleChange}
                                    placeholder="Middle Name"
                                />
                                {errors.middleName && <small className="text-danger mx-1">{errors.middleName}</small>}
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl">
                                <label htmlFor="lastName" className="form-label mb-1 fs-12">
                                    Last Name:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                />
                                {errors.lastName && <small className="text-danger mx-1">{errors.lastName}</small>}

                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-1">
                                <label htmlFor="suffix" className="form-label mb-1 fs-12">
                                    Suffix:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="suffix"
                                    name="suffix"
                                    value={formData.suffix}
                                    onChange={handleChange}
                                    placeholder="Suffix"
                                />
                                {errors.suffix && <small className="text-danger mx-1">{errors.suffix}</small>}

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
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                />
                                {errors.email && <small className="text-danger mx-1">{errors.email}</small>}

                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-3">
                                <label htmlFor="memberType" className="form-label mb-1 fs-12">
                                    Member Type:
                                </label>
                                <select
                                    className="form-select"
                                    id="memberType"
                                    name="memberType"
                                    value={formData.memberType}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>
                                        Member Type
                                    </option>
                                    <option value="1">Type 1</option>
                                    <option value="2">Type 2</option>
                                    <option value="3">Type 3</option>
                                </select>
                                {errors.memberType && <small className="text-danger mx-1">{errors.memberType}</small>}
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-3">
                                <label htmlFor="memberGroup" className="form-label mb-1 fs-12">
                                    Member Group:
                                </label>
                                <select
                                    className="form-select"
                                    id="memberGroup"
                                    name="memberGroup"
                                    value={formData.memberGroup}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>
                                        Member Group
                                    </option>
                                    <option value="1">Group 1</option>
                                    <option value="2">Group 2</option>
                                    <option value="3">Group 3</option>
                                </select>
                                {errors.memberGroup && <small className="text-danger mx-1">{errors.memberGroup}</small>}

                            </div>

                            <div className="col-12 mt-0"></div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-3">
                                <label htmlFor="gender" className="form-label mb-1 fs-12">
                                    Gender:
                                </label>
                                <select
                                    className="form-select"
                                    id="gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>
                                        Select Gender
                                    </option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                    <option value="O">Other</option>
                                </select>
                                {errors.gender && <small className="text-danger mx-1">{errors.gender}</small>}

                            </div>

                            <div className="col-12 mt-0"></div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-3">
                                <label htmlFor="effectiveDate" className="form-label mb-1 fs-12">
                                    Effective Date:
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="effectiveDate"
                                    name="effectiveDate"
                                    value={formData.effectiveDate}
                                    onChange={handleChange}
                                />
                                {errors.effectiveDate && <small className="text-danger mx-1">{errors.effectiveDate}</small>}

                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-3">
                                <label htmlFor="expirationDate" className="form-label mb-1 fs-12">
                                    Expiration Date:
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="expirationDate"
                                    name="expirationDate"
                                    value={formData.expirationDate}
                                    onChange={handleChange}
                                />
                                {errors.expirationDate && <small className="text-danger mx-1">{errors.expirationDate}</small>}

                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-3">
                                <label htmlFor="birthDate" className="form-label mb-1 fs-12">
                                    Birth Date:
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="birthDate"
                                    name="birthDate"
                                    value={formData.birthDate}
                                    onChange={handleChange}
                                />
                                {errors.birthDate && <small className="text-danger mx-1">{errors.birthDate}</small>}

                            </div>

                            <div className="col-12 mt-0"></div>

                            <div className="col-12 d-flex align-items-center">
                                <div className="form-check mt-2">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="forcePwdChange"
                                        name="forcePwdChange"
                                        checked={formData.forcePwdChange}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                forcePwdChange: e.target.checked,
                                            }))
                                        }
                                    />
                                    <label
                                        className="form-check-label pointer fs-14"
                                        htmlFor="forcePwdChange"
                                    >
                                        Force Pwd Change?
                                    </label>
                                     {errors.forcePwdChange && <small className="text-danger mx-1">{errors.forcePwdChange}</small>}
                                </div>
                            </div>

                            <div className="col-12 d-flex align-items-center">
                                <div className="form-check mt-0">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="addAnother"
                                        name="addAnother"
                                        checked={formData.addAnother}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                addAnother: e.target.checked,
                                            }))
                                        }
                                    />
                                    <label
                                        className="form-check-label pointer fs-14"
                                        htmlFor="addAnother"
                                    >
                                        Add Another?
                                    </label>
                                    {errors.addAnother && <small className="text-danger mx-1">{errors.addAnother}</small>}
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-start align-items-center p-2 bg-white rounded-2 box-Shadow mt-1">
                            <button
                                type="submit"
                                className="btn btn-outline-secondary hover-primary text-start me-2"
                            >
                                <FontAwesomeIcon
                                    icon={faUserPlus}
                                    className="me-1 h5 px-2 border-white border-end mb-0"
                                />
                                <span>Create</span>
                            </button>
                            <button
                                type="button"
                                onClick={handleClear}
                                className="btn btn-outline-secondary text-start"
                            >
                                <FontAwesomeIcon
                                    icon={faBroom}
                                    className="me-1 h5 px-2 border-white border-end mb-0"
                                />
                                <span>Clear</span>
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default AddNewMembers;
