import React from 'react'

function HighlightText({text}) {
  return (
    <span className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold'>
            {/* <span className='bg-gradient-to-b from-orange-600 via-white to-caribbeangreen-700 text-transparent bg-clip-text font-bold'> */}

        {" "}
        {text}
    </span>
  )
}

export default HighlightText