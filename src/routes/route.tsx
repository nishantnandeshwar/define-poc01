import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/DashBoard";
import MembershipDirectory from "../pages/membershipDirectory/MembershipDirectory";
import AddMembers from "../pages/addMembers/AddMembers";
import MemberDetailScreen from "../pages/membershipDirectory/MemberDetails";
import Dashboard1 from "../pages/dashboard/DashBoard1";
import AddNewMembers from "../pages/addMembers/AddMembers01";

// Private (layout) routes
export const privateRoutes = [
  { path: '/', element: <Login /> },
  // { path: "dashboard", element: <Dashboard /> }, //Dashboard1
  { path: "dashboard", element: <Dashboard1 /> }, //Dashboard1
  { path: "membership-directory", element: <MembershipDirectory /> },
  { path: "add-members", element: <AddMembers /> },
  { path: "add-new-members", element: <AddNewMembers /> },
  { path: "detail-members", element: <MemberDetailScreen /> },
];