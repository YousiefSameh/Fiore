import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <header className='bg-third h-screen'>
      <div className="container mx-auto">
        <Navbar/>
        <div className="hero flex items-center justify-around">
          <div className="text flex flex-col gap-16">
            <h1 className="text-7xl font-bold font-primary">We Tell Stories <br /> With Flowers</h1>
            <button className='border border-black px-12 py-4 w-fit rounded-full hover:bg-black hover:text-white transition-colors'><a href="#" className='text-inherit uppercase'>Shop Now</a></button>
          </div>
          <div className="image w-1/3">
            <img src="Images\img03.png" alt="" className='w-full' />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home