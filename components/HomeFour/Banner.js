import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Banner = () => {
  return (
    <>
      <section className='home-slider-area'>
        <Swiper
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
          className="home-slides"
        >
          <SwiperSlide>
            <div className='single-banner-item item-bg1'></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='single-banner-item item-bg2'></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='single-banner-item item-bg3'></div>
          </SwiperSlide>
        </Swiper>

        <div className='banner-content'>
          <h1 className="banner-two-heading">
            <Swiper
              autoplay={{
                delay: 5000,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                Find Nearby <span className="color-0ec6c6">Hotels</span>
              </SwiperSlide>

              <SwiperSlide>
                Find Nearby <span className="color-0ec6c6">Restaurants</span>
              </SwiperSlide>

              <SwiperSlide>
                Find Nearby <span className="color-0ec6c6">Beauty</span>
              </SwiperSlide>

              <SwiperSlide>
                Find Nearby <span className="color-0ec6c6">Fitness</span>
              </SwiperSlide>
              
              <SwiperSlide>
                Find Nearby <span className="color-0ec6c6">Shopping</span>
              </SwiperSlide>
            </Swiper>
          </h1>

          <p>Expolore top-rated attractions, activities and more...</p>

          <form>
            <div className='row m-0 align-items-center'>
              <div className='col-lg-4 col-md-12 p-0'>
                <div className='form-group'>
                  <label>
                    <i className='flaticon-search'></i>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='What are you looking for?'
                  />
                </div>
              </div>

              <div className='col-lg-3 col-md-6 p-0'>
                <div className='form-group'>
                  <label>
                    <i className='flaticon-pin'></i>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Location'
                  />
                </div>
              </div>

              <div className='col-lg-3 col-md-6 p-0'>
                <div className='form-group category-select'>
                  <label className='category-icon'>
                    <i className='flaticon-category'></i>
                  </label>
                  <select className='banner-form-select-four'>
                    <option>All Categories</option>
                    <option>Restaurants</option>
                    <option>Events</option>
                    <option>Clothing</option>
                    <option>Bank</option>
                    <option>Fitness</option>
                    <option>Bookstore</option>
                    <option>Shopping</option>
                    <option>Hotels</option>
                    <option>Hospitals</option>
                    <option>Culture</option>
                    <option>Beauty</option>
                  </select>
                </div>
              </div>

              <div className='col-lg-2 col-md-12 p-0'>
                <div className='submit-btn'>
                  <button type='submit'>Search Now</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Banner;
