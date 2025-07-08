
// const CourseCard = ({cardData,currentCard,setCurrentCard}) => {

//   return (
//     <div>
      
//     <button className={`flex flex-col  w-[360px] p-5 gap-1  ${currentCard===cardData.heading? "bg-white text-richblack-700 shadow-[12px_12px_0px] shadow-[#FFD60A]":"bg-richblack-700 text-richblue-100"}`} onClick={()=>{setCurrentCard(cardData.heading)}}>

// <div className=' flex flex-col text-center p-2 border-b-2 border-richblack-100 border-dashed'>
//   <p className={` text-xl font-bold text-left mb-2 ${currentCard===cardData.heading?"text-black":"text-richblue-5 "}`}>
//     {cardData.heading}
//   </p>
//   <p className=" text-left mb-6 text-base ">
//     {cardData.description}
//   </p>
// </div>
// <div className=' flex justify-between w-full p-3'>
//   <p>{cardData.level}</p>
//   <p>{cardData.lessionNumber} Lessons</p>
//   </div>
// </button>
//     </div>

//   )
// }

// export default CourseCard


import React from 'react'

const CourseCard = ({cardData, currentCard, setCurrentCard}) => {
    const isActive = currentCard === cardData.heading;
    
    return (
        <div className="group relative">
            {/* Glow effect for active card */}
            {isActive && (
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl opacity-75 blur-sm animate-pulse"></div>
            )}
            
            <button 
                className={`
                    relative w-full max-w-[380px] p-6 rounded-2xl transition-all duration-500 ease-out
                    transform hover:scale-105 hover:-translate-y-2 active:scale-95
                    border-2 backdrop-blur-sm
                    ${isActive 
                        ? "bg-white text-richblack-700 border-yellow-400 shadow-2xl shadow-yellow-400/25" 
                        : "bg-richblack-800/90 text-richblue-100 border-richblack-600 hover:border-richblack-500 hover:bg-richblack-700/90"
                    }
                    focus:outline-none focus:ring-4 focus:ring-yellow-400/50
                `}
                onClick={() => setCurrentCard(cardData.heading)}
            >
                {/* Top section with heading and description */}
                <div className='relative mb-6 pb-6 border-b-2 border-dashed border-opacity-30'>
                    {/* Decorative corner elements */}
                    <div className={`absolute top-0 right-0 w-2 h-2 rounded-full ${isActive ? 'bg-yellow-400' : 'bg-richblack-400'}`}></div>
                    <div className={`absolute top-1 right-1 w-1 h-1 rounded-full ${isActive ? 'bg-yellow-300' : 'bg-richblack-500'}`}></div>
                    
                    <h3 className={`
                        text-xl font-bold text-left mb-4 leading-tight transition-colors duration-300
                        ${isActive ? "text-richblack-900" : "text-white group-hover:text-richblue-25"}
                    `}>
                        {cardData.heading}
                    </h3>
                    
                    <p className={`
                        text-left text-base leading-relaxed transition-colors duration-300
                        ${isActive ? "text-richblack-600" : "text-richblack-200 group-hover:text-richblack-100"}
                    `}>
                        {cardData.description}
                    </p>
                </div>

                {/* Bottom section with level and lessons */}
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <div className={`
                            w-2 h-2 rounded-full transition-colors duration-300
                            ${isActive ? 'bg-yellow-400' : 'bg-blue-400'}
                        `}></div>
                        <span className={`
                            text-sm font-medium transition-colors duration-300
                            ${isActive ? "text-richblack-600" : "text-richblack-300 group-hover:text-richblack-200"}
                        `}>
                            {cardData.level}
                        </span>
                    </div>
                    
                    <div className='flex items-center gap-2'>
                        <svg className={`w-4 h-4 transition-colors duration-300 ${isActive ? 'text-richblack-600' : 'text-richblack-400'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span className={`
                            text-sm font-medium transition-colors duration-300
                            ${isActive ? "text-richblack-600" : "text-richblack-300 group-hover:text-richblack-200"}
                        `}>
                            {cardData.lessionNumber} Lessons
                        </span>
                    </div>
                </div>

                {/* Active state indicator */}
                {isActive && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className="w-4 h-4 bg-yellow-400 rotate-45 border-2 border-white"></div>
                    </div>
                )}
            </button>
        </div>
    );
};

export default CourseCard



// import React from 'react'

// const CourseCard = ({cardData, currentCard, setCurrentCard}) => {
//     const isActive = currentCard === cardData.heading;
    
//     return (
//         <div className="group relative perspective-1000">
//             {/* Premium glass card with advanced styling */}
//             <div 
//                 className={`
//                     relative w-full max-w-[400px] h-[280px] rounded-3xl transition-all duration-700 ease-out
//                     transform-gpu hover:scale-[1.02] hover:-translate-y-3 hover:rotate-x-5
//                     cursor-pointer backdrop-blur-xl border
//                     ${isActive 
//                         ? "bg-gradient-to-br from-white/95 to-white/90 border-amber-400/50 shadow-2xl shadow-amber-500/25" 
//                         : "bg-gradient-to-br from-slate-800/40 to-slate-900/60 border-slate-700/50 hover:border-slate-600/70 shadow-xl shadow-black/20"
//                     }
//                     before:absolute before:inset-0 before:rounded-3xl before:p-[1px] 
//                     before:bg-gradient-to-br before:from-amber-400/20 before:via-transparent before:to-blue-500/20
//                     before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
//                     overflow-hidden
//                 `}
//                 onClick={() => setCurrentCard(cardData.heading)}
//             >
//                 {/* Animated background pattern */}
//                 <div className="absolute inset-0 opacity-5">
//                     <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-amber-500 animate-gradient-shift"></div>
//                 </div>
                
//                 {/* Content container */}
//                 <div className="relative z-10 h-full p-8 flex flex-col">
//                     {/* Header section */}
//                     <div className="flex-1">
//                         {/* Status indicator */}
//                         <div className="flex items-center justify-between mb-6">
//                             <div className={`
//                                 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold
//                                 ${isActive 
//                                     ? "bg-amber-100 text-amber-800 shadow-sm" 
//                                     : "bg-slate-700/50 text-slate-300"
//                                 }
//                             `}>
//                                 <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-amber-500' : 'bg-green-400'} animate-pulse`}></div>
//                                 {isActive ? 'Selected' : 'Available'}
//                             </div>
                            
//                             {/* Bookmark icon */}
//                             <div className={`
//                                 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300
//                                 ${isActive 
//                                     ? "bg-amber-100 text-amber-600" 
//                                     : "bg-slate-700/50 text-slate-400 group-hover:bg-slate-600/50 group-hover:text-slate-300"
//                                 }
//                             `}>
//                                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                                     <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
//                                 </svg>
//                             </div>
//                         </div>
                        
//                         {/* Course title */}
//                         <h3 className={`
//                             text-xl font-bold mb-4 leading-tight transition-all duration-300
//                             ${isActive 
//                                 ? "text-slate-800" 
//                                 : "text-white group-hover:text-slate-50"
//                             }
//                         `}>
//                             {cardData.heading}
//                         </h3>
                        
//                         {/* Course description */}
//                         <p className={`
//                             text-sm leading-relaxed transition-all duration-300 line-clamp-3
//                             ${isActive 
//                                 ? "text-slate-600" 
//                                 : "text-slate-300 group-hover:text-slate-200"
//                             }
//                         `}>
//                             {cardData.description}
//                         </p>
//                     </div>

//                     {/* Footer section */}
//                     <div className="flex items-center justify-between pt-6 border-t border-slate-200/20">
//                         {/* Level badge */}
//                         <div className={`
//                             flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium
//                             ${isActive 
//                                 ? "bg-slate-100 text-slate-700" 
//                                 : "bg-slate-700/40 text-slate-300 group-hover:bg-slate-600/40"
//                             }
//                         `}>
//                             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//                             </svg>
//                             {cardData.level}
//                         </div>
                        
//                         {/* Lessons count */}
//                         <div className={`
//                             flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium
//                             ${isActive 
//                                 ? "bg-amber-50 text-amber-700" 
//                                 : "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20"
//                             }
//                         `}>
//                             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                                 <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
//                             </svg>
//                             {cardData.lessionNumber} Lessons
//                         </div>
//                     </div>
//                 </div>

//                 {/* Active state glow effect */}
//                 {isActive && (
//                     <>
//                         <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 rounded-3xl opacity-20 blur-lg animate-pulse"></div>
//                         <div className="absolute top-4 right-4 w-3 h-3 bg-amber-400 rounded-full animate-ping"></div>
//                     </>
//                 )}
                
//                 {/* Hover shine effect */}
//                 <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CourseCard