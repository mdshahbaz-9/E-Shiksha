
import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { User, LogOut, ChevronDown } from "lucide-react"

import useOnClickOutside from "../../../hooks/useOnClickOutside"
import { logout } from "../../../services/operations/authAPI"

export default function ProfileDropdown() {
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setOpen(false))

  if (!user){
    console.log("no user");
    return localStorage.setItem("token",null)
  } 

  return (
    <div className="relative">
      <button 
        className="group flex items-center gap-x-3 p-2 rounded-xl transition-all duration-300 hover:bg-richblack-700/50 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]" 
        onClick={() => setOpen(true)}
      >
        {/* Profile Avatar */}
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-50/30 to-blue-300/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="relative w-9 h-9 rounded-full object-cover border-2 border-richblack-600 group-hover:border-orange-400 transition-all duration-300 shadow-md"
          />
        </div>

        {/* User Info (Hidden on mobile) */}
        <div className="hidden md:flex flex-col items-start min-w-0">
          <span className="text-sm font-medium text-richblack-5 truncate max-w-[120px] group-hover:text-yellow-50 transition-colors duration-300">
            {user?.firstName} {user?.lastName}
          </span>
          <span className="text-xs text-richblack-300 truncate max-w-[120px]">
            {user?.email}
          </span>
        </div>

        {/* Dropdown Arrow */}
        <ChevronDown 
          className={`w-4 h-4 text-richblack-300 group-hover:text-yellow-50 transition-all duration-300 ${
            open ? 'rotate-180' : 'rotate-0'
          }`} 
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute top-full right-0 mt-2 z-[1000] animate-slide-down">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative min-w-[240px] rounded-2xl overflow-hidden"
            ref={ref}
          >
            {/* Backdrop Blur Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-50/10 to-blue-300/10 rounded-2xl blur-md"></div>
            
            {/* Main Dropdown Container */}
            <div className="relative bg-richblack-800/95 backdrop-blur-xl border border-richblack-600/50 rounded-2xl shadow-2xl overflow-hidden">
              
              {/* Header Section */}
              <div className="px-4 py-4 border-b border-richblack-600/30 bg-gradient-to-r from-richblack-800/80 to-richblack-700/80">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={user?.image}
                      alt={`profile-${user?.firstName}`}
                      className="w-10 h-10 rounded-full object-cover border-2 border-richblack-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-richblack-5 truncate">
                      {user?.firstName} {user?.lastName}
                    </h3>
                    <p className="text-xs text-richblack-300 truncate">
                      {user?.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="py-2">
                {/* Dashboard Link */}
                <Link to="/dashboard/my-profile" onClick={() => setOpen(false)}>
                  <div className="group/item mx-2 mb-1 flex items-center gap-3 px-3 py-3 text-sm text-richblack-100 hover:text-richblack-5 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-blue-400/5 cursor-pointer rounded-xl">
                    
                    <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover/item:bg-blue-500/20 group-hover/item:border-blue-400/30 transition-all duration-300">
                      <User className="w-4 h-4 text-blue-300" />
                    </div>
                    
                    <div className="flex-1">
                      <span className="font-medium group-hover/item:translate-x-0.5 transition-transform duration-300">
                        Dashboard
                      </span>
                      <div className="text-xs text-richblack-400 group-hover/item:text-richblack-300 transition-colors duration-300">
                        Manage your profile
                      </div>
                    </div>

                    <ChevronDown className="w-4 h-4 text-richblack-400 -rotate-90 opacity-0 group-hover/item:opacity-100 transition-all duration-300" />
                  </div>
                </Link>

                {/* Divider */}
                <div className="mx-4 my-2 h-px bg-gradient-to-r from-transparent via-richblack-600/50 to-transparent"></div>

                {/* Logout Button */}
                <div
                  onClick={() => {
                    dispatch(logout(navigate))
                    setOpen(false)
                  }}
                  className="group/item mx-2 flex items-center gap-3 px-3 py-3 text-sm text-richblack-100 hover:text-red-200 transition-all duration-300 hover:bg-gradient-to-r hover:from-red-500/10 hover:to-red-400/5 cursor-pointer rounded-xl"
                >
                  <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 group-hover/item:bg-red-500/20 group-hover/item:border-red-400/30 transition-all duration-300">
                    <LogOut className="w-4 h-4 text-red-300" />
                  </div>
                  
                  <div className="flex-1">
                    <span className="font-medium group-hover/item:translate-x-0.5 transition-transform duration-300">
                      Sign Out
                    </span>
                    <div className="text-xs text-richblack-400 group-hover/item:text-red-300 transition-colors duration-300">
                      Logout from account
                    </div>
                  </div>

                  <ChevronDown className="w-4 h-4 text-richblack-400 -rotate-90 opacity-0 group-hover/item:opacity-100 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}