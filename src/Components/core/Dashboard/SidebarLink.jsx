import React from "react";
import * as Icons from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { NavLink, matchPath, useLocation } from "react-router-dom";
import { setEditCourse } from "../../../slices/courseSlice";
import { useSelector } from "react-redux";

const SidebarLink = ({ link, iconName }) => {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  );

  const Icon = Icons[iconName];
  const location = useLocation();
  const dispatch = useDispatch();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    
    <NavLink
      to={link.path}
      className={`py-2 px-4 relative md:px-8 md:py-2 text-sm font-medium transition-all duration-300 ${
        matchRoute(link.path)
          ? user?.accountType === "Student"
            ? "bg-richblue-700"
            : user?.accountType === "Admin"
            ? "bg-pink-800"
            : "bg-cyan-600"
            : "bg-opacity-0"
      }`}
    >
      <div
        className="flex item-center gap-x-2 flex-col md:flex-row"
        onClick={() => {
          dispatch(setEditCourse(false));
        }}
      >
        <Icon className="md:text-lg text-3xl" />
        <span className="hidden md:block">{link.name}</span>
        <span
  className={`absolute bottom-0 left-0 md:top-0 h-[0.2rem] w-full md:h-full md:w-[0.2rem] ${
    user?.accountType === "Student"
      ? "bg-blue-5"
      : user?.accountType === "Admin"
      ? "bg-pink-50"
      : "bg-caribbeangreen-50"
  } opacity-0 transition-all duration-300 ${
    matchRoute(link.path) ? "opacity-100" : "opacity-0"
  }`}
/>

      </div>
    </NavLink>
  );
};

export default SidebarLink;
