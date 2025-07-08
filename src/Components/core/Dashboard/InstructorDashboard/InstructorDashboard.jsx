
import React, { useState, useEffect } from 'react';
import { Users, BookOpen, DollarSign, TrendingUp, Eye, ArrowRight } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DashboardChart from './DashboardChart';
import { getInstructorDashboard } from '../../../../services/operations/profileAPI';
import { fetchInstructorCourses } from '../../../../services/operations/courseDetailsAPI';

const InstructorDashboard = () => {
  const [details, setDetails] = useState([]);
  const [courses, setCourses] = useState([]);
  const [currentChart, setCurrentChart] = useState('revenue');
  const [isLoading, setIsLoading] = useState(true);

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const instructorDetails = await getInstructorDashboard(token, dispatch);
        const instructorCourses = await fetchInstructorCourses(token);

        setDetails(instructorDetails);
        setCourses(instructorCourses);
      } catch (err) {
        console.error('Failed to load dashboard data', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, [token, dispatch]);

  const totalEarnings = details.reduce((acc, course) => acc + (course.totalRevenue || 0), 0);
  const totalStudents = details.reduce((acc, course) => acc + (course.totalStudents || 0), 0);

  const StatCard = ({ icon: Icon, title, value, subtitle, trend }) => (
    <div className="bg-gradient-to-br from-richblack-800 to-richblack-700 rounded-2xl p-6 border border-richblack-600/50">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Icon className="w-5 h-5 text-blue-400" />
            </div>
            <p className="text-sm font-medium text-richblack-200">{title}</p>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-richblack-5 mb-1">{value}</p>
          {subtitle && <p className="text-xs text-richblack-300">{subtitle}</p>}
        </div>
        {trend && (
          <div className="flex items-center space-x-1 text-green-400">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs font-medium">{trend}</span>
          </div>
        )}
      </div>
    </div>
  );

  const CourseCard = ({ course, index }) => (
    <div className="group cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="bg-richblack-800 rounded-2xl overflow-hidden border border-richblack-600/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
        <div className="relative overflow-hidden">
          <img
            src={course.thumbnail}
            alt={course.courseName}
            className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-richblack-900/80 backdrop-blur-sm rounded-lg px-2 py-1">
            <span className="text-xs font-medium text-yellow-400">₹{course.price?.toLocaleString()}</span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-richblack-5 mb-2 group-hover:text-blue-400 transition-colors duration-200">
            {course.courseName}
          </h3>
          <div className="flex items-center justify-between text-sm text-richblack-300">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{course.studentsEnrolled?.length ?? 0} Students</span>
            </div>
            <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Eye className="w-4 h-4" />
              <span>View</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-richblack-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-richblack-200">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-richblack-900">
      <div className="mx-auto w-11/12 max-w-7xl py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-richblack-5 mb-1">
            Welcome back, {user?.firstName}! 👋
          </h1>
          <p className="text-lg text-richblack-200">Here's what's happening with your courses today</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard icon={BookOpen} title="Total Courses" value={courses.length} subtitle="Active courses" trend="+12%" />
          <StatCard icon={Users} title="Total Students" value={totalStudents.toLocaleString()} subtitle="Enrolled learners" trend="+8%" />
          <StatCard icon={DollarSign} title="Total Revenue" value={`₹${totalEarnings.toLocaleString()}`} subtitle="This month" trend="+15%" />
          <StatCard icon={TrendingUp} title="Growth Rate" value="23.5%" subtitle="vs last month" trend="+5%" />
        </div>

        {/* Chart and Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-richblack-800 rounded-2xl p-6 border border-richblack-600/50">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-richblack-5">Analytics Overview</h2>
              <div className="flex gap-2">
                <button
                  className={`px-4 py-2 rounded-md text-sm ${
                    currentChart === 'revenue'
                      ? 'bg-blue-500 text-white'
                      : 'bg-richblack-700 text-richblack-200'
                  }`}
                  onClick={() => setCurrentChart('revenue')}
                >
                  Revenue
                </button>
                <button
                  className={`px-4 py-2 rounded-md text-sm ${
                    currentChart === 'students'
                      ? 'bg-blue-500 text-white'
                      : 'bg-richblack-700 text-richblack-200'
                  }`}
                  onClick={() => setCurrentChart('students')}
                >
                  Students
                </button>
              </div>
            </div>
            <DashboardChart details={details} currentChart={currentChart} />
          </div>

          {/* Quick Stats */}
          <div className="space-y-4 bg-richblack-800 p-6 rounded-2xl border border-richblack-600/50">
            <h3 className="text-lg font-bold text-richblack-5 mb-4">Quick Stats</h3>
            <div className="flex justify-between text-richblack-200">
              <span>Avg. Rating</span>
              <span className="text-yellow-400">4.8 ★</span>
            </div>
            <div className="flex justify-between text-richblack-200">
              <span>Completion Rate</span>
              <span className="text-green-400">87%</span>
            </div>
            <div className="flex justify-between text-richblack-200">
              <span>New Students</span>
              <span className="text-blue-400">+24 this week</span>
            </div>
          </div>
        </div>

        {/* Your Courses */}
        <div className="bg-richblack-800 p-6 rounded-2xl border border-richblack-600/50">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-richblack-5">Your Courses</h2>
            <button
              onClick={() => navigate('/dashboard/my-courses')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            >
              <span className="text-sm font-medium">View All</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          {courses.length === 0 ? (
            <div className="text-center text-richblack-400 py-8">
              You haven't created any courses yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.slice(0, 6).map((course, index) => (
                <CourseCard key={index} course={course} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
