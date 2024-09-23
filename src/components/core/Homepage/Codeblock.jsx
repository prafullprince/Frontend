import React from 'react';
import Button from './Button';
import { FaArrowRightLong } from "react-icons/fa6";


const Codeblock = ({
    position, heading, subHeading, btn1, btn2
}) => {
  return (
    <div className={`flex ${position} my-20 justify-between gap-10`}>
        {/* section 1 */}
        <div className='flex flex-col'>
            <>
                {heading}
            </>
            <div className='font-bold text-richblack-300 mt-4'>
                {subHeading}
            </div>
            <div className="flex gap-6 mt-6">
                <Button active={btn1.active} linkto={btn1.linkto}>
                    {btn1.btnText}
                    <FaArrowRightLong />
                </Button>
                <Button active={btn2.active} linkto={btn2.linkto}>
                    {btn2.btnText}
                </Button>
            </div>
        </div>

    </div>
  )
}

export default Codeblock