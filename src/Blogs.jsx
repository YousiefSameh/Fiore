import React from 'react'

const Blogs = () => {
  return (
    <section className='pb-24 px-4'>
      <h1 className='font-primary text-3xl md:text-4xl lg:text-5xl mx-auto w-fit text-center'>The Journal</h1>
      <div className="container mx-auto flex flex-col md:flex-row gap-6 mt-12">
        <div className="card w-full md:w-1/3">
          <img src="Images/img21.webp" className='w-full' alt="How To Dress a Festive Table" />
          <div className="text p-4">
            <p className='uppercase text-base md:text-lg'>Plant</p>
            <h2 className='font-primary text-2xl md:text-3xl'>How To Dress a Festive Table</h2>
            <p className='text-gray-400 mt-5 text-sm md:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, dignissimos laudantium excepturi nulla, eaque praesentium fugit nam voluptates blanditiis dicta, placeat asperiores ab ipsa modi repellendus facilis tempora deleniti odit.</p>
          </div>
        </div>
        <div className="card w-full md:w-1/3">
          <img src="Images/img22.webp" className='w-full' alt="Seasonal Favorite: Peonies" />
          <div className="text p-4">
            <p className='uppercase text-base md:text-lg'>Plant</p>
            <h2 className='font-primary text-2xl md:text-3xl'>Seasonal Favorite: Peonies</h2>
            <p className='text-gray-400 mt-5 text-sm md:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, dignissimos laudantium excepturi nulla, eaque praesentium fugit nam voluptates blanditiis dicta, placeat asperiores ab ipsa modi repellendus facilis tempora deleniti odit.</p>
          </div>
        </div>
        <div className="card w-full md:w-1/3">
          <img src="Images/img23.jpg" className='w-full' alt="Celebrating: Diversity And Pride" />
          <div className="text p-4">
            <p className='uppercase text-base md:text-lg'>Plant</p>
            <h2 className='font-primary text-2xl md:text-3xl'>Celebrating: Diversity And Pride</h2>
            <p className='text-gray-400 mt-5 text-sm md:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, dignissimos laudantium excepturi nulla, eaque praesentium fugit nam voluptates blanditiis dicta, placeat asperiores ab ipsa modi repellendus facilis tempora deleniti odit.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs
