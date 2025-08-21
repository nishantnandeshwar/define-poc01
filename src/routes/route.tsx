import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/DashBoard";
import MembershipDirectory from "../pages/membershipDirectory/MembershipDirectory";

// Public routes (no layout)
export const publicRoutes = [
  { path: "/", element: <Login /> },
];

// Private (layout) routes
export const privateRoutes = [
    { path: '/', element: <Login /> },
  { path: "dashboard", element: <Dashboard /> },
  { path: "membership-directory", element: <MembershipDirectory /> },
];