import React from "react";

const Popular = () => {
	return (
    <section className="py-24">
      <div className="flex items-center flex-col mb-12">
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold font-primary text-center'>
          Shop By Popular Occasions
        </h1>
      </div>
      <div className="container mx-auto flex flex-wrap justify-center md:justify-between gap-8">
        <div className="card text-center w-64">
          <img src="Images/img12.webp" className="w-full h-64 object-cover rounded-lg" alt="Christmas" />
          <h3 className="font-primary text-xl md:text-2xl mt-4">Christmas</h3>
        </div>
        <div className="card text-center w-64">
          <img src="Images/img13.webp" className="w-full h-64 object-cover rounded-lg" alt="Birthday" />
          <h3 className="font-primary text-xl md:text-2xl mt-4">Birthday</h3>
        </div>
        <div className="card text-center w-64">
          <img src="Images/img14.webp" className="w-full h-64 object-cover rounded-lg" alt="Autumn" />
          <h3 className="font-primary text-xl md:text-2xl mt-4">Autumn</h3>
        </div>
        <div className="card text-center w-64">
          <img src="Images/img15.webp" className="w-full h-64 object-cover rounded-lg" alt="Anniversary" />
          <h3 className="font-primary text-xl md:text-2xl mt-4">Anniversary</h3>
        </div>
      </div>
    </section>
  );
};

export default Popular;
