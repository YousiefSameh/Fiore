import React from "react";

const Popular = () => {
	return (
    <section className="py-24">
      <div className="flex items-center flex-col mb-12">
        <h1 className='text-5xl font-bold font-primary'>Shop By Popular Ocasions</h1>
      </div>
      <div className="container mx-auto flex justify-between">
        <div className="card text-center">
          <img src="Images\img12.webp" className="w-64" alt="" />
          <h3 className="font-primary text-2xl mt-4">Christmas</h3>
        </div>
        <div className="card text-center">
          <img src="Images\img13.webp" className="w-64" alt="" />
          <h3 className="font-primary text-2xl mt-4">Birthday</h3>
        </div>
        <div className="card text-center">
          <img src="Images\img14.webp" className="w-64" alt="" />
          <h3 className="font-primary text-2xl mt-4">Autumn</h3>
        </div>
        <div className="card text-center">
          <img src="Images\img15.webp" className="w-64" alt="" />
          <h3 className="font-primary text-2xl mt-4">Anniversary</h3>
        </div>
      </div>
    </section>
  );
};

export default Popular;
