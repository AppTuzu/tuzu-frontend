import React from 'react'

const HeroSection = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center px-8 py-16 bg-themeBlack'>
      <div className=''>
        <div className='text-center'>
          {/* main heading */}
          <h1 className='text-white text-3xl font-medium flex justify-center items-center gap-1'>
            <span className='text-themeYellow italic text-3xl font-medium'>Welcome to</span>
            <img src="./logo.png" alt="TUZU Logo" className='w-26'/>
             - Your One-Stop
          </h1>
          <h1 className='text-white text-3xl font-medium'>
            Destination for Social Media Content Editing!
          </h1>
          <p className='text-white text-lg font-light'>Say goodbye to the hassle of editing and hello to polished, professional content that stands out.</p>
        </div>
        <div>
          {/* center box */}

        </div>
      </div>
    </div>
  )
}

export default HeroSection