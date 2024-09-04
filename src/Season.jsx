import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import './swiperControls.css';

const Season = ({ darkMode }) => {
  return (
    <section className={`py-24 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="flex items-center flex-col mb-12">
        <h1 className='text-6xl font-bold font-primary'>Seasons Finest</h1>
        <nav className='flex gap-12 mt-12'>
          <a href="#" className={`uppercase before:absolute relative before:h-0.5 before:w-0 hover:before:w-full before:bg-secondary before:bottom-0 before:transition-all ${darkMode ? 'text-gray-300' : 'text-black'}`}>Flowers</a>
          <a href="#" className={`uppercase before:absolute relative before:h-0.5 before:w-0 hover:before:w-full before:bg-secondary before:bottom-0 before:transition-all ${darkMode ? 'text-gray-300' : 'text-black'}`}>Plants</a>
        </nav>
      </div>
      <div className="container mx-auto flex justify-between items-center">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          scrollbar={{ draggable: true }}
          navigation={true}
        >
          <SwiperSlide className='mb-12'>
            <div className={`card text-center w-96 relative transition-all ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <img src="Images/img04.webp" className='w-full' alt="In Bloom" />
              <p className='font-primary mt-5 text-2xl'>In Bloom</p>
              <span className={`text-gray-400 mt-2 block font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>$65.00-$98.00</span>
              <button className={`hover:block hidden border border-black px-12 py-4 rounded-full hover:bg-black hover:text-white transition-colors absolute bottom-28 w-56 mx-2 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} left-1/2 -translate-x-1/2`}>
                <a href="#" className='text-inherit uppercase'>Shop Now</a>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className='mb-12'>
            <div className={`card text-center w-96 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <img src="Images/img05.webp" className='w-full' alt="Vintage Heur" />
              <p className='font-primary mt-5 text-2xl'>Vintage Heur</p>
              <span className={`text-gray-400 mt-2 block font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>$65.00-$90.00</span>
              <button className={`hover:block hidden border border-black px-12 py-4 rounded-full hover:bg-black hover:text-white transition-colors absolute bottom-28 w-56 mx-2 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} left-1/2 -translate-x-1/2`}>
                <a href="#" className='text-inherit uppercase'>Shop Now</a>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className='mb-12'>
            <div className={`card text-center w-96 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <img src="Images/img06.webp" className='w-full' alt="Burnished Blossom" />
              <p className='font-primary mt-5 text-2xl'>Burnished Blossom</p>
              <span className={`text-gray-400 mt-2 block font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>$43.00-$63.00</span>
              <button className={`hover:block hidden border border-black px-12 py-4 rounded-full hover:bg-black hover:text-white transition-colors absolute bottom-28 w-56 mx-2 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} left-1/2 -translate-x-1/2`}>
                <a href="#" className='text-inherit uppercase'>Shop Now</a>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className='mb-12'>
            <div className={`card text-center w-96 relative transition-all ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <img src="Images/img04.webp" className='w-full' alt="In Bloom" />
              <p className='font-primary mt-5 text-2xl'>In Bloom</p>
              <span className={`text-gray-400 mt-2 block font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>$65.00-$98.00</span>
              <button className={`hover:block hidden border border-black px-12 py-4 rounded-full hover:bg-black hover:text-white transition-colors absolute bottom-28 w-56 mx-2 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} left-1/2 -translate-x-1/2`}>
                <a href="#" className='text-inherit uppercase'>Shop Now</a>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className='mb-12'>
            <div className={`card text-center w-96 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <img src="Images/img05.webp" className='w-full' alt="Vintage Heur" />
              <p className='font-primary mt-5 text-2xl'>Vintage Heur</p>
              <span className={`text-gray-400 mt-2 block font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>$65.00-$90.00</span>
              <button className={`hover:block hidden border border-black px-12 py-4 rounded-full hover:bg-black hover:text-white transition-colors absolute bottom-28 w-56 mx-2 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} left-1/2 -translate-x-1/2`}>
                <a href="#" className='text-inherit uppercase'>Shop Now</a>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className='mb-12'>
            <div className={`card text-center w-96 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <img src="Images/img06.webp" className='w-full' alt="Burnished Blossom" />
              <p className='font-primary mt-5 text-2xl'>Burnished Blossom</p>
              <span className={`text-gray-400 mt-2 block font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>$43.00-$63.00</span>
              <button className={`hover:block hidden border border-black px-12 py-4 rounded-full hover:bg-black hover:text-white transition-colors absolute bottom-28 w-56 mx-2 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} left-1/2 -translate-x-1/2`}>
                <a href="#" className='text-inherit uppercase'>Shop Now</a>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Season;
