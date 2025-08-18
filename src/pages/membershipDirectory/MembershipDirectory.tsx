import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import "./MembershipDirectory.css"; // css alag file me

// Member type
interface Member {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

const MembershipDirectory: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const limit = 5; // ek page me kitne members dikhane hai

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/users", {
        params: {
          limit,
          skip: (page - 1) * limit,
        },
      })
      .then((res: AxiosResponse<{ users: Member[]; total: number }>) => {
        setMembers(res.data.users);
        setTotal(res.data.total);
        setLoading(false);
      })
      .catch((err: unknown) => {
        setError("Failed to fetch members.");
        setLoading(false);
        console.error(err);
      });
  }, [page]);

  const totalPages = Math.ceil(total / limit);

  if (loading) return <p>Loading members...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="membership-container">
      <h2>Membership Directory</h2>
      <p>Total Members: {total}</p>

      {/* Responsive Table */}
      <div className="table-wrapper">
        <table className="member-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td>{member.id}</td>
                <td>{member.firstName}</td>
                <td>{member.lastName}</td>
                <td>{member.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MembershipDirectory;
