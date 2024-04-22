import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/admin/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
   {
    title: "Request",
    path: "/admin/request",
    icon: <FaTools/>,
    cName: "nav-text",
  },
  {
    title: "History",
    path: "/admin/history",
    icon: <FaHistory />,
    cName: "nav-text",
  },
 
  {
    title: "Setting",
    path: "/admin/setting",
    icon: <IoSettingsSharp/>,
    cName: "nav-text",
  },
];