// import React, { useEffect, useState } from 'react'
// import RatingStars from '../../common/RatingStars'
// import GetAvgRating from '../../../utils/avgRating';
// import { Link } from 'react-router-dom';

// const Course_Card = ({course, Height}) => {

//     const [avgReviewCount, setAvgReviewCount] = useState(0);

//     useEffect(()=> {
//         const count = GetAvgRating(course.ratingAndReviews);
//         setAvgReviewCount(count);
//     },[course])


    
//   return (
//     <div className=' mb-4 hover:scale-[1.03] transition-all duration-200 z-50 '>
//         <Link to={`/courses/${course._id}`}>
//             <div>
//                 <div>
//                     <img 
//                         src={course?.thumbnail}
//                         alt='course thumbnail'
//                         className={`${Height}  rounded-xl object-cover`}
//                     />
//                 </div>
//                 <div className='flex flex-col gap-2 px-1 py-3'>
//                     <p className='text-sm md:text-xl text-richblack-5'>{course?.courseName}</p>
//                     <p className='text-[12px] md:text-xl text-richblack-5'>By <span className='text-yellow-50'>{course?.instructor?.firstName} {course?.instructor?.lastName}</span></p>
//                     <div className='flex gap-x-3'>
//                         <span className='text-yellow-50'>{avgReviewCount || 0}</span>
//                         <RatingStars Review_Count={avgReviewCount} />
//                         <span className=' md:block hidden md:text-xl text-richblack-5'>{course?.ratingAndReviews?.length} Ratings</span>
//                     </div>
//                     <p className='text-sm md:text-xl text-richblack-5'>Rs. {course?.price}</p>
//                 </div>
//             </div>
//         </Link>

      
//     </div>
//   )
// }

// export default Course_Card



import React, { useEffect, useState } from 'react'
import RatingStars from '../../common/RatingStars'
import GetAvgRating from '../../../utils/avgRating';
import { Link } from 'react-router-dom';

const Course_Card = ({course, Height}) => {

    const [avgReviewCount, setAvgReviewCount] = useState(0);

    useEffect(()=> {
        const count = GetAvgRating(course.ratingAndReviews);
        setAvgReviewCount(count);
    },[course])

    
  return (
    <div className='mb-4 group cursor-pointer'>
        <Link to={`/courses/${course._id}`} className="block">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-richblack-800 to-richblack-900 shadow-lg hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300 ease-out border border-richblack-700 hover:border-richblack-600 backdrop-blur-sm">
                {/* Image Container with Overlay */}
                <div className="relative overflow-hidden">
                    <img 
                        src={course?.thumbnail}
                        alt='course thumbnail'
                        className={`${Height} w-full rounded-t-2xl object-cover group-hover:scale-105 transition-transform duration-500 ease-out`}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-richblack-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Price Badge */}
                    <div className="absolute top-3 right-3 bg-yellow-50 text-richblack-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                        Rs. {course?.price}
                    </div>
                </div>

                {/* Content Container */}
                <div className='flex flex-col gap-3 p-4 bg-gradient-to-b from-richblack-800/50 to-richblack-900/80 backdrop-blur-sm'>
                    {/* Course Title */}
                    <h3 className='text-base md:text-xl font-semibold text-richblack-5 line-clamp-2 group-hover:text-yellow-50 transition-colors duration-300 leading-tight'>
                        {course?.courseName}
                    </h3>
                    
                    {/* Instructor */}
                    <p className='text-sm md:text-lg text-richblack-300 group-hover:text-richblack-100 transition-colors duration-300'>
                        By <span className='text-yellow-50 font-medium hover:text-yellow-25 transition-colors duration-200'>
                            {course?.instructor?.firstName} {course?.instructor?.lastName}
                        </span>
                    </p>
                    
                    {/* Rating Section */}
                    <div className='flex items-center gap-3 py-1'>
                        <span className='text-yellow-50 font-semibold text-sm md:text-base bg-yellow-50/10 px-2 py-1 rounded-lg'>
                            {avgReviewCount || 0}
                        </span>
                        <div className="transform group-hover:scale-110 transition-transform duration-300">
                            <RatingStars Review_Count={avgReviewCount} />
                        </div>
                        <span className='hidden md:block text-sm md:text-base text-richblack-400 group-hover:text-richblack-300 transition-colors duration-300'>
                            ({course?.ratingAndReviews?.length} Reviews)
                        </span>
                    </div>
                    
                    {/* Mobile Price */}
                    <div className="md:hidden">
                        <p className='text-lg font-bold text-yellow-50 bg-yellow-50/10 inline-block px-3 py-1 rounded-lg'>
                            Rs. {course?.price}
                        </p>
                    </div>

                    {/* Hover Action Indicator */}
                    <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150 transform translate-y-2 group-hover:translate-y-0">
                        <span className="text-sm text-richblack-400">Tap to view details</span>
                        <div className="w-6 h-6 rounded-full border-2 border-yellow-50 flex items-center justify-center">
                            <svg className="w-3 h-3 text-yellow-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Touch Ripple Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-active:opacity-20 bg-gradient-to-r from-yellow-50 to-blue-200 transition-opacity duration-150 pointer-events-none"></div>
            </div>
        </Link>
    </div>
  )
}

export default Course_Card


//..............................................................................................................



// import React, { useEffect, useState } from 'react'
// import RatingStars from '../../common/RatingStars'
// import GetAvgRating from '../../../utils/avgRating';
// import { Link } from 'react-router-dom';

// const Course_Card = ({course, Height}) => {

//     const [avgReviewCount, setAvgReviewCount] = useState(0);

//     useEffect(()=> {
//         const count = GetAvgRating(course.ratingAndReviews);
//         setAvgReviewCount(count);
//     },[course])

    
//   return (
//     <div className='mb-4 group'>
//         <Link to={`/courses/${course._id}`} className="block">
//             <div className="bg-white dark:bg-richblack-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-richblack-100 dark:border-richblack-700 hover:border-richblack-200 dark:hover:border-richblack-600 overflow-hidden group-hover:-translate-y-1">
                
//                 {/* Image Section */}
//                 <div className="relative overflow-hidden">
//                     <img 
//                         src={course?.thumbnail}
//                         alt={course?.courseName}
//                         className={`${Height} w-full object-cover group-hover:scale-105 transition-transform duration-500`}
//                     />
                    
//                     {/* Price Badge */}
//                     <div className="absolute top-3 right-3 bg-richblack-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-sm font-semibold">
//                         ₹{course?.price}
//                     </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className='p-4 space-y-3'>
                    
//                     {/* Course Title */}
//                     <h3 className='text-base md:text-lg font-semibold text-richblack-800 dark:text-richblack-25 leading-snug line-clamp-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-200'>
//                         {course?.courseName}
//                     </h3>
                    
//                     {/* Instructor */}
//                     <p className='text-sm text-richblack-600 dark:text-richblack-400'>
//                         <span className='text-yellow-600 dark:text-yellow-400 font-medium'>
//                             {course?.instructor?.firstName} {course?.instructor?.lastName}
//                         </span>
//                     </p>
                    
//                     {/* Rating Section */}
//                     <div className='flex items-center justify-between'>
//                         <div className='flex items-center space-x-2'>
//                             <span className='text-sm font-semibold text-richblack-700 dark:text-richblack-300 bg-yellow-50 dark:bg-yellow-900/30 px-2 py-0.5 rounded'>
//                                 {avgReviewCount || 0}
//                             </span>
//                             <RatingStars Review_Count={avgReviewCount} />
//                         </div>
//                         <span className='text-xs text-richblack-500 dark:text-richblack-400'>
//                             ({course?.ratingAndReviews?.length || 0})
//                         </span>
//                     </div>

//                     {/* Mobile Price */}
//                     <div className="md:hidden pt-2 border-t border-richblack-100 dark:border-richblack-700">
//                         <p className='text-lg font-bold text-richblack-800 dark:text-richblack-25'>
//                             ₹{course?.price}
//                         </p>
//                     </div>
//                 </div>

//                 {/* Hover Indicator */}
//                 <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-yellow-400/5 to-blue-400/5 transition-opacity duration-300 pointer-events-none"></div>
//             </div>
//         </Link>
//     </div>
//   )
// }

// export default Course_Card




// import React, { useEffect, useState } from 'react';
// import RatingStars from '../../common/RatingStars'
// import GetAvgRating from '../../../utils/avgRating';
// import { Link } from 'react-router-dom';

// import { User, Users, IndianRupee, Clock, BookOpen, Star } from 'lucide-react';

// const Course_Card = ({ course, Height }) => {
//   const [avgReviewCount, setAvgReviewCount] = useState(0);

//   useEffect(() => {
//     const count = GetAvgRating(course.ratingAndReviews);
//     setAvgReviewCount(count);
//   }, [course]);

//   return (
//     <div className="group transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
//       <Link to={`/courses/${course._id}`}>
//         <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
//           {/* Image Container */}
//           <div className="relative overflow-hidden">
//             <img
//               src={course?.thumbnail}
//               alt="course thumbnail"
//               className={`${Height} w-full object-cover transition-transform duration-300 group-hover:scale-105`}
//             />
            
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
//             {/* Price Badge */}
//             <div className="absolute top-3 right-3">
//               <div className="bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm">
//                 <div className="flex items-center gap-1">
//                   <IndianRupee size={12} className="text-green-600" />
//                   <span className="text-sm font-bold text-gray-900">{course?.price}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Duration Badge */}
//             <div className="absolute top-3 left-3">
//               <div className="bg-blue-500/90 backdrop-blur-sm px-2 py-1 rounded-lg">
//                 <div className="flex items-center gap-1">
//                   <Clock size={12} className="text-white" />
//                   <span className="text-xs font-medium text-white">8h 30m</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="p-4 space-y-3">
//             {/* Course Title */}
//             <h3 className="text-base font-semibold text-gray-900 dark:text-white line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors duration-200">
//               {course?.courseName}
//             </h3>

//             {/* Instructor */}
//             <div className="flex items-center gap-2">
//               <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
//                 <User size={12} className="text-white" />
//               </div>
//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 {course?.instructor?.firstName} {course?.instructor?.lastName}
//               </p>
//             </div>

//             {/* Rating and Students */}
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <div className="flex items-center gap-1">
//                   <Star size={14} className="fill-yellow-400 text-yellow-400" />
//                   <span className="text-sm font-medium text-gray-900 dark:text-white">
//                     {avgReviewCount || 0}
//                   </span>
//                 </div>
//                 <RatingStars Review_Count={avgReviewCount} Star_Size={12} />
//               </div>
              
//               <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
//                 <Users size={12} />
//                 <span className="text-xs">{course?.ratingAndReviews?.length || 0}</span>
//               </div>
//             </div>

//             {/* CTA Button */}
//             <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] text-sm">
//               Enroll Now
//             </button>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default Course_Card;