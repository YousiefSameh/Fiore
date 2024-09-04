import React from 'react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`p-4 ${darkMode ? 'text-white' : 'text-black'}`}>
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <input 
          type="text" 
          placeholder='Search' 
          className={`bg-transparent p-3 placeholder:text-${darkMode ? 'white' : 'black'} placeholder:uppercase w-full md:w-auto mb-4 md:mb-0`} 
        />
        <h1 className='font-primary text-3xl md:text-5xl p-2 font-bold text-center md:text-left'>Fiore</h1>
        <div className="account flex gap-4 md:gap-6 items-center">
          <a href="#" className={`uppercase text-sm md:text-base ${darkMode ? 'text-white' : 'text-black'}`}>Account</a>
          <a href="#"><i className={`fa-regular fa-heart fa-lg md:fa-xl hover:text-red-600 transition-all ${darkMode ? 'text-white' : 'text-black'}`}></i></a>
          <div className='relative'>
            <a href="#" className=''><i className={`fa-solid fa-bag-shopping fa-lg md:fa-xl ${darkMode ? 'text-white' : 'text-black'}`}></i></a>
            <span className='absolute -top-2 md:-top-3 -right-3 md:-right-4 w-5 md:w-6 h-5 md:h-6 bg-secondary rounded-full flex items-center justify-center text-white text-xs md:text-sm'>0</span>
          </div>
          <i 
            className={`fa-solid fa-${darkMode ? 'sun' : 'moon'} fa-lg md:fa-xl cursor-pointer`} 
            onClick={toggleDarkMode}
          ></i>
        </div>
      </div>
      <div className='flex flex-wrap gap-4 md:gap-6 items-center justify-center py-4'>
        {['Home', 'Flowers', 'Plants', 'Services', 'Floral Classes', 'Our Story', 'Blog'].map((item) => (
          <a 
            href="#" 
            key={item} 
            className={`uppercase text-sm md:text-base relative before:absolute before:h-0.5 before:w-0 hover:before:w-full before:bg-secondary before:bottom-0 before:transition-all ${darkMode ? 'before:bg-white text-white' : 'before:bg-secondary text-black'}`}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
