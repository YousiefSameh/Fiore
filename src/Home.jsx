import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <header className='bg-third h-screen'>
      <div className="container mx-auto px-4 md:px-8">
        <Navbar/>
        <div className="hero flex flex-col-reverse md:flex-row items-center justify-around">
          <div className="text flex flex-col gap-8 md:gap-16 text-center md:text-left mt-8 md:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-primary">We Tell Stories <br /> With Flowers</h1>
            <button className='border border-black px-8 md:px-12 py-3 md:py-4 w-fit self-center md:self-start rounded-full hover:bg-black hover:text-white transition-colors'>
              <a href="#" className='text-inherit uppercase'>Shop Now</a>
            </button>
          </div>
          <div className="image w-2/3 md:w-1/3">
            <img src="Images/img03.png" alt="" className='w-full' />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;
