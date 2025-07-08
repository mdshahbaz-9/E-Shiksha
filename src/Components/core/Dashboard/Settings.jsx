
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  updateAdditionalDetails,
  updatePassword,
  updatePfp,
  deleteAccount,
} from "../../../services/operations/profileAPI";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);

  //update profile picture
  const pfp = useSelector((state) => state.profile.user.image);
  const [profilePicture, setprofilePicture] = useState(pfp);
  const token = useSelector((state) => state.auth.token);

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    updatePfp(token, file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setprofilePicture(URL.createObjectURL(file));
  };

  //update additional info
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    contactNumber: "",
    about: "",
  });

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handelAdditionalDetails = (e) => {
    e.preventDefault();
    updateAdditionalDetails(token, formData);
  };

  //update password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleOnChangePassword = (e) => {
    setPassword((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePassword = (e) => {
    e.preventDefault();
    const { newPassword, confirmPassword } = password;
    if (newPassword === confirmPassword) {
      updatePassword(token, password);
    } else {
      alert("Password does not match");
    }
  };

  //delete account
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirm(true);
  };

  const handleConfirmDelete = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      deleteAccount(token, dispatch, navigate);
    }
    setShowConfirm(false);
    // Optionally redirect or show a success message
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  return (
    <div>
      <div className="flex-1 overflow-auto">
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <h1 className="mb-14 text-3xl font-bold text-richblack-5 tracking-tight">
            Edit Profile
          </h1>

          {/* Update Profile Picture Section */}
          <div className="group flex items-center justify-between rounded-xl border-[1px] border-richblack-700 bg-gradient-to-r from-richblack-800 to-richblack-850 md:p-8 md:px-12 px-3 py-3 text-richblack-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-richblack-600 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-60"></div>
            
            <div className="flex items-center gap-x-6 relative z-10 w-full">
              <div className="relative">
                <img
                  className="aspect-square w-[78px] rounded-full object-cover ring-4 ring-richblack-700 group-hover:ring-blue-500/50 transition-all duration-300 shadow-lg"
                  src={profilePicture}
                  alt="Profile"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full border-3 border-richblack-800 shadow-lg flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </div>
              </div>
              
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">📷</span>
                  </div>
                  <p className="text-lg font-semibold text-richblack-5">Change Profile Picture</p>
                </div>
                
                <form onSubmit={handleUpload}>
                  <div className="flex flex-row gap-3">
                    <label
                      className="cursor-pointer rounded-lg bg-richblack-700 hover:bg-richblack-600 py-3 px-6 font-semibold text-richblack-50 transition-all duration-200 border border-richblack-600 hover:border-richblack-500"
                      htmlFor="upload"
                    >
                      Select File
                      <input
                        id="upload"
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept="image/png, image/gif, image/jpeg"
                      />
                    </label>
                    <button
                      type="submit"
                      className="flex items-center  bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-800cursor-pointer gap-x-2 rounded-lg py-3 px-6 font-semibold text-richblack-900 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      Upload
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Profile Information Section */}
          <form onSubmit={handelAdditionalDetails}>
            <div className="my-10 flex flex-col gap-y-8 rounded-xl border-[1px] border-richblack-700 bg-gradient-to-r from-richblack-800 to-richblack-850 p-3 md:p-8 md:px-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-richblack-600 group relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-teal-500 opacity-60"></div>
              
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">👤</span>
                </div>
                <h2 className="text-xl font-bold text-richblack-5">Profile Information</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-semibold text-richblack-50 uppercase tracking-wide">
                    First Name
                  </label>
                  <input
                    defaultValue={user.firstName || ""}
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter first name"
                    className="w-full rounded-lg bg-richblack-900/50 border border-richblack-700 p-4 text-richblack-5 placeholder-richblack-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-semibold text-richblack-50 uppercase tracking-wide">
                    Last Name
                  </label>
                  <input
                    defaultValue={user.lastName || ""}
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter last name"
                    className="w-full rounded-lg bg-richblack-900/50 border border-richblack-700 p-4 text-richblack-5 placeholder-richblack-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    onChange={handleOnChange}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="dateOfBirth" className="text-sm font-semibold text-richblack-50 uppercase tracking-wide">
                    Date of Birth
                  </label>
                  <input
                    defaultValue={user?.additionalDetails?.dateOfBirth || ""}
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    className="w-full rounded-lg bg-richblack-900/50 border border-richblack-700 p-4 text-richblack-5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="gender" className="text-sm font-semibold text-richblack-50 uppercase tracking-wide">
                    Gender
                  </label>
                  <select
                    defaultValue={user?.additionalDetails?.gender || ""}
                    name="gender"
                    id="gender"
                    className="w-full rounded-lg bg-richblack-900/50 border border-richblack-700 p-4 text-richblack-5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    onChange={handleOnChange}
                  >
                    <option value="Prefer not to say">Prefer not to say</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non-Binary">Non-Binary</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contactNumber" className="text-sm font-semibold text-richblack-50 uppercase tracking-wide">
                    Contact Number
                  </label>
                  <input
                    defaultValue={user?.additionalDetails?.contactNumber || ""}
                    type="tel"
                    name="contactNumber"
                    id="contactNumber"
                    placeholder="Enter Contact Number"
                    className="w-full rounded-lg bg-richblack-900/50 border border-richblack-700 p-4 text-richblack-5 placeholder-richblack-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="about" className="text-sm font-semibold text-richblack-50 uppercase tracking-wide">
                    About
                  </label>
                  <input
                    defaultValue={user?.additionalDetails?.about || ""}
                    type="text"
                    name="about"
                    id="about"
                    placeholder="Enter Bio Details"
                    className="w-full rounded-lg bg-richblack-900/50 border border-richblack-700 p-4 text-richblack-5 placeholder-richblack-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    onChange={handleOnChange}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-3 mb-10">
              <button
                className="flex items-center bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-800 cursor-pointer gap-x-2 rounded-lg py-3 px-6 font-semibold text-richblack-900 transition-all duration-200 shadow-md hover:shadow-lg"
                type="submit"
              >
                Save Changes
              </button>
            </div>
          </form>

          {/* Password Update Section */}
          <form onSubmit={handlePassword}>
            <div className="my-10 flex flex-col gap-y-8 rounded-xl border-[1px] border-richblack-700 bg-gradient-to-r from-richblack-800 to-richblack-850 p-3 md:p-8 md:px-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-richblack-600 group relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-red-500 opacity-60"></div>
              
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🔒</span>
                </div>
                <h2 className="text-xl font-bold text-richblack-5">Update Password</h2>
              </div>
              
              <div className="space-y-6">
                <div className="relative">
                  <label className="block">
                    <p className="mb-2 text-sm font-semibold text-richblack-50 uppercase tracking-wide">
                      Old Password <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                      required
                      type={showPassword ? "text" : "password"}
                      name="oldPassword"
                      value={password.oldPassword}
                      onChange={handleOnChangePassword}
                      placeholder="Enter current password"
                      className="w-full rounded-lg bg-richblack-900/50 border border-richblack-700 p-4 pr-12 text-richblack-5 placeholder-richblack-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                    />
                  </label>
                  <span
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-11 z-[10] cursor-pointer text-richblack-400 hover:text-richblack-200 transition-colors duration-200"
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible fontSize={20} />
                    ) : (
                      <AiOutlineEye fontSize={20} />
                    )}
                  </span>
                </div>
                
                <div className="relative">
                  <label className="block">
                    <p className="mb-2 text-sm font-semibold text-richblack-50 uppercase tracking-wide">
                      New Password <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                      required
                      type={showConfirmPassword ? "text" : "password"}
                      name="newPassword"
                      value={password.newPassword}
                      onChange={handleOnChangePassword}
                      placeholder="Enter new password"
                      className="w-full rounded-lg bg-richblack-900/50 border border-richblack-700 p-4 pr-12 text-richblack-5 placeholder-richblack-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                    />
                  </label>
                  <span
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-4 top-11 z-[10] cursor-pointer text-richblack-400 hover:text-richblack-200 transition-colors duration-200"
                  >
                    {showConfirmPassword ? (
                      <AiOutlineEyeInvisible fontSize={20} />
                    ) : (
                      <AiOutlineEye fontSize={20} />
                    )}
                  </span>
                </div>
                
                <div className="relative">
                  <label className="block">
                    <p className="mb-2 text-sm font-semibold text-richblack-50 uppercase tracking-wide">
                      Confirm New Password <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                      required
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={password.confirmPassword}
                      onChange={handleOnChangePassword}
                      placeholder="Confirm new password"
                      className="w-full rounded-lg bg-richblack-900/50 border border-richblack-700 p-4 pr-12 text-richblack-5 placeholder-richblack-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                    />
                  </label>
                  <span
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-4 top-11 z-[10] cursor-pointer text-richblack-400 hover:text-richblack-200 transition-colors duration-200"
                  >
                    {showConfirmPassword ? (
                      <AiOutlineEyeInvisible fontSize={20} />
                    ) : (
                      <AiOutlineEye fontSize={20} />
                    )}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-3 mb-10">
              <button
                className="flex items-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 cursor-pointer gap-x-2 rounded-lg py-3 px-6 font-semibold text-white transition-all duration-200 shadow-md hover:shadow-lg"
                type="submit"
              >
                Update Password
              </button>
            </div>
          </form>

          {/* Delete Account Section */}
          <div className="my-10 flex flex-row gap-x-6 rounded-xl border-[1px] border-rose-700 bg-gradient-to-r from-pink-900 to-rose-900 p-3 md:p-8 md:px-12 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-pink-500 to-red-500"></div>
            
            <div className="flex aspect-square h-16 w-16 items-center justify-center rounded-full bg-pink-700 shadow-lg relative z-10">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-2xl text-pink-200"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </div>
            
            <div className="flex flex-col space-y-4 w-full relative z-10">
              <h2 className="text-xl font-bold text-richblack-5">Delete Account</h2>
              <div className="md:w-4/5 text-pink-100 space-y-2">
                <p className="font-medium">Would you like to delete your account?</p>
                <p className="text-sm opacity-90">
                  This account may contain Paid Courses. Deleting your account
                  is permanent and will remove all the content associated with
                  it.
                </p>
              </div>
              <button
                type="button"
                onClick={handleDeleteClick}
                className="w-fit cursor-pointer italic text-pink-300 hover:text-pink-200 font-medium underline underline-offset-2 transition-colors duration-200"
              >
                I want to delete my account.
              </button>
            </div>
          </div>

          {/* Delete Confirmation Modal */}
          {showConfirm && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="bg-rose-300 p-6 rounded-2xl shadow-2xl w-full max-w-md animate-fadeIn border border-red-200 relative">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-red-600">Delete Account?</h2>
                  <p className="text-sm text-gray-600">
                    This action cannot be undone. All your data will be permanently deleted.
                  </p>
                </div>
                <div className="mt-6 flex justify-center gap-3">
                  <button
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                    onClick={handleConfirmDelete}
                  >
                    Delete Account
                  </button>
                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-2.5 rounded-lg transition-all duration-200"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;