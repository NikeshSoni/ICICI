import React from 'react';
// import banner from '../../ASSETS/new-banner.jpeg';
import banner from '../../ASSETS/banner/new-banner-1.jpeg'
import '../../SCSS/App.scss';
import '../../SCSS/navbar.scss';

import comman_icon from '../../ASSETS/banner/creditcard-icon.png';
import homeloan from '../../ASSETS/banner/homeloan-icon.png';
import personal from '../../ASSETS/banner/personal-loan-icon.webp';
import Fixed from '../../ASSETS/banner/cc-icon.webp';
import mutual from '../../ASSETS/banner/mutual-funds.webp';
import Invest from '../../ASSETS/banner/invest-icon-m.svg';
import RD_icon from '../../ASSETS/banner/rd-icon.png';


import Call from '../../ASSETS/call-icon.svg';





const Banner = () => {
    return(
        <>
            <div className='py-3 banner-bg  w-100'>

                    <div className='text-center'>
                         <img className='img-fluid' src={banner} />
                    </div>

                <div className='containt-wapper mx-auto  d-lg-flex'>
                              

                    <div className='offer-data comman-radius bg-white p-3'>
                             <div className='w-100'>
                                    <h6>
                                      Offers for you!!
                                    </h6>
                                </div>
                           <div className='w-100 d-block d-sm-flex justify-content-center'>
                            <div className='d-block center-all-data '>
                                    <div className='mb-2 comman-height d-flex gap-1  align-items-center'>
                                        <img className='i-height' src={comman_icon} />
                                       <div className='d-block'>
                                             <p className='comman-w'>
                                                Seaving Account
                                            </p>

                                            <p className='comman-fonts'>
                                                open Insta Save Account in 
                                            </p>

                                            <p className='comman-fonts'>
                                               4 minutes.
                                            </p>

                                            <p className='click'>
                                                <a href='#' className='comman-text'> OPEN NOW </a>
                                            </p>
                                       </div>
                                    </div>


                                  <div className='mb-2 comman-height d-flex gap-1 align-items-center '>
                                        <img className='i-height' src={comman_icon} />
                                            <div className='d-block'>
                                                <p className='comman-w'>
                                                     CREDIT CARD
                                                </p>

                                                <p className='comman-fonts'>
                                                Get a right card for you.
                                                </p>

                                                <p className=''>
                                                    <a href='#' className='comman-text'> GET CREDIT CARD </a>
                                                </p>
                                            </div>
                                   </div>
                                </div>


                                <div className='d-block  comman-width'>
                                        <div className='mb-2 comman-height d-flex gap-1 align-items-center '>
                                            <img className='i-height' src={homeloan} />
                                                <div className='d-block'>
                                                    <p className='comman-w'>
                                                         Home Loan
                                                    </p>

                                                    <p className='comman-fonts'>
                                                      Digital sanction with benefit of special processing fee
                                                    </p>

                                                    <p className=''>
                                                        <a href='#' className='comman-text'>Avail Home Loan, Now </a>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className='mb-2 comman-height d-flex gap-1 align-items-center '>
                                              <img className='i-height' src={personal} />
                                                <div className='d-block'>
                                                    <p className='comman-w'>
                                                        Personal Loan 
                                                    </p>

                                                    <p className='comman-fonts'>
                                                        For all you needs up to 50Lakh
                                                    </p>

                                                    <p className=''>
                                                        <a href='#' className='comman-text'> Avail Personal Loan, Now </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                  </div>

                            <div className='  d-block d-sm-flex offer-data'>
                                 <div className='investment comman-radius p-2 bg-white mx-auto'>
                                    <div className='w-100'>
                                        <h6>
                                            Grow your investment
                                        </h6>
                                    </div>

                                <div className='d-flex mt-3 gap-4 justify-content-center text-center'>
                                      
                                     <div className='d-block'>
                                        <div className=''>
                                            <img src={Fixed} />
                                            <p className='comman-fonts'>
                                                    Fixed Deposit
                                            </p>
                                        </div>

                                        <div className='mt-4 '>
                                            <img src={Invest} />
                                            <p className='mt-3 comman-fonts'>
                                               Invest in Stocks
                                            </p>
                                        </div>
                                     </div>

                                     <div className='d-block '>
                                        <div className=''>
                                            <img src={mutual} />
                                            <p className='comman-fonts'>
                                                    Mutual Funds
                                            </p>
                                        </div>

                                        <div className='mt-4'>
                                            <img src={RD_icon } />
                                            <p className='comman-fonts'>
                                                 Retirement Planning
                                            </p>
                                        </div>
                                     </div>
                                </div>
                    </div>

                      <div className='investment d-block mx-auto mt-3 mt-sm-0 p-3 comman-radius contact-bg'>
                            <div>
                                <h4>
                                 For any assistance please call our customer care number
                                </h4>
                            </div>

                            <div className='d-flex gap-2 mt-3'>
                                <img className='img-fluid' src={Call} />

                                <h3>
                                    8100 10 80
                                </h3>
                            </div>

                            <div className='mt-3'>
                                 <a className='contact-btn' href='#'>CONTACT US</a>
                            </div>
                            
                      </div>
                            </div>
                </div>
            
            </div>
        </>
    )
}

export default Banner;



