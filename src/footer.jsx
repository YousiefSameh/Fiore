import React from 'react';

const Footer = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`p-8 lg:p-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-third text-black'} relative`}>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="col flex flex-col gap-6">
          <h1 className={`font-primary ${darkMode ? 'text-secondary' : 'text-secondary'} text-5xl sm:text-6xl lg:text-7xl`}>Fiore</h1>
          <p className={`${darkMode ? 'text-gray-300' : 'text-black'}`}>
            Goddard Hall 60 <br /> Washington Square E <br /> New York, NY 10003, USA
          </p>
          <p className={`${darkMode ? 'text-gray-300' : 'text-black'}`}>
            +20 123-456-7890 <br /> info@fiore.com
          </p>
        </div>
        <div className="col flex flex-col gap-4">
          <a href="#" className={`text-2xl sm:text-3xl lg:text-4xl font-primary ${darkMode ? 'text-gray-300' : 'text-black'}`}>My Account</a>
          <a href="#" className={`text-2xl sm:text-3xl lg:text-4xl font-primary ${darkMode ? 'text-gray-300' : 'text-black'}`}>FAQ</a>
          <a href="#" className={`text-2xl sm:text-3xl lg:text-4xl font-primary ${darkMode ? 'text-gray-300' : 'text-black'}`}>Check Order Status</a>
          <a href="#" className={`text-2xl sm:text-3xl lg:text-4xl font-primary ${darkMode ? 'text-gray-300' : 'text-black'}`}>Store Locator</a>
          <a href="#" className={`text-2xl sm:text-3xl lg:text-4xl font-primary ${darkMode ? 'text-gray-300' : 'text-black'}`}>Contact Us</a>
        </div>
        <div className="col flex flex-col gap-4">
          <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-300' : 'text-black'}`}>Follow Us</p>
          <div className="social-media flex gap-3 mt-3">
            <a href="#" className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border ${darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-black'} transition-all hover:text-white`}>
              <i className="fa-brands fa-instagram fa-lg"></i>
            </a>
            <a href="#" className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border ${darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-black'} transition-all hover:text-white`}>
              <i className="fa-brands fa-facebook fa-lg"></i>
            </a>
            <a href="#" className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border ${darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-black'} transition-all hover:text-white`}>
              <i className="fa-brands fa-pinterest fa-lg"></i>
            </a>
            <a href="#" className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border ${darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-black'} transition-all hover:text-white`}>
              <i className="fa-brands fa-youtube fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container mt-12">
        <hr className={`border ${darkMode ? 'border-gray-700' : 'border-secondary'}`} />
        <div className={`content flex flex-col sm:flex-row justify-between items-center mt-4 text-center sm:text-left ${darkMode ? 'text-gray-300' : 'text-black'}`}>
          <p>&copy; 2024 VamTam Themes.</p>
          <div className="flex gap-4 sm:gap-12 mt-4 sm:mt-0">
            <p className={`${darkMode ? 'text-gray-300' : 'text-black'}`}>Privacy</p>
            <p className={`${darkMode ? 'text-gray-300' : 'text-black'}`}>Cookie Policy</p>
          </div>
        </div>
      </div>
      <button
        className={`px-4 py-2 top-48 text-xl absolute right-0 transform -rotate-90 origin-bottom-right ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} border ${darkMode ? 'border-gray-700' : 'border-gray-300'} hover:bg-black hover:text-white`}
        onClick={scrollToTop}
      >
        <span>TOP</span> <i className="fa-solid fa-arrow-up transform rotate-90"></i>
      </button>
    </footer>
  );
}

export default Footer;
