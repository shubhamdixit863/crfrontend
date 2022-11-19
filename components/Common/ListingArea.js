import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Link from "next/link";
import axios from "axios";
import CommonServices from "../../services.js";
import CommonUtils from "../../utils/index.js";
import { CONSTANTS } from "../../constants/index.js";

const result = {};
const ListingArea = () => {
  const getLoadingCardData = (count) => {
    const loadingCards = [];
    loadingCards[count-1] = ''
    loadingCards.fill({loading: true}, 0, count)
    return loadingCards;
  }
  const [listings, setListings] = useState(getLoadingCardData(30));
  const getCachedListing = async (slidesPerGroup, page) => {
    const key = `${slidesPerGroup}-${page}`;
    const res = result[key] ? result[key] : await CommonServices.getListings(slidesPerGroup, page);
    result[key] = res;
    return res;
  }
  const getListing = async (page, slidesPerGroup = CONSTANTS.GET_LISTING_LIMIT) => {
    const res = await getCachedListing(slidesPerGroup, page) 
    if(res.success) {
      const total = res?.data?.total;
      setListings((prevListings) => {
        let loadingCards = prevListings;
        if(total < prevListings.length) {
          loadingCards = getLoadingCardData(res?.data?.total);
        }
        const listings = res?.data?.listing;
        const length = listings?.length || 0;
        loadingCards.splice(page*slidesPerGroup, length, ...listings);
        loadingCards = loadingCards.slice(0, total < CONSTANTS.SLIDER_ITEM_COUNT ? total : CONSTANTS.SLIDER_ITEM_COUNT)
        console.log(total, loadingCards)
        return loadingCards
      })
    }
  }

  return (
    <>
      <section className="listings-area ptb-100 bg-f9f9f9">
        <div className="container">
          <div className="section-title">
            <h2>Trending Listings Right Now</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>

          <Swiper
            spaceBetween={25}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup:1
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2
              },
              1200: {
                slidesPerView: 3,
                slidesPerGroup: 3
              },
            }}
            onInit={(slide) => {
              const slidesPerView = slide.slidesPerViewDynamic();
              const page = slide.snapIndex
              getListing(page, slidesPerView);
            }}
            onSlideChange={(slide) => {
              const slidesPerView = slide.slidesPerViewDynamic();
              const page = slide.snapIndex
              getListing(page, slidesPerView);
              slide.isEnd && page > 0 ? getListing(page-1, slidesPerView) : '';
            }}
            modules={[Pagination]}
            className="listings-slides"
          >

            {
              listings.map(ele => (
                ele.loading ?
                (
                  <React.Fragment key={Math.random()}>
                    <div className=" animate-pulse">
                      <SwiperSlide>
                        <div className="single-listings-box  !bg-gray-100">
                          <div className="listings-image">
                            <div className="single-image h-[230px]">
                            </div>
                            <span className="bookmark-save !bg-gray-300">
                            </span>

                            <span className="category  !bg-gray-300">
                            </span>
                          </div>

                          <div className="listings-content">
                            <div className="author !bg-gray-300">
                              <div className="d-flex align-items-center">
                                <span className="w-14 h-6"></span>
                              </div>
                            </div>
                            <ul className="listings-meta">
                              <li className="w-20 h-4 !bg-gray-300 rounded-lg">
                                <span>
                                  
                                </span>
                              </li>
                              <li className="w-20 h-4 !bg-gray-300 rounded-lg">
                                <span>
                                  
                                </span>
                              </li>
                            </ul>
                            <h3 className="w-full h-6 !bg-gray-300 rounded-lg">
                            </h3>
                            <div className="w-20 h-5 !bg-gray-300 rounded-lg mb-4">
                              
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              
                              <ul className="listings-meta mb-0 flex justify-between w-full">
                                <li className="mb-0 w-20 h-4 !bg-gray-300 rounded-lg">
                                  <span>
                                    
                                  </span>
                                </li>
                                <li className="mb-0  w-20 h-4 !bg-gray-300 rounded-lg">
                                  <span>
                                    
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                  </React.Fragment>
                ) :
                (
                  <React.Fragment key={Math.random()}>
                    <SwiperSlide>
                      <div className="single-listings-box">
                        <div className="listings-image">
                          <Swiper
                            loop={true}
                            navigation={true}
                            modules={[Navigation]}
                            className="listings-image-slides"
                          >
                            {
                              ele?.files?.split && ele.files.split(",").map(file => (
                                <SwiperSlide key={file || Math.random()}>
                                  <div className="single-image">
                                    <img src={file} alt="image" className="object-cover w-full h-[230px]"/>
                                    <Link href={`/single-listings/${ele.id}`}>
                                      <a className="link-btn"></a>
                                    </Link>
                                  </div>
                                </SwiperSlide>
                              ))
                            }
                          </Swiper>

                          
                          <a href="#" className="bookmark-save">
                            <i className="flaticon-heart"></i>
                          </a>
                          <a href="#" className="category">
                            <i className="flaticon-cooking"></i>
                          </a>
                        </div>

                        <div className="listings-content">
                          <div className="author">
                            <div className="d-flex align-items-center">
                              <img src="/images/user2.jpg" alt="image" />
                              <span>Sarah</span>
                            </div>
                          </div>
                          <ul className="listings-meta">
                            <li>
                              <a href="#">
                                <i className="flaticon-furniture-and-household"></i> Hotel
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-pin"></i> {ele.location}
                              </a>
                            </li>
                          </ul>
                          <h3>
                            <Link href="/single-listings">
                              <a>{ele.title}</a>
                            </Link>
                          </h3>
                          <span className="status">
                            <i className="flaticon-save"></i> Open Now
                          </span>
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="rating">
                              <i className="bx bxs-star"></i>
                              <i className="bx bxs-star"></i>
                              <i className="bx bxs-star"></i>
                              <i className="bx bxs-star"></i>
                              <i className="bx bx-star"></i>
                              <span className="count">(10)</span>
                            </div>
                            <div className="price">
                              Start From <span>{CommonUtils.getCurrencyCode()}{ele.pricing}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </React.Fragment>
              )
              ))
            }
          </Swiper>
        </div>

        <div className="divider2"></div>
      </section>
    </>
  );
};

export default ListingArea;