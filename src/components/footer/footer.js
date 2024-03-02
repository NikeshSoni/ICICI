import React from 'react';

import facebook from '../../ASSETS/footer-icons/fb.webp';
import Insta from '../../ASSETS/footer-icons/insta.webp';
import twitter from '../../ASSETS/footer-icons/twitter.webp';
import you_tube from '../../ASSETS/footer-icons/you-tube.webp';

import app_store_white from '../../ASSETS/footer-icons/app_store_white.png';
import Google from '../../ASSETS/footer-icons/google_play_white.png';

import logo from '../../ASSETS/logo.webp';



const Select_data = ['Select Websites','ICICI Foundation','ICICI Lombard General Insurance','ICICI Prudential Life Insurance','ICICI Prudential AMC',
                        'ICICI Venture','ICICI Direct','ICICI Securities Primary Dealership Ltd','ICICI Home Finance','Home Search','Careers']



const Upper_data = ['FIND ATM/BRANCH','REPORT UNAUTHORIZED TRANSACTION','DOWNLOAD FORMS',
                    'FAQS','GET IN TOUCH','GET HELP']

const footer_info = ['Investor Relations','Regulatory Disclosure Section','RBI Awareness Campaign','ICICI Bank Answers','Safe Banking',
                     'RBI Kehta Hai','RBI: Beware of Fictitious Offers','Money Transfer to India','Internet Banking','Mobile Banking'
                    ];

const products = ['Saving Account', 'Current Accounts','Credit Cards','Home Loan','Personal Loan', 'Car Loan' , 'Gold Loan', 'Fixed Deposits'];

const calculator = ['Personal Loan EMI Calculator','Car loan EMI calculator','Two wheeler EMI calculator','Home Loan EMI calculator',
                    'Recurring Deposit EMI Calculator','Fixed Deposit EMI Calculator','More Calculators'];

const  Other = ['Customer Care', 'List of Unclaimed Accounts', 'Form center','Notice Board','News Room','Online Assist','Compliments and Complaints',
                'Site Map', 'About Us' , 'Account activation process','Customer Literature on NPAs and SMAs']


const Last = ['Terms and conditions', 'Do Not Call Registry', 'Disclaimer' , 'Multilingual Disclaimer','Code of Commitment',
                    ' Group Code of Business Conduct and Ethics','Customer Service Policies','Use of Unparliamentary Language by Customers',
                'privacy','Fair Practice Code for Lenders']



const Footer = () => {

  
  return (
    <div className='footer-wapper mt-5 position-perent d-none d-lg-block '>
        <div className='position-child main-data'>
            <div className='d-flex'>
                <div className='me-3'>
                    <img className='img-fluid' src={logo} />
                </div>

                <div className='d-flex gap-2 center-all-data'>
                    <p>
                        ICICI Bank Group websites
                    </p>

                    <select className='p-2 '>
                        {Select_data.map((Options) => {
                            return(
                                <option className='comman-fonts'>
                                    <p>
                                       <a href='#' >{Options}</a>
                                    </p>
                                </option>
                            )
                        })}
                          
                    </select>
                </div>


                <div className='d-flex gap-2 center-all-data'>
                    <p>
                    ICICI Bank Country Websites
                    </p>

                    <select className='p-2 '>
                        {Select_data.map((Options) => {
                            return(
                                <option className='comman-fonts'>
                                    <p>
                                       <a href='#' >{Options}</a>
                                    </p>
                                </option>
                            )
                        })}
                          
                    </select>
                </div>
            </div>
        </div>
        <div className=' find-info '>
            <ul className='d-flex list-unstyled gap-5 mt-4 p-0 '>

                {Upper_data.map((data) => {
                    return(
                        <li>
                            <a href='#' className='text-white'>{data}</a>
                        </li>
                    )
                })}
            </ul>
        </div>

        <div className='main-info'>
            <div className='data-footer pt-5 d-flex'>
               

                <div className='mian-width my-4 d-flex'>
                    <div className='d-flex comman-parent'>
                        <div className='points'>
                            <ul className='m-0 p-0 list-unstyled '>
                                <p className='text-center my-4 text-white'>
                                    EXPLORE
                                </p>

                                {footer_info.map((item) => {
                                    return(
                                    <li className='pb-2'>
                                            <a href='#' className='text-white comman-fonts'>
                                                {item}
                                            </a>
                                    </li>

                                    )
                                })}

                                <p className='text-white mt-4'>
                                    AWARDS
                                </p>

                                <li>
                                    <a href='#'>
                                        2022
                                    </a>
                                </li>
                            </ul>
                    </div>


                    <div className='points'>
                        <ul className='m-0 p-0 list-unstyled '>
                            <p className='text-center my-4 text-white'>
                                POPULAR PRODUCTS
                            </p>

                            {products.map((item) => {
                                return(
                                <li className='pb-2'>
                                        <a href='#' className='text-white comman-fonts'>
                                            {item}
                                        </a>
                                </li>

                                )
                            })}
                        </ul>
                    </div>

                </div>




                    <div className='comman-parent d-flex'>
                        <div className='points'>
                            <ul className='m-0 p-0 list-unstyled '>
                                <p className='text-center my-4 text-white'>
                                    CALCULATORS
                                </p>

                                {calculator.map((item) => {
                                    return(
                                    <li className='pb-2'>
                                            <a href='#' className='text-white comman-fonts'>
                                                {item}
                                            </a>
                                    </li>

                                    )
                                })}
                            </ul>
                        </div>


                        <div className='points'>
                            <ul className='m-0 p-0 list-unstyled '>
                                <p className='text-center my-4 text-white'>
                                    OTHERS
                                </p>

                                {Other.map((item) => {
                                    return(
                                    <li className='pb-2'>
                                            <a href='#' className='text-white comman-fonts'>
                                                {item}
                                            </a>
                                    </li>
                                    )
                                })};

                                <p class="text-white">INITIATIVES</p>        
                                
                                <li className='pb-2'>
                                    <a href='#' className='comman-fonts'>Debt Service</a>
                                </li>
                                <li className='pb-2'>
                                    <a href='#' className='comman-fonts'>Blogs</a>
                                </li>
                                <li className='pb-2'>
                                    <a href='#' className='comman-fonts'>The Orenge Book</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>




                <div className='points my-4'>
                    <ul className='m-0 p-0 list-unstyled'>
                        <p className='text-center my-4  text-white'>
                              RATES AND CHARGES
                        </p>

                        <li className='pb-2 mt-4'>
                            <a href='#' className='text-white comman-fonts'>
                                Interest Rates
                            </a>
                        </li>

                        <li className='pb-2'>
                            <a href='#' className='text-white comman-fonts'>
                                Service Charges and Fees
                            </a>
                        </li>

                    </ul>

                    <div className='mt-4 '>
                        <p className='text-white'>
                            GET SOCIAL
                        </p>

                        <div className='d-flex gap-3 mt-4'>
                            <a href='#'>
                                 <img className='img-fluid' src={facebook} alt='Facebook' />
                            </a>
                            <a href='#'>
                               <img className='img-fluid' src={Insta} alt='Instagram' />
                            </a>
                            <a href='#'>
                                <img className='img-fluid' src={twitter} alt='Twitter' />
                            </a>
                            <a href='#'>
                                <img className='img-fluid' src={you_tube} alt='YouTube' />
                            </a>  
                        </div>

                        <div className='download-wapper mt-4'>
                              <p className='text-white'>
                                  DOWNLOAD IMOBILE PAY
                              </p>

                            <div className='mt-4 '>
                                <img className='me-3'  src={app_store_white }  alt='download_link' />
                                <img  src={Google } alt='download_link' />
                            </div>
       
                        </div>
                    </div>
                </div>
            </div>


            
            <div className='p-4'>
                 <div className='bottom-info py-3 bottom'>
                        <ul className='list-unstyled m-0 p-0  flex-wrap d-flex'>
                            {Last.map((items) => {
                                return(
                                    <li className='p-1 comman-fonts '>
                                      <a href='#' className='border-right pe-2'>{items}</a>
                                    </li>
                                )
                            })}
                        </ul>   
                  </div>   

                  <div>
                        <p className='comman-fonts my-3 text-white'>
                            Copyright© 2023 . All rights Reserved.
                        </p>
                  </div>               
            </div>
                                
        </div>
    </div>
  )
}


export default Footer;