import React, { useEffect, useRef, useState, useCallback, CSSProperties } from "react";
import "./MembershipDirectory.css"; // css alag file me

import LoaderModal from '../../components/LoaderModal'
import { getMembershipDirectoryList } from "../../services/getMembershipDirectory.service";


type Member = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image?: string;
};

type DummyJsonResp = {
  users: Member[];
  total: number;
  skip: number;
  limit: number;
};

interface getMemberDataProps {
  users: Member[];
  total: number
}

const MembershipDirectory: React.FC = () => {
  const [membersList, setMembersList] = useState<Member[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const tableWrapperRef = useRef<HTMLDivElement | null>(null);

  const [totalPage, setTotalPage] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const LIMIT = 30

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

      const data = await getMembershipDirectoryList(requestBody)
      if (data) {
        if (page == 1) {
          setMembersList(data.users)
        } else {
          let currentData = membersList;
          currentData = currentData.concat(data.users);
          setMembersList(currentData);
        }
        setTotalPage(Math.ceil(data.total / LIMIT))
        setTotal(data.total);
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

  return (
    <div className="membership-container " >
      <h2 style={{ textAlign: "center" }}>Membership Directory</h2>
      

      <div className="table-wrapper" ref={tableWrapperRef}>
        <table className="member-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {membersList.map((m) => (
              <tr key={m.id}>
                <td>{m.id}</td>
                <td>{m.firstName}</td>
                <td>{m.lastName}</td>
                <td>{m.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>  Current Page: {currentPage} • Total Page: {totalPage}</p>
      <LoaderModal loading={loading} message="Loading, please wait..." />
    </div>
  );
};

export default MembershipDirectory;
