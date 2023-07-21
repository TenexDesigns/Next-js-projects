import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    
    <div className='relative '>
    <Image priority src='/img/banner.png' className='w-full ' width='365'  alt='banner' height='182'/> 
    
    <h3 className='absolute top-6 left-6 right-52 bottom-32   text-darkIcon '>Latest trending</h3>
    <h4 className='absolute top-12 left-6 right-58 font-semibold  text-darkIcon '>Electronic items</h4>
    <div className='flex absolute pt-2 top-20 left-6 right-60 bottom-20'>
      <button className="absolute bg-white text-darkIcon py-2 px-4 rounded-md">
        <span className="whitespace-nowrap">Learn More</span>
      </button>
    </div>
    
    
    
    </div>
   
  );
};

export default Banner;
