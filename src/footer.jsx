import React from 'react'

const Footer = () => {
  return (
    <footer className='p-8 lg:p-16 bg-third'>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="col flex flex-col gap-6">
          <h1 className='font-primary text-secondary text-5xl sm:text-6xl lg:text-7xl'>Fiore</h1>
          <p>Goddard Hall 60 <br /> Washington Square E <br /> New York, NY 10003, USA</p>
          <p>+20 123-456-7890 <br /> info@fiore.com</p>
        </div>
        <div className="col flex flex-col gap-4">
          <a href="#" className='text-2xl sm:text-3xl lg:text-4xl font-primary'>My Account</a>
          <a href="#" className='text-2xl sm:text-3xl lg:text-4xl font-primary'>FAQ</a>
          <a href="#" className='text-2xl sm:text-3xl lg:text-4xl font-primary'>Check Order Status</a>
          <a href="#" className='text-2xl sm:text-3xl lg:text-4xl font-primary'>Store Locator</a>
          <a href="#" className='text-2xl sm:text-3xl lg:text-4xl font-primary'>Contact Us</a>
        </div>
        <div className="col flex flex-col gap-4">
          <p className="text-lg sm:text-xl">Follow Us</p>
          <div className="social-media flex gap-3 mt-3">
            <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-gray-300 hover:bg-black hover:border-black transition-all hover:text-white">
              <i className="fa-brands fa-instagram fa-lg"></i>
            </a>
            <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-gray-300 hover:bg-black hover:border-black transition-all hover:text-white">
              <i className="fa-brands fa-facebook fa-lg"></i>
            </a>
            <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-gray-300 hover:bg-black hover:border-black transition-all hover:text-white">
              <i className="fa-brands fa-pinterest fa-lg"></i>
            </a>
            <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-gray-300 hover:bg-black hover:border-black transition-all hover:text-white">
              <i className="fa-brands fa-youtube fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container mt-12">
        <hr className='border-secondary'/>
        <div className="content flex flex-col sm:flex-row justify-between items-center mt-4 text-center sm:text-left">
          <p>&copy; 2024 VamTam Themes.</p>
          <div className="flex gap-4 sm:gap-12 mt-4 sm:mt-0">
            <p>Privacy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
