import list from "../../assests/images/icon-park-outline_table-report.png";
import listwhite from "../../assests/images/icon-park-outline_table-white.png";
import occupied from "../../assests/images/dashboard-occupied-rooms.png";
import vacantwhite from "../../assests/images/user-square 1.png";
import vacant from "../../assests/images/user-square 2.png";
import undermaintenance from "../../assests/images/cil_room_2.png";
import undermaintenancewhite from "../../assests/images/cil_room_white.png";
import payment from "../../assests/images/wallet-money_3.png";
import paymentwhite from "../../assests/images/wallet-money 1.png";
import ticket from "../../assests/images/ticket_2.png";
import ticketwhite from "../../assests/images/ticket_white.png";
import report from "../../assests/images/icon-park-outline_table-report.png";

export const sideRoutes = [
  {
    name: "Home",
    path: "/",
    activePath: ["/"],
  },
  {
    name: "Transaction",
    path: "/transaction",
    activePath: [
      "/transaction",
      "/transaction/deposite",
      "/transaction/withdrawel",
    ],
  },
];

export const menuItems = [
  {
    path: "/dashboard/superadmin",
    name: "Dashboard",
    icon: list,
    icon2: listwhite,
    activePath: [
      "/dashboard/property",
      "/dashboard/payment",
      "/dashboard/resident",
    ],
  },
  {
    path: "/accomodations",
    name: "Accommodations",
    icon: list,
    icon2: listwhite,
    activePath: ["/editproperty"],
  },
  {
    path: "/employee",
    name: "Employee",
    icon: vacant,
    icon2: vacantwhite,
  },
  {
    path: "/rooms",
    name: "Rooms",
    icon: undermaintenance,
    icon2: undermaintenancewhite,
  },
  {
    path: "/payments",
    name: "Payments",
    icon: payment,
    icon2: paymentwhite,
  },
  {
    path: "/ticket",
    name: "Ticket",
    icon: ticket,
    icon2: ticketwhite,
  },
  {
    path: "/reports",
    name: "Inspection Reports",
    icon: report,
    icon2: listwhite,
  },
  // {
  //     name:'Employee',
  //     icon:"",
  //     isNested:[
  //         {
  //             path:"/employee",
  //             name:'Employee',
  //             icon:""
  //         },
  //         {
  //             path:"/requestpass",
  //             name:'Request Gatepass',
  //             icon:""
  //         },
  //         {
  //             path:"/passhistory",
  //             name:'Gatepass History',
  //             icon:""
  //         }
  //     ]
  // },
  // {

  //     name:'Visitor Pass',
  //     icon:"",
  //     isNested:[
  //         {
  //             path:"/visitorpass",
  //             name:'Visitor Pass',
  //             icon:""
  //         },
  //         {
  //             path:"/applypass",
  //             name:'Apply GatePass',
  //             icon:""
  //         },
  //         {
  //             path:"/assignpass",
  //             name:'Assign GatePass',
  //             icon:""
  //         },
  //         {
  //             path:"/nochistory",
  //             name:'Visitor/NOCHistory',
  //             icon:""
  //         }
  //     ]
  // }
];
