import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const ComingSoong = () => {
  const [action, setAction] = useState({});
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const comingSoonTime = () => {
    var endTime = new Date('August 23, 2023 17:00:00 PDT');
    var endTimeParse = Date.parse(endTime) / 1000;
    var now = new Date();
    var nowParse = Date.parse(now) / 1000;
    var timeLeft = endTimeParse - nowParse;
    var countdays = Math.floor(timeLeft / 86400);
    var counthours = Math.floor((timeLeft - countdays * 86400) / 3600);
    var countminutes = Math.floor(
      (timeLeft - countdays * 86400 - counthours * 3600) / 60
    );
    var countseconds = Math.floor(
      timeLeft - countdays * 86400 - counthours * 3600 - countminutes * 60
    );
    if (counthours < 10) {
      counthours = 0 + counthours;
    }
    if (countminutes < 10) {
      countminutes = 0 + countminutes;
    }
    if (countseconds < 10) {
      countseconds = 0 + countseconds;
    }

    setDays(countdays);
    setHours(counthours);
    setMinutes(countminutes);
    setSeconds(countseconds);
  };

  useEffect(() => {
    setInterval(() => {
      comingSoonTime();
    }, 1000);

    return () => {
      setAction({});
    };
  }, []);

  return (
    <>
      <div className='coming-soon-area'>
        <div className='d-table'>
          <div className='d-table-cell'>
            <div className='coming-soon-content'>
              <Link href='/'>
                <a className='logo'>
                  <img src='/images/black-logo.png' alt='image' />
                </a>
              </Link>

              <h2>We Are Launching Soon</h2>

              <div id='timer' className='flex-wrap d-flex justify-content-center'>
                <div
                  id='days'
                  className='align-items-center flex-column d-flex justify-content-center'
                >
                  {' '}
                  {days} <span>DAYS</span>
                </div>
                <div
                  id='hours'
                  className='align-items-center flex-column d-flex justify-content-center'
                >
                  {hours} <span>HOURS</span>
                </div>
                <div
                  id='minutes'
                  className='align-items-center flex-column d-flex justify-content-center'
                >
                  {minutes} <span>MINUTES</span>
                </div>
                <div
                  id='seconds'
                  className='align-items-center flex-column d-flex justify-content-center'
                >
                  {seconds} <span>SECONDS</span>
                </div>
              </div>

              <form className='newsletter-form'>
                <div className='form-group'>
                  <input
                    type='email'
                    className='input-newsletter'
                    placeholder='Enter your email'
                    name='EMAIL'
                    required
                    autocomplete='off'
                  />
                  <span className='label-title'>
                    <i className='bx bx-envelope'></i>
                  </span>
                </div>

                <button type='submit' className='default-btn'>
                  Subscribe
                </button>
                
                <p>
                  If you would like to be notified when your app is live, Please
                  subscribe to our mailing list.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoong;
