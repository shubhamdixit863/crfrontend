import { useState, useEffect, useContext, useRef } from 'react';
import Link from '../../utils/ActiveLink';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useForm } from "react-hook-form";
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import CommonServices from '../../services.js';
import { AppContext } from '../../contexts/AppContext';







const Navbar = () => {
  const [displayAuth, setDisplayAuth] = useState(false);
  const [displayMiniAuth, setDisplayMiniAuth] = useState(false);
  const [showSearchBar, setShowSearch] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0)
  const context = useContext(AppContext)
  const { login } = context;
  const [sticky, setSticky] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const searchRef = useRef()
  const setShowSearchBar = () => {
    setShowSearch(true);
    setTimeout(() => {
      searchRef.current.focus();
    })
  }


  //sticky menu

  const showStickyMenu = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  if (typeof window !== 'undefined') {
    // browser code
    window.addEventListener('scroll', showStickyMenu);
  }

  const toggleAuth = () => {
    setDisplayAuth(!displayAuth);
  };
  const toggleExtraOpts = () => {
    setDisplayMiniAuth(!displayMiniAuth);
  };

  const [showMenu, setshowMenu] = useState(false);

  const toggleMenu = () => {
    setshowMenu((prevVal) => {
      if(!prevVal) {
        document.body.style.overflow = 'hidden';
      }
      else {
        document.body.style.overflow = 'inherit';
      }
      return !prevVal
    });
  };
  // Signup Form Submit

  // Putting up form validation here --->
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(3, 'Password must be 3 characters long'),
    email: Yup.string()
        .required('Email is required')
        .email(3, 'Enter valid email'),
    username: Yup.string()
      .required('Username is required')
      .min(3, 'Username'),
    confirmPwd: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
  })
  const formOptions = { resolver: yupResolver(formSchema) }

  const { reset, register, handleSubmit, watch, formState: { errors } } = useForm(formOptions);
  
  const formSchemaLogin = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(3, 'Password must be 3 characters long'),
    username: Yup.string()
      .required('Username is required')
      .min(3, 'Username'),
  })
  const formOptionsLogin = { resolver: yupResolver(formSchemaLogin) }
  const { reset: resetLogin, register: registerLogin, handleSubmit: handleSubmitLogin, watch:watchLogin, formState: {errors: loginErrors } } = useForm(formOptionsLogin);
  // Submitting the signup form data to the api
  const onSignup = async data => {
    const res = await CommonServices.signup(data);
    enqueueSnackbar(res.message, {
      variant: res.success ? 'success' : 'error',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      }
    });
    if(res.success) {
      setSelectedTab(0);
    }
  }
  const onSignin = async data => {
    const res = await CommonServices.login(data);
    enqueueSnackbar(res.message, {
      variant: res.success ? 'success' : 'error',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      }
    });
    if(res.success) {
      context.setLoginData({
        accessToken: res?.data?.access_token,
        refreshToken: res?.data?.refresh_token
      });
      toggleAuth()
    }
  }


  return (
    <>


      <div className={displayAuth ? 'body_overlay open' : 'body_overlay '}></div>
      <div
        className={
          sticky
            ? 'is-sticky navbar-area navbar-style-two'
            : 'navbar-area navbar-style-two'
        }
      >
        <div className='miran-responsive-nav '>
          <div className='container'>
            <div className='miran-responsive-menu'>
              <div onClick={() => toggleMenu()} className='hamburger-menu'>
                {showMenu ? (
                  <i className='bx bx-x'></i>
                ) : (
                  <i className='bx bx-menu'></i>
                )}
              </div>
              <div className='logo'>
                <Link href='/'>
                  <a>
                    {<img src='/images/logo.png' alt='logo' />}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={showMenu ? 'miran-nav show' : 'miran-nav'}>
          <div className='container-fluid'>
            <nav className='navbar navbar-expand-md navbar-light' >
              <Link href='/'>
                <a className='navbar-brand !mr-0' style={{width:"19rem", height:"4vw"}}>
                  <img src='/images/logo3.png' alt='logo' />
                </a>
              </Link>

              <div className='visible navbar-collapse mean-menu ml-32'>

                <ul className='navbar-nav whitespace-nowrap !mr-0'>
                  <li className='nav-item !ml-5'>
                    <a href='#' className=' nav-link' >
                      Home
                    </a>
                  </li>
                  
                  <li className='nav-item'>
                    <a href='#' className=' nav-link'>
                      Listings
                    </a>
                  </li>
                  
                  
                  <li className='nav-item'>
                    <a href='#' className='nav-link'>
                      Blog
                    </a>
                  </li>
                  
                  {
                    login &&<li className='nav-item'>
                      <Link
                        href='/dashboard/add-listing'
                        activeClassName='active'
                      >
                        <a className='nav-link'>
                          Add Listing
                        </a>
                      </Link>
                    </li>
                  }
                  {!login && <li className='nav-item w-full'>
                    <a
                      data-toggle='modal'
                      onClick={toggleAuth}
                      className='auth-one nav-link no-wrap w-full cursor-pointer'
                    >
                      <i className='flaticon-user'></i> Login / Register
                    </a>
                  </li>
                }
                <li className="self-center nav-item md-min:block hidden">
                    
                  <a href='#' onClick={setShowSearchBar} className={`${showSearchBar && '!hidden'} nav-link`}>
                    <i className='flaticon-search'></i>
                  </a>
                  <form className={`navbar-search-box !ml-0 search-box-on ${!showSearchBar ? 'hidden' : '!block'}`}>
                    <label>
                      <i className='flaticon-search'></i>
                    </label>
                    <input
                      style={{width:"13rem" }}
                      type='text'
                      onBlur={() => {
                        if(!searchRef.current.value) {
                          setShowSearch(false)
                        }
                      }}
                      ref={searchRef}
                      className='input-search'
                      placeholder='What are you looking for?'
                    />
                  </form>
                </li>
                  
                </ul>
                
              </div>
            </nav>
          </div>
        </div>

        <div className='others-option-for-responsive'>
          <div className='container'>
          </div>
        </div>
      </div>

      {/* ------------ Auth Modal ------- */}
      <div
        className={
          displayAuth
            ? 'modal loginRegisterModal show'
            : 'modal loginRegisterModal'
        }
        id='loginRegisterModal'
        style={{padding: '20px 0px'}}
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <Tabs selectedIndex={selectedTab} onSelect={(index) => setSelectedTab(index)}>
              <button type='button' className='close' onClick={toggleAuth}>
                <i className='bx bx-x'></i>
              </button>

              <ul className='nav nav-tabs' id='myTab'>
                <TabList>
                  <Tab className="nav-item">
                    <a className='nav-link' id='login-tab'>
                      Login
                    </a>
                  </Tab>
                  <Tab className="nav-item">
                    <a className='nav-link' id='register-tab'>
                      Register
                    </a>
                  </Tab>
                </TabList>
              </ul>

              <div className='tab-content' id='myTabContent'>
                <TabPanel>
                  <div className='tab-pane fade show active' id='login'>
                    <div className='miran-login'>
                      <div className='login-with-account'>
                        <span>Login with</span>
                        <ul>
                          <li>
                            <a href='#' className='facebook'>
                              <i className='bx bxl-facebook'></i> Facebook
                            </a>
                          </li>
                          <li>
                            <a href='#' className='twitter'>
                              <i className='bx bxl-twitter'></i> Twitter
                            </a>
                          </li>
                        </ul>
                      </div>

                      <span className='sub-title'>
                        <span>Or login with</span>
                      </span>

                      <form onSubmit={handleSubmitLogin(onSignin)}>
                        <div className='form-group'>
                          <input
                            type='text'
                            placeholder='Username or Email'
                            className='form-control'
                            {...registerLogin("username")}
                          />
                          {loginErrors?.username && <span style={{ color: "red" }}>{loginErrors.username?.message}</span>}
                        </div>

                        <div className='form-group'>
                          <input
                            type='password'
                            placeholder='Password'
                            className='form-control'
                            {...registerLogin("password")}
                            
                          />
                          {loginErrors?.password && <span style={{ color: "red" }}>{loginErrors.password?.message}</span>}
                        </div>

                        <button type='submit'>Register Now</button>
                      </form>

                      <span className='dont-account'>
                        Don't have an account? <a onClick={() => setSelectedTab(1)} href='#'>Register Now</a>
                      </span>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className='tab-pane' id='register'>
                    <div className='miran-register'>
                      <div className='register-with-account'>
                        <span>Register with</span>
                        <ul>
                          <li>
                            <a href='#' className='facebook'>
                              <i className='bx bxl-facebook'></i> Facebook
                            </a>
                          </li>
                          <li>
                            <a href='#' className='twitter'>
                              <i className='bx bxl-twitter'></i> Twitter
                            </a>
                          </li>
                        </ul>
                      </div>

                      <span className='sub-title'>
                        <span>Or Register with</span>
                      </span>

                      <form onSubmit={handleSubmit(onSignup)}>
                        <div className='form-group'>
                          <input
                            type='text'
                            placeholder='Username'
                            className='form-control'
                            {...register("username")}
                          />
                          {errors.username && <span style={{ color: "red" }}>{errors.username?.message}</span>}
                        </div>

                        <div className='form-group'>
                          <input
                            type='email'
                            placeholder='Email'
                            className='form-control'
                            {...register("email")}

                          />
                          {errors.email && <span style={{ color: "red" }}>{errors.email?.message}</span>}

                        </div>

                        <div className='form-group'>
                          <input
                            type='password'
                            placeholder='Password'
                            className='form-control'
                            {...register("password", { required: true })}
                          />
                          {errors.password && <span style={{ color: "red" }}>Please Enter Password</span>}

                        </div>

                        <div className='form-group'>
                          <input
                            type='password'
                            placeholder='Confirm Password'
                            className='form-control'
                            {...register('confirmPwd')}

                            />
                            {errors.confirmPwd && <span style={{ color: "red" }}>{errors.confirmPwd?.message}</span>}
                        </div>


                        <button type='submit'>Register Now</button>
                      </form>

                      <span className='already-account'>
                        Already have an account? <a onClick={() => setSelectedTab(0)} href='#'>Login Now</a>
                      </span>
                    </div>
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
