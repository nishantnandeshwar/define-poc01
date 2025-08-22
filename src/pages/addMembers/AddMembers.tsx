import React, { useState } from "react";
import style from './AddMembers.module.css';

const AddMembers: React.FC = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errors, setErrors] = useState<{ firstName?: string; lastName?: string }>({});

    const validate = () => {
        const newErrors: { firstName?: string; lastName?: string } = {};
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
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            // Submit logic here
            alert(`Submitted: ${firstName} ${lastName}`);
            setFirstName("");
            setLastName("");
            setErrors({});
        }
    };

    return (
        <div className={style.container}>
            <h2 className={style.title}>Add Members</h2>
            <section className=".form_container">
                <form className={style.form} onSubmit={handleSubmit}>
                    <label htmlFor="firstname">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstname"
                        autoComplete="off"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        required
                    />

                    <label htmlFor="lastname">
                        Last Name:
                    </label>
                    <input
                        type="text"
                        id="lastname"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        required
                    />

                    <button className={style.btn} type="submit">
                        Add Member
                    </button>
                </form>
            </section>
        </div>
    );
};

export default AddMembers;