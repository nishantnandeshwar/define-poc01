import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/DashBoard";
import MembershipDirectory from "../pages/membershipDirectory/MembershipDirectory";
import AddMembers from "../pages/addMembers/AddMembers";
import MemberDetailScreen from "../pages/membershipDirectory/MemberDetails";
import AddNewMembers from "../pages/addMembers/AddMembers01";

import MemberProfile from "../pages/MemberProfile/MemberProfile";

// Private (layout) routes
export const privateRoutes = [
  { path: '/', element: <Login /> },
  { path: "dashboard", element: <Dashboard /> },
  { path: "member-profile", element: <MemberProfile /> },
  { path: "member-profile/add-new-members", element: <AddNewMembers /> }, 

  
  { path: "add-members", element: <AddMembers /> },//old. ui
  { path: "membership-directory", element: <MembershipDirectory /> }, //old. ui
  { path: "detail-members", element: <MemberDetailScreen /> },  //old. ui

];