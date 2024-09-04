import React from 'react';

const Gifts = () => {
  return (
    <section className='pb-24 px-4'>
      <div className="heading w-fit text-center mx-auto">
        <h2 className='font-primary text-3xl md:text-5xl font-bold mb-3'>Gifts</h2>
        <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestias itaque odit repellendus dolores perspiciatis!</p>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between mt-6 gap-8 md:gap-4">
        <div className="gift text-center md:w-1/3">
          <img src="Images/img17.webp" className='w-full' alt="Adjo Vase" />
          <p className='font-primary mt-5 text-xl md:text-2xl'>Adjo Vase</p>
          <span className='text-gray-400 mt-2 block font-light'>$40.00</span>
        </div>
        <div className="gift text-center md:w-1/3">
          <img src="Images/img18.webp" className='w-full' alt="I Gift Cart" />
          <p className='font-primary mt-5 text-xl md:text-2xl'>I Gift Cart</p>
          <span className='text-gray-400 mt-2 block font-light'>$50.00-$150.00</span>
        </div>
        <div className="gift text-center md:w-1/3">
          <img src="Images/img19.webp" className='w-full' alt="The Venus Set" />
          <p className='font-primary mt-5 text-xl md:text-2xl'>The Venus Set</p>
          <span className='text-gray-400 mt-2 block font-light'>$295.00</span>
        </div>
      </div>
      <button className='block mt-10 border border-black px-12 py-4 rounded-full hover:bg-black hover:text-white transition-colors w-fit mx-auto'>
        <a href="#" className='text-inherit uppercase'>Shop Now</a>
      </button>
    </section>
  );
};

export default Gifts;
