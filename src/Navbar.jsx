import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className='flex items-center justify-between'>
        <input type="text" placeholder='Search' className='bg-transparent p-3 placeholder:text-black placeholder:uppercase'/>
        <h1 className='font-primary text-5xl p-2 font-bold'>Fiore</h1>
        <div className="account flex gap-6 items-center">
          <a href="#" className='uppercase'>account</a>
          <a href="#"><i className="fa-regular fa-heart fa-xl hover:text-red-600 transition-all"></i></a>
          <div className='relative'>
            <a href="#" className=''><i className="fa-solid fa-bag-shopping fa-xl"></i></a>
            <span className='absolute -top-3 -right-4 w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white'>0</span>
          </div>
        </div>
      </div>
      <div className='flex gap-6 items-center justify-center py-4'>
        <a href="#" className='uppercase before:absolute relative before:h-0.5 before:w-0 hover:before:w-full before:bg-secondary before:bottom-0 before:transition-all'>Home</a>
        <a href="#" className='uppercase before:absolute relative before:h-0.5 before:w-0 hover:before:w-full before:bg-secondary before:bottom-0 before:transition-all'>Flowers</a>
        <a href="#" className='uppercase before:absolute relative before:h-0.5 before:w-0 hover:before:w-full before:bg-secondary before:bottom-0 before:transition-all'>Plants</a>
        <a href="#" className='uppercase before:absolute relative before:h-0.5 before:w-0 hover:before:w-full before:bg-secondary before:bottom-0 before:transition-all'>Services</a>
        <a href="#" className='uppercase before:absolute relative before:h-0.5 before:w-0 hover:before:w-full before:bg-secondary before:bottom-0 before:transition-all'>Floral Classes</a>
        <a href="#" className='uppercase before:absolute relative before:h-0.5 before:w-0 hover:before:w-full before:bg-secondary before:bottom-0 before:transition-all'>Our Story</a>
        <a href="#" className='uppercase before:absolute relative before:h-0.5 before:w-0 hover:before:w-full before:bg-secondary before:bottom-0 before:transition-all'>Blog</a>
      </div>
    </nav>
  )
}

export default Navbar