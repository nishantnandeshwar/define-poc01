import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import style from './AddMembers.module.css';

const AddMembers: React.FC = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState<{ firstName?: string; lastName?: string; email?: string }>({});
    const navigate = useNavigate(); 

    const validate = () => {
        const newErrors: { firstName?: string; lastName?: string; email?: string } = {};
        if (!firstName.trim()) {
            newErrors.firstName = "First name is required";
        } else if (!/^[A-Za-z]+$/.test(firstName)) {
            newErrors.firstName = "First name must contain only letters";
        }
        if (!lastName.trim()) {
            newErrors.lastName = "Last name is required";
        } else if (!/^[A-Za-z]+$/.test(lastName)) {
            newErrors.lastName = "Last name must contain only letters";
        }
        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Email is invalid";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            alert(`Submitted: ${firstName} ${lastName} (${email})`);
            setFirstName("");
            setLastName("");
            setEmail("");
            setErrors({});
        }
    };

    return (
        <div className={style.container}>
            {/* 👇 Button added top-left */}
            <div className={style.topBar}>
                <button 
                    className={style.navBtn} 
                    onClick={() => navigate("/member-profile")}
                >
                     Member Profile
                </button>
            </div>

            <h2 className={style.title}>Add New Members</h2>
            <section className={style.form_container}>
                <form className={style.form} onSubmit={handleSubmit}>
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="text"
                        id="firstname"
                        autoComplete="off"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        required
                        placeholder="Enter First Name"
                    />
                    {errors.firstName && <span className={style.error}>{errors.firstName}</span>}

                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        id="lastname"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        required
                        placeholder="Enter Last Name"
                    />
                    {errors.lastName && <span className={style.error}>{errors.lastName}</span>}

                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        autoComplete="off"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        required
                        placeholder="Enter Email"
                    />
                    {errors.email && <span className={style.error}>{errors.email}</span>}

                    <button className={style.btn} type="submit">
                        Add Member
                    </button>
                </form>
            </section>
        </div>
    );
};

export default AddMembers;
