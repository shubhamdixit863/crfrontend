import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const Blog5 = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle='Blog Left Sidebar' pageName='Blog Left Sidebar' />

      <section className='blog-area bg-f9f9f9 ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-12'>
              <aside className='widget-area widget-left-sidebar'>
                <section className='widget widget_search'>
                  <h3 className='widget-title'>Search</h3>

                  <form className='search-form'>
                    <label>
                      <span className='screen-reader-text'>Search for:</span>
                      <input
                        type='search'
                        className='search-field'
                        placeholder='Search...'
                      />
                    </label>
                    <button type='submit'>
                      <i className='bx bx-search-alt'></i>
                    </button>
                  </form>
                </section>

                <section className='widget widget_miran_posts_thumb'>
                  <h3 className='widget-title'>Popular Posts</h3>

                  <article className='item'>
                    <a href='#' className='thumb'>
                      <span className='fullimage cover bg1' role='img'></span>
                    </a>
                    <div className='info'>
                      <span>June 10, 2020</span>
                      <h4 className='title usmall'>
                        <a href='#'>The Data Surrounding Higher Education</a>
                      </h4>
                    </div>

                    <div className='clear'></div>
                  </article>

                  <article className='item'>
                    <a href='#' className='thumb'>
                      <span className='fullimage cover bg2' role='img'></span>
                    </a>
                    <div className='info'>
                      <span>June 21, 2020</span>
                      <h4 className='title usmall'>
                        <a href='#'>
                          Conversion Rate the Sales Funnel Optimization
                        </a>
                      </h4>
                    </div>

                    <div className='clear'></div>
                  </article>

                  <article className='item'>
                    <a href='#' className='thumb'>
                      <span className='fullimage cover bg3' role='img'></span>
                    </a>
                    <div className='info'>
                      <span>June 30, 2020</span>
                      <h4 className='title usmall'>
                        <a href='#'>
                          Business Data is changing the world’s Energy
                        </a>
                      </h4>
                    </div>

                    <div className='clear'></div>
                  </article>
                </section>

                <section className='widget widget_categories'>
                  <h3 className='widget-title'>Categories</h3>

                  <ul>
                    <li>
                      <a href='#'>
                        Design <span className='post-count'>(03)</span>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        Lifestyle <span className='post-count'>(05)</span>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        Script <span className='post-count'>(10)</span>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        Device <span className='post-count'>(08)</span>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        Tips <span className='post-count'>(01)</span>
                      </a>
                    </li>
                  </ul>
                </section>

                <section className='widget widget_tag_cloud'>
                  <h3 className='widget-title'>Popular Tags</h3>

                  <div className='tagcloud'>
                    <a href='#'>
                      Business <span className='tag-link-count'> (3)</span>
                    </a>
                    <a href='#'>
                      Design <span className='tag-link-count'> (3)</span>
                    </a>
                    <a href='#'>
                      Aike <span className='tag-link-count'> (2)</span>
                    </a>
                    <a href='#'>
                      Fashion <span className='tag-link-count'> (2)</span>
                    </a>
                    <a href='#'>
                      Travel <span className='tag-link-count'> (1)</span>
                    </a>
                    <a href='#'>
                      Smart <span className='tag-link-count'> (1)</span>
                    </a>
                    <a href='#'>
                      Marketing <span className='tag-link-count'> (1)</span>
                    </a>
                    <a href='#'>
                      Tips <span className='tag-link-count'> (2)</span>
                    </a>
                  </div>
                </section>

                <section className='widget widget_instagram'>
                  <ul>
                    <li>
                      <div className='box'>
                        <img src='/images/blog/blog9.jpg' alt='image' />
                        <i className='bx bxl-instagram'></i>
                        <a href='#' className='link-btn'></a>
                      </div>
                    </li>

                    <li>
                      <div className='box'>
                        <img src='/images/blog/blog8.jpg' alt='image' />
                        <i className='bx bxl-instagram'></i>
                        <a href='#' className='link-btn'></a>
                      </div>
                    </li>

                    <li>
                      <div className='box'>
                        <img src='/images/blog/blog7.jpg' alt='image' />
                        <i className='bx bxl-instagram'></i>
                        <a href='#' className='link-btn'></a>
                      </div>
                    </li>

                    <li>
                      <div className='box'>
                        <img src='/images/blog/blog6.jpg' alt='image' />
                        <i className='bx bxl-instagram'></i>
                        <a href='#' className='link-btn'></a>
                      </div>
                    </li>

                    <li>
                      <div className='box'>
                        <img src='/images/blog/blog5.jpg' alt='image' />
                        <i className='bx bxl-instagram'></i>
                        <a href='#' className='link-btn'></a>
                      </div>
                    </li>

                    <li>
                      <div className='box'>
                        <img src='/images/blog/blog4.jpg' alt='image' />
                        <i className='bx bxl-instagram'></i>
                        <a href='#' className='link-btn'></a>
                      </div>
                    </li>
                  </ul>
                </section>
              </aside>
            </div>

            <div className='col-lg-8 col-md-12'>
              <div className='row'>
                <div className='col-lg-6 col-md-6'>
                  <div className='single-blog-post'>
                    <div className='post-image'>
                      <a href='#' className='d-block'>
                        <img src='/images/blog/blog5.jpg' alt='image' />
                      </a>
                    </div>

                    <div className='post-content'>
                      <ul className='post-meta d-flex align-items-center'>
                        <li>
                          <div className='d-flex align-items-center'>
                            <img src='/images/user2.jpg' alt='image' />
                            <span>
                              <a href='#'>Sarah</a>
                            </span>
                          </div>
                        </li>
                        <li>
                          <i className='flaticon-calendar'></i> Aug 6, 2020
                        </li>
                      </ul>
                      <h3>
                        <a href='#'>
                          Tech Products That Make It Easier to Stay Home
                        </a>
                      </h3>
                      <a href='#' className='link-btn'>
                        <i className='flaticon-right-arrow'></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='single-blog-post'>
                    <div className='post-image'>
                      <a href='#' className='d-block'>
                        <img src='/images/blog/blog6.jpg' alt='image' />
                      </a>
                    </div>

                    <div className='post-content'>
                      <ul className='post-meta d-flex align-items-center'>
                        <li>
                          <div className='d-flex align-items-center'>
                            <img src='/images/user3.jpg' alt='image' />
                            <span>
                              <a href='#'>Andy</a>
                            </span>
                          </div>
                        </li>
                        <li>
                          <i className='flaticon-calendar'></i> Aug 5, 2020
                        </li>
                      </ul>
                      <h3>
                        <a href='#'>
                          13 Feel-Good Restaurant Stories from the Pandemic
                        </a>
                      </h3>
                      <a href='#' className='link-btn'>
                        <i className='flaticon-right-arrow'></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='single-blog-post'>
                    <div className='post-image'>
                      <a href='#' className='d-block'>
                        <img src='/images/blog/blog7.jpg' alt='image' />
                      </a>
                    </div>

                    <div className='post-content'>
                      <ul className='post-meta d-flex align-items-center'>
                        <li>
                          <div className='d-flex align-items-center'>
                            <img src='/images/user1.jpg' alt='image' />
                            <span>
                              <a href='#'>Taylor</a>
                            </span>
                          </div>
                        </li>
                        <li>
                          <i className='flaticon-calendar'></i> Aug 4, 2020
                        </li>
                      </ul>
                      <h3>
                        <a href='#'>
                          5 Ways to Convert Customers Into Advocates Brand
                        </a>
                      </h3>
                      <a href='#' className='link-btn'>
                        <i className='flaticon-right-arrow'></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='single-blog-post'>
                    <div className='post-image'>
                      <a href='#' className='d-block'>
                        <img src='/images/blog/blog8.jpg' alt='image' />
                      </a>
                    </div>

                    <div className='post-content'>
                      <ul className='post-meta d-flex align-items-center'>
                        <li>
                          <div className='d-flex align-items-center'>
                            <img src='/images/user2.jpg' alt='image' />
                            <span>
                              <a href='#'>Sarah</a>
                            </span>
                          </div>
                        </li>
                        <li>
                          <i className='flaticon-calendar'></i> Aug 3, 2020
                        </li>
                      </ul>
                      <h3>
                        <a href='#'>
                          Indice Tips To-Go: Getting Started With Analytics
                        </a>
                      </h3>
                      <a href='#' className='link-btn'>
                        <i className='flaticon-right-arrow'></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='single-blog-post'>
                    <div className='post-image'>
                      <a href='#' className='d-block'>
                        <img src='/images/blog/blog9.jpg' alt='image' />
                      </a>
                    </div>

                    <div className='post-content'>
                      <ul className='post-meta d-flex align-items-center'>
                        <li>
                          <div className='d-flex align-items-center'>
                            <img src='/images/user3.jpg' alt='image' />
                            <span>
                              <a href='#'>Andy</a>
                            </span>
                          </div>
                        </li>
                        <li>
                          <i className='flaticon-calendar'></i> Aug 2, 2020
                        </li>
                      </ul>
                      <h3>
                        <a href='#'>
                          How to Beat the High Cost of Customer Questions
                        </a>
                      </h3>
                      <a href='#' className='link-btn'>
                        <i className='flaticon-right-arrow'></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='single-blog-post'>
                    <div className='post-image'>
                      <a href='#' className='d-block'>
                        <img src='/images/blog/blog10.jpg' alt='image' />
                      </a>
                    </div>

                    <div className='post-content'>
                      <ul className='post-meta d-flex align-items-center'>
                        <li>
                          <div className='d-flex align-items-center'>
                            <img src='/images/user1.jpg' alt='image' />
                            <span>
                              <a href='#'>Taylor</a>
                            </span>
                          </div>
                        </li>
                        <li>
                          <i className='flaticon-calendar'></i> Aug 1, 2020
                        </li>
                      </ul>
                      <h3>
                        <a href='#'>
                          Tech Products That Make It Easier to Stay Home
                        </a>
                      </h3>
                      <a href='#' className='link-btn'>
                        <i className='flaticon-right-arrow'></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='single-blog-post'>
                    <div className='post-image'>
                      <a href='#' className='d-block'>
                        <img src='/images/blog/blog11.jpg' alt='image' />
                      </a>
                    </div>

                    <div className='post-content'>
                      <ul className='post-meta d-flex align-items-center'>
                        <li>
                          <div className='d-flex align-items-center'>
                            <img src='/images/user2.jpg' alt='image' />
                            <span>
                              <a href='#'>Sarah</a>
                            </span>
                          </div>
                        </li>
                        <li>
                          <i className='flaticon-calendar'></i> Aug 5, 2020
                        </li>
                      </ul>
                      <h3>
                        <a href='#'>
                          Necessity May Give Us a Virtual Court System
                        </a>
                      </h3>
                      <a href='#' className='link-btn'>
                        <i className='flaticon-right-arrow'></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='single-blog-post'>
                    <div className='post-image'>
                      <a href='#' className='d-block'>
                        <img src='/images/blog/blog12.jpg' alt='image' />
                      </a>
                    </div>

                    <div className='post-content'>
                      <ul className='post-meta d-flex align-items-center'>
                        <li>
                          <div className='d-flex align-items-center'>
                            <img src='/images/user3.jpg' alt='image' />
                            <span>
                              <a href='#'>Andy</a>
                            </span>
                          </div>
                        </li>
                        <li>
                          <i className='flaticon-calendar'></i> Aug 14, 2020
                        </li>
                      </ul>
                      <h3>
                        <a href='#'>
                          3 Improvements the COVID-19 Pandemic May Force
                        </a>
                      </h3>
                      <a href='#' className='link-btn'>
                        <i className='flaticon-right-arrow'></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='pagination-area text-center'>
                    <a href='#' className='prev page-numbers'>
                      <i className='bx bx-chevrons-left'></i>
                    </a>
                    <span className='page-numbers current' aria-current='page'>
                      1
                    </span>
                    <a href='#' className='page-numbers'>
                      2
                    </a>
                    <a href='#' className='page-numbers'>
                      3
                    </a>
                    <a href='#' className='page-numbers'>
                      4
                    </a>
                    <a href='#' className='next page-numbers'>
                      <i className='bx bx-chevrons-right'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Blog5;
