import React from 'react';
import Link from 'next/link';

const Features = () => {
  return (
    <>
      <section className='features-area ptb-100'>
        <div className='container'>
          <div className='section-title'>
            <h2>
              Your Small Business Start With <span>Indice</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>

          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-features-box'>
                <div className='icon'>
                  <i className='flaticon-commerce'></i>
                </div>
                <h3>Lunch Your Business</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <Link href='/contact'>
                  <a className='link-btn'>Get Start Now</a>
                </Link>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-features-box'>
                <div className='icon'>
                  <i className='flaticon-project'></i>
                </div>
                <h3>Manage Your Business</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <Link href='/contact'>
                  <a className='link-btn'>Get Start Now</a>
                </Link>
              </div>
            </div>

            <div
              className='
              col-lg-4 col-md-6 col-sm-6
              offset-lg-0 offset-md-3 offset-sm-3
            '
            >
              <div className='single-features-box'>
                <div className='icon'>
                  <i className='flaticon-growth'></i>
                </div>
                <h3>Grow Your Business</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <Link href='/contact'>
                  <a className='link-btn'>Get Start Now</a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='divider'></div>
      </section>
    </>
  );
};

export default Features;
