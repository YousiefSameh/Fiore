import React from 'react';

const FollowUs = ({ darkMode }) => {
  return (
    <section className={`pb-24 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h2 className={`font-primary text-4xl text-center mb-12 md:text-5xl lg:text-6xl ${darkMode ? 'text-white' : 'text-black'}`}>
        Follow Us
      </h2>
      <div className="images grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 px-6">
        <img src="Images/img25.jpg" className='w-full' alt="" />
        <img src="Images/img26.jpg" className='w-full' alt="" />
        <img src="Images/img27.jpg" className='w-full' alt="" />
        <img src="Images/img28.jpg" className='w-full' alt="" />
        <img src="Images/img29.jpg" className='w-full' alt="" />
        <img src="Images/img30.jpg" className='w-full' alt="" />
      </div>
      <div className={`text flex flex-col sm:flex-row sm:justify-center mt-8 gap-3 items-center mx-auto w-fit ${darkMode ? 'text-white' : 'text-black'}`}>
        <p className={`text-center sm:text-left ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Our Customers Say <strong>Excellent</strong>
        </p>
        <div className="stars flex">
          <i className="fa-solid fa-star text-secondary"></i>
          <i className="fa-solid fa-star text-secondary"></i>
          <i className="fa-solid fa-star text-secondary"></i>
          <i className="fa-solid fa-star text-secondary"></i>
          <i className="fa-solid fa-star text-secondary"></i>
        </div>
        <p className={` ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <strong>4.8</strong> Out Of 5 Based On 7,980 reviews
        </p>
        <img src="Images/img32.png" className='w-16 sm:w-20' alt="" />
      </div>
    </section>
  );
}

export default FollowUs;
