// import React from 'react'
// import { useSelector } from 'react-redux'
// import { buyCourse } from '../../../../services/operations/studentFeaturesAPI';
// import IconBtn from '../../../common/IconBtn';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// const RenderTotalAmount = () => {

//     const {total, cart} = useSelector((state) => state.cart);
//     const {token} = useSelector((state) => state.auth);
//     const {user} = useSelector((state) => state.profile);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();


//     const handleBuyCourse = () => {
//         const courses = cart.map((course) => course._id);
//         // console.log("Bought these course:", courses);
//         if(token){
//           const courses = cart.map((course) => course._id);
//           buyCourse(token,courses,user,navigate,dispatch);
//       }
//       else{
//           navigate('/login');
//       }
//     }
//   return (
//     <div className='min-w-[280px] rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-3 md:p-6 '>

//         <p className='mb-1 text-sm font-medium text-richblack-300'>Total:</p>
//         <p className='mb-6 text-3xl font-medium text-yellow-100 crimson'>₹ {total}</p>

//         <IconBtn 
//             text="Buy Now"
//             onclick={handleBuyCourse}
//             customClasses={"flex items-center bg-yellow-50 cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 w-full justify-center"}
//         />
        
//     </div>
//   )
// }

// export default RenderTotalAmount


import React from 'react';
import { useSelector } from 'react-redux';
import { buyCourse } from '../../../../services/operations/studentFeaturesAPI';
import IconBtn from '../../../common/IconBtn';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CreditCard } from 'lucide-react';

const RenderTotalAmount = () => {
  const { total, cart } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBuyCourse = () => {
    const courses = cart.map((course) => course._id);
    // console.log("Bought these course:", courses);
    if (token) {
      const courses = cart.map((course) => course._id);
      buyCourse(token, courses, user, navigate, dispatch);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800">Order Summary</h3>
      </div>
      
      <div className="p-6 space-y-6">
        {/* Order Details */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-gray-600">
            <span>Subtotal ({cart?.length || 0} courses)</span>
            <span>₹{total}</span>
          </div>
          <div className="flex justify-between items-center text-gray-600">
            <span>Discount</span>
            <span className="text-green-600">-₹0</span>
          </div>
          <hr className="border-gray-200" />
          <div className="flex justify-between items-center text-xl font-bold text-gray-800">
            <span>Total</span>
            <span className="text-indigo-600">₹{total}</span>
          </div>
        </div>

        {/* Buy Button */}
        <div className="space-y-3">
          <div className="w-full">
            <button
              onClick={handleBuyCourse}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <CreditCard size={20} />
              Buy Now
            </button>
          </div>
          
          <p className="text-xs text-gray-500 text-center">
            30-day money-back guarantee • Lifetime access
          </p>
        </div>
      </div>
    </div>
  );
};

export default RenderTotalAmount;