// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import {GiNinjaStar} from "react-icons/gi"
// import {RiDeleteBin6Line} from "react-icons/ri"
// import { removeFromCart } from '../../../../slices/cartSlice'
// import ReactStars from "react-rating-stars-component";
// import { Link } from 'react-router-dom';
// const RenderCartCourses = () => {

//     const {cart} = useSelector((state) => state.cart);
//     const dispatch = useDispatch();


//   return (
//     <div className='flex flex-1 flex-col'>
//     {
//         cart.map((course, index) => (
//             <div key={index} className='flex w-full flex-wrap items-start justify-between gap-6 border-b border-b-richblack-400 pb-6 false pt-6'>
//                 <div className='flex flex-1 flex-col gap-4 xl:flex-row'>
//                     <Link to={`/courses/${course._id}`}>
//                     <img className='md:h-[148px] md:w-[220px] h-[100px] w-[180px] rounded-lg object-cover' src={course?.thumbnail} />
//                     </Link>
//                     <div className='flex flex-col space-y-1'>
//                         <Link to={`/courses/${course._id}`}>
//                         <p className='text-lg font-semibold text-richblack-5 poppins'>{course?.courseName}</p>
//                         </Link>
//                         <Link to={`/catalog/${course?.category?.name}`}>
//                         <p className='text-sm text-richblack-300'>{course?.category?.name}</p>
//                         </Link>
                        
//                         <div className='flex items-center gap-2'>
//                             <span className='text-yellow-5'></span>
//                             <ReactStars
//                                 count={5}
//                                 size={20}
//                                 edit={false}
//                                 activeColor="#ffd700"
//                                 emtpyIcon={<GiNinjaStar />}
//                                 fullIcon={<GiNinjaStar />}
//                             /> 

//                             <span className='text-richblack-400'>{course?.ratingAndReviews?.length} Ratings</span>

//                         </div>
//                     </div>
//                 </div>

//                 <div className='flex flex-col items-end  space-y-2 crimson'>
//                     <p className='mb-6 text-2xl md:text-3xl font-medium text-yellow-100'>₹ {course?.price} </p>
//                     <button className='flex items-center gap-x-1 rounded-md border border-richblack-600 bg-richblack-700 py-2 px-[8px] text-pink-200 text-lg font-medium'
//                     onClick={() => dispatch(removeFromCart(course._id))}
//                     >
//                         <RiDeleteBin6Line/>
//                         <span></span>
//                     </button>
//                 </div>
//             </div>
//         ))
//     }
      
//     </div>
//   )
// }

// export default RenderCartCourses



import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GiNinjaStar } from "react-icons/gi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { removeFromCart } from '../../../../slices/cartSlice';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

const RenderCartCourses = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="space-y-6">
      {cart.map((course, index) => (
        <div key={course._id} className="bg-gradient-to-r from-richblack-900 to-richblack-200 border border-rose-100  rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300  overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Course Image */}
              <div className="flex-shrink-0">
                <div className="relative group">
                  <img
                    src={course?.thumbnail}
                    alt={course?.courseName}
                    className="w-full lg:w-48 h-32 lg:h-28 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Course Details */}
              <div className="flex-grow space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 hover:text-indigo-600 transition-colors">
                    {course?.courseName}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      {course?.category?.name}
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <ReactStars
                      count={5}
                      value={course?.ratingAndReviews?.length || 0}
                      size={18}
                      edit={false}
                      activeColor="#fbbf24"
                      color="#e5e7eb"
                      emptyIcon={<GiNinjaStar />}
                      fullIcon={<GiNinjaStar />}
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {course?.ratingAndReviews?.length || 0}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {course?.ratingAndReviews?.length} Ratings
                  </span>
                </div>
              </div>

              {/* Price and Actions */}
              <div className="flex lg:flex-col items-end lg:items-end justify-between lg:justify-center gap-4">
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-800 mb-1">
                    ₹ {course?.price}
                  </div>
                </div>
                
                <button
                  onClick={() => dispatch(removeFromCart(course._id))}
                  className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-white hover:bg-red-600 border border-red-200 hover:border-red-600 rounded-lg transition-all duration-300 font-medium"
                >
                  <RiDeleteBin6Line size={16} />
                  <span className="hidden sm:inline">Remove</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderCartCourses;