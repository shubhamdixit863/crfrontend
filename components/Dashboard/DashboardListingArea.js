import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Link from 'next/link';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const DashboardListingArea = () => {
  return (
    <>
      <section className='listing-area'>
        <Tabs>
          <ul className='nav nav-tabs' id='myTab'>
            <TabList>
              <Tab className='nav-item'>
                <a className='nav-link' id='all-listing-tab'>
                  All listing (6)
                </a>
              </Tab>
              <Tab className='nav-item'>
                <a className='nav-link' id='active-listing-tab'>
                  Active listing (3)
                </a>
              </Tab>

              <Tab className='nav-item'>
                <a className='nav-link' id='pending-listing-tab'>
                  Pending listing (2)
                </a>
              </Tab>

              <Tab className='nav-item'>
                <a className='nav-link' id='expires-listing-tab'>
                  Expires listing (1)
                </a>
              </Tab>
            </TabList>
          </ul>

          <div className='tab-content' id='myTabContent'>
            <div className='tab-pane fade show active' id='all-listing'>
              <TabPanel>
                <div className='row'>
                  <div className='col-xl-4 col-lg-6 col-md-6'>
                    <div className='single-listings-box'>
                      <div className='listings-image'>
                        <img src='/images/listings/listings1.jpg' alt='image' />
                        <Link href='/single-listings'>
                          <a className='link-btn'></a>
                        </Link>
                      </div>

                      <div className='listings-content'>
                        <ul className='listings-meta'>
                          <li>
                            <a href='#'>
                              <i className='flaticon-furniture-and-household'></i>{' '}
                              Restaurant
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='flaticon-pin'></i> New York, USA
                            </a>
                          </li>
                        </ul>
                        <h3>
                          <Link href='/single-listings'>
                            <a>Chipotle Mexican Grill</a>
                          </Link>
                        </h3>
                        <div className='d-flex align-items-center justify-content-between'>
                          <div className='rating'>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <span className='count'>(45)</span>
                          </div>
                        </div>
                      </div>

                      <div className='listings-footer'>
                        <div className='d-flex justify-content-between align-items-center'>
                          <a href='#' className='default-btn'>
                            Edit
                          </a>
                          <a href='#' className='default-btn'>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-xl-4 col-lg-6 col-md-6'>
                    <div className='single-listings-box'>
                      <div className='listings-image'>
                        <Swiper 
                          loop={true}
                          navigation={true} 
                          modules={[Navigation]} 
                          className="listings-image-slides"
                        >
                          <SwiperSlide>
                            <div className='single-image'>
                              <img
                                src='/images/listings/listings2.jpg'
                                alt='image'
                              />
                              <Link href='/single-listings'>
                                <a className='link-btn'></a>
                              </Link>
                            </div>
                          </SwiperSlide>

                          <SwiperSlide>
                            <div className='single-image'>
                              <img
                                src='/images/listings/listings4.jpg'
                                alt='image'
                              />
                              <Link href='/single-listings'>
                                <a className='link-btn'></a>
                              </Link>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>

                      <div className='listings-content'>
                        <ul className='listings-meta'>
                          <li>
                            <a href='#'>
                              <i className='flaticon-furniture-and-household'></i>{' '}
                              Hotel
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='flaticon-pin'></i> Los Angeles, USA
                            </a>
                          </li>
                        </ul>
                        <h3>
                          <Link href='/single-listings'>
                            <a>The Beverly Hills Hotel</a>
                          </Link>
                        </h3>
                        <div className='d-flex align-items-center justify-content-between'>
                          <div className='rating'>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bx-star'></i>
                            <span className='count'>(10)</span>
                          </div>
                        </div>
                      </div>

                      <div className='listings-footer'>
                        <div className='d-flex justify-content-between align-items-center'>
                          <a href='#' className='default-btn'>
                            Edit
                          </a>
                          <a href='#' className='default-btn'>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-xl-4 col-lg-6 col-md-6'>
                    <div className='single-listings-box'>
                      <div className='listings-image'>
                        <img src='/images/listings/listings3.jpg' alt='image' />
                        <Link href='/single-listings'>
                          <a className='link-btn'></a>
                        </Link>
                      </div>

                      <div className='listings-content'>
                        <ul className='listings-meta'>
                          <li>
                            <a href='#'>
                              <i className='flaticon-shopping-bags'></i>{' '}
                              Shopping
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='flaticon-pin'></i> Bangkok, Thailand
                            </a>
                          </li>
                        </ul>
                        <h3>
                          <Link href='/single-listings'>
                            <a>Central Shopping Center</a>
                          </Link>
                        </h3>
                        <div className='d-flex align-items-center justify-content-between'>
                          <div className='rating'>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star-half'></i>
                            <span className='count'>(35)</span>
                          </div>
                        </div>
                      </div>

                      <div className='listings-footer'>
                        <div className='d-flex justify-content-between align-items-center'>
                          <a href='#' className='default-btn'>
                            Edit
                          </a>
                          <a href='#' className='default-btn'>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-xl-4 col-lg-6 col-md-6'>
                    <div className='single-listings-box'>
                      <div className='listings-image'>
                        <Swiper 
                          loop={true}
                          navigation={true} 
                          modules={[Navigation]} 
                          className="listings-image-slides"
                        >
                          <SwiperSlide>
                            <div className='single-image'>
                              <img
                                src='/images/listings/listings5.jpg'
                                alt='image'
                              />
                              <Link href='/single-listings'>
                                <a className='link-btn'></a>
                              </Link>
                            </div>
                          </SwiperSlide>

                          <SwiperSlide>
                            <div className='single-image'>
                              <img
                                src='/images/listings/listings6.jpg'
                                alt='image'
                              />
                              <Link href='/single-listings'>
                                <a className='link-btn'></a>
                              </Link>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>

                      <div className='listings-content'>
                        <ul className='listings-meta'>
                          <li>
                            <a href='#'>
                              <i className='flaticon-cleansing'></i> Beauty
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='flaticon-pin'></i> Suwanee, USA
                            </a>
                          </li>
                        </ul>
                        <h3>
                          <Link href='/single-listings'>
                            <a>Indice Beauty Center</a>
                          </Link>
                        </h3>
                        <div className='d-flex align-items-center justify-content-between'>
                          <div className='rating'>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bx-star'></i>
                            <i className='bx bx-star'></i>
                            <span className='count'>(15)</span>
                          </div>
                        </div>
                      </div>

                      <div className='listings-footer'>
                        <div className='d-flex justify-content-between align-items-center'>
                          <a href='#' className='default-btn'>
                            Edit
                          </a>
                          <a href='#' className='default-btn'>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-xl-4 col-lg-6 col-md-6'>
                    <div className='single-listings-box'>
                      <div className='listings-image'>
                        <img src='/images/listings/listings7.jpg' alt='image' />
                        <Link href='/single-listings'>
                          <a className='link-btn'></a>
                        </Link>
                      </div>

                      <div className='listings-content'>
                        <ul className='listings-meta'>
                          <li>
                            <a href='#'>
                              <i className='flaticon-furniture-and-household'></i>{' '}
                              Restaurant
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='flaticon-pin'></i> Francisco, USA
                            </a>
                          </li>
                        </ul>
                        <h3>
                          <Link href='/single-listings'>
                            <a>The Mad Made Grill</a>
                          </Link>
                        </h3>
                        <div className='d-flex align-items-center justify-content-between'>
                          <div className='rating'>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <span className='count'>(18)</span>
                          </div>
                        </div>
                      </div>

                      <div className='listings-footer'>
                        <div className='d-flex justify-content-between align-items-center'>
                          <a href='#' className='default-btn'>
                            Edit
                          </a>
                          <a href='#' className='default-btn'>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-xl-4 col-lg-6 col-md-6'>
                    <div className='single-listings-box'>
                      <div className='listings-image'>
                        <Swiper 
                          loop={true}
                          navigation={true} 
                          modules={[Navigation]} 
                          className="listings-image-slides"
                        >
                          <SwiperSlide>
                            <div className='single-image'>
                              <img
                                src='/images/listings/listings4.jpg'
                                alt='image'
                              />
                              <Link href='/single-listings'>
                                <a className='link-btn'></a>
                              </Link>
                            </div>
                          </SwiperSlide>

                          <SwiperSlide>
                            <div className='single-image'>
                              <img
                                src='/images/listings/listings2.jpg'
                                alt='image'
                              />
                              <Link href='/single-listings'>
                                <a className='link-btn'></a>
                              </Link>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>

                      <div className='listings-content'>
                        <ul className='listings-meta'>
                          <li>
                            <a href='#'>
                              <i className='flaticon-hotel'></i> Hotel
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='flaticon-pin'></i> Los Angeles, USA
                            </a>
                          </li>
                        </ul>
                        <h3>
                          <Link href='/single-listings'>
                            <a>The Beverly Hills Hotel</a>
                          </Link>
                        </h3>
                        <div className='d-flex align-items-center justify-content-between'>
                          <div className='rating'>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bx-star'></i>
                            <span className='count'>(10)</span>
                          </div>
                        </div>
                      </div>

                      <div className='listings-footer'>
                        <div className='d-flex justify-content-between align-items-center'>
                          <a href='#' className='default-btn'>
                            Edit
                          </a>
                          <a href='#' className='default-btn'>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </div>

            <div className='' id='active-listing'>
              <TabPanel>
                <div className='row'>
                  <div className='col-xl-4 col-lg-6 col-md-6'>
                    <div className='single-listings-box'>
                      <div className='listings-image'>
                        <img src='/images/listings/listings1.jpg' alt='image' />
                        <Link href='/single-listings'>
                          <a className='link-btn'></a>
                        </Link>
                      </div>

                      <div className='listings-content'>
                        <ul className='listings-meta'>
                          <li>
                            <a href='#'>
                              <i className='flaticon-furniture-and-household'></i>{' '}
                              Restaurant
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='flaticon-pin'></i> New York, USA
                            </a>
                          </li>
                        </ul>
                        <h3>
                          <Link href='/single-listings'>
                            <a>Chipotle Mexican Grill</a>
                          </Link>
                        </h3>
                        <div className='d-flex align-items-center justify-content-between'>
                          <div className='rating'>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <span className='count'>(45)</span>
                          </div>
                        </div>
                      </div>

                      <div className='listings-footer'>
                        <div className='d-flex justify-content-between align-items-center'>
                          <a href='#' className='default-btn'>
                            Edit
                          </a>
                          <a href='#' className='default-btn'>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-xl-4 col-lg-6 col-md-6'>
                    <div className='single-listings-box'>
                      <div className='listings-image'>
                        <Swiper 
                          loop={true}
                          navigation={true} 
                          modules={[Navigation]} 
                          className="listings-image-slides"
                        >
                          <SwiperSlide>
                            <div className='single-image'>
                              <img
                                src='/images/listings/listings4.jpg'
                                alt='image'
                              />
                              <Link href='/single-listings'>
                                <a className='link-btn'></a>
                              </Link>
                            </div>
                          </SwiperSlide>

                          <SwiperSlide>
                            <div className='single-image'>
                              <img
                                src='/images/listings/listings2.jpg'
                                alt='image'
                              />
                              <Link href='/single-listings'>
                                <a className='link-btn'></a>
                              </Link>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>

                      <div className='listings-content'>
                        <ul className='listings-meta'>
                          <li>
                            <a href='#'>
                              <i className='flaticon-furniture-and-household'></i>{' '}
                              Hotel
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='flaticon-pin'></i> Los Angeles, USA
                            </a>
                          </li>
                        </ul>
                        <h3>
                          <Link href='/single-listings'>
                            <a>The Beverly Hills Hotel</a>
                          </Link>
                        </h3>
                        <div className='d-flex align-items-center justify-content-between'>
                          <div className='rating'>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bx-star'></i>
                            <span className='count'>(10)</span>
                          </div>
                        </div>
                      </div>

                      <div className='listings-footer'>
                        <div className='d-flex justify-content-between align-items-center'>
                          <a href='#' className='default-btn'>
                            Edit
                          </a>
                          <a href='#' className='default-btn'>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-xl-4 col-lg-6 col-md-6'>
                    <div className='single-listings-box'>
                      <div className='listings-image'>
                        <img src='/images/listings/listings3.jpg' alt='image' />
                        <Link href='/single-listings'>
                          <a className='link-btn'></a>
                        </Link>
                      </div>

                      <div className='listings-content'>
                        <ul className='listings-meta'>
                          <li>
                            <a href='#'>
                              <i className='flaticon-shopping-bags'></i>{' '}
                              Shopping
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='flaticon-pin'></i> Bangkok, Thailand
                            </a>
                          </li>
                        </ul>
                        <h3>
                          <Link href='/single-listings'>
                            <a>Central Shopping Center</a>
                          </Link>
                        </h3>
                        <div className='d-flex align-items-center justify-content-between'>
                          <div className='rating'>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star-half'></i>
                            <span className='count'>(35)</span>
                          </div>
                        </div>
                      </div>

                      <div className='listings-footer'>
                        <div className='d-flex justify-content-between align-items-center'>
                          <a href='#' className='default-btn'>
                            Edit
                          </a>
                          <a href='#' className='default-btn'>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </div>

            <div className='' id='pending-listing'>
              <TabPanel>
                <div className='row'>
                  <div className='col-xl-4 col-lg-6 col-md-6'>
                    <div className='single-listings-box'>
                      <div className='listings-image'>
                        <Swiper 
                          loop={true}
                          navigation={true} 
                          modules={[Navigation]} 
                          className="listings-image-slides"
                        >
                          <SwiperSlide>
                            <div className='single-image'>
                              <img
                                src='/images/listings/listings4.jpg'
                                alt='image'
                              />
                              <Link href='/single-listings'>
                                <a className='link-btn'></a>
                              </Link>
                            </div>
                          </SwiperSlide>

                          <SwiperSlide>
                            <div className='single-image'>
                              <img
                                src='/images/listings/listings2.jpg'
                                alt='image'
                              />
                              <Link href='/single-listings'>
                                <a className='link-btn'></a>
                              </Link>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>

                      <div className='listings-content'>
                        <ul className='listings-meta'>
                          <li>
                            <a href='#'>
                              <i className='flaticon-cleansing'></i> Beauty
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='flaticon-pin'></i> Suwanee, USA
                            </a>
                          </li>
                        </ul>
                        <h3>
                          <Link href='/single-listings'>
                            <a>Indice Beauty Center</a>
                          </Link>
                        </h3>
                        <div className='d-flex align-items-center justify-content-between'>
                          <div className='rating'>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bx-star'></i>
                            <i className='bx bx-star'></i>
                            <span className='count'>(15)</span>
                          </div>
                        </div>
                      </div>

                      <div className='listings-footer'>
                        <div className='d-flex justify-content-between align-items-center'>
                          <a href='#' className='default-btn'>
                            Edit
                          </a>
                          <a href='#' className='default-btn'>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-xl-4 col-lg-6 col-md-6'>
                    <div className='single-listings-box'>
                      <div className='listings-image'>
                        <img src='/images/listings/listings7.jpg' alt='image' />
                        <Link href='/single-listings'>
                          <a className='link-btn'></a>
                        </Link>
                      </div>

                      <div className='listings-content'>
                        <ul className='listings-meta'>
                          <li>
                            <a href='#'>
                              <i className='flaticon-furniture-and-household'></i>{' '}
                              Restaurant
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='flaticon-pin'></i> Francisco, USA
                            </a>
                          </li>
                        </ul>
                        <h3>
                          <Link href='/single-listings'>
                            <a>The Mad Made Grill</a>
                          </Link>
                        </h3>
                        <div className='d-flex align-items-center justify-content-between'>
                          <div className='rating'>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <span className='count'>(18)</span>
                          </div>
                        </div>
                      </div>

                      <div className='listings-footer'>
                        <div className='d-flex justify-content-between align-items-center'>
                          <a href='#' className='default-btn'>
                            Edit
                          </a>
                          <a href='#' className='default-btn'>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </div>

            <div className='' id='expires-listing'>
              <TabPanel>
                <div className='row'>
                  <div className='col-xl-4 col-lg-6 col-md-6'>
                    <div className='single-listings-box'>
                      <div className='listings-image'>
                        <Swiper 
                          loop={true}
                          navigation={true} 
                          modules={[Navigation]} 
                          className="listings-image-slides"
                        >
                          <SwiperSlide>
                            <div className='single-image'>
                              <img
                                src='/images/listings/listings4.jpg'
                                alt='image'
                              />
                              <Link href='/single-listings'>
                                <a className='link-btn'></a>
                              </Link>
                            </div>
                          </SwiperSlide>

                          <SwiperSlide>
                            <div className='single-image'>
                              <img
                                src='/images/listings/listings2.jpg'
                                alt='image'
                              />
                              <Link href='/single-listings'>
                                <a className='link-btn'></a>
                              </Link>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>

                      <div className='listings-content'>
                        <ul className='listings-meta'>
                          <li>
                            <a href='#'>
                              <i className='flaticon-hotel'></i> Hotel
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='flaticon-pin'></i> Los Angeles, USA
                            </a>
                          </li>
                        </ul>
                        <h3>
                          <Link href='/single-listings'>
                            <a>The Beverly Hills Hotel</a>
                          </Link>
                        </h3>
                        <div className='d-flex align-items-center justify-content-between'>
                          <div className='rating'>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bx-star'></i>
                            <span className='count'>(10)</span>
                          </div>
                        </div>
                      </div>

                      <div className='listings-footer'>
                        <div className='d-flex justify-content-between align-items-center'>
                          <a href='#' className='default-btn'>
                            Edit
                          </a>
                          <a href='#' className='default-btn'>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </section>
    </>
  );
};

export default DashboardListingArea;
