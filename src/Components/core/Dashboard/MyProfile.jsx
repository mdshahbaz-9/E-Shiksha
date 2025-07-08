
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import IconBtn from '../../common/IconBtn'
import {FiEdit} from "react-icons/fi"

const MyProfile = () => {

    const {user} = useSelector((state) => state.profile)
    const navigate = useNavigate();
  return (
    <div className='mx-auto w-11/12 max-w-[1000px] py-10'>
        <div className='py-10'>
        <h1 className='mb-14 text-3xl font-bold text-richblack-5 tracking-tight'>
            My Profile
        </h1>
        
        {/* section 1 - Profile Header */}
        <div className='group flex items-center justify-between rounded-xl border-[1px] border-richblack-700 bg-gradient-to-r from-richblack-800 to-richblack-850 p-3 md:p-8 md:px-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-richblack-600 relative overflow-hidden'>
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className='flex items-center gap-x-6 relative z-10'>
                <div className='relative'>
                    <img 
                    src={user?.image}
                    alt={`profile-${user?.firstName}`}
                    className='aspect-square w-[78px] rounded-full object-cover ring-4 ring-richblack-700 group-hover:ring-blue-500/50 transition-all duration-300 shadow-lg' />
                    {/* Online status indicator */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-richblack-800 shadow-lg"></div>
                </div>
                <div className='space-y-2'>
                    <p className='text-xl font-bold text-richblack-5 tracking-wide'> {user?.firstName + " " + user?.lastName} </p>
                    <p className='text-[11px] md:text-sm text-richblack-300 md:max-w-full max-w-[220px] break-words font-medium opacity-80'> {user?.email}</p>
                </div>
            </div>
            <div className="hidden md:block relative z-10">
                <IconBtn
                    text="Edit"
                    onclick={() => {
                        navigate("/dashboard/settings")
                    }} >
                </IconBtn>
            </div>   
        </div>

        {/* section 2 - About Section */}
        <div className='my-10 flex flex-col gap-y-3 md:gap-y-6 rounded-xl border-[1px] border-richblack-700 bg-gradient-to-r from-richblack-800 to-richblack-850 p-3 md:p-8 md:px-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-richblack-600 group relative overflow-hidden'>
            {/* Background accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-60"></div>
            
            <div className='flex w-full items-center justify-between relative z-10'>
                <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center'>
                        <span className='text-white text-sm font-bold'>A</span>
                    </div>
                    <p className='text-xl font-bold text-richblack-5'>About</p>
                </div>
                <div className='opacity-80 hover:opacity-100 transition-opacity duration-200'>
                    <IconBtn 
                    text="Edit"
                    onclick={() => {
                        navigate("/dashboard/settings")
                    }} />
                </div>
            </div>
            <div className='bg-richblack-900/50 rounded-lg p-4 ml-11 border-l-2 border-blue-500/30'>
                <p className='text-richblack-400 text-sm font-medium leading-relaxed'> {user?.additionalDetails?.about  ??  "Write Something about Yourself"}</p>
            </div>
        </div>

        {/* section 3 - Personal Details */}
        <div className='my-10 flex flex-col gap-y-8 rounded-xl border-[1px] border-richblack-700 bg-gradient-to-r from-richblack-800 to-richblack-850 p-3 md:p-8 md:px-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-richblack-600 group relative overflow-hidden'>
            {/* Background accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-teal-500 opacity-60"></div>
            
            <div className='flex w-full items-center justify-between relative z-10'>
                <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center'>
                        <span className='text-white text-sm font-bold'>P</span>
                    </div>
                    <p className='text-xl font-bold text-richblack-5'>Personal Details</p>
                </div>
                <div className='opacity-80 hover:opacity-100 transition-opacity duration-200'>
                    <IconBtn
                    text="Edit"
                    onclick={() => {
                        navigate("/dashboard/settings")
                    }} />
                </div>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-full'>
                <div className='space-y-6'>
                    <div className='bg-richblack-900/50 rounded-lg p-4 border border-richblack-700/50 hover:border-richblack-600/50 transition-colors duration-200'>
                        <p className='mb-2 text-xs font-semibold text-richblack-100 uppercase tracking-wide'>First Name</p>
                        <p className='text-sm font-medium text-richblack-5'>{user?.firstName}</p>
                    </div>
                    <div className='bg-richblack-900/50 rounded-lg p-4 border border-richblack-700/50 hover:border-richblack-600/50 transition-colors duration-200'>
                        <p className='mb-2 text-xs font-semibold text-richblack-100 uppercase tracking-wide'>Email</p>
                        <p className='text-sm font-medium text-richblack-5 break-words'>{user?.email}</p>
                    </div>
                    <div className='bg-richblack-900/50 rounded-lg p-4 border border-richblack-700/50 hover:border-richblack-600/50 transition-colors duration-200'>
                        <p className='mb-2 text-xs font-semibold text-richblack-100 uppercase tracking-wide'>Gender</p>
                        <p className='text-sm font-medium text-richblack-5'>{user?.additionalDetails?.gender ?? "Add Gender"}</p>
                    </div>
                </div>

                <div className='space-y-6'>
                    <div className='bg-richblack-900/50 rounded-lg p-4 border border-richblack-700/50 hover:border-richblack-600/50 transition-colors duration-200'>
                        <p className='mb-2 text-xs font-semibold text-richblack-100 uppercase tracking-wide'>Last Name</p>
                        <p className='text-sm font-medium text-richblack-5'>{user?.lastName}</p>
                    </div>
                    <div className='bg-richblack-900/50 rounded-lg p-4 border border-richblack-700/50 hover:border-richblack-600/50 transition-colors duration-200'>
                        <p className='mb-2 text-xs font-semibold text-richblack-100 uppercase tracking-wide'>Phone Number</p>
                        <p className='text-sm font-medium text-richblack-5'>{user?.additionalDetails?.contactNumber ?? "Add Contact Number"}</p>
                    </div>
                    <div className='bg-richblack-900/50 rounded-lg p-4 border border-richblack-700/50 hover:border-richblack-600/50 transition-colors duration-200'>
                        <p className='mb-2 text-xs font-semibold text-richblack-100 uppercase tracking-wide'>Date of Birth</p>
                        <p className='text-sm font-medium text-richblack-5'>{user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
    
  )
}

export default MyProfile