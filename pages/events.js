import Link from 'next/link';

import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const Events = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle='Events' pageName='Events' />

      <section className='events-area bg-f9f9f9 pt-100 pb-70'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <div className='events-box'>
                <img src='/images/events/events-big.jpg' alt='image' />
                <div className='content'>
                  <h3>Global Robotics Summit & Festival</h3>
                  <span className='meta'>
                    <i className='flaticon-calendar'></i> Thu, Jul 30, 11:30 am -
                    10:00 pm
                  </span>
                </div>
                <Link href='/single-events'>
                  <a className='link-btn'></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='events-item-list'>
                <div className='single-events-box'>
                  <div className='row m-0'>
                    <div className='col-lg-4 col-md-4 p-0'>
                      <div className='image bg-1'>
                        <img src='/images/events/events1.jpg' alt='image' />
                        <Link href='/single-events'>
                          <a className='link-btn'></a>
                        </Link>
                      </div>
                    </div>

                    <div className='col-lg-8 col-md-8 p-0'>
                      <div className='content'>
                        <span className='meta'>
                          <i className='flaticon-calendar'></i> Thu, Jul 30, 11:30
                          am - 10:00 pm
                        </span>
                        <h3>
                          <Link href='/single-events'>
                            <a>
                              Internet of Things Forum Africa Exhibition (IOTFA)
                            </a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='single-events-box'>
                  <div className='row m-0'>
                    <div className='col-lg-4 col-md-4 p-0'>
                      <div className='image bg-2'>
                        <img src='/images/events/events2.jpg' alt='image' />
                        <Link href='/single-events'>
                          <a className='link-btn'></a>
                        </Link>
                      </div>
                    </div>

                    <div className='col-lg-8 col-md-8 p-0'>
                      <div className='content'>
                        <span className='meta'>
                          <i className='flaticon-calendar'></i> Thu, Jul 30, 11:30
                          am - 10:00 pm
                        </span>
                        <h3>
                          <Link href='/single-events'>
                            <a>
                              Digital Marketing: Customer Engagement & Social
                              Media
                            </a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='single-events-box'>
                  <div className='row m-0'>
                    <div className='col-lg-4 col-md-4 p-0'>
                      <div className='image bg-3'>
                        <img src='/images/events/events3.jpg' alt='image' />
                        <Link href='/single-events'>
                          <a className='link-btn'></a>
                        </Link>
                      </div>
                    </div>

                    <div className='col-lg-8 col-md-8 p-0'>
                      <div className='content'>
                        <span className='meta'>
                          <i className='flaticon-calendar'></i> Thu, Jul 30, 11:30
                          am - 10:00 pm
                        </span>
                        <h3>
                          <Link href='/single-events'>
                            <a>
                              International Agriculture and Technology Summit
                            </a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='events-item-list'>
                <div className='single-events-box'>
                  <div className='row m-0'>
                    <div className='col-lg-4 col-md-4 p-0'>
                      <div className='image bg-4'>
                        <img src='/images/events/events4.jpg' alt='image' />
                        <Link href='/single-events'>
                          <a className='link-btn'></a>
                        </Link>
                      </div>
                    </div>

                    <div className='col-lg-8 col-md-8 p-0'>
                      <div className='content'>
                        <span className='meta'>
                          <i className='flaticon-calendar'></i> Thu, Jul 30, 11:30
                          am - 10:00 pm
                        </span>
                        <h3>
                          <Link href='/single-events'>
                            <a>
                              Internet of Things Forum Africa Exhibition (IOTFA)
                            </a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='single-events-box'>
                  <div className='row m-0'>
                    <div className='col-lg-4 col-md-4 p-0'>
                      <div className='image bg-5'>
                        <img src='/images/events/events5.jpg' alt='image' />
                        <Link href='/single-events'>
                          <a className='link-btn'></a>
                        </Link>
                      </div>
                    </div>

                    <div className='col-lg-8 col-md-8 p-0'>
                      <div className='content'>
                        <span className='meta'>
                          <i className='flaticon-calendar'></i> Thu, Jul 30, 11:30
                          am - 10:00 pm
                        </span>
                        <h3>
                          <Link href='/single-events'>
                            <a>
                              Digital Marketing: Customer Engagement & Social
                              Media
                            </a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='single-events-box'>
                  <div className='row m-0'>
                    <div className='col-lg-4 col-md-4 p-0'>
                      <div className='image bg-6'>
                        <img src='/images/events/events6.jpg' alt='image' />
                        <Link href='/single-events'>
                          <a className='link-btn'></a>
                        </Link>
                      </div>
                    </div>

                    <div className='col-lg-8 col-md-8 p-0'>
                      <div className='content'>
                        <span className='meta'>
                          <i className='flaticon-calendar'></i> Thu, Jul 30, 11:30
                          am - 10:00 pm
                        </span>
                        <h3>
                          <Link href='/single-events'>
                            <a>
                              International Agriculture and Technology Summit
                            </a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='events-box'>
                <img src='/images/events/events-big2.jpg' alt='image' />
                <div className='content'>
                  <h3>Global Robotics Summit & Festival</h3>
                  <span className='meta'>
                    <i className='flaticon-calendar'></i> Thu, Jul 30, 11:30 am -
                    10:00 pm
                  </span>
                </div>
                <Link href='/single-events'>
                  <a className='link-btn'></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Events;
