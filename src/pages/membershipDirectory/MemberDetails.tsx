import { useState } from "react";
import { useLocation } from "react-router-dom";
import style from './MemberDetails.module.css';

const MemberDetailScreen = () => {
    const location = useLocation();
    const [detailMember, setDetailMember] = useState(location.state?.member)

    return (
        <div className={style.container}>
            <h1> Member details </h1>
            <div className={style.detailsData}>
                <div className={`${style.card}`}>
                    <span>
                        <strong>Member Id:  </strong>
                        {detailMember.id}
                    </span>
                    <span>
                        <strong>Member First Name: </strong>
                        {detailMember.firstName}
                    </span>
                    <span>
                        <strong>Member Last Name: </strong>
                        {detailMember.lastName}
                    </span>
                    <span>
                        <strong>Member Email: </strong>
                        {detailMember.email}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MemberDetailScreen