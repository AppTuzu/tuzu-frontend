import React, { useContext } from 'react'
import { ModelContext } from '../context/ModelContext';

const OurApp = () => {

  const { toggleModal } = useContext(ModelContext);

  return (
    <div className="relative border-t border-t-themeBlue/20 flex justify-center items-center py-32 px-14 md:py-40 overflow-hidden" style={{background: 'linear-gradient(180deg, rgba(12,192,223,0.05), rgba(32,32,32,0.05))'}}>
      <img src="../src/assets/image.png" alt=""  className='absolute w-lg h-full -left-110 opacity-5 sm:-left-90 md:-left-80 lg:-left-60 xl:-left-20 2xl:-left-10 scale-150' />
        <button onClick={toggleModal} className='border-2 text-2xl border-themeYellow/70 bg-themeBlue text-themeYellow font-semibold tracking-wider rounded-2xl py-5 px-24 md:px-32 lg:px-44 cursor-pointer transition duration-300 hover:scale-[101%] active:scale-[98%] ease-in-out z-10 shadow-lg
         hover:shadow-themeBlue/30 sm:text-3xl sm:py-6 sm:px-24 lg:text-4xl lg:py-7 
        '>Our App</button>
      <img src="../src/assets/image.png" alt=""  className='absolute w-lg h-full -right-110 opacity-5 scale-150 sm:-right-90 md:-right-80 lg:-right-60 xl:-right-20 2xl:-right-10' />
    </div>
  )
}

export default OurApp