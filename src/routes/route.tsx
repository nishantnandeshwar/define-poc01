import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/DashBoard";
import MembershipDirectory from "../pages/membershipDirectory/MembershipDirectory";
import AddMembers from "../pages/addMembers/AddMembers";
import MemberDetailScreen from "../pages/membershipDirectory/MemberDetails";

import MemberProfile from "../pages/MemberProfile/MemberProfile";

// Private (layout) routes
export const privateRoutes = [
  { path: '/', element: <Login /> },
  { path: "dashboard", element: <Dashboard /> },
  { path: "membership-directory", element: <MembershipDirectory /> },
  { path: "add-members", element: <AddMembers /> },
  { path: "detail-members", element: <MemberDetailScreen /> },

  { path: "member-profile", element: <MemberProfile /> },
];