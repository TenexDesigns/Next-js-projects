import Image from 'next/image';
import React from 'react';

const Banner2 = () => {
  return (
    
    <div className='relative '>
    <Image priority src='/img/logo2.png' className='w-full h-36' width='365'  alt='banner' height='182'/> 
    
    <h3 className='absolute top-6 left-6 right-50 bottom-32 text-base font-semibold text-white '>An easy way to send</h3>
    <h4 className='absolute top-12 left-6 right-58 font-semibold text-base  text-white  '>requests to all suppliers</h4>
    <div className='flex absolute pt-2 top-20 left-6 right-60 bottom-20'>
      <button className="absolute bg-blue-500 text-white py-2 px-4 rounded-md">
        <span className="whitespace-nowrap ">Learn More</span>
      </button>
    </div>
    
    
    
    </div>
   
  );
};

export default Banner2;
