import React from 'react';

const SchoolFlower = ({ darkMode }) => {
  return (
    <section className={`py-12 px-4 my-24 ${darkMode ? 'bg-gray-800' : 'bg-fourth'}`}>
      <div className={`container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 ${darkMode ? 'text-gray-300' : 'text-black'}`}>
        <div className={`image ${darkMode ? 'bg-gray-700' : 'bg-secondary'} flex items-center justify-center p-8 md:p-16 w-full md:w-1/2`}>
          <img src="Images/img20.webp" className='w-64 md:w-80 lg:w-96' alt="School Flower" />
        </div>
        <div className="text flex flex-col gap-4 md:gap-7 w-full md:w-1/2">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold font-primary ${darkMode ? 'text-gray-300' : 'text-black'}`}>Fiore School Flower</h2>
          <p className={`text-sm md:text-base ${darkMode ? 'text-gray-400' : 'text-black'}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem delectus quasi nisi laboriosam debitis harum pariatur. Porro molestiae iure minus magni commodi id, fugit, distinctio, obcaecati blanditiis modi ratione eaque.
          </p>
          <a href="#" className={`border-b text-base md:text-lg uppercase font-bold w-fit ${darkMode ? 'border-gray-400 text-gray-300' : 'border-black text-black'}`}>Find Out More</a>
        </div>
      </div>
    </section>
  );
}

export default SchoolFlower;
