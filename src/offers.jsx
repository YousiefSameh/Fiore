import React from 'react';

const Offers = ({ darkMode }) => {
  return (
    <section className={`pb-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto flex flex-col lg:flex-row h-full lg:h-screen gap-6">
        <div className={`card ${darkMode ? 'bg-gray-800' : 'bg-secondary'} w-full lg:w-1/3 p-6 text-center flex items-center justify-center flex-col`}>
          <img src="Images/img08.webp" className='w-48 md:w-60 lg:w-72 rounded-t-full' alt="Wedding" />
          <h2 className={`my-5 ${darkMode ? 'text-gray-300' : 'text-white'} font-primary text-2xl md:text-3xl lg:text-4xl font-bold`}>Wedding</h2>
          <p className={`text-center mb-4 text-sm md:text-base ${darkMode ? 'text-gray-400' : 'text-white'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis perspiciatis nulla in libero eius, earum a, animi aliquam consectetur maxime molestias repudiandae velit, vero modi cupiditate et mollitia. Ipsam.</p>
          <a href="#" className={`text-lg md:text-xl ${darkMode ? 'border-gray-300 text-gray-300' : 'border-white text-white'} border-b`}>Find Out More</a>
        </div>
        <div className={`card ${darkMode ? 'bg-gray-800' : 'bg-secondary'} w-full lg:w-1/3 relative`}>
          <img src="Images/img09.webp" className='w-full h-full object-cover' alt="Fiore" />
          <h1 className={`absolute bottom-6 md:bottom-12 left-3 md:left-5 ${darkMode ? 'text-gray-300' : 'text-white'} font-primary text-2xl md:text-3xl`}>Fiore</h1>
        </div>
        <div className={`card ${darkMode ? 'bg-gray-800' : 'bg-third'} w-full lg:w-1/3 p-6 text-center flex items-center justify-center flex-col`}>
          <img src="Images/img11.jpg" className='w-48 md:w-60 lg:w-72' alt="Private Events" />
          <h2 className={`my-5 ${darkMode ? 'text-gray-300' : 'text-black'} font-primary text-2xl md:text-3xl lg:text-4xl font-bold`}>Private Events</h2>
          <p className={`mb-4 text-sm md:text-base ${darkMode ? 'text-gray-400' : 'text-black'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis perspiciatis nulla in libero eius, earum a, animi aliquam consectetur maxime molestias repudiandae velit, vero modi cupiditate et mollitia. Ipsam.</p>
          <a href="#" className={`text-lg md:text-xl ${darkMode ? 'border-gray-300 text-gray-300' : 'border-black text-black'} border-b`}>Find Out More</a>
        </div>
      </div>
    </section>
  );
}

export default Offers;
