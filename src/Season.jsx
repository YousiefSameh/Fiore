import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import './swiperControls.css';

const Season = () => {
  return (
    <section className='py-24'>
      <div className="flex items-center flex-col mb-12">
        <h1 className='text-6xl font-bold font-primary'>Seasons Finest</h1>
        <nav className='flex gap-12 mt-12'>
          <a href="#" className='uppercase before:absolute relative before:h-0.5 before:w-0 hover:before:w-full before:bg-secondary before:bottom-0 before:transition-all'>Flowers</a>
          <a href="#" className='uppercase before:absolute relative before:h-0.5 before:w-0 hover:before:w-full before:bg-secondary before:bottom-0 before:transition-all'>Plants</a>
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
          scrollbar={{ draggable: true }}
          navigation={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className='mb-12'>
            <div className="card text-center w-96 relative transition-all">
              <img src="Images\img04.webp" className='w-full' alt="" />
              <p className='font-primary mt-5 text-2xl'>In Bloom</p>
              <span className='text-gray-400 mt-2 block font-light'>$65.00-$98.00</span>
              <button className='hover:block hidden border border-black px-12 py-4 rounded-full hover:bg-black hover:text-white transition-colors absolute bottom-28 w-full mx-2 bg-gray-50 left-1/2 -translate-x-1/2'><a href="#" className='text-inherit uppercase'>Shop Now</a></button>
            </div>
          </SwiperSlide>
          <SwiperSlide className='mb-12'>
            <div className="card text-center w-96">
              <img src="Images\img05.webp" className='w-full' alt="" />
              <p className='font-primary mt-5 text-2xl'>Vintage Heur</p>
              <span className='text-gray-400 mt-2 block font-light'>$65.00-$90.00</span>
              <button className='hover:block hidden border border-black px-12 py-4 rounded-full hover:bg-black hover:text-white transition-colors absolute bottom-28 w-full mx-2 bg-gray-50 left-1/2 -translate-x-1/2'><a href="#" className='text-inherit uppercase'>Shop Now</a></button>

            </div>
          </SwiperSlide>
          <SwiperSlide className='mb-12'>
            <div className="card text-center w-96">
              <img src="Images\img06.webp" className='w-full' alt="" />
              <p className='font-primary mt-5 text-2xl'>Burnished Blossom</p>
              <span className='text-gray-400 mt-2 block font-light'>$43.00-$63.00</span>
              <button className='hover:block hidden border border-black px-12 py-4 rounded-full hover:bg-black hover:text-white transition-colors absolute bottom-28 w-full mx-2 bg-gray-50 left-1/2 -translate-x-1/2'><a href="#" className='text-inherit uppercase'>Shop Now</a></button>

            </div>
          </SwiperSlide>
          <SwiperSlide className='mb-12'>
            <div className="card text-center w-96 relative transition-all">
              <img src="Images\img04.webp" className='w-full' alt="" />
              <p className='font-primary mt-5 text-2xl'>In Bloom</p>
              <span className='text-gray-400 mt-2 block font-light'>$65.00-$98.00</span>
              <button className='hover:block hidden border border-black px-12 py-4 rounded-full hover:bg-black hover:text-white transition-colors absolute bottom-28 w-full mx-2 bg-gray-50 left-1/2 -translate-x-1/2'><a href="#" className='text-inherit uppercase'>Shop Now</a></button>
            </div>
          </SwiperSlide>
          <SwiperSlide className='mb-12'>
            <div className="card text-center w-96">
              <img src="Images\img05.webp" className='w-full' alt="" />
              <p className='font-primary mt-5 text-2xl'>Vintage Heur</p>
              <span className='text-gray-400 mt-2 block font-light'>$65.00-$90.00</span>
              <button className='hover:block hidden border border-black px-12 py-4 rounded-full hover:bg-black hover:text-white transition-colors absolute bottom-28 w-full mx-2 bg-gray-50 left-1/2 -translate-x-1/2'><a href="#" className='text-inherit uppercase'>Shop Now</a></button>

            </div>
          </SwiperSlide>
          <SwiperSlide className='mb-12'>
            <div className="card text-center w-96">
              <img src="Images\img06.webp" className='w-full' alt="" />
              <p className='font-primary mt-5 text-2xl'>Burnished Blossom</p>
              <span className='text-gray-400 mt-2 block font-light'>$43.00-$63.00</span>
              <button className='hover:block hidden border border-black px-12 py-4 rounded-full hover:bg-black hover:text-white transition-colors absolute bottom-28 w-full mx-2 bg-gray-50 left-1/2 -translate-x-1/2'><a href="#" className='text-inherit uppercase'>Shop Now</a></button>

            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Season