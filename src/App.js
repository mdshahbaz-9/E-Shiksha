// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import NavBar from "./Components/common/NavBar";
// import Footer from "./Components/common/Footer";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import ForgotPassword from "./pages/ForgotPassword";
// import ResetPassword from "./pages/ResetPassword";
// import VerifyOtp from "./pages/VerifyOtp";
// import About from "./pages/About";
// import ContactUs from "./pages/ContactUs";
// import LoadingBar from "react-top-loading-bar";
// import { setProgress } from "./slices/loadingBarSlice";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import Dashboard from "./pages/Dashboard";
// import OpenRoute from "./Components/core/Auth/OpenRoute";
// import PrivateRoute from "./Components/core/Auth/PrivateRoute";
// import MyProfile from "./Components/core/Dashboard/MyProfile";
// import Setting from "./Components/core/Dashboard/Settings";
// import EnrollledCourses from "./Components/core/Dashboard/EnrolledCourses";
// import Cart from "./Components/core/Dashboard/Cart/index";
// import { ACCOUNT_TYPE } from "./utils/constants";
// import AddCourse from "./Components/core/Dashboard/AddCourse/index";
// import MyCourses from "./Components/core/Dashboard/MyCourses/MyCourses";
// import EditCourse from "./Components/core/Dashboard/EditCourse.jsx/EditCourse";
// import Catalog from "./pages/Catalog";
// import ScrollToTop from "./Components/ScrollToTop";
// import CourseDetails from "./pages/CourseDetails";
// import SearchCourse from "./pages/SearchCourse";
// import ViewCourse from "./pages/ViewCourse";
// import VideoDetails from "./Components/core/ViewCourse/VideoDetails";
// import PurchaseHistory from "./Components/core/Dashboard/PurchaseHistory";
// import InstructorDashboard from "./Components/core/Dashboard/InstructorDashboard/InstructorDashboard";
// import { RiWifiOffLine } from "react-icons/ri";
// import AdminPannel from "./Components/core/Dashboard/AdminPannel"; 


// function App() {
//   console.log = function () {};
//   const user = useSelector((state) => state.profile.user);
//   const progress = useSelector((state) => state.loadingBar);
//   const dispatch = useDispatch();
//   return (
//     <div className=" w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">

//       {/* bg */}
//                 <div className='absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl animate-pulse'></div>
//                 <div className='absolute top-32 right-20 w-24 h-24 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full opacity-30 blur-lg animate-bounce'></div>
//                 <div className='absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-15 blur-2xl animate-pulse delay-1000'></div>
//                 <div className='absolute top-1/2 right-10 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-25 blur-lg animate-bounce delay-2000'></div>
                
//       <LoadingBar
//         color="#078c6f"
//         height={1.6}
//         progress={progress}
//         onLoaderFinished={() => dispatch(setProgress(0))}
//       />
//       <NavBar setProgress={setProgress}></NavBar>
//       {!navigator.onLine && (
//         <div className="bg-red-500 flex text-white text-center p-2 justify-center gap-2 items-center">
//           <RiWifiOffLine size={22} />
//           Please check your internet connection.
//           <button
//             className="ml-2 bg-richblack-500 rounded-md p-1 px-2 text-white"
//             onClick={() => window.location.reload()}
//           >
//             Retry
//           </button>
//         </div>
//       )}
//       <ScrollToTop />
//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route path="/catalog/:catalog" element={<Catalog />} />

//         <Route
//           path="/login"
//           element={
//             <OpenRoute>
//               <Login />
//             </OpenRoute>
//           }
//         />

//         <Route
//           path="/signup"
//           element={
//             <OpenRoute>
//               <Signup />
//             </OpenRoute>
//           }
//         />

//         <Route path="/forgot-password" element={<ForgotPassword />} />

//         <Route path="/update-password/:id" element={<ResetPassword />} />

//         <Route path="/verify-email" element={<VerifyOtp />} />

//         <Route path="/about" element={<About />} />

//         <Route path="/contact" element={<ContactUs />} />

//         <Route path="/courses/:courseId" element={<CourseDetails />} />

//         <Route path="/search/:searchQuery" element={<SearchCourse />} />

//         <Route
//           element={
//             <PrivateRoute>
//               <Dashboard />
//             </PrivateRoute>
//           }
//         >
//           <Route path="dashboard/my-profile" element={<MyProfile />} />
//           <Route path="dashboard/settings" element={<Setting />} />
//           {user?.accountType === ACCOUNT_TYPE.STUDENT && (
//             <>
//               <Route path="dashboard/cart" element={<Cart />} />
//               <Route
//                 path="dashboard/enrolled-courses"
//                 element={<EnrollledCourses />}
//               />
//               <Route
//                 path="dashboard/purchase-history"
//                 element={<PurchaseHistory />}
//               />
//             </>
//           )}
//           {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
//             <>
//               <Route path="dashboard/add-course" element={<AddCourse />} />
//               <Route path="dashboard/my-courses" element={<MyCourses />} />
//               <Route
//                 path="dashboard/edit-course/:courseId"
//                 element={<EditCourse />}
//               />
//               <Route
//                 path="dashboard/instructor"
//                 element={<InstructorDashboard />}
//               />
//             </>
//           )}
//           {user?.accountType === ACCOUNT_TYPE.ADMIN && (
//             <>
//               <Route path="dashboard/admin-panel" element={<AdminPannel />} />
//             </>
//           )}
//         </Route>

//         <Route
//           element={
//             <PrivateRoute>
//               <ViewCourse />
//             </PrivateRoute>
//           }
//         >
//           {user?.accountType === ACCOUNT_TYPE.STUDENT && (
//             <>
//               <Route
//                 path="/dashboard/enrolled-courses/view-course/:courseId/section/:sectionId/sub-section/:subsectionId"
//                 element={<VideoDetails />}
//               />
//             </>
//           )}
//         </Route>

//         <Route path="*" element={<Home />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;











import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./Components/common/NavBar";
import Footer from "./Components/common/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyOtp from "./pages/VerifyOtp";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import LoadingBar from "react-top-loading-bar";
import { setProgress } from "./slices/loadingBarSlice";
import { useSelector, useDispatch } from "react-redux";
import Dashboard from "./pages/Dashboard";
import OpenRoute from "./Components/core/Auth/OpenRoute";
import PrivateRoute from "./Components/core/Auth/PrivateRoute";
import MyProfile from "./Components/core/Dashboard/MyProfile";
import Setting from "./Components/core/Dashboard/Settings";
import EnrollledCourses from "./Components/core/Dashboard/EnrolledCourses";
import Cart from "./Components/core/Dashboard/Cart/index";
import { ACCOUNT_TYPE } from "./utils/constants";
import AddCourse from "./Components/core/Dashboard/AddCourse/index";
import MyCourses from "./Components/core/Dashboard/MyCourses/MyCourses";
import EditCourse from "./Components/core/Dashboard/EditCourse.jsx/EditCourse";
import Catalog from "./pages/Catalog";
import ScrollToTop from "./Components/ScrollToTop";
import CourseDetails from "./pages/CourseDetails";
import SearchCourse from "./pages/SearchCourse";
import ViewCourse from "./pages/ViewCourse";
import VideoDetails from "./Components/core/ViewCourse/VideoDetails";
import PurchaseHistory from "./Components/core/Dashboard/PurchaseHistory";
import InstructorDashboard from "./Components/core/Dashboard/InstructorDashboard/InstructorDashboard";
import { RiWifiOffLine } from "react-icons/ri";
import AdminPannel from "./Components/core/Dashboard/AdminPannel";
import { useEffect, useState } from "react";

function App() {
  console.log = function () {};

  const user = useSelector((state) => state.profile.user);
  const progress = useSelector((state) => state.loadingBar);
  const dispatch = useDispatch();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let requestId;

    const updateMousePosition = (e) => {
      const animate = () => {
        setMousePosition((prev) => ({
          x: prev.x + (e.clientX - prev.x) * 0.1,
          y: prev.y + (e.clientY - prev.y) * 0.1,
        }));
        requestId = requestAnimationFrame(animate);
      };
      cancelAnimationFrame(requestId);
      requestId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter relative overflow-hidden">

      {/* Glow effect following mouse */}
      <div
        className="fixed top-0 left-0 z-50 pointer-events-none"
        style={{
          width: "100vw",
          height: "100vh",
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 200, 255, 0.15), transparent 80%)`,
          transition: "background-position 0.05s ease",
          mixBlendMode: "screen",
        }}
      />

      {/* Background gradient blobs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl animate-pulse" />
      <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full opacity-30 blur-lg animate-bounce" />
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-15 blur-2xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-25 blur-lg animate-bounce delay-2000" />

      {/* Top Loading Bar */}
      <LoadingBar
        color="#078c6f"
        height={1.6}
        progress={progress}
        onLoaderFinished={() => dispatch(setProgress(0))}
      />

      {/* Navigation */}
      <NavBar setProgress={setProgress} />

      {/* Offline Banner */}
      {/* Dark Theme Matching Offline Banner */}
      {!navigator.onLine && (
        <div className="bg-richblack-800 border-b border-richblack-700">
          <div className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 bg-red-900/20 rounded-lg">
                <RiWifiOffLine className="w-4 h-4 text-red-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-red-300">
                  No internet connection
                </p>
                <p className="text-xs text-richblack-300">
                  Please check your network settings
                </p>
              </div>
            </div>
            
            <button
              onClick={() => window.location.reload()}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-300 
                         bg-red-900/10 hover:bg-red-900/20 border border-red-800/30 
                         hover:border-red-700/50 rounded-lg transition-all duration-200 
                         focus:outline-none focus:ring-2 focus:ring-red-500/50"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Retry
            </button>
          </div>
        </div>
      )}
      {/* ScrollToTop Helper */}
      <ScrollToTop />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog/:catalog" element={<Catalog />} />
        <Route path="/login" element={<OpenRoute><Login /></OpenRoute>} />
        <Route path="/signup" element={<OpenRoute><Signup /></OpenRoute>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/update-password/:id" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyOtp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/search/:searchQuery" element={<SearchCourse />} />

        {/* Private Dashboard Routes */}
        <Route element={<PrivateRoute><Dashboard /></PrivateRoute>}>
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/settings" element={<Setting />} />

          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route path="dashboard/cart" element={<Cart />} />
              <Route path="dashboard/enrolled-courses" element={<EnrollledCourses />} />
              <Route path="dashboard/purchase-history" element={<PurchaseHistory />} />
            </>
          )}

          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="dashboard/add-course" element={<AddCourse />} />
              <Route path="dashboard/my-courses" element={<MyCourses />} />
              <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />
              <Route path="dashboard/instructor" element={<InstructorDashboard />} />
            </>
          )}

          {user?.accountType === ACCOUNT_TYPE.ADMIN && (
            <Route path="dashboard/admin-panel" element={<AdminPannel />} />
          )}
        </Route>

        {/* View Course */}
        <Route
          element={<PrivateRoute><ViewCourse /></PrivateRoute>}
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <Route
              path="/dashboard/enrolled-courses/view-course/:courseId/section/:sectionId/sub-section/:subsectionId"
              element={<VideoDetails />}
            />
          )}
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App; 














