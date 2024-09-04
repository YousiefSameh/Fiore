import React from 'react';

const Offers = () => {
  return (
    <section className='pb-24'>
      <div className="container mx-auto flex flex-col lg:flex-row h-full lg:h-screen gap-6">
        <div className="card bg-secondary w-full lg:w-1/3 p-6 text-center flex items-center justify-center flex-col">
          <img src="Images/img08.webp" className='w-48 md:w-60 lg:w-72 rounded-t-full' alt="Wedding" />
          <h2 className='my-5 text-white font-primary text-2xl md:text-3xl lg:text-4xl font-bold'>Wedding</h2>
          <p className='text-white mb-4 text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis perspiciatis nulla in libero eius, earum a, animi aliquam consectetur maxime molestias repudiandae velit, vero modi cupiditate et mollitia. Ipsam.</p>
          <a href="#" className='text-white border-b border-white text-lg md:text-xl'>Find Out More</a>
        </div>
        <div className="card bg-secondary w-full lg:w-1/3 relative">
          <img src="Images/img09.webp" className='w-full h-full object-cover' alt="Fiore" />
          <h1 className='absolute bottom-6 md:bottom-12 left-3 md:left-5 text-white font-primary text-2xl md:text-3xl'>Fiore</h1>
        </div>
        <div className="card bg-third w-full lg:w-1/3 p-6 text-center flex items-center justify-center flex-col">
          <img src="Images/img11.jpg" className='w-48 md:w-60 lg:w-72' alt="Private Events" />
          <h2 className='my-5 font-primary text-2xl md:text-3xl lg:text-4xl font-bold'>Private Events</h2>
          <p className='mb-4 text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis perspiciatis nulla in libero eius, earum a, animi aliquam consectetur maxime molestias repudiandae velit, vero modi cupiditate et mollitia. Ipsam.</p>
          <a href="#" className='border-b border-black text-lg md:text-xl'>Find Out More</a>
        </div>
      </div>
    </section>
  );
}

export default Offers;
