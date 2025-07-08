
import { useDispatch, useSelector } from "react-redux"
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table"

import { setCourse, setEditCourse } from "../../../../slices/courseSlice"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import { useState } from "react"
import { FaCheck } from "react-icons/fa"
import { FiEdit2, FiMoreVertical } from "react-icons/fi"
import { HiClock } from "react-icons/hi"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useNavigate } from "react-router-dom"

import { formatDate } from "../../../../services/formatDate"
import {
  deleteCourse,
  fetchInstructorCourses,
} from "../../../../services/operations/courseDetailsAPI"
import { COURSE_STATUS } from "../../../../utils/constants"
import ConfirmationModal from "../../../common/ConfirmationModal"

export default function CoursesTable({ courses, setCourses }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth)
  const [loading, setLoading] = useState(false)
  const [confirmationModal, setConfirmationModal] = useState(null)
  const TRUNCATE_LENGTH = 30

  const handleCourseDelete = async (courseId) => {
    setLoading(true)
    await deleteCourse({ courseId: courseId }, token)
    const result = await fetchInstructorCourses(token)
    if (result) {
      setCourses(result)
    }
    setConfirmationModal(null)
    setLoading(false)
  }

  // console.log("All Course ", courses)

  if(loading) {
    return (
        <div className="flex items-center justify-center py-16">
          <div className="relative">
            <div className="custom-loader"></div>
            <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-blue-500 border-r-purple-500"></div>
          </div>
        </div>
    )
  }

  return (
    <>
      {/* Professional Container */}
      <div className="bg-white dark:bg-richblack-800 rounded-2xl shadow-xl border border-richblack-200 dark:border-richblack-700 overflow-hidden">
        
        {/* Professional Header */}
        <div className="bg-gradient-to-r from-richblack-900 to-richblack-800 px-8 py-6 border-b border-richblack-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Course Management</h2>
                <p className="text-richblack-300 text-sm">Manage and organize your educational content</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-richblack-400">Total Courses</p>
              <p className="text-2xl font-bold text-white">{courses?.length || 0}</p>
            </div>
          </div>
        </div>

        {/* Professional Table */}
        <Table className="w-full">
          <Thead>
            <Tr className="bg-richblack-900 dark:bg-richblack-850 border-b border-richblack-200 dark:border-richblack-700">
              <Th className="px-8 py-5 text-left text-xs font-semibold text-richblack-600 dark:text-richblack-300 uppercase tracking-wider">
                Course Details
              </Th>
              <Th className="px-6 py-5 text-left text-xs font-semibold text-richblack-600 dark:text-richblack-300 uppercase tracking-wider">
                Status
              </Th>
              <Th className="px-6 py-5 text-left text-xs font-semibold text-richblack-600 dark:text-richblack-300 uppercase tracking-wider">
                Price
              </Th>
              <Th className="px-6 py-5 text-center text-xs font-semibold text-richblack-600 dark:text-richblack-300 uppercase tracking-wider">
                Actions
              </Th>
            </Tr>
          </Thead>
          <Tbody className="divide-y divide-richblack-200 dark:divide-richblack-700">
            {courses?.length === 0 ? (
              <Tr>
                <Td colSpan={4} className="px-8 py-20 text-center">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="h-24 w-24 bg-richblack-100 dark:bg-richblack-700 rounded-full flex items-center justify-center">
                      <svg className="h-12 w-12 text-richblack-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-richblack-900 dark:text-richblack-100">
                        No courses available
                      </h3>
                      <p className="text-richblack-500 dark:text-richblack-400 max-w-sm">
                        Start creating your first course to begin sharing knowledge with students worldwide.
                      </p>
                    </div>
                  </div>
                </Td>
              </Tr>
            ) : (
              courses?.map((course, index) => (
                <Tr
                  key={course?._id}
                  className="group hover:bg-richblack-25 dark:hover:bg-richblack-700/30 transition-all duration-200"
                >
                  {/* Course Details */}
                  <Td className="px-8 py-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="relative h-20 w-32 rounded-xl overflow-hidden shadow-md border border-richblack-200 dark:border-richblack-600">
                          <img
                            src={course?.thumbnail}
                            alt={course?.courseName}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 space-y-2">
                        <h3 className="text-lg font-semibold text-richblack-900 dark:text-richblack-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {course.courseName}
                        </h3>
                        <p className="text-sm text-richblack-600 dark:text-richblack-300 line-clamp-2 leading-relaxed">
                          {course?.courseDescription.split(" ")?.length >
                          TRUNCATE_LENGTH
                            ? course.courseDescription
                                .split(" ")
                                .slice(0, TRUNCATE_LENGTH)
                                .join(" ") + "..."
                            : course.courseDescription}
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-richblack-500 dark:text-richblack-400">
                          <span className="flex items-center space-x-1">
                            <HiClock className="h-3 w-3" />
                            <span>Created {formatDate(course?.createdAt || course?.updatedAt)}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Td>

                  {/* Status */}
                  <Td className="px-6 py-6">
                    {course.status === COURSE_STATUS.DRAFT ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800">
                        <HiClock className="h-3 w-3 mr-1" />
                        Draft
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 border border-green-200 dark:border-green-800">
                        <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                        Published
                      </span>
                    )}
                  </Td>

                  {/* Price */}
                  <Td className="px-6 py-6">
                    <div className="text-lg font-bold text-richblack-900 dark:text-richblack-100">
                      ₹{course.price?.toLocaleString()}
                    </div>
                  </Td>

                  {/* Actions */}
                  <Td className="px-6 py-6">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        disabled={loading}
                        onClick={() => {
                          navigate(`/dashboard/edit-course/${course._id}`);
                        }}
                        className="inline-flex items-center justify-center h-10 w-10 rounded-lg text-richblack-600 dark:text-richblack-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Edit Course"
                      >
                        <FiEdit2 className="h-4 w-4" />
                      </button>
                      <button
                        disabled={loading}
                        onClick={() => {
                          setConfirmationModal({
                            text1: "Do you want to delete this course?",
                            text2:
                              "All the data related to this course will be deleted",
                            btn1Text: !loading ? "Delete" : "Loading...  ",
                            btn2Text: "Cancel",
                            btn1Handler: !loading
                              ? () => handleCourseDelete(course._id)
                              : () => {},
                            btn2Handler: !loading
                              ? () => setConfirmationModal(null)
                              : () => {},
                          })
                        }}
                        className="inline-flex items-center justify-center h-10 w-10 rounded-lg text-richblack-600 dark:text-richblack-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Delete Course"
                      >
                        <RiDeleteBin6Line className="h-4 w-4" />
                      </button>
                    </div>
                  </Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}