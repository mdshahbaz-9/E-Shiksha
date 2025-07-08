
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {getUserCourses as getUserEnrolledCourses}  from '../../../services/operations/profileAPI';
import ProgressBar from '@ramonak/react-progress-bar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const EnrolledCourses = () => {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);

    const [enrolledCourses, setEnrolledCourses] = useState(undefined);
    const [progressData, setProgressData] = useState(undefined);
    const [Loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const getEnrolledCourses = async() => {
        setLoading(true);
        try {
            const response = await getUserEnrolledCourses(token, dispatch);
            console.log("getEnrolledCourses -> response", response?.courseProgress);
            setEnrolledCourses(response?.courses);
            setProgressData(response?.courseProgress);
        } catch (error) {
            console.error("Error fetching enrolled courses:", error);
        } finally {
            setLoading(false);
        }
    }

    const totalNoOfLectures = (course) => {
        let total = 0;
        course.courseContent.forEach((section) => {
            total += section.subSection.length;
        });
        return total;
    }

    const calculateCourseDuration = (course) => {
        let totalDurationInSeconds = 0;
        
        // Check if course has totalDuration property first
        if (course.totalDuration) {
            return course.totalDuration;
        }
        
        // Calculate total duration from all subsections
        course.courseContent.forEach((section) => {
            if (section.subSection && Array.isArray(section.subSection)) {
                section.subSection.forEach((subSection) => {
                    if (subSection.timeDuration) {
                        // Handle different time duration formats
                        let duration = 0;
                        
                        // If it's already a number (seconds)
                        if (typeof subSection.timeDuration === 'number') {
                            duration = subSection.timeDuration;
                        }
                        // If it's a string, try to parse it
                        else if (typeof subSection.timeDuration === 'string') {
                            // Handle formats like "10:30" (mm:ss) or "1:10:30" (h:mm:ss)
                            const timeParts = subSection.timeDuration.split(':');
                            if (timeParts.length === 2) {
                                // mm:ss format
                                duration = parseInt(timeParts[0]) * 60 + parseInt(timeParts[1]);
                            } else if (timeParts.length === 3) {
                                // h:mm:ss format
                                duration = parseInt(timeParts[0]) * 3600 + parseInt(timeParts[1]) * 60 + parseInt(timeParts[2]);
                            } else {
                                // Try to parse as a number (seconds)
                                duration = parseFloat(subSection.timeDuration) || 0;
                            }
                        }
                        
                        totalDurationInSeconds += duration;
                    }
                });
            }
        });

        // Convert seconds to readable format
        if (totalDurationInSeconds > 0) {
            const hours = Math.floor(totalDurationInSeconds / 3600);
            const minutes = Math.floor((totalDurationInSeconds % 3600) / 60);
            const seconds = Math.floor(totalDurationInSeconds % 60);
            
            if (hours > 0) {
                return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
            } else if (minutes > 0) {
                return `${minutes}m`;
            } else if (seconds > 0) {
                return `${seconds}s`;
            }
        }
        
        // Fallback: estimate based on number of lectures (avg 8 mins per lecture)
        const totalLectures = totalNoOfLectures(course);
        if (totalLectures > 0) {
            const estimatedMinutes = totalLectures * 8;
            const estimatedHours = Math.floor(estimatedMinutes / 60);
            const remainingMinutes = estimatedMinutes % 60;
            
            if (estimatedHours > 0) {
                return `~${estimatedHours}h ${remainingMinutes > 0 ? remainingMinutes + 'm' : ''}`;
            } else {
                return `~${estimatedMinutes}m`;
            }
        }
        
        return 'Duration not available';
    }

    const handleCourseClick = (course) => {
        navigate(`view-course/${course._id}/section/${course.courseContent[0]._id}/sub-section/${course.courseContent[0].subSection[0]}`);
    }

    useEffect(() => {
        getEnrolledCourses();
    }, []);

    if (Loading) {
        return (
            <div className='flex h-[calc(100vh)] w-full justify-center items-center bg-gradient-to-br from-richblack-900 to-richblack-800'>
                <div className='relative'>
                    <div className='animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500'></div>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <div className='animate-pulse w-6 h-6 bg-blue-500 rounded-full'></div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='mx-auto w-11/12 max-w-[1200px] py-10 px-4'>
            {/* Header Section */}
            <div className='mb-8'>
                <h1 className='text-4xl font-bold text-richblack-50 mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
                    Enrolled Courses
                </h1>
                <div className='h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full'></div>
            </div>

            {!enrolledCourses ? (
                <div className='flex justify-center items-center h-40'>
                    <div className='flex items-center space-x-2'>
                        <div className='animate-bounce w-3 h-3 bg-blue-500 rounded-full'></div>
                        <div className='animate-bounce w-3 h-3 bg-blue-500 rounded-full' style={{ animationDelay: '0.1s' }}></div>
                        <div className='animate-bounce w-3 h-3 bg-blue-500 rounded-full' style={{ animationDelay: '0.2s' }}></div>
                        <span className='ml-4 text-richblack-300'>Loading courses...</span>
                    </div>
                </div>
            ) : !enrolledCourses.length ? (
                <div className='grid h-[40vh] w-full place-content-center'>
                    <div className='text-center'>
                        <div className='mb-6'>
                            <svg className='mx-auto h-24 w-24 text-richblack-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
                            </svg>
                        </div>
                        <p className='text-xl text-richblack-5 mb-2'>No courses enrolled yet</p>
                        <p className='text-richblack-300'>Start your learning journey by enrolling in a course!</p>
                    </div>
                </div>
            ) : (
                <div className='my-8'>
                    {/* Table Header */}
                    <div className='hidden md:flex rounded-t-lg bg-gradient-to-r from-richblack-700 to-richblack-600 shadow-lg border border-richblack-600'>
                        <p className='w-[45%] px-6 py-4 font-semibold text-richblack-50'>Course Details</p>
                        <p className='w-1/4 px-4 py-4 font-semibold text-richblack-50'>Duration</p>
                        <p className='flex-1 px-4 py-4 font-semibold text-richblack-50'>Progress</p>
                    </div>

                    {/* Course Cards */}
                    <div className='space-y-4 md:space-y-0'>
                        {enrolledCourses.map((course, index) => (
                            <div 
                                key={index} 
                                onClick={() => handleCourseClick(course)}
                                className='group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl'
                            >
                                <div className='flex flex-col md:flex-row md:items-center bg-gradient-to-r from-richblack-800 to-richblack-700 border border-richblack-600 rounded-lg md:rounded-none md:border-t-0 hover:border-blue-500/50 transition-all duration-300 overflow-hidden'>
                                    {/* Course Info Section */}
                                    <div className='flex w-full md:w-[45%] items-center gap-4 p-6 md:px-6 md:py-4'>
                                        <div className='relative'>
                                            <img 
                                                className='h-16 w-16 md:h-14 md:w-14 rounded-lg object-cover shadow-lg group-hover:shadow-blue-500/25 transition-shadow duration-300' 
                                                src={course.thumbnail}
                                                alt={course.courseName}
                                            />
                                            <div className='absolute inset-0 bg-gradient-to-tr from-transparent to-white/10 rounded-lg'></div>
                                        </div>
                                        <div className='flex-1 min-w-0'>
                                            <h3 className='font-semibold text-richblack-50 mb-1 truncate group-hover:text-blue-400 transition-colors duration-300'>
                                                {course.courseName}
                                            </h3>
                                            <p className='text-sm text-richblack-300 leading-relaxed'>
                                                {course.courseDescription.length > 80 
                                                    ? course.courseDescription.slice(0, 80) + '...' 
                                                    : course.courseDescription
                                                }
                                            </p>
                                        </div>
                                    </div>

                                    {/* Duration Section */}
                                    <div className='w-full md:w-1/4 px-6 md:px-4 pb-4 md:py-4'>
                                        <div className='md:hidden mb-2'>
                                            <span className='text-sm font-medium text-richblack-300'>Duration:</span>
                                        </div>
                                        <div className='flex items-center'>
                                            <svg className='h-4 w-4 text-richblack-400 mr-2' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                                            </svg>
                                            <span className='text-richblack-200 font-medium'>
                                                {calculateCourseDuration(course)}
                                            </span>
                                        </div>
                                        <div className='flex items-center mt-1 text-xs text-richblack-400'>
                                            <svg className='h-3 w-3 mr-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 4V2a1 1 0 0 1 2 0v2h6V2a1 1 0 0 1 2 0v2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3z' />
                                            </svg>
                                            <span>{totalNoOfLectures(course)} lectures</span>
                                        </div>
                                    </div>

                                    {/* Progress Section */}
                                    <div className='flex-1 px-6 md:px-4 pb-6 md:py-4'>
                                        <div className='md:hidden mb-2'>
                                            <span className='text-sm font-medium text-richblack-300'>Progress:</span>
                                        </div>
                                        {progressData?.map((progress, progressIndex) => {
                                            if (progress?.courseID === course?._id) {
                                                const completedCount = progress?.completedVideos?.length || 0;
                                                const totalCount = totalNoOfLectures(course);
                                                const progressPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
                                                
                                                return (
                                                    <div key={progressIndex} className='space-y-2'>
                                                        <div className='flex justify-between items-center text-sm'>
                                                            <span className='text-richblack-300'>
                                                                Completed: {completedCount} / {totalCount}
                                                            </span>
                                                            <span className='text-richblack-200 font-medium'>
                                                                {progressPercentage}%
                                                            </span>
                                                        </div>
                                                        <div className='relative'>
                                                            <ProgressBar
                                                                completed={progressPercentage}
                                                                height='10px'
                                                                isLabelVisible={false}
                                                                bgColor='linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)'
                                                                baseBgColor='#374151'
                                                                borderRadius='5px'
                                                                animateOnRender={true}
                                                                transitionDuration='1s'
                                                            />
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            return null;
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default EnrolledCourses









