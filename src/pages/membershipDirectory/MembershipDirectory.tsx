// import React, { useEffect, useState } from "react";
// import axios, { AxiosResponse } from "axios";
// import "./MembershipDirectory.css"; 

// // Member type
// interface Member {
//   id: number;
//   firstName: string;
//   lastName: string;
//   email: string;
// }

// const MembershipDirectory: React.FC = () => {
//   const [members, setMembers] = useState<Member[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [total, setTotal] = useState<number>(0);
//   const [page, setPage] = useState<number>(1);

//   const limit = 5; 

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get("https://dummyjson.com/users", {
//         params: {
//           limit,
//           skip: (page - 1) * limit,
//         },
//       })
//       .then((res: AxiosResponse<{ users: Member[]; total: number }>) => {
//         setMembers(res.data.users);
//         setTotal(res.data.total);
//         setLoading(false);
//       })
//       .catch((err: unknown) => {
//         setError("Failed to fetch members.");
//         setLoading(false);
//         console.error(err);
//       });
//   }, [page]);

//   const totalPages = Math.ceil(total / limit);

//   if (loading) return <p>Loading members...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="membership-container">
//       <h2>Membership Directory</h2>
//       <p>Total Members: {total}</p>

//       {/* Responsive Table */}
//       <div className="table-wrapper">
//         <table className="member-table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {members.map((member) => (
//               <tr key={member.id}>
//                 <td>{member.id}</td>
//                 <td>{member.firstName}</td>
//                 <td>{member.lastName}</td>
//                 <td>{member.email}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="pagination">
//         <button
//           disabled={page === 1}
//           onClick={() => setPage((prev) => prev - 1)}
//         >
//           Prev
//         </button>
//         <span>
//           Page {page} of {totalPages}
//         </span>
//         <button
//           disabled={page === totalPages}
//           onClick={() => setPage((prev) => prev + 1)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MembershipDirectory;
import React, { useEffect, useRef, useState, useCallback } from "react";
import axios, { AxiosResponse } from "axios";
import "./MembershipDirectory.css";

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

const LIMIT = 10;

const MembershipDirectory: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);

  
  const wrapperRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    let cancelled = false;

    const fetchPage = async () => {
      try {
        setLoading(true);
        setError(null);

        const res: AxiosResponse<DummyJsonResp> = await axios.get(
          "https://dummyjson.com/users",
          {
            params: {
              limit: LIMIT,
              skip: (page - 1) * LIMIT,
              select: "id,firstName,lastName,email,image",
            },
          }
        );

        if (cancelled) return;

        setTotal(res.data.total);

        // append 
        setMembers((prev) => {
          const next = [...prev, ...res.data.users];
          setHasMore(next.length < res.data.total);
          return next;
        });
      } catch (e) {
        if (!cancelled) setError("Failed to fetch members.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchPage();
    return () => {
      cancelled = true;
    };
  }, [page]);

  // scroll handler 
  const handleScroll = useCallback(() => {
    const el = wrapperRef.current;
    if (!el || loading || !hasMore) return;

    const nearBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 100;
    if (nearBottom) {
      setPage((p) => p + 1);
    }
  }, [loading, hasMore]);

  
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="membership-container">
      <h2>Membership Directory</h2>
      <p>Total Members: {total} • Loaded: {members.length} • Page: {page}</p>

      <div className="table-wrapper" ref={wrapperRef}>
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
            {members.map((m) => (
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

      {loading && <p style={{ textAlign: "center", marginTop: 8 }}>Loading…</p>}
      {!hasMore && (
        <p style={{ textAlign: "center", marginTop: 8 }}>All data loaded ✅</p>
      )}
      {error && (
        <p style={{ textAlign: "center", marginTop: 8, color: "#d32f2f" }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default MembershipDirectory;
