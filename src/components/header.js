
import logo from '../ASSETS/logo.webp';
import Call from '../ASSETS/call-icon.svg';
import cuntry from '../ASSETS/india-icon.svg';
import notification from '../ASSETS/notification.webp';
import searchIcon from '../ASSETS/search.svg';
import mic from '../ASSETS/mic.svg';
import ipay from '../ASSETS/ipay.svg';
import digital from '../ASSETS/digital-banking.svg';


import img from '../ASSETS/info-img/account.svg';
import card from '../ASSETS/info-img/card.svg';
import loan from '../ASSETS/info-img/Loan.svg';
import invest from '../ASSETS/info-img/Invest.svg';
import insure from '../ASSETS/info-img/Insure.svg';
import pay from '../ASSETS/info-img/Pay.svg';
import offers from '../ASSETS/info-img/offers.svg';


import campus from '../ASSETS/info-img/campus.webp';
import New_img from '../ASSETS/info-img/new-img.png';

import { Link } from "react-router-dom";
import '../SCSS/navbar.scss';

  const Header = () => {



    return(
       <>
            <header className='w-100 d-none d-lg-block'>
                   <nav className='nav-bar align-items-center d-flex mx-auto'>
                            <div className='d-flex w-100'>
                                  <div className="main-logo center-all-data">
                                       <img className='img-fluid' src={logo} />
                                 </div>
                                 
                                <ul className='m-0 p-0 links-points center-all-data d-flex g-5'>
                                    <li className='ms-3 me-2 links-size'>
                                        <Link className="text-dark comman-color oersonal" to='/'> PERSONAL</Link>
                                    </li>
                                    <li className='ms-3 me-2 links-size'>
                                        <Link className="text-dark comman-color" to='/'> NRI</Link>
                                    </li>
                                    <li className='ms-3 me-2 links-size'>
                                        <Link className="text-dark comman-color" to='/'>BUSINESS</Link>
                                    </li>
                                    <li className='ms-3 me-2 links-size'>
                                        <Link className="text-dark comman-color" to='/'> CORPORATE</Link>
                                    </li>
                                    <li className='ms-3 me-2 links-size'>
                                        <Link className="text-dark comman-color" to='/'> GIFT CITY</Link>
                                    </li>
                                  </ul>


                                  <div className='d-flex  customer-wapper'>
                                        <div className='d-flex justify-content-center customer'>
                                            <img className='img-fluid main-logo' src={Call} />
                                            <div>
                                                <span>
                                                        customer care no
                                                </span>
                                                <p>
                                                    1800 1080
                                                </p>
                                            </div>
                                        </div>

                                    <div className='cuntry-wapper center-all-data'>
                                            <img className='img-fluid' src={cuntry} />


                                        <div className='login-btn ms-3'>
                                            <p className='m-0 ms-2'>
                                                PERSONAL
                                            </p>
                                           
                                           <a className='' href='#  '>
                                                 LOGIN
                                           </a>
                                        </div>

                                        <div>
                                            <a href='#' >
                                                      <img src={notification} />
                                            </a>
                                        </div>
                                    </div>
                                  </div>
                            </div>
                   </nav>

                   <nav className='nav-bar d-flex justify-content-between mx-auto mt-2'>
                       <div className='p-2 d-flex input-bg input-wapper'>
                            <div className='comman-icon'>
                                <img src={ searchIcon} />
                            </div>

                            <input type='text' placeholder='Search For Product & service' />

                            <div className='comman-icon'>
                                <a href='#'>
                                      <img src={mic} className='img-fluid mic' />
                                </a>
                            </div>
                       </div>

                       <div className='help-wapper d-flex     align-items-center '>
                                <img className='ms-2' src={ipay} />
                                <img  className='ms-1 me-1' src={digital} />

                            <p className='ms-2'>
                                <a href='#'>Help &contact</a>
                            </p>
                       </div>
                   </nav>




                   <nav className='nav-bar d-flex mx-auto my-2'>
                                    <div className='d-flex map-width normal'>
                                        <img className='img-fluid' src={img} />
                                        <p>Account</p>

                                              <div className='drop-menu account-wapper'>
                                                     <div className='d-flex'>
                                                            <div className='d-block account-drop'>
                                                                
                                                                <div className='account-type'>
                                                                    <h6>
                                                                      <a href="#" className="text-dark">
                                                                         SAVING ACCOUNT
                                                                      </a>
                                                                    </h6>
                                                                </div>
  
                                                                <div className='account-type'>
                                                                    <h6>
                                                                      <a href="#" className="text-dark">
                                                                         DEPOSITS
                                                                      </a>
                                                                    </h6>
                                                                </div>

                                                                
                                                                <div className='account-type'>
                                                                    <h6>
                                                                      <a href="#" className="text-dark">
                                                                         FOREX
                                                                      </a>
                                                                    </h6>
                                                                </div>

                                                                <div className='account-type'>
                                                                    <h6>
                                                                      <a href="#" className="text-dark">
                                                                         WAY TO BANK
                                                                      </a>
                                                                    </h6>
                                                                </div>
                                                               
                                                            </div>
                                                    <div className='d-flex info-acc-wapper'>
                                                        <div className='seaving-info mx-auto'>
                                                            <h6>
                                                            SAVING ACCOUNT
                                                            </h6>

                                                            <ul className='m-0 p-4 '>
                                                                <li className='mt-2'>
                                                                    <a href='#' className='text-dark'>
                                                                        Saving Account
                                                                    </a>
                                                                </li>

                                                                <li className='mt-2'>
                                                                    <a href='#' className='text-dark'>
                                                                        Track your Application
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className='seaving-info mx-auto'>
                                                            <h6>
                                                                INVESTMENT ACCOUNT
                                                            </h6>

                                                            <ul className='m-0 p-4 '>
                                                                <li className='mt-2'>
                                                                    <a href='#' className='text-dark'>
                                                                        Online Trading & Demat Account
                                                                    </a>
                                                                </li>

                                                                <li className='mt-2'>
                                                                    <a href='#' className='text-dark'>
                                                                        Demat Account
                                                                    </a>
                                                                </li>

                                                                <li className='mt-2'>
                                                                    <a href='#' className='text-dark'>
                                                                        NPS plus Saving Account
                                                                    </a>
                                                                </li>

                                                                <li className='mt-2'>
                                                                    <a href='#' className='text-dark'>
                                                                        HUF-HINDU Undivided Family
                                                                    </a>
                                                                </li>

                                                                <li className='mt-2'>
                                                                    <a href='#' className='text-dark'>
                                                                        Investment & Tex Seaving Account
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>

                                     <div className='d-flex map-width'>
                                         <img className='img-fluid' src={card} />
                                         <p>CARDS</p>
                                    </div>

                                    <div className='d-flex map-width'>
                                         <img className='img-fluid' src={loan} />
                                         <p>LOANS</p>
                                    </div>

                                    <div className='d-flex map-width'>
                                         <img className='img-fluid' src={invest} />
                                         <p>INVEST</p>
                                    </div>

                                    
                                    <div className='d-flex map-width'>
                                         <img className='img-fluid' src={insure} />
                                         <p>INSURE</p>
                                    </div>

                                    <div className='d-flex map-width'>
                                        <img className='img-fluid' src={pay} />
                                        <p>PAY</p>
                                    </div>

                                    <div className='d-flex map-width'>
                                        <img className='img-fluid' src={offers} />
                                        <p>OFFERS</p>
                                    </div>

                                    <div className='d-flex power-width'>
                                        <img className='img-fluid me-2' src={campus} />
                                            <p>
                                                CAMPUS POWER
                                            </p>
                                        <img className=' ms-2 img-fluid' src={New_img} />
                                    </div>
                   </nav> 
            </header>
       </>
    )
  }

  export default Header;