import React, { useState } from 'react';
// import Navbar from './Navbar';

const Home = ({darkMode}) => {

  return (
    <header className={`h-[70vh] md:h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-third text-black'} flex items-center justify-center sm:block`}>
      <div className="container mx-auto px-4 md:px-8">
        {/* <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
        <div className="hero flex flex-col-reverse md:flex-row items-center justify-around">
          <div className="text flex flex-col gap-8 md:gap-16 text-center md:text-left mt-8 md:mt-0">
            <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold font-primary ${darkMode ? 'text-white' : 'text-black'}`}>
              We Tell Stories <br /> With Flowers
            </h1>
            <button className={`border px-8 md:px-12 py-3 md:py-4 w-fit self-center md:self-start rounded-full transition-colors ${darkMode ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'}`}>
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
