import React, { useState } from "react";

import { sidebarLinks } from "../../../data/dashboard-links";
import { logout } from "../../../services/operations/authAPI";
import { useDispatch, useSelector } from "react-redux";
import SidebarLink from "./SidebarLink";
import { useNavigate } from "react-router-dom";
import { VscSignOut } from "react-icons/vsc";
import ConfirmationModal from "../../common/ConfirmationModal";
import { setCourse, setStep } from "../../../slices/courseSlice";

const Sidebar = () => {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  );
  const { loading: authLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirmationModal, setConfirmationModal] = useState(null);

  if (profileLoading || authLoading) {
    return <div className="mt-10">Loading...</div>;
  }

  return (
    <div className=" text-white bg-richblack-900 border-r-richblack-700 lg:flex ">
      <div
        className="hidden min-w-[222px] flex-col border-r-[1px] border-r-richblack-700 lg:flex
        h-[calc[100vh-3.5rem)]   bg-richblack-900 py-10">
        
        {/* User name */}
        <div className="relative z-10 px-4 mb-6">
          <div
            className="flex items-center space-x-3 p-3 rounded-xl bg-richblack-700/50 backdrop-blur-sm 
                border border-richblack-600/50 hover:bg-richblack-700/70 transition-all duration-300"
          >
            <div
              className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full 
                    flex items-center justify-center text-white font-semibold text-sm shadow-lg"
            >
              {/* {user?.firstName?.charAt(0)?.toUpperCase() || "U"} */}
              <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="relative w-9 h-9 rounded-full object-cover border-2 border-richblack-600 group-hover:border-orange-400 transition-all duration-300 shadow-md"
          />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-richblack-25 font-semibold text-sm truncate">
                {user?.firstName} {user?.lastName}
              </p>
              {/* <p className='text-richblack-300 text-xs capitalize'>
                            {user?.accountType}
                        </p> */}

              <div className="flex items-center space-x-2">
                <div
                  className={`w-2 h-2 rounded-full animate-pulse ${
                    user?.accountType === "Student"
                      ? "bg-blue-5"
                      : user?.accountType === "Admin"
                      ? "bg-pink-600"
                      : "bg-cyan-500" 
                  }`}
                >   
                </div>
                <p className="text-richblack-300 text-sm capitalize font-medium">
                  {user?.accountType}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="flex flex-col">
          {sidebarLinks.map((link) => {
            if (link.type && user?.accountType !== link.type) return null;
            return (
              <SidebarLink key={link.id} link={link} iconName={link.icon} />
            );
          })}
        </div>

        {/* Elegant Divider */}
        <div className="relative mx-4 my-6">
          <div className="absolute inset-0 flex items-center">
            {/* <div className="w-full border-t border-richblack-600"></div> */}
          </div>
          <div className="relative flex justify-center">
            <div className="bg-ichblack-800 px-4">
              <div className="flex items-center space-x-2 ">
              
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-sm shadow-red-500/50"></div>
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-80"></div>
                  <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-60"></div>

                
                <span className="text-xs font-semibold text-richblack-400 uppercase ">
                  Account
                </span>
              

                 <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-60"></div>
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-80"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-sm shadow-red-500/50"></div>
              </div>
              <div className="w-full border-t border-richblack-600"></div> 
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <SidebarLink
            link={{ name: "Settings", path: "/dashboard/settings" }}
            iconName="VscSettingsGear"
          />
          <button
            onClick={() =>
              setConfirmationModal({
                text1: "Are You Sure?",
                text2: "You will be logged out of your Account ",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => dispatch(logout(navigate)),
                btn2Handler: () => setConfirmationModal(null),
              })
            }
            className="text-sm font-medium text-slate-300 hover:text-red-400 
                hover:bg-red-500/10 mx-3 my-2 rounded-xl transition-all duration-200 
                group border border-transparent hover:border-red-500/20"
          >
            <div className="flex items-center gap-x-3 p-4">
              <VscSignOut className="text-lg group-hover:scale-110 transition-transform duration-200" />
              <span>Logout</span>
            </div>
          </button>

          
        </div>
      </div>

      {/* mobile sidebar */}
      <div className="flex lg:hidden fixed bottom-0 justify-between items-center px-2 py-1 bg-richblack-900 z-50 w-full">
        <div className="flex flex-row gap-1 w-full justify-between">
          {sidebarLinks.map((link) => {
            if (link.type && user?.accountType !== link.type) return null;
            return (
              <SidebarLink key={link.id} link={link} iconName={link.icon} />
            );
          })}
          <SidebarLink
            link={{ name: "Settings", path: "/dashboard/settings" }}
            iconName="VscSettingsGear"
          />
        </div>
      </div>

      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  );
};

export default Sidebar;


