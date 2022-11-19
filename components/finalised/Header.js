import { useState, useContext, useEffect } from 'react';
import Link from '../../utils/ActiveLink';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useForm } from "react-hook-form";
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import CommonServices from '../../services.js';
import { AppContext } from '../../contexts/AppContext';

const Header = () => {
  const [displayAuth, setDisplayAuth] = useState(false);
  const [displayMiniAuth, setDisplayMiniAuth] = useState(false);
  const context = useContext(AppContext)
  const { login } = context;
  const [sticky, setSticky] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();


  //sticky menu

  const showStickyMenu = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', showStickyMenu);
    return () => {
        window.removeEventListener('scroll', showStickyMenu);
    }
  },[])

  const toggleAuth = () => {
    setDisplayAuth(!displayAuth);
  };
  const toggleMiniAuth = () => {
    setDisplayMiniAuth(!displayMiniAuth);
  };

  const [showMenu, setshowMenu] = useState(false);

  const toggleMenu = () => {
    setshowMenu(!showMenu);
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
    context.setLoginData({
      accessToken: res?.data?.access_token,
      refreshToken: res?.data?.refresh_token
    })
  }


  return (
    <>


      <div className={displayAuth ? 'body_overlay open' : 'body_overlay'}></div>
      <div
        className={
          sticky
            ? 'is-sticky navbar-area navbar-style-two'
            : 'navbar-area navbar-style-two'
        }
      >
        <div className='miran-responsive-nav'>
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
                <a className='navbar-brand' style={{width:"19rem", height:"4vw", marginRight:"17vw"}}>
                  <img src='/images/logo3.png' alt='logo' />
                </a>
              </Link>

              <div className='collapse navbar-collapse mean-menu'>
                <form className='navbar-search-box search-box-one'>
                  <label>
                    <i className='flaticon-search'></i>
                  </label>
                  <input
                    style={{width:"13rem" }}
                    type='text'
                    className='input-search'
                    placeholder='What are you looking for?'
                  />
                </form>

                <ul className='navbar-nav'>
                  <li className='nav-item' style={{ marginLeft: "20px" }}>
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
                  
                  <li className='nav-item'>
                    <Link
                      href='/dashboard/add-listing'
                      activeClassName='active'
                    >
                      <a className='nav-link no-wrap'>
                        Add Listing
                      </a>
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <a
                      style={{width:"9vw", cursor: 'pointer'}}
                      data-toggle='modal'
                      onClick={toggleAuth}
                      className='auth-one nav-link no-wrap'
                    >
                      <i className='flaticon-user'></i> Login / Register
                    </a>
                  </li>
                  
                </ul>

                <div className='others-option d-flex align-items-center'>


                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className='others-option-for-responsive'>
          <div className='container'>
            <div className='dot-menu' onClick={toggleMiniAuth}>
              <div className='inner'>
                <div className='circle circle-one'></div>
                <div className='circle circle-two'></div>
                <div className='circle circle-three'></div>
              </div>
            </div>

            <div className={displayMiniAuth ? 'container active' : 'container'}>
              <div className='option-inner'>
                <div className='others-option'>
                  <div className='option-item'>
                    <form className='navbar-search-box'>
                      <label>
                        <i className='flaticon-search'></i>
                      </label>
                      <input
                        type='text'
                        className='input-search'
                        placeholder='What are you looking for?'
                      />
                    </form>
                  </div>

                  <div className='option-item'>
                    <span data-toggle='modal' onClick={toggleAuth}>
                      <i className='flaticon-user'></i> Login / Register
                    </span>
                  </div>

                  <div className='option-item'>
                    <Link
                      href='/dashboard/add-listing'
                      activeClassName='active'
                    >
                      <a className='default-btn'>
                        <i className='flaticon-more'></i> Add Listing
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <Tabs>
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
                        Don't have an account? <a href='#'>Register Now</a>
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
                        Already have an account? <a href='#'>Login Now</a>
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

export default Header;
