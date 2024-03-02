import React from 'react';

import Main_factor from '../../ASSETS/credit/two_factor_icon.png';
import end_to_end from '../../ASSETS/credit/e_to_e_en.png';
import secure_contact from '../../ASSETS/credit/secure_contact.png';


import Oppo_img from '../../ASSETS/offers/oppo-f9-pro.webp';

import coling_friz from '../../ASSETS/offers/coling-friz.webp';

import samsung_watch from '../../ASSETS/offers/samsung-watch.webp';

// oppo-f9-pro


const Security = () => {
  return (
    <>
        <div className='container my-4 mb-5'>
            <div className='row'>
                <div className='col-12 mb-4'>
                    <h2>
                        WE TAKE YOUR SECURITY
                    </h2>
                   <p>
                        security !
                   </p>
                       
                </div>
                <div className='col-lg-3 right-border col-6 mb-3 mb-lg-0 btn-fonts center-all-data text-center flex-column'>
                    <p>
                         Peace of mind for you as we have 
                    </p>
                    <p>
                    the most advanced technology & protection
                    </p>
                </div>
                <div className='col-lg-3 col-6 d-flex gap-4 center-all-data right-border btn-fonts'>
                         <img className='img-fluid' src={Main_factor} />
                             <div className='d-block'>
                                    <p className=''>
                                        2 Factor i-safe
                                    </p>
                                    <p>
                                        authentication
                                    </p>
                             </div>
                </div>

                <div className='col-lg-3 col-6 mt-3 mt-lg-0 right-border gap-4 center-all-data btn-fonts'>
                    <img className='img-fluid' src={end_to_end}  />
                        <p>
                            End-to-end 256 <br></br> bit  Encryption
                        </p>
                </div>

                <div className='col-6 col-lg-3 mt-3 mt-lg-0 right-border gap-4 center-all-data btn-fonts'>
                     <img className='img-fluid' src={secure_contact}  />

                    <p> 
                         We make you <br></br> feel special
                    </p>
                </div>
            </div>
        </div>



        <div className='text-center notice-bg p-4 my-4 btn-fonts'>
            <p className='m-0 p-0'>
                <a href='#' className='text-white'>
                  Important Notice: Resolution Framework 2.0 as per RBI Guidelines for COVID-19 related stress
                </a>
            </p>
        </div>

        <div className='container offers-wapper'>
            <div className='row mb-5 p-3'>
                 <div className='offers-btn col-12 my-3 d-flex gap-4 justify-content-center'>
                    <button className='border-0 contact-btn'>
                        <a href='#' className='text-dark'>
                              HANDPICKED OFFERS
                        </a>
                    </button>

                    <button className='border-0 contact-btn'>
                        <a href='#' className='text-dark'>
                              NEARBY OFFERS
                        </a>
                    </button>

                    <button className='border-0 contact-btn ' >
                        <a href='#' className='text-dark'>
                              COMPARE & BUY
                        </a>
                    </button>
                 </div>


                <div className='col-10 col-md-6 mx-auto col-lg-4'>
                    <div className='card position-perent p-4 comman-radius'>

                        <div className='position-child offer-child p-1 text-center'>
                            <p className='m-0 p-0 text-white price-fonts'>
                                0% off Best price On flipkart
                            </p>
                        </div>
                        <div className='center-all-data gap-4'>
                            <img className='img-fluid' src={Oppo_img} />

                            <div>
                                <p className='comman-text btn-fonts'>
                                    OPPO F9 Pro (Starry Purple, 64
                                </p>
                            
                                <p className='mt-2'>
                                    25.990 <del>
                                        26000
                                    </del>
                                </p>
                            </div>
                        </div>

                             <div className='text-center my-4'>
                                <a href='#' className='offer-btn text-dark banner-bg comman-radius'>
                                        COMPARE PRICE
                                </a>
                             </div>
                    </div>
                </div>

                <div className='col-10 col-md-6 mx-auto my-4 my-md-0 col-lg-4'>
                    <div className='card position-perent p-4 comman-radius'>

                        <div className='position-child offer-child p-1 text-center'>
                            <p className='m-0 p-0 text-white price-fonts'>
                                0% off Best price On flipkart
                            </p>
                        </div>
                        <div className='center-all-data gap-4'>
                            <img className='img-fluid' src={coling_friz} />

                            <div>
                                <p className='comman-text btn-fonts'>
                                   Whirlpool 190 L Direct Cool Single
                                </p>
                            
                                <p className='mt-2 btn-fonts'>
                                    15000 <del>
                                        21000
                                    </del>
                                </p>
                            </div>
                        </div>

                             <div className='text-center my-4'>
                                <a href='#' className='offer-btn btn-fonts text-dark banner-bg comman-radius'>
                                        COMPARE PRICE
                                </a>
                             </div>
                    </div>
                </div>

                <div className='col-10 mt-sm-0 mt-md-4 mt-lg-0 mx-auto col-lg-4'>
                    <div className='card position-perent p-4 comman-radius'>

                        <div className='position-child offer-child p-1 text-center'>
                            <p className='m-0 p-0 text-white price-fonts'>
                                0% off Best price On flipkart
                            </p>
                        </div>
                        <div className='center-all-data gap-4'>
                            <img className='img-fluid' src={samsung_watch} />

                            <div>
                                <p className='comman-text btn-fonts'>
                                      SAMSUNG Watch 4 44mm Super AMOLED
                                </p>
                            
                                <p className='mt-2 btn-fonts'>
                                    12.990 <del>
                                        20,000
                                    </del>
                                </p>
                            </div>
                        </div>

                             <div className='text-center my-4'>
                                <a href='#' className='offer-btn text-dark banner-bg btn-fonts comman-radius'>
                                        COMPARE PRICE
                                </a>
                             </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Security;
