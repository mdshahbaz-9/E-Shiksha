// import React from 'react'
// import { Link } from 'react-router-dom'
// import { setProgress } from '../../../slices/loadingBarSlice'
// import { useDispatch } from 'react-redux'

// const Button = ({children,active,linkto}) => {
//     const dispatch = useDispatch();
//   return (
//     <Link onClick={()=>{dispatch(setProgress(100))}}  to={linkto}>
//     <div className={`text-center text-[13px] px-6 py-3 rounded-md font-semibold ${active ? "bg-yellow-50 text-black" : "bg-richblack-800"} hover:scale-95 transition-all duration-200`}>
//         {children}
//         </div>
//         </Link>
//   )
// }

// export default Button


// import React from 'react'
// import { Link } from 'react-router-dom'
// import { setProgress } from '../../../slices/loadingBarSlice'
// import { useDispatch } from 'react-redux'

// const Button = ({children, active, linkto}) => {
//     const dispatch = useDispatch();
    
//     return (
//         <Link onClick={() => {dispatch(setProgress(100))}} to={linkto}>
//             <div className={`text-center text-[13px] px-6 py-3 rounded-md font-semibold transition-all duration-200 hover:scale-95 ${
//                 active 
//                     ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg hover:from-yellow-500 hover:to-yellow-600" 
//                     : "bg-slate-800 text-gray-200 border border-slate-700 hover:bg-slate-700 hover:border-cyan-500 hover:text-cyan-300"
//             }`}>
//                 {children}
//             </div>
//         </Link>
//     )
// }

// export default Button




import React from 'react'
import { Link } from 'react-router-dom'
import { setProgress } from '../../../slices/loadingBarSlice'
import { useDispatch } from 'react-redux'

const Button = ({children, active, linkto}) => {
    const dispatch = useDispatch();
    
    return (
        <Link onClick={() => {dispatch(setProgress(100))}} to={linkto}>
            <div className={`text-center text-[13px] px-6 py-3 rounded-md font-semibold transition-all duration-200 hover:scale-95 ${
                active 
                    ? "bg-gradient-to-r from-cyan-400 to-teal-300 text-white shadow-lg shadow-cyan-500/25 hover:from-cyan-500 hover:to-teal-600" 
                    : "bg-slate-900/50 text-gray-300 border border-slate-700/50 hover:bg-slate-800 hover:border-cyan-400/50 hover:text-cyan-300"
            }`}>
                {children}
            </div>
        </Link>
    )
}

export default Button

