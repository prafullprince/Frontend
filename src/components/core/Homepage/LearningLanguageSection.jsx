import React from 'react'
import HilightText from './HilightText'
import progress from '../../../assets/Images/Know_your_progress.png'
import compare from '../../../assets/Images/Compare_with_others.png'
import lessons from '../../../assets/Images/Plan_your_lessons.png'
import Button from './Button'

const LearningLanguageSection = () => {
  return (
    // content window
    <div className='mt-32 w-11/12 max-w-6xl mx-auto'>
    {/* content box */}
        <div className='flex flex-col gap-5 items-center'>
          
          <div className='font-semibold text-4xl text-center'>
            Your swiss knife for 
            <HilightText text={"learning any language"} />
          </div>
          <p className='text-center text-richblack-500 mx-auto text-base font-medium max-w-2xl'>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</p>
          {/* image containers */}
          <div className='flex items-center justify-center mt-5'>
            <img src={progress} alt='progress' className='object-contain translate-x-[25%]'/>
            <img src={compare} alt='compare' className=' object-contain'/>
            <img src={lessons} alt='lessons' className=' object-contain translate-x-[-30%]'/>
          </div>
          {/* button */}
          <div className=''>
            <Button active={true} linkto={"signup"} >Learn More</Button>
          </div>

        </div>

    </div>
  )
}

export default LearningLanguageSection