

import React, { useEffect } from 'react'
import OTPInput from 'react-otp-input'
import { useSelector,useDispatch } from 'react-redux';
import { signUp } from '../services/operations/authAPI';
import { useNavigate } from 'react-router-dom';
import { sendOtp } from '../services/operations/authAPI';
import { RxCountdownTimer } from 'react-icons/rx';

const VerifyOtp = () => {
    const [otp, setOtp] = React.useState("");
    const [otpError, setOtpError] = React.useState("");
    const [resendTimer, setResendTimer] = React.useState(30); // 30 seconds timer for resend OTP
    const [canResend, setCanResend] = React.useState(false);
    const [isResending, setIsResending] = React.useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {loading,signupData}= useSelector((state)=>state.auth);
    
    useEffect(() => {
        if(!signupData){
            navigate('/signup');
        }
    },[])

    // Timer effect for resend OTP
    useEffect(() => {
        let interval;
        if (resendTimer > 0 && !canResend) {
            interval = setInterval(() => {
                setResendTimer(prev => {
                    if (prev <= 1) {
                        setCanResend(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [resendTimer, canResend]);
    
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setOtpError(""); // Clear previous errors
        
        // Validate OTP length
        if (otp.length !== 6) {
            setOtpError("Please enter complete 6-digit OTP code.");
            return;
        }
        
        // Validate OTP contains only numbers
        if (!/^\d{6}$/.test(otp)) {
            setOtpError("OTP should contain only numbers.");
            return;
        }
        
        
        try {
            const {email,accountType,confirmPassword,password,lastName,firstName}=signupData;
            await dispatch(signUp(accountType,
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                otp,
                navigate));
        } catch (error) {
            // Handle OTP validation error
            setOtpError("Invalid OTP. Please check and try again.");
        }
    }

    const handleResendOtp = async () => {
        setIsResending(true);
        setOtpError("");
        setOtp('');
        
        try {
            await dispatch(sendOtp(signupData.email, navigate));
            setCanResend(false);
            setResendTimer(30);
        } catch (error) {
            setOtpError("Failed to resend OTP. Please try again.");
        } finally {
            setIsResending(false);
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };
    
    return (
        loading?(<div className=" h-[100vh] flex justify-center items-center"><div class="custom-loader"></div></div>):(
        <div>
           <div className='min-h-[calc(100vh-3.5rem)] grid place-items-center'>
            <div className='max-w-[500px] p-4 lg:p-8'>
            <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">Verify Email</h1>
            <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100">A verification code has been sent to you. Enter the code below</p>
            <form onSubmit={handleOnSubmit}>
                    <div className="my-8">
                        <OTPInput
                            value={otp}
                            onChange={(value) => {
                                setOtp(value);
                                if (otpError) setOtpError(""); // Clear error when user starts typing
                            }}
                            numInputs={6}
                            renderSeparator={<span className="text-richblack-400 text-xl font-bold mx-1">•</span>}
                            inputStyle={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                border: otpError ? '2px solid rgb(239, 68, 68)' : '2px solid rgb(75, 85, 99)',
                                fontSize: '1.5rem',
                                fontWeight: '600',
                                textAlign: 'center',
                                color: 'rgb(248, 250, 252)',
                                backgroundColor: otpError ? 'rgba(239, 68, 68, 0.1)' : 'rgb(30, 41, 59)',
                                transition: 'all 0.2s ease-in-out',
                                outline: 'none'
                            }}
                            focusStyle={{
                                border: otpError ? '2px solid rgb(239, 68, 68)' : '2px solid rgb(251, 191, 36)',
                                boxShadow: otpError ? '0 0 0 3px rgba(239, 68, 68, 0.1)' : '0 0 0 3px rgba(251, 191, 36, 0.1)',
                                transform: 'scale(1.05)'
                            }}
                            isInputNum={true}
                            shouldAutoFocus={true}
                            containerStyle="flex justify-center items-center gap-3 mb-2"
                            renderInput={(props) => (
                                <input 
                                    {...props} 
                                    className="hover:border-richblack-300 transition-all duration-200"
                                    style={{
                                        ...props.style,
                                        ...(props.value && !otpError && {
                                            borderColor: 'rgb(34, 197, 94)',
                                            backgroundColor: 'rgba(34, 197, 94, 0.1)'
                                        })
                                    }}
                                />
                            )}
                        />
                        <div className="text-center mt-3">
                            {otpError ? (
                                <p className="text-red-400 flex items-center justify-center gap-1 text-sm">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    {otpError}
                                </p>
                            ) : (
                                <p className="text-sm text-richblack-300">
                                    {otp.length === 6 ? (
                                        <span className="text-green-400 flex items-center justify-center gap-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Code complete
                                        </span>
                                    ) : (
                                        `Enter ${6 - otp.length} more digit${6 - otp.length !== 1 ? 's' : ''}`
                                    )}
                                </p>
                            )}
                        </div>
                    </div>
                    <button 
                        type="submit" 
                        disabled={otp.length !== 6 || loading}
                        className={`w-full py-[12px] px-[12px] rounded-[8px] mt-6 font-medium transition-all duration-200 ${
                            otp.length === 6 && !loading
                                ? 'bg-cyan-500 text-richblack-900 hover:bg-cyan-100 transform hover:scale-[1.02] shadow-lg' 
                                : 'bg-richblack-700 text-richblack-400 cursor-not-'
                        }`}
                    >
                        {loading ? 'Verifying...' : 'Verify Email'}
                    </button>

                    {/* Minimal Resend OTP Section */}
                    <div className="text-center mt-8">
                        <p className="text-richblack-300 text-sm mb-4">
                            Didn't receive the code?
                        </p>
                        
                        {canResend ? (
                            <button
                                type="button"
                                onClick={handleResendOtp}
                                disabled={isResending}
                                className="text-cyan-200 font-medium hover:text-cyan-400 transition-colors duration-200 underline underline-offset-4 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isResending ? 'Sending...' : 'Resend OTP'}
                            </button>
                        ) : (
                            <div className="inline-flex items-center gap-2">
                                <span className="text-richblack-400 text-sm">
                                    Resend in
                                </span>
                                <span className="bg-richblack-700 text-cyan-200 px-2 py-1 rounded font-mono text-sm">
                                    {formatTime(resendTimer)}
                                </span>
                            </div>
                        )}
                    </div>
                    </form>
            </div>
           </div>
        </div>)
    )
}
export default VerifyOtp