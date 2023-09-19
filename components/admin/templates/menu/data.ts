import { MdOutlineInsertPageBreak, MdOutlineProductionQuantityLimits } from 'react-icons/md'

import { BsCalendarDate } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { FaWpforms } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { IoBarChartSharp } from "react-icons/io5";
import { LiaBorderStyleSolid } from 'react-icons/lia'
import { LiaElementor } from "react-icons/lia";
import { LuDatabaseBackup } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { VscListOrdered } from "react-icons/vsc";

export const menu = [
  {
    id: 1,
    title: "Main",
    listItems: [
      {
        id: 1,
        title: "Anasayfa",
        url: "/admin/dashboard",
        icon: RxDashboard,
      },
      {
        id: 2,
        title: "Profile",
        url: "/admin/users",
        icon: FiUsers,
      },
    ],
  },
  {
    id: 2,
    title: "Lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: FiUsers,
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: MdOutlineProductionQuantityLimits,
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: LiaBorderStyleSolid,
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: MdOutlineInsertPageBreak,
      },
    ],
  },
  {
    id: 3,
    title: "General",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: LiaElementor,
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: CgNotes,
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: FaWpforms,
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: BsCalendarDate,
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: CiSettings,
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: LuDatabaseBackup,
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: IoBarChartSharp,
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: VscListOrdered,
      },
    ],
  },
];