import React, { useEffect, useRef, useState, useCallback } from "react";
import style from "./MembershipDirectory.module.css"; // css alag file me

import LoaderModal from '../../components/LoaderModal'
import { getMembershipDirectoryList } from "../../services/getMembershipDirectory.service";
import { useNavigate } from "react-router-dom";


type Member = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image?: string;
};

const MembershipDirectory: React.FC = () => {
  const [membersList, setMembersList] = useState<Member[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const tableWrapperRef = useRef<HTMLDivElement | null>(null);

  const [totalPage, setTotalPage] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const LIMIT = 30
  const navigate = useNavigate();
  useEffect(() => {
    fetchPage(1);
  }, []);

  const fetchPage = async (page: number) => {
    try {
      setLoading(true);
      setCurrentPage(page)
      const requestBody = {
        limit: LIMIT, skip: (LIMIT * (page - 1)),
        select: "id,firstName,lastName,email"
      }

      const data: any = await getMembershipDirectoryList(requestBody)
      if (data) {
        if (page == 1) {
          setMembersList(data?.users)
        } else {
          let currentData = membersList;
          currentData = currentData.concat(data?.users);
          setMembersList(currentData);
        }
        setTotalPage(Math.ceil(data?.total / LIMIT))
      }
    } catch (e) {
      alert("Failed to fetch members.");
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = useCallback(() => {
    const el = tableWrapperRef.current;
    if (!el || loading) return;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 100) {
      if (currentPage < totalPage) {
        fetchPage(currentPage + 1); // Uncomment to load next page
      }
    }
  }, [loading]);

  useEffect(() => {
    const el = tableWrapperRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const addMember = () => {
    navigate("/add-members");
  }

  const navigateInDetail = (item: Member) => {
    navigate("/detail-members", { state: { member: item } });
  }

  return (
    <div className={style.membershipContainer} >
      <div 
      className={style.headerContainer}
      // style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", marginBottom: "16px" }}
      >
        <h2 className={style.headerLabel}>Membership Directory</h2>
        <button
          onClick={addMember}
          className={style.addMemberBtn}
        >
          + Add Member
        </button>

      </div>
      <div className={style.tableWrapper} ref={tableWrapperRef}>
        <table className={style.memberTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {membersList?.map((m) => (
              <tr
                key={m.id}
                onClick={() => navigateInDetail(m)}
                className={style.memberItems}
              >
                <td>{m.id}</td>
                <td>{m.firstName}</td>
                <td>{m.lastName}</td>
                <td>{m.email}</td>
              </tr>
            ))}

          </tbody>
        </table>
        {
          (membersList?.length == 0 || membersList == undefined) &&
          <div className={style.noData}>
            <div>No data</div>
          </div>
        }
      </div>
      <div className={style.footer}>
        Current Page: {currentPage} • Total Page: {totalPage}
      </div>
      {
        loading &&
        <LoaderModal loading={loading} message="Loading, please wait..." />
      }
    </div>
  );
};

export default MembershipDirectory;
