import React from 'react';

const Blogs = ({ darkMode }) => {
  return (
    <section className={`pb-24 px-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h1 className='font-primary text-3xl md:text-4xl lg:text-5xl mx-auto w-fit text-center'>The Journal</h1>
      <div className="container mx-auto flex flex-col md:flex-row gap-6 mt-12">
        {[
          {
            imgSrc: "Images/img21.webp",
            alt: "How To Dress a Festive Table",
            title: "How To Dress a Festive Table",
            category: "Plant",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, dignissimos laudantium excepturi nulla, eaque praesentium fugit nam voluptates blanditiis dicta, placeat asperiores ab ipsa modi repellendus facilis tempora deleniti odit."
          },
          {
            imgSrc: "Images/img22.webp",
            alt: "Seasonal Favorite: Peonies",
            title: "Seasonal Favorite: Peonies",
            category: "Plant",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, dignissimos laudantium excepturi nulla, eaque praesentium fugit nam voluptates blanditiis dicta, placeat asperiores ab ipsa modi repellendus facilis tempora deleniti odit."
          },
          {
            imgSrc: "Images/img23.jpg",
            alt: "Celebrating: Diversity And Pride",
            title: "Celebrating: Diversity And Pride",
            category: "Plant",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, dignissimos laudantium excepturi nulla, eaque praesentium fugit nam voluptates blanditiis dicta, placeat asperiores ab ipsa modi repellendus facilis tempora deleniti odit."
          }
        ].map((post, index) => (
          <div className="card w-full md:w-1/3" key={index}>
            <img src={post.imgSrc} className='w-full' alt={post.alt} />
            <div className="text p-4">
              <p className={`uppercase text-base md:text-lg ${darkMode ? 'text-gray-300' : 'text-black'}`}>{post.category}</p>
              <h2 className='font-primary text-2xl md:text-3xl'>{post.title}</h2>
              <p className={`mt-5 text-sm md:text-base ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                {post.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
