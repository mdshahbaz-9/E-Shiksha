import React from 'react'

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/navigation";
import { Autoplay,FreeMode,Navigation, Pagination,Mousewheel, Keyboard}  from 'swiper'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";

import CatalogCard from './CatalogCard'

const CourseSlider = ({Courses}) => {
    
  return (
    <>
        {
            Courses?.length ? (
                <Swiper
                 mousewheel={
                      {
                          enabled: true,
                          forceToAxis: true,
                      } 
                 }
                 keyboard={
                      {
                          enabled: true,
                          onlyInViewport: true,
                      }
                 }
                 allowSlidePrev={true}
                    slidesPerView={1}
                    loop={false}
                    spaceBetween={20}
                    pagination={true}
                    modules={[Pagination,Navigation,FreeMode,Mousewheel,Keyboard]}
                    className="mySwiper md:pt-5"
                    // autoplay={{
                    // delay: 1000,
                    // disableOnInteraction: false,
                    // }}
                    style={{
                        "--swiper-navigation-size": "20px",
                      }}
                    freeMode={true}
                    navigation={true}
                    // navigation={
                    //     {
                    //         nextEl: ".swiper-button-next",
                    //         prevEl: ".swiper-button-prev",
                    //     }
                    // }
                    breakpoints={{
                        300:{slidesPerView:2.1,spaceBetween:10,},
                        640:{slidesPerView:2.2,},
                        1024:{slidesPerView:3.1,}
                    }}
                    
                   
                >
                    {
                        Courses?.map((course, index)=> (
                            <SwiperSlide key={index}>
                                <CatalogCard course={course} Height={"lg:h-[250px] h-[100px]"} />
                            </SwiperSlide>
                        ))
                    }   
                    {/* <div className='swiper-button-next'></div> */}
                    {/* <div className='swiper-button-prev'></div> */}
                </Swiper>
            ) : (
                <div className='flex gap-4 overflow-hidden'>
                <SkeletonTheme baseColor="#2C333F" highlightColor="#161D29">
                <div className=''>
                  <Skeleton  className="md:h-[200px] lg:w-[400px] h-[100px] w-[200px] rounded-xl" />
                  <Skeleton className=" md:h-[20px] w-[70px] rounded-md" />
                  <Skeleton className="md:h-[20px] md:w-[400px] rounded-md" />
                  <Skeleton className="md:h-[20px] md:w-[400px] rounded-md"/>
                </div>
              </SkeletonTheme>
                <SkeletonTheme baseColor="#2C333F" highlightColor="#161D29">
                <div className=''>
                  <Skeleton  className="md:h-[200px] lg:w-[400px] h-[100px] w-[200px] rounded-xl" />
                  <Skeleton className=" md:h-[20px] w-[70px] rounded-md" />
                  <Skeleton className="md:h-[20px] md:w-[400px] rounded-md" />
                  <Skeleton className="md:h-[20px] md:w-[400px] rounded-md"/>
                </div>
              </SkeletonTheme>
                <SkeletonTheme baseColor="#2C333F" highlightColor="#161D29">
                <div className=''>
                  <Skeleton  className="md:h-[200px] lg:w-[400px] h-[100px] w-[200px] rounded-xl" />
                  <Skeleton className=" md:h-[20px] w-[70px] rounded-md" />
                  <Skeleton className="md:h-[20px] md:w-[400px] rounded-md" />
                  <Skeleton className="md:h-[20px] md:w-[400px] rounded-md"/>
                </div>
              </SkeletonTheme>
                </div>
            )

        }
    </>
  )
}

export default CourseSlider



// import React from 'react'

// import {Swiper, SwiperSlide} from "swiper/react"
// import "swiper/css"
// import "swiper/css/free-mode"
// import "swiper/css/pagination"
// import "swiper/css/navigation";
// import { Autoplay,FreeMode,Navigation, Pagination,Mousewheel, Keyboard}  from 'swiper'
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// import "react-loading-skeleton/dist/skeleton.css";

// import CatalogCard from './CatalogCard'

// const CourseSlider = ({Courses}) => {
    
//   return (
//     <>
//         {
//             Courses?.length ? (
//                 <div className="relative group">
//                     {/* Gradient overlays for better visual depth */}
//                     <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                     <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
//                     <Swiper
//                      mousewheel={
//                           {
//                               enabled: true,
//                               forceToAxis: true,
//                           } 
//                      }
//                      keyboard={
//                           {
//                               enabled: true,
//                               onlyInViewport: true,
//                           }
//                      }
//                      allowSlidePrev={true}
//                         slidesPerView={1}
//                         loop={false}
//                         spaceBetween={20}
//                         pagination={{
//                             clickable: true,
//                             dynamicBullets: true,
//                         }}
//                         modules={[Pagination,Navigation,FreeMode,Mousewheel,Keyboard]}
//                         className="mySwiper md:pt-5 pb-12"
//                         // autoplay={{
//                         // delay: 1000,
//                         // disableOnInteraction: false,
//                         // }}
//                         style={{
//                             "--swiper-navigation-size": "20px",
//                             "--swiper-navigation-color": "#3b82f6",
//                             "--swiper-pagination-color": "#3b82f6",
//                             "--swiper-pagination-bullet-inactive-color": "#64748b",
//                             "--swiper-pagination-bullet-inactive-opacity": "0.5",
//                         }}
//                         freeMode={{
//                             enabled: true,
//                             sticky: true,
//                             momentumRatio: 0.25,
//                             momentumVelocityRatio: 0.25,
//                         }}
//                         navigation={{
//                             enabled: true,
//                         }}
//                         // navigation={
//                         //     {
//                         //         nextEl: ".swiper-button-next",
//                         //         prevEl: ".swiper-button-prev",
//                         //     }
//                         // }
//                         breakpoints={{
//                             300:{
//                                 slidesPerView:2.1,
//                                 spaceBetween:10,
//                             },
//                             640:{
//                                 slidesPerView:2.2,
//                                 spaceBetween:15,
//                             },
//                             1024:{
//                                 slidesPerView:3.1,
//                                 spaceBetween:20,
//                             },
//                             1280:{
//                                 slidesPerView:3.5,
//                                 spaceBetween:24,
//                             }
//                         }}
                        
                       
//                     >
//                         {
//                             Courses?.map((course, index)=> (
//                                 <SwiperSlide key={index} className="transition-all duration-300 hover:scale-[1.02] cursor-grab active:cursor-grabbing">
//                                     <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 hover:border-blue-500/50">
//                                         {/* Subtle glow effect on hover */}
//                                         <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
//                                         <CatalogCard course={course} Height={"lg:h-[250px] h-[100px]"} />
                                        
//                                         {/* Subtle shine effect */}
//                                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-out"></div>
//                                     </div>
//                                 </SwiperSlide>
//                             ))
//                         }   
//                         {/* <div className='swiper-button-next'></div> */}
//                         {/* <div className='swiper-button-prev'></div> */}
//                     </Swiper>
//                 </div>
//             ) : (
//                 <div className='flex gap-4 overflow-hidden'>
//                     <SkeletonTheme baseColor="#2C333F" highlightColor="#161D29">
//                         <div className='relative group'>
//                             <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl animate-pulse"></div>
//                             <div className="relative backdrop-blur-sm bg-slate-800/30 rounded-xl p-3 border border-slate-700/30 shadow-lg">
//                                 <Skeleton className="md:h-[200px] lg:w-[400px] h-[100px] w-[200px] rounded-xl mb-3" />
//                                 <div className="space-y-2">
//                                     <Skeleton className="md:h-[20px] w-[70px] rounded-md" />
//                                     <Skeleton className="md:h-[20px] md:w-[400px] rounded-md" />
//                                     <Skeleton className="md:h-[20px] md:w-[400px] rounded-md"/>
//                                 </div>
                                
//                                 {/* Animated shimmer effect */}
//                                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer rounded-xl"></div>
//                             </div>
//                         </div>
//                     </SkeletonTheme>
                    
//                     <SkeletonTheme baseColor="#2C333F" highlightColor="#161D29">
//                         <div className='relative group'>
//                             <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl animate-pulse"></div>
//                             <div className="relative backdrop-blur-sm bg-slate-800/30 rounded-xl p-3 border border-slate-700/30 shadow-lg">
//                                 <Skeleton className="md:h-[200px] lg:w-[400px] h-[100px] w-[200px] rounded-xl mb-3" />
//                                 <div className="space-y-2">
//                                     <Skeleton className="md:h-[20px] w-[70px] rounded-md" />
//                                     <Skeleton className="md:h-[20px] md:w-[400px] rounded-md" />
//                                     <Skeleton className="md:h-[20px] md:w-[400px] rounded-md"/>
//                                 </div>
                                
//                                 {/* Animated shimmer effect */}
//                                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer rounded-xl"></div>
//                             </div>
//                         </div>
//                     </SkeletonTheme>
                    
//                     <SkeletonTheme baseColor="#2C333F" highlightColor="#161D29">
//                         <div className='relative group'>
//                             <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl animate-pulse"></div>
//                             <div className="relative backdrop-blur-sm bg-slate-800/30 rounded-xl p-3 border border-slate-700/30 shadow-lg">
//                                 <Skeleton className="md:h-[200px] lg:w-[400px] h-[100px] w-[200px] rounded-xl mb-3" />
//                                 <div className="space-y-2">
//                                     <Skeleton className="md:h-[20px] w-[70px] rounded-md" />
//                                     <Skeleton className="md:h-[20px] md:w-[400px] rounded-md" />
//                                     <Skeleton className="md:h-[20px] md:w-[400px] rounded-md"/>
//                                 </div>
                                
//                                 {/* Animated shimmer effect */}
//                                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer rounded-xl"></div>
//                             </div>
//                         </div>
//                     </SkeletonTheme>
//                 </div>
//             )
//         }
        
//         <style jsx>{`
//             @keyframes shimmer {
//                 0% { transform: translateX(-100%); }
//                 100% { transform: translateX(100%); }
//             }
            
//             .animate-shimmer {
//                 animation: shimmer 2s infinite;
//             }
            
//             /* Custom scrollbar for touch devices */
//             .mySwiper::-webkit-scrollbar {
//                 display: none;
//             }
            
//             /* Enhanced navigation buttons */
//             .swiper-button-next,
//             .swiper-button-prev {
//                 background: rgba(59, 130, 246, 0.1);
//                 backdrop-filter: blur(10px);
//                 border: 1px solid rgba(59, 130, 246, 0.2);
//                 border-radius: 50%;
//                 width: 44px !important;
//                 height: 44px !important;
//                 margin-top: -22px !important;
//                 transition: all 0.3s ease;
//                 opacity: 0;
//             }
            
//             .mySwiper:hover .swiper-button-next,
//             .mySwiper:hover .swiper-button-prev {
//                 opacity: 1;
//             }
            
//             .swiper-button-next:hover,
//             .swiper-button-prev:hover {
//                 background: rgba(59, 130, 246, 0.2);
//                 transform: scale(1.1);
//                 box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
//             }
            
//             .swiper-button-next::after,
//             .swiper-button-prev::after {
//                 font-size: 16px !important;
//                 font-weight: bold;
//             }
            
//             /* Enhanced pagination */
//             .swiper-pagination-bullet {
//                 width: 8px !important;
//                 height: 8px !important;
//                 transition: all 0.3s ease !important;
//             }
            
//             .swiper-pagination-bullet-active {
//                 transform: scale(1.2) !important;
//                 box-shadow: 0 2px 8px rgba(59, 130, 246, 0.5) !important;
//             }
            
//             /* Touch-friendly interactions */
//             @media (hover: none) and (pointer: coarse) {
//                 .swiper-button-next,
//                 .swiper-button-prev {
//                     opacity: 1;
//                     width: 36px !important;
//                     height: 36px !important;
//                     margin-top: -18px !important;
//                 }
                
//                 .swiper-pagination-bullet {
//                     width: 10px !important;
//                     height: 10px !important;
//                 }
//             }
            
//             /* Smooth slide transitions */
//             .swiper-slide {
//                 transition-property: transform, box-shadow;
//                 transition-duration: 0.3s;
//                 transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//             }
            
//             /* Focus styles for accessibility */
//             .swiper-slide:focus-visible {
//                 outline: 2px solid #3b82f6;
//                 outline-offset: 2px;
//                 border-radius: 12px;
//             }
//         `}</style>
//     </>
//   )
// }

// export default CourseSlider
