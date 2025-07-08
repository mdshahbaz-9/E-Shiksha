// import { useSelector } from "react-redux"

// import RenderCartCourses from "./RenderCartCourses";
// import RenderTotalAmount from "./RenderTotalAmount";



// export default function Cart() {

//     const {total, totalItems} = useSelector((state)=>state.cart);

//     return (
//         <div className="mx-auto w-11/12 max-w-[1000px] py-10">
//             <h1 className="mb-14 text-3xl font-medium text-richblack-5 montserrat">Cart</h1>
//             <p className="border-b  border-b-richblack-400 pb-2 font-semibold text-richblack-400 crimson">{totalItems} Courses in Cart</p>

//             {total > 0 
//             ? (<div className="mt-1 flex flex-col-reverse items-start gap-x-10 gap-y-6 lg:flex-row">
//                 <RenderCartCourses />
//                 <RenderTotalAmount />
//             </div>)
//             : (<p>Your Cart is Empty</p>)}
//         </div>
//     )
// }


import { useSelector } from "react-redux";
import RenderCartCourses from "./RenderCartCourses";
import RenderTotalAmount from "./RenderTotalAmount";
import { ShoppingCart, ArrowRight } from 'lucide-react';

export default function Cart() {
  const { total, totalItems } = useSelector((state) => state.cart);

  return (
    // <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-caribbeangreen-50">

        <div className="min-h-screen  bg-gradient-to-r from-richblack-800 to-richblack-850 to-rose-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <ShoppingCart className="w-6 h-6 text-rose-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
          </div>
          <p className="text-gray-200 flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-yellow-500">
              {totalItems} Course{totalItems !== 1 ? 's' : ''}
            </span>
            in your cart
          </p>
        </div>

        {total > 0 ? (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="xl:col-span-2">
              <RenderCartCourses />
            </div>
            
            {/* Order Summary */}
            <div className="xl:col-span-1">
              <div className="sticky top-8">
                <RenderTotalAmount />
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                  <ShoppingCart className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Your Cart is Empty</h3>
                <p className="text-gray-600 mb-6">
                  Looks like you haven't added any courses yet. Start exploring our amazing courses!
                </p>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Browse Courses
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}