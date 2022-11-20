import React,{useEffect,useState} from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import axios from 'axios';

//components
import NavbarTwo from '../components/_App/NavbarTwo';
import PopularPlacesFilter from '../components/Common/PopularPlacesFilter';
import Footer from '../components/_App/Footer';

const GridListingsFullWidth = () => {
  const [state,setState]=useState([]);
  const [page,setPage]=useState(0);
  const [limit,setLimit]=useState(9);
  const [pagination,setPagination]=useState([]);
  const [search,setSearch]=useState("");
  const [category,setCategory]=useState("");

  const [location,setLocation]=useState("");

  

  const getListings=()=>{

    axios.post(`${process.env.NEXT_PUBLIC_API_URLBACKEND}/listing/search`,{limit,page,search,category,location}).then(response=>{
       setState(response.data.data);
       const totalPages=response.data.data.total
       if (totalPages){

        setPagination( [ ...Array(Math.ceil(totalPages/limit)).keys() ].map(( i) => i+1))
       }
    }).catch(err=>{
      console.log(err);
    })

}
useEffect(()=>{
  getListings();

},[page])
const changePage=(page)=>{
  setPage(Number(page));

}

  return (
    <>
      <NavbarTwo />

      <PopularPlacesFilter />

      <section className='listings-area ptb-100 bg-f9f9f9'>
        <div className='container'>
          <div className='listings-grid-sorting row align-items-center'>
            <div className='col-lg-5 col-md-6 result-count'>
              <p>
                We found <span className='count'>9</span> listings available for you
              </p>
            </div>

            <div className='col-lg-7 col-md-6 ordering'>
              <div className='d-flex justify-content-end'>
                <div className='select-box'>
                  <label>Sort By:</label>
                  <select className="blog-select">
                    <option>Recommended</option>
                    <option>Default</option>
                    <option>Popularity</option>
                    <option>Latest</option>
                    <option>Price: low to high</option>
                    <option>Price: high to low</option>
                  </select>
                </div>

                <div className='select-box'>
                  <label>Distance:</label>
                  <select className="blog-select">
                    <option>Driving (5 mi.)</option>
                    <option>Walking (1 mi.)</option>
                    <option>Biking (2 mi.)</option>
                    <option>Within 4 blocks</option>
                    <option>Bicycle (6 mi.)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            {
               state?.listing?.map(ele=>(
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
                          <Link href="/single-listings">
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
                          <Link href="/single-listings">
                            <a className='link-btn'></a>
                          </Link>
                        </div>
                      </SwiperSlide>
                    </Swiper>
  
                    <a href='#' className='bookmark-save'>
                      <i className='flaticon-heart'></i>
                    </a>
                    <a href='#' className='category'>
                      <i className='flaticon-cooking'></i>
                    </a>
                  </div>
  
                  <div className='listings-content'>
                    <div className='author'>
                      <div className='d-flex align-items-center'>
                        <img src='/images/user2.jpg' alt='image' />
                        <span>Sarah</span>
                      </div>
                    </div>
                    <ul className='listings-meta'>
                      <li>
                        <a href='#'>
                          <i className='flaticon-furniture-and-household'></i> Hotel
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='flaticon-pin'></i> Los Angeles, USA
                        </a>
                      </li>
                    </ul>
  
                    <h3>
                      <Link href="/single-listings">
                        <a>The Beverly Hills Hotel</a>
                      </Link>
                    </h3>
  
                    <span className='status'>
                      <i className='flaticon-save'></i> Open Now
                    </span>
  
                    <div className='d-flex align-items-center justify-content-between'>
                      <div className='rating'>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bx-star'></i>
                        <span className='count'>(10)</span>
                      </div>
                      <div className='price'>
                        Start From <span>$200</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               ))
            }
           

         

          
<div className='col-xl-12 col-lg-12 col-md-12'>
              <div className='pagination-area text-center'>
                <a href='#' className='prev page-numbers'>
                  <i className='bx bx-chevrons-left'></i>
                </a>{
                pagination.map((ele)=> {
    return  <span style={{cursor:"pointer"}} key={ele} className={`page-numbers ${page==ele-1 ? "current" : ""}`}
     onClick={()=>changePage(ele-1)} aria-current='page'>
    {ele}
  </span>;
  })}
               
               
              
                <a href='#' className='next page-numbers'>
                  <i className='bx bx-chevrons-right'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer bgColor='bg-f5f5f5' />
    </>
  );
};

export default GridListingsFullWidth;
