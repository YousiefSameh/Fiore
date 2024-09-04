import React from 'react';

const Phrase = () => {
  return (
    <section className='flex justify-center items-center py-16 px-4'>
      <div className="phrase text-center relative w-full md:w-2/3 lg:w-1/2">
        <div className='flex items-center justify-center flex-col relative'>
          <img src="Images/img16.png" className='w-32 md:w-40 lg:w-48 z-20 relative' alt="Flower Image" />
          <div className='w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-xl bg-third absolute top-24 md:top-28 lg:top-32 z-10'></div>
        </div>
        <h1 className='font-primary text-3xl md:text-5xl lg:text-7xl font-bold absolute -bottom-12 md:-bottom-14 lg:-bottom-16 z-40 '>
          A Parent And Family Owned Luxury Floral Boutique
        </h1>
      </div>
    </section>
  );
};

export default Phrase;
