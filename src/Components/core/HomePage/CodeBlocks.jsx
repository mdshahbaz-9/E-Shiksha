
import React from 'react'
import CTAButton from "../HomePage/Button"
import {FaArrowRight} from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation'

const CodeBlocks = ({
    position, heading, subheading, ctabtn1, ctabtn2, codeblock, backgroudGradient, codeColor
}) => {
  return (
    <div className={`flex ${position} my-20 justify-between gap-10 flex-wrap `}>
      
    {/*Section 1*/}
    <div className=' flex flex-col gap-8 lg:w-[50%] p-4'>
        {heading}
        <div className='text-richblack-300 font-bold text-sm p-4 md:text-lg'>
            {subheading}
        </div>

        <div className='flex gap-7 mt-7 p-3'>
            <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                <div className='flex gap-2 items-center'>
                    {ctabtn1.btnText}
                    <FaArrowRight/>
                </div>
            </CTAButton>

            <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>  
                    {ctabtn2.btnText}
            </CTAButton>
        </div>

    </div>

     {/*Section 2*/}
     <div className='h-fit flex flex-row text-10[px] w-[100%] py-3 lg:w-[500px] glass'> 
        {/*HW -> BG gradient*/}

        <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
        </div>

        <div className='w-[90%] flex flex-col gap-2 font-bold font-mono pr-2 relative'>
            <div className={`${backgroudGradient}`}></div>
           <TypeAnimation
            sequence={[codeblock, 2000, ""]}
            repeat={Infinity}
            cursor={true}
            style={{
                whiteSpace: "pre-line",
                display: "block",
                overflowX: "hidden",
                fontSize: "16px",
                background: `linear-gradient(
                    to bottom,
                    #60a5fa 0% 9%,      /* blue-400 for line 1 */
                    #4ade80 9% 18%,     /* green-400 for line 2 */
                    #facc15 18% 27%,    /* yellow-400 for line 3 */
                    #a855f7 27% 36%,    /* purple-400 for line 4 */
                    #f472b6 36% 45%,    /* pink-400 for line 5 */
                    #22d3ee 45% 54%,    /* cyan-400 for line 6 */
                    #fb923c 54% 63%,    /* orange-400 for line 7 */
                    #f87171 63% 72%,    /* red-400 for line 8 */
                    #818cf8 72% 81%,    /* indigo-400 for line 9 */
                    #2dd4bf 81% 90%,    /* teal-400 for line 10 */
                    #a3e635 90% 100%    /* lime-400 for line 11 */
                )`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
            }}
            omitDeletionAnimation={true}
           />
        </div>

     </div>

    </div>
    
  )
}

export default CodeBlocks

