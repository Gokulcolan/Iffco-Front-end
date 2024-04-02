import AccomLayout from "../../pages/Gate";
import AccomdationPage from "../../pages/Gate/accomdationPage";
import Dashboard from "../../pages/Gate/dashboard";
import Property from "../../pages/Gate/dashboard/property";
import Resident from "../../pages/Gate/dashboard/resident";
import SuperAdmin from "../../pages/Gate/dashboard/superadmin";
import Employee from "../../pages/Gate/employee";
import Payment from "../../pages/Gate/payments";
import Report from "../../pages/Gate/reports";
import Rooms from "../../pages/Gate/rooms";
import Tickets from "../../pages/Gate/tickets";
import SuAdminPayment from "../../pages/Gate/dashboard/payments";
import EditProperty from "../../pages/Gate/accomdationPage/EditProperty";
import AddEmployee from "../../pages/Gate/employee/AddEmployee";
import Login from "../../pages/Auth/login";
import RealEstateService from "../../pages/Gate/accomdationPage/RealEstate/RealEstateService";
import TransferEmployee from "../../pages/Gate/employee/TransferEmployee";
import RoomViewPage from "../../components/common/RoomViewPage";
import AccomCompare from "../../components/Accomdation/compareProperty/AccomCompare";

const DASHBOARD_SUB_ROUTES = [
  {
    path: `/dashboard`,
    element: <Dashboard />,
    children: [
      {
        path: "superadmin",
        element: <SuperAdmin />,
      },
      {
        path: "property",
        element: <Property />,
      },
      {
        path: "payment",
        element: <SuAdminPayment />,
      },
      {
        path: "resident",
        element: <Resident />,
      },
    ],
  },
];

const accomRoutes = [
  { path: "*", element: <h1>404</h1> },
  // { path: "/login", element: <Login /> },
  {
    path: "/",
    element: <AccomLayout />,
    children: [
      {
        path: "employee",
        element: <Employee />,
      },
      {
        path: "addemployee",
        element: <AddEmployee />,
      },
      {
        path: "transferEmployee",
        element: <TransferEmployee />,
      },
      {
        path: "accomodations",
        element: <AccomdationPage />,
      },
      { path: "/realestate", element: <RealEstateService /> },
      { path: "/compare", element: <AccomCompare /> },

      {
        path: "editproperty",
        element: <EditProperty />,
      },
      {
        path: "/realestate",
        element: <RealEstateService />,
      },
      {
        path: "rooms",
        element: <Rooms />,
      },
      {
        path: "/rooms/view",
        element: <RoomViewPage />,
      },
      {
        path: "payments",
        element: <Payment />,
      },
      {
        path: "ticket",
        element: <Tickets />,
      },
      {
        path: "reports",
        element: <Report />,
      },
      ...DASHBOARD_SUB_ROUTES,
    ],
  },
];

export default accomRoutes;
